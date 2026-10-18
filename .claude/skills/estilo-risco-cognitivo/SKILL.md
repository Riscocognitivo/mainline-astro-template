---
name: estilo-risco-cognitivo
description: Padroniza a escrita do autor para ser reprodutível e a valida com um script Python. Cobre dois formatos, o artigo de jornalismo científico JF-02 (SEO, H2 em pergunta, CTAs mensuráveis, associação ≠ causalidade) e o relatório técnico-executivo (BLUF, Pirâmide, SCQA, SIADE, níveis L1/L2/L3). Use SEMPRE que o usuário pedir para escrever, reescrever, revisar, padronizar ou validar texto no "meu estilo", no padrão Risco Cognitivo, JF-02 ou SIADE, para transformar auditoria, log, diagnóstico ou saída de modelo em relatório executivo, ou para criar artigo científico com SEO e CTA, mesmo sem citar a skill. Também use quando pedirem validador, linter ou checklist de estilo, ou "skill de writing".
---

# Estilo Risco Cognitivo — escrita reprodutível com validador

Esta skill transforma o estilo de escrita do autor em um processo repetível: mesmas entradas e mesmas regras devem produzir textos com a mesma estrutura. O estilo vive em templates e referências. A conferência é feita por um validador Python determinístico, e não pela opinião de quem escreve.

Por que um validador: estilo "de memória" deriva entre sessões. Regras verificáveis por script (estrutura, campos obrigatórios, linguagem proibida, dados sem fonte) não derivam. O julgamento de qualidade continua sendo seu; o script cuida do que é mecânico.

## Fluxo

1. **Escolha o modo.**
   - `jornalistico`: artigo de divulgação científica, notícia sobre estudo, conteúdo com SEO e CTA.
   - `executivo`: auditoria, log, diagnóstico, relatório de IA ou de risco convertido em decisão.
   - Se o pedido for ambíguo, escolha o mais provável e declare a suposição em uma linha.
2. **Leia a referência do modo** (uma só):
   - `references/estilo-jornalistico-jf02.md`
   - `references/estilo-executivo-siade.md`
3. **Parta do template**: `assets/templates/artigo-jf02.md` ou `assets/templates/relatorio-executivo.md`. Substitua todos os `<<…>>`; o validador reprova placeholders esquecidos. Em caso de dúvida sobre o resultado esperado, consulte o exemplo aprovado em `assets/exemplos/`.
4. **Redija** seguindo as regras de conteúdo abaixo.
5. **Valide** (caminhos relativos a esta skill):
   ```bash
   python scripts/validate_style.py texto.md --mode jornalistico   # ou executivo
   python scripts/validate_style.py texto.md --json                 # lê `tipo:` do frontmatter
   ```
   Saída `0` = aprovado, `1` = reprovado, `2` = uso incorreto. `--strict` trata avisos como reprovação.
6. **Corrija e revalide** até zerar os erros (normalmente 1 a 3 rodadas). Avisos são decisões: corrija ou justifique em uma linha. Nunca burle o validador removendo o conteúdo que ele acusa; se uma regra estiver errada para o caso, diga isso ao usuário e proponha ajustar `references/rules.json`.
7. **Entregue** o texto final e o resultado da validação (status, contagem de erros e avisos, `sha256`). Esses dados registram qual versão do texto e das regras foi aprovada.

## Regras de conteúdo que valem nos dois modos

- **Conclusão primeiro.** O leitor deve saber o resultado e o que fazer antes de ver o método.
- **Separe fato, inferência, hipótese e recomendação.** Rotule quando houver risco de confusão (`[FATO]`, `[INFERÊNCIA]`, `[HIPÓTESE]`).
- **Todo número tem fonte** no mesmo parágrafo ou logo depois (link, DOI, `Fonte:`, `Evidência:`).
- **Nada de linguagem promocional** (“incrível”, “revolucionário”, “segredo”) nem garantias (“garante”, “comprovadamente”).
- **Declare o estado da validação.** Diga o que foi verificado e o que está pendente. Pesquisa externa não executada não pode ser descrita como feita. Ferramentas e palavras-chave propostas são “candidatas”.
- **Incerteza explícita.** Se a evidência não determina a causa, escreva isso. Não transforme hipótese em certeza.
- **Frases curtas** (média ≤ 28 palavras), parágrafos ≤ 80 palavras, hierarquia de títulos sem saltos.

## Regras específicas por modo

**Jornalístico (JF-02).** Frontmatter com `titulo`, `slug`, `meta_descricao`, `autor`, `publicado`. Um H1; no mínimo 3 H2, a maioria em forma de pergunta. Lead com atribuição científica. Seções de metodologia, limitações/causalidade, implicações e fontes. Associação estatística nunca vira causalidade, nem em título nem em CTA. Cada CTA tem `Posição`, `Texto`, `Destino`, `Objetivo` e `Evento`; CTA de e-mail menciona consentimento.

**Executivo.** BLUF nos três primeiros títulos. Seções L1, L2 e L3. Cada achado tem ID (`F-01`), `Severidade` (Bloqueante, Crítico, Alto, Médio, Baixo) e os campos `Impacto`, `Ação recomendada`, `Critério de sucesso`, `Evidência` e `Confiança` (alta, média ou baixa), além de `Responsável` e `Prazo` (pode ser “a definir”). Ordene os achados do mais grave ao menos grave. Termine com matriz de ações e limitações.

## O que o validador NÃO verifica (revise você mesmo)

O script confere forma, não verdade. Revise manualmente: se os números batem com a fonte; se o estudo citado existe e diz o que o texto afirma; se uma simplificação científica é adequada; promessas de saúde implícitas (“previne”, “trata”) sem sustentação clínica; se o rótulo fato/inferência/hipótese está correto; tom e clareza para o público-alvo. Ao entregar, diga o que ficou sem verificação.

## Ajustando as regras

Limiares, termos proibidos, campos obrigatórios e seções exigidas ficam em `references/rules.json`; não é preciso editar o código. Ao mudar uma regra, incremente `version` nesse arquivo para que o relatório registre qual conjunto de regras foi usado. Para passar outro arquivo de regras: `--config caminho/rules.json`.

## Mapa de arquivos

| Caminho | Para quê |
|---|---|
| `scripts/validate_style.py` | Validador (apenas biblioteca padrão) |
| `references/rules.json` | Regras e limiares versionados |
| `references/estilo-*.md` | Cânone de estilo por modo |
| `references/calibracao.md` | Dados e decisões por trás dos limiares |
| `assets/templates/` | Esqueletos com `<<placeholders>>` |
| `assets/exemplos/` | Exemplos fictícios que passam no validador |
| `evals/` | Casos de teste e fixtures reprovados de propósito |
