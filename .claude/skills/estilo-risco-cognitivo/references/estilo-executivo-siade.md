# Relatório técnico-executivo — BLUF + Pirâmide + SCQA + SIADE

Extraído de `My_writung_PY.md` (“Opção 2”). Leia ao converter auditorias, diagnósticos, logs ou saídas de modelos em relatórios orientados à decisão.

## Camadas
1. **BLUF**: comece pelo resultado: o que foi encontrado, qual o impacto, o que precisa acontecer.
2. **Pirâmide (Minto)**: conclusões → argumentos → evidências; agrupe achados relacionados.
3. **SCQA**: Situação, Complicação, Pergunta decisória, Resposta.
4. **Evidência → Impacto → Ação**: toda recomendação aponta para um achado verificável.

## SIADE (modelo operacional proposto, não padrão formal de auditoria)
| Campo | Responde |
|---|---|
| S — Situação | O que está acontecendo? |
| I — Impacto | Por que importa? |
| A — Achado | O que foi identificado e qual a gravidade? |
| D — Decisão | O que priorizar ou escolher? |
| E — Evidência | Quais dados sustentam a conclusão? |

Cada achado também traz: responsável, prazo, nível de confiança e critério de conclusão.

## Três níveis de leitura
| Nível | Conteúdo | Leitura |
|---|---|---|
| L1 — Executivo | Veredito, 3–5 descobertas, riscos, prioridades, decisões | 30–60 s |
| L2 — Analítico | Achados por domínio, impactos, plano de ação | 5–10 min |
| L3 — Técnico | Metodologia, métricas, saídas integrais, limitações, fontes | sob demanda |

O documento é uma **interface de navegação entre síntese e profundidade**, não um resumo menor. Use índice, IDs de achado (`F-01`), links para evidência, glossário e matriz de ações.

## Cinco regras de transformação
1. **Preservação semântica**: não elimine condições, ressalvas, métricas ou limitações.
2. **Separação epistemológica**: rotule fato observado `[FATO]`, inferência `[INFERÊNCIA]`, hipótese `[HIPÓTESE]` e recomendação.
3. **Priorização por impacto**: ordene por gravidade, urgência e consequência, não pela ordem do original.
4. **Rastreabilidade**: toda conclusão importante liga à evidência original.
5. **Orientação a resultados**: transforme recomendações genéricas em ações SMART com critério de sucesso.

Se a evidência não determina a causa, explicite a incerteza. Nunca apresente hipótese como certeza.

## Exemplo antes → depois
**Antes:** `Build failure: exit code 1. Environment validation failed due to missing NEXT_PUBLIC_APP_URL and NEXT_PUBLIC_WEB_URL.`
**Depois:** achado `F-01 — Publicação da API bloqueada`, severidade Bloqueante, com impacto, ação, critério de sucesso, evidência (log), confiança alta quanto à causa registrada, responsável a definir.
Veja o resultado completo em `assets/exemplos/relatorio-executivo-exemplo.md`.

## Pipeline
Ingestão → Normalização → Interpretação → Síntese executiva (BLUF/SCQA/Pirâmide) → Plano de ação (SIADE/SMART) → Validação (números, evidências, fidelidade) → Publicação (sumário de 1 página, matriz de decisões, plano de ação, relatório técnico integral).
Princípio central: **conclusão primeiro → impacto → ação recomendada → evidência acessível.**
