# JF-02 — Jornalismo científico + SEO + CTA

Extraído de `My_writung_PY.md` (seções 1–8). Leia este arquivo ao redigir ou revisar um artigo de divulgação científica.

## Sumário
1. Narrativa de 7 passos
2. Anatomia do artigo
3. SEO on-page
4. CTAs
5. Controle da evidência
6. Pipeline de 9 etapas e critérios de aceite
7. Eventos de instrumentação

## 1. Narrativa de 7 passos (pirâmide invertida com desenvolvimento explicativo)
| # | Passo | Pergunta que o texto responde |
|---|---|---|
| 01 | Descoberta | Qual é a notícia? |
| 02 | Magnitude | Qual é o tamanho do resultado? |
| 03 | Autoridade | Quem realizou e publicou o estudo? |
| 04 | Explicação | Como entender o fenômeno? |
| 05 | Contraponto | O que não é possível concluir? |
| 06 | Utilidade | Quais são as implicações práticas? |
| 07 | Continuidade | O que o leitor pode explorar depois? |

## 2. Anatomia do artigo
Manchete (assunto + achado + atribuição) → linha fina (dados + população) → autoria e data → lead (resultado + publicação científica) → 2º parágrafo (impacto + amostra) → fonte primária → explicação didática → metodologia → H2 explicativos → especialistas independentes → implicações → estudo complementar → CTAs → fontes.

## 3. SEO on-page
- Título descritivo (≤ 60 caracteres), H1 único, H2 em formato de pergunta, slug estável em kebab-case.
- Meta descrição de 110–160 caracteres com tipo de estudo, população e convite.
- Dados estruturados `NewsArticle` ou `Article` (autoria, datas, imagem, organização). Não há garantia de rich results nem de Discover.
- E-E-A-T identifica especialistas, políticas editoriais e fontes; não é uma pontuação técnica.
- Atualização registra correções e novas evidências. Nunca altere datas só para simular novidade.
- Palavras-chave são **candidatas** até serem pesquisadas (Trends, Search Console, SERP). Nunca apresente volume ou dificuldade presumidos.

## 4. CTAs
Cada CTA tem **posição, texto, destino, objetivo e evento mensurável**. Quatro tipos:
| Tipo | Posição típica | Objetivo |
|---|---|---|
| Contextual | Após o 1º bloco explicativo | Aprofundamento e navegação interna |
| Técnico-científico | Após metodologia e limitações | Autoridade e rastreabilidade |
| Educacional | Após as implicações | Conexão entre conteúdo e aplicação |
| Relacionamento | Final | Audiência recorrente (newsletter **com consentimento**) |

Regras: preserve o fluxo jornalístico; separe e identifique qualquer CTA comercial; não prometa diagnóstico, tratamento ou redução de risco sem sustentação clínica. A frequência (1 contextual + 1 opcional + 1 final) é hipótese a testar, não regra universal.

## 5. Controle da evidência
- **Associação estatística não autoriza inferência causal.** Vale para manchete, subtítulo, CTA e infográfico.
- Distinga o risco observado na base estudada do risco individual de qualquer pessoa.
- Para cada número da matéria original: confirme população, método, intervalo de incerteza, grupo comparador e medida estatística. Localize o estudo primário.
- Simplificações neurobiológicas (ex.: dopamina) exigem verificação.

## 6. Pipeline e critérios de aceite
Pesquisar → Verificar → Enquadrar → Estruturar → Otimizar → Converter → Validar → Publicar → Monitorar.

Só aprove quando houver: fonte original e claims rastreáveis; evidências, limitações e causalidade revisadas; intenção de busca documentada e palavras-chave pesquisadas; hierarquia e metadados verificados; CTAs com objetivo, destino e evento; revisão para públicos geral e técnico; histórico de autoria, aprovação e versão.

**Encerre com “Estado da validação”**: diga o que foi feito e o que está pendente. Nunca declare “validado” antes das etapas externas.

## 7. Eventos de instrumentação
`article_view`, `article_scroll_depth`, `internal_link_click`, `scientific_source_click`, `cta_impression`, `cta_click`, `newsletter_signup`.
Dimensões: `article_id`, `article_type`, `editorial_pillar`, `audience_segment`, `cta_id`, `cta_position`, `destination_type`, `publication_version`.
Privacidade: consentimento obrigatório; evite dados sensíveis de saúde. Compare com baseline real do site antes de fixar metas.
