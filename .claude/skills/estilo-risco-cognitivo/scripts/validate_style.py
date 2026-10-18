#!/usr/bin/env python3
"""Validador de estilo — Risco Cognitivo (JF-02 e relatório técnico-executivo).

Determinístico: mesmo arquivo + mesmas regras => mesmo relatório (sem timestamps).
Só usa a biblioteca padrão.

Uso:
    python validate_style.py artigo.md --mode jornalistico
    python validate_style.py relatorio.md --mode executivo --json
    python validate_style.py texto.md            # lê `tipo:` no frontmatter

Saída: 0 = aprovado | 1 = reprovado (erros; ou avisos com --strict) | 2 = uso incorreto
"""
from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from dataclasses import asdict, dataclass
from pathlib import Path

VALIDATOR_VERSION = "1.1.0"
DEFAULT_CONFIG = Path(__file__).resolve().parent.parent / "references" / "rules.json"

HEADING_RE = re.compile(r"^(#{1,6})\s+(.*?)\s*#*\s*$")
LIST_RE = re.compile(r"^\s*(?:[-*+]|\d+[.)])\s+")
SENT_SPLIT = re.compile(r"(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÂÊÔÃÕÇ“\"(\d])")


@dataclass
class Finding:
    rule: str
    severity: str  # "error" | "warn"
    line: int
    message: str


@dataclass
class Block:
    kind: str  # heading | para | list | table | code
    line: int
    text: str
    level: int = 0


# ----------------------------------------------------------------- parsing
def strip_md(text: str) -> str:
    text = re.sub(r"!?\[([^\]]*)\]\([^)]*\)", r"\1", text)
    return re.sub(r"[*_`~]", "", text)


QUOTE_RE = re.compile(r'"[^"]{20,}"|“[^”]{20,}”')


FIELD_RE = re.compile(r"(?:^|\s)[A-ZÀ-Ú][\wçãáéíóúêô ]{1,24}:\s")


def is_field_group(text: str) -> bool:
    """Bloco de registro estruturado (≥ 3 pares `Campo: valor`), não prosa."""
    return len(FIELD_RE.findall(text)) >= 3


def authorial(text: str) -> str:
    """Remove falas citadas (≥ 20 caracteres): a regra de linguagem vale para a voz do autor.
    Linhas `Texto:` (texto de CTA) são do autor e não são isentas."""
    return text if text.startswith("Texto:") else QUOTE_RE.sub(" ", text)


def split_frontmatter(lines: list[str]) -> tuple[dict[str, str], int]:
    if not lines or lines[0].strip() != "---":
        return {}, 0
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            meta: dict[str, str] = {}
            for raw in lines[1:i]:
                if ":" in raw:
                    key, _, val = raw.partition(":")
                    meta[key.strip().lower()] = val.strip().strip("\"'")
            return meta, i + 1
    return {}, 0


def parse_blocks(lines: list[str], offset: int) -> list[Block]:
    blocks: list[Block] = []
    buf: list[str] = []
    start = 0
    in_code = False

    def flush() -> None:
        nonlocal buf
        if buf:
            blocks.append(Block("para", start, " ".join(s.strip() for s in buf)))
            buf = []

    for idx in range(offset, len(lines)):
        raw = lines[idx]
        n = idx + 1
        if raw.strip().startswith("```"):
            flush()
            in_code = not in_code
            continue
        if in_code:
            continue
        if not raw.strip():
            flush()
            continue
        m = HEADING_RE.match(raw)
        if m:
            flush()
            blocks.append(Block("heading", n, m.group(2), len(m.group(1))))
        elif raw.lstrip().startswith("|"):
            flush()
            blocks.append(Block("table", n, raw.strip()))
        elif LIST_RE.match(raw):
            flush()
            blocks.append(Block("list", n, LIST_RE.sub("", raw).strip()))
        elif raw.lstrip().startswith(">"):
            flush()
            blocks.append(Block("para", n, raw.lstrip("> ").strip()))
        else:
            if not buf:
                start = n
            buf.append(raw)
    flush()
    return blocks


def section_text(blocks: list[Block], i: int) -> str:
    """Texto do heading blocks[i] até o próximo heading de nível <= ao dele."""
    level = blocks[i].level
    parts = [blocks[i].text]
    for b in blocks[i + 1:]:
        if b.kind == "heading" and b.level <= level:
            break
        parts.append(b.text)
    return strip_md("\n".join(parts))


