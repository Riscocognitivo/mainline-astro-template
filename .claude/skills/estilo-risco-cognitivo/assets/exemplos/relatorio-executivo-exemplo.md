---
tipo: executivo
titulo: Auditoria de build da API
---

# Auditoria de build da API

## L1 — Veredito executivo

**Conclusão (BLUF):** a publicação da API está bloqueada por duas variáveis de ambiente ausentes. A correção é simples e deve ser feita antes de qualquer novo release.

**Contexto (SCQA):** o pipeline de build valida o ambiente antes de compilar. A validação falhou. A pergunta é o que bloqueia a publicação. A resposta é a ausência de NEXT_PUBLIC_APP_URL e NEXT_PUBLIC_WEB_URL.

## L2 — Análise por achado

### F-01 — Publicação da API bloqueada

Severidade: Bloqueante

Situação: a compilação terminou com código de saída 1.
Impacto: impede a publicação da API pelo processo atual.
Ação recomendada: configurar as duas variáveis no ambiente de build e repetir a execução.
Critério de sucesso: compilação finalizada sem erros de validação.
Evidência: log de compilação (FATO)
Confiança: alta quanto à causa registrada
Responsável: a definir
Prazo: a definir

### F-02 — Logs sem correlação de requisição

Severidade: Médio

Situação: os logs não carregam identificador de requisição.
Impacto: dificulta o diagnóstico de falhas em produção.
Ação recomendada: incluir um request ID em todas as linhas de log.
Critério de sucesso: rastrear de ponta a ponta uma requisição de teste.
Evidência: amostra de logs (FATO)
Confiança: média quanto ao alcance do problema
Responsável: a definir
Prazo: a definir

## Matriz de ações

| ID | Ação | Responsável | Prioridade | Prazo | Status |
|---|---|---|---|---|---|
| F-01 | Configurar variáveis de ambiente | a definir | P0 | a definir | aberto |
| F-02 | Adicionar request ID aos logs | a definir | P2 | a definir | aberto |

## L3 — Apêndice técnico

Saída integral do build e lista de variáveis exigidas.

## Limitações e incertezas

Não foi possível confirmar se outras variáveis também estão ausentes, pois o build parou na primeira validação.
