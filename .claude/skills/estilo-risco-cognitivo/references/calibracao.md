# Calibração das regras (rules.json v1.1.0)

Registro de como os limiares foram escolhidos, para que a próxima mudança parta de dados e não de palpite. Este arquivo contém apenas estatísticas, nenhum texto de terceiros.

## Corpora medidos (tokenização do próprio validador)
| Corpus | Frases | Média | p90 | p95 | Máx. | Parágrafos: média / p90 / máx. |
|---|---|---|---|---|---|---|
| Reportagem longa de ciência (BBC News Brasil, 26/05/2026, TDAH) | 58 | 24,1 | 39 | 45 | 50 | 30 / 44 / 50 |
| `My_writung_PY.md` (texto do autor) | 207 | 7,6* | 18 | 24 | 42 | 9 / 24 / 49 |

\* Média baixa porque o arquivo é dominado por tabelas e rótulos; use p95 e máx. como referência, não a média.

## Decisões
| Regra | Antes | Agora | Motivo |
|---|---|---|---|
| `max_paragraph_words` | 130 | **80** | Máximo observado nos dois corpora é 50; 130 não pegava nada. |
| `max_sentence_words` | 45 | 45 (mantido) | Pega só as 2 frases mais longas da reportagem (49 e 50); o autor chega a 42. |
| `max_avg_sentence_words` | 28 | 28 (mantido) | Reportagem em 24,1; margem razoável. |
| Seção de limitações | `o que não…` | + `não responde`, `cautela`, `ressalva` | A reportagem tem a seção de contraponto, e a regra não a reconhecia. |
| Seção de implicações | `implica|prática…` | + `importam`, `o que vem a seguir`, `próximos passos` | Idem. |
| Termos absolutos e promocionais | em todo o texto | **fora de falas citadas** (≥ 20 caracteres) | Citação de especialista não é a voz do autor. Linhas `Texto:` de CTA continuam checadas. |
| Limite de parágrafo | em todo bloco | **exclui registros `Campo: valor`** (≥ 3 pares) | Os campos de um achado não são prosa. |

## Divergências mantidas de propósito (estilo do autor, não defeito da regra)
- **H2 em pergunta** (a reportagem tem 0%): é o padrão JF-02 do autor.
- **Título ≤ 60 caracteres**, **slug**, **meta descrição**, **CTA** e **seção Fontes**: pertencem ao pacote SEO/CMS do JF-02, que a reportagem de referência não segue.
- **Número sem fonte** (`76%` sem atribuição no parágrafo): a regra do autor é rastreabilidade por parágrafo.

## Limitações conhecidas
- O detector de "número sem fonte" só reconhece `%`, milhares, `mil/milhões` e `n=`. Contagens simples (“142 crianças”) passam sem checagem.
- Texto colado de página web perde os hiperlinks; a ausência de link em material colado não prova ausência da fonte.
- n = 1 reportagem + 1 texto do autor. Antes de apertar mais um limiar, meça pelo menos 3 a 5 textos aprovados.