def alt(patterns: list[str]) -> re.Pattern:
    return re.compile("(?:" + "|".join(patterns) + ")", re.IGNORECASE)


def has_field(text: str, pattern: str) -> bool:
    return re.search(rf"\b(?:{pattern})\s*:", text, re.IGNORECASE) is not None


# ------------------------------------------------------------ common checks
def check_common(cfg: dict, blocks: list[Block], findings: list[Finding], metrics: dict,
                 meta: dict | None = None) -> None:
    c = cfg["common"]
    hype, absolute = alt(c["hype_terms"]), alt(c["absolute_terms"])
    placeholder = alt(c["placeholders"])
    number = re.compile(c["number_claim"], re.IGNORECASE)
    source = alt(c["source_markers"])

    # título e meta descrição do frontmatter também são texto publicável
    for key in ("titulo", "meta_descricao"):
        val = (meta or {}).get(key, "")
        if not val:
            continue
        if hype.search(val):
            findings.append(Finding("C-HYPE", "error", 1,
                f"Linguagem promocional/sensacionalista em `{key}`: “{hype.search(val).group(0)}”."))
        if absolute.search(val):
            findings.append(Finding("C-ABSOLUTO", "warn", 1,
                f"Afirmação absoluta/garantia em `{key}`: “{absolute.search(val).group(0)}”."))
        if placeholder.search(val):
            findings.append(Finding("C-PLACEHOLDER", "error", 1,
                f"Placeholder não preenchido em `{key}`: “{placeholder.search(val).group(0)}”."))

    prev_level = 0
    for b in blocks:
        if b.kind == "heading":
            if prev_level and b.level > prev_level + 1:
                findings.append(Finding("C-HIER", "warn", b.line,
                    f"Salto de hierarquia (H{prev_level} → H{b.level}); não pule níveis."))
            prev_level = b.level
        voice = authorial(b.text)
        if hype.search(voice):
            findings.append(Finding("C-HYPE", "error", b.line,
                f"Linguagem promocional/sensacionalista: “{hype.search(voice).group(0)}”."))
        if b.kind != "table" and absolute.search(voice):
            findings.append(Finding("C-ABSOLUTO", "warn", b.line,
                f"Afirmação absoluta/garantia: “{absolute.search(voice).group(0)}”. "
                "Qualifique ou cite a evidência."))
        if placeholder.search(b.text):
            findings.append(Finding("C-PLACEHOLDER", "error", b.line,
                f"Placeholder não preenchido: “{placeholder.search(b.text).group(0)}”."))

    # números sem fonte (no mesmo bloco ou no seguinte)
    for i, b in enumerate(blocks):
        if b.kind not in ("para", "list") or not number.search(b.text):
            continue
        nxt = blocks[i + 1].text if i + 1 < len(blocks) and blocks[i + 1].kind in ("para", "list") else ""
        if not source.search(b.text) and not source.search(nxt):
            findings.append(Finding("C-NUM-SEM-FONTE", "warn", b.line,
                f"Dado quantitativo sem fonte/evidência próxima: “{number.search(b.text).group(0)}”."))

    # comprimento de frases e parágrafos
    total_words = total_sents = 0
    for b in blocks:
        if b.kind != "para":
            continue
        clean = strip_md(b.text)
        words = len(re.findall(r"\w+", clean))
        if words > c["max_paragraph_words"] and not is_field_group(b.text):
            findings.append(Finding("C-PARAGRAFO", "warn", b.line,
                f"Parágrafo com {words} palavras (máx. {c['max_paragraph_words']})."))
        for s in SENT_SPLIT.split(clean):
            w = len(re.findall(r"\w+", s))
            if not w:
                continue
            total_words += w
            total_sents += 1
            if w > c["max_sentence_words"]:
                findings.append(Finding("C-FRASE", "warn", b.line,
                    f"Frase com {w} palavras (máx. {c['max_sentence_words']})."))
    avg = round(total_words / total_sents, 1) if total_sents else 0.0
    metrics.update(sentences=total_sents, words=total_words, avg_sentence_words=avg)
    if avg > c["max_avg_sentence_words"]:
        findings.append(Finding("C-MEDIA-FRASE", "warn", 1,
            f"Média de {avg} palavras por frase (máx. {c['max_avg_sentence_words']})."))


def check_sections(sections: list[dict], blocks: list[Block], findings: list[Finding]) -> None:
    heads = [b.text for b in blocks if b.kind == "heading"]
    for sec in sections:
        pat = re.compile(sec["pattern"], re.IGNORECASE)
        if not any(pat.search(h) for h in heads):
            findings.append(Finding(f"S-{sec['id'].upper()}", sec["severity"], 1,
                f"Seção obrigatória ausente: {sec['label']}."))


# -------------------------------------------------------- modo jornalístico
def check_jornalistico(cfg: dict, meta: dict, blocks: list[Block], findings: list[Finding]) -> None:
    j = cfg["jornalistico"]

    for key in j["required_frontmatter"]:
        if not meta.get(key):
            findings.append(Finding("JF-FRONTMATTER", "error", 1, f"Campo obrigatório ausente no frontmatter: `{key}`."))
    title = meta.get("titulo", "")
    if title and len(title) > j["title_max_chars"]:
        findings.append(Finding("JF-TITULO", "warn", 1,
            f"Título com {len(title)} caracteres (recomendado ≤ {j['title_max_chars']})."))
    desc = meta.get("meta_descricao", "")
    if desc and not j["meta_min_chars"] <= len(desc) <= j["meta_max_chars"]:
        findings.append(Finding("JF-META", "warn", 1,
            f"Meta descrição com {len(desc)} caracteres (faixa {j['meta_min_chars']}–{j['meta_max_chars']})."))
    slug = meta.get("slug", "")
    if slug and not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", slug):
        findings.append(Finding("JF-SLUG", "error", 1, "Slug deve ser kebab-case ASCII minúsculo (a-z, 0-9, hífen)."))
    elif len(slug) > j["slug_max_chars"]:
        findings.append(Finding("JF-SLUG", "warn", 1, f"Slug com {len(slug)} caracteres (máx. {j['slug_max_chars']})."))

    heads = [b for b in blocks if b.kind == "heading"]
    h1 = [h for h in heads if h.level == 1]
    if len(h1) != 1:
        findings.append(Finding("JF-H1", "error", h1[1].line if len(h1) > 1 else 1,
            f"Esperado exatamente 1 H1; encontrado {len(h1)}."))
    h2 = [h for h in heads if h.level == 2]
    if len(h2) < j["min_h2"]:
        findings.append(Finding("JF-H2", "error", 1, f"Mínimo de {j['min_h2']} H2; encontrado {len(h2)}."))
    elif h2:
        ratio = sum(h.text.rstrip().endswith("?") for h in h2) / len(h2)
        if ratio < j["min_question_h2_ratio"]:
            findings.append(Finding("JF-H2-PERGUNTA", "warn", h2[0].line,
                f"Só {ratio:.0%} dos H2 são perguntas (mínimo {j['min_question_h2_ratio']:.0%}); "
                "o padrão JF-02 usa H2 interrogativos."))

    # verbos causais em títulos
    causal = re.compile(r"\b(?:" + "|".join(j["causal_heading_verbs"]) + r")\b", re.IGNORECASE)
    if causal.search(title) and not title.rstrip().endswith("?"):
        findings.append(Finding("JF-CAUSAL", "warn", 1,
            f"Verbo causal em `titulo` (“{causal.search(title).group(0)}”) sem formato de pergunta. "
            "Associação estatística não autoriza inferência causal."))
    for h in heads:
        if causal.search(h.text) and not h.text.rstrip().endswith("?"):
            findings.append(Finding("JF-CAUSAL", "warn", h.line,
                f"Verbo causal em título (“{causal.search(h.text).group(0)}”) sem formato de pergunta. "
                "Associação estatística não autoriza inferência causal."))

    # lead
    after_h1 = False
    for b in blocks:
        if b.kind == "heading" and b.level == 1:
            after_h1 = True
        elif after_h1 and b.kind == "para":
            words = len(re.findall(r"\w+", strip_md(b.text)))
            if words > j["lead_max_words"]:
                findings.append(Finding("JF-LEAD", "warn", b.line,
                    f"Lead com {words} palavras (máx. {j['lead_max_words']})."))
            if not re.search(j["lead_attribution_cues"], b.text, re.IGNORECASE):
                findings.append(Finding("JF-LEAD-ATRIBUICAO", "warn", b.line,
                    "Lead sem atribuição científica (estudo, pesquisa, publicação, 'segundo…')."))
            break
        elif after_h1 and b.kind == "heading":
            break

    # fonte original rastreável
    full = "\n".join(b.text for b in blocks)
    if not re.search(r"https?://|\bdoi\b", full, re.IGNORECASE):
        findings.append(Finding("JF-FONTE-ORIGINAL", "error", 1, "Nenhum link ou DOI de fonte original no texto."))

    # CTAs
    cta_pat = re.compile(j["cta_heading_pattern"], re.IGNORECASE)
    ctas = [i for i, b in enumerate(blocks) if b.kind == "heading" and cta_pat.search(b.text)]
    if len(ctas) < j["min_ctas"]:
        findings.append(Finding("JF-CTA", "warn", 1, f"Mínimo de {j['min_ctas']} CTA com seção própria; encontrado {len(ctas)}."))
    for i in ctas:
        text = section_text(blocks, i)
        for f in j["cta_fields_required"]:
            if not has_field(text, f["pattern"]):
                findings.append(Finding("JF-CTA-CAMPO", "error", blocks[i].line,
                    f"CTA “{blocks[i].text}” sem `{f['id']}` (CTA precisa de destino, objetivo e evento mensurável)."))
        for f in j["cta_fields_recommended"]:
            if not has_field(text, f["pattern"]):
                findings.append(Finding("JF-CTA-CAMPO", "warn", blocks[i].line,
                    f"CTA “{blocks[i].text}” sem `{f['id']}` (recomendado)."))
        if re.search(r"newsletter|e-mail|receba", text, re.IGNORECASE) and not re.search("consent", text, re.IGNORECASE):
            findings.append(Finding("JF-CTA-CONSENTIMENTO", "warn", blocks[i].line,
                "CTA de captação de e-mail sem menção a consentimento."))

    check_sections(j["required_sections"], blocks, findings)


# ---------------------------------------------------------- modo executivo
def check_executivo(cfg: dict, blocks: list[Block], findings: list[Finding]) -> None:
    e = cfg["executivo"]
    heads = [b for b in blocks if b.kind == "heading"]

    # BLUF: conclusão antes de tudo
    bluf = re.compile(e["bluf_heading_pattern"], re.IGNORECASE)
    if not any(bluf.search(h.text) for h in heads[:3]):
        findings.append(Finding("EX-BLUF", "error", heads[0].line if heads else 1,
            "A conclusão (BLUF/veredito/L1) deve aparecer nos 3 primeiros títulos."))

    # três níveis de leitura
    missing = [lv for lv in e["levels"] if not any(re.search(rf"\b{lv}\b", h.text) for h in heads)]
    if missing:
        findings.append(Finding("EX-NIVEIS", "error", 1,
            f"Níveis de leitura ausentes: {', '.join(missing)} (L1 Executivo, L2 Analítico, L3 Técnico)."))

    # achados
    f_pat = re.compile(e["finding_heading_pattern"], re.IGNORECASE)
    idxs = [i for i, b in enumerate(blocks) if b.kind == "heading" and f_pat.search(b.text)]
    if not idxs:
        findings.append(Finding("EX-ACHADOS", "error", 1, "Nenhum achado com ID (ex.: `F-01`) encontrado."))
    sev_pat = re.compile(r"Severidade\s*:\s*(" + "|".join(e["severity_labels"]) + r")", re.IGNORECASE)
    conf_pat = re.compile(r"Confian[çc]a\s*:\s*(" + e["confidence_values"] + r")\b", re.IGNORECASE)
    order = [re.compile(p, re.IGNORECASE) for p in e["severity_labels"]]
    last_rank, last_id = -1, ""
    for i in idxs:
        b = blocks[i]
        text = section_text(blocks, i)
        for f in e["finding_fields_required"]:
            if not has_field(text, f["pattern"]):
                findings.append(Finding("EX-CAMPO", "error", b.line, f"Achado “{b.text}” sem campo `{f['id']}`."))
        for f in e["finding_fields_recommended"]:
            if not has_field(text, f["pattern"]):
                findings.append(Finding("EX-CAMPO", "warn", b.line, f"Achado “{b.text}” sem campo `{f['id']}` (recomendado)."))
        if has_field(text, "Confian[çc]a") and not conf_pat.search(text):
            findings.append(Finding("EX-CONFIANCA", "warn", b.line, "Confiança deve ser alta, média ou baixa."))
        m = sev_pat.search(text)
        if not m:
            findings.append(Finding("EX-SEVERIDADE", "warn", b.line,
                f"Achado “{b.text}” sem `Severidade:` ({', '.join(e['severity_labels'])})."))
            continue
        rank = next(k for k, p in enumerate(order) if p.fullmatch(m.group(1)))
        if rank < last_rank:
            findings.append(Finding("EX-ORDEM", "warn", b.line,
                f"Priorização por impacto violada: “{b.text}” é mais grave que o achado anterior ({last_id})."))
        else:
            last_rank, last_id = rank, b.text.split()[0]

    check_sections(e["required_sections"], blocks, findings)


# ------------------------------------------------------------------- main
def main() -> int:
    ap = argparse.ArgumentParser(description="Valida um texto Markdown contra o estilo Risco Cognitivo.")
    ap.add_argument("file")
    ap.add_argument("--mode", choices=["auto", "jornalistico", "executivo"], default="auto")
    ap.add_argument("--config", default=str(DEFAULT_CONFIG))
    ap.add_argument("--json", action="store_true", help="saída em JSON")
    ap.add_argument("--strict", action="store_true", help="avisos também reprovam")
    args = ap.parse_args()

    path = Path(args.file)
    if not path.is_file():
        print(f"Arquivo não encontrado: {path}", file=sys.stderr)
        return 2
    raw = path.read_bytes()
    text = raw.decode("utf-8")
    cfg = json.loads(Path(args.config).read_text(encoding="utf-8"))

    lines = text.splitlines()
    meta, offset = split_frontmatter(lines)
    mode = args.mode
    if mode == "auto":
        mode = meta.get("tipo", "").lower()
        if mode not in ("jornalistico", "executivo"):
            print("Modo indefinido: use --mode ou `tipo: jornalistico|executivo` no frontmatter.", file=sys.stderr)
            return 2

    blocks = parse_blocks(lines, offset)
    findings: list[Finding] = []
    metrics: dict = {"headings": sum(b.kind == "heading" for b in blocks)}
    check_common(cfg, blocks, findings, metrics, meta)
    check_sections(cfg["common"]["required_sections"], blocks, findings)
    if mode == "jornalistico":
        check_jornalistico(cfg, meta, blocks, findings)
    else:
        check_executivo(cfg, blocks, findings)

    # remove duplicatas (ex.: seção "status" é comum e também pode vir do modo)
    seen, unique = set(), []
    for f in sorted(findings, key=lambda f: (f.line, f.rule, f.message)):
        key = (f.rule, f.line, f.message)
        if key not in seen:
            seen.add(key)
            unique.append(f)

    errors = sum(f.severity == "error" for f in unique)
    warns = sum(f.severity == "warn" for f in unique)
    passed = errors == 0 and (warns == 0 or not args.strict)

    if args.json:
        print(json.dumps({
            "validator_version": VALIDATOR_VERSION,
            "rules_version": cfg.get("version"),
            "file": path.name,
            "mode": mode,
            "content_sha256": hashlib.sha256(raw).hexdigest(),
            "strict": args.strict,
            "passed": passed,
            "counts": {"errors": errors, "warnings": warns},
            "metrics": metrics,
            "findings": [asdict(f) for f in unique],
        }, ensure_ascii=False, indent=2))
    else:
        for f in unique:
            tag = "ERRO " if f.severity == "error" else "AVISO"
            print(f"[{tag}] {f.rule:<22} linha {f.line:<4} {f.message}")
        status = "APROVADO" if passed else "REPROVADO"
        print(f"\n{status} — modo={mode} • {errors} erro(s), {warns} aviso(s) • "
              f"{metrics['words']} palavras, média {metrics['avg_sentence_words']} por frase")
        print(f"validator {VALIDATOR_VERSION} • rules {cfg.get('version')} • sha256 {hashlib.sha256(raw).hexdigest()[:12]}")
    return 0 if passed else 1


if __name__ == "__main__":
    sys.exit(main())
