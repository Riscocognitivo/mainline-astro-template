<!-- Gerado a partir de Risco_Cognitivo_Design_System_Guidelines.docx. A fonte é o .docx. -->

# Risco Cognitivo — Design System Guidelines

Oct 18, 2026 · @L

## 1. Escopo e fontes

Este guia transforma 14 documentos em um único sistema de regras para o blog, a escrita e o copywriting do Risco Cognitivo. A base visual é a linguagem Apple: preto, branco e cinza. A cor de marca aparece só em acentos pontuais, tirada das imagens de referência.

| # | Documento | Papel no sistema | Alcance |
|---|---|---|---|
| 1 | Apple HIG (texto de apoio) | Como estruturar guideline verificável: regras com ID, evidência e relatório | Método |
| 2 | Typography | Tamanhos, pesos, hierarquia, Dynamic Type | Interface |
| 3 | Spatial layout | Profundidade e campo de visão no visionOS | Fora do blog; só referência |
| 4 | Writing | Voz, tom, rótulos, erros, estados vazios | Interface e texto |
| 5 | Layout | Hierarquia visual, alinhamento, adaptação, áreas seguras | Interface |
| 6 | Inclusion | Linguagem acolhedora, estereótipos, localização | Interface e texto |
| 7 | Images | Resolução, formatos, perfil de cor | Mídia |
| 8 | Accessibility | Tamanho mínimo, contraste, controles, movimento | Interface |
| 9 | Branding | Cor de marca, fonte própria, deferência ao conteúdo | Marca |
| 10 | Color | Cores do sistema, contraste, cor sem depender só de cor | Marca e interface |
| 11 | Dark Mode | Aparência escura, contraste em ambos os modos | Interface |
| 12 | Motion | Movimento com propósito e opcional | Interface |
| 13 | Right to left | Espelhamento, numerais, ícones direcionais | Localização |
| 14 | Risco Cognitivo Guidelines v0.2.0 | Regras próprias de blog, escrita, copy e leitura fácil | Blog e conteúdo |

Precedência. Para blog, escrita e copy, vale o documento 14. Para interface, acessibilidade, cor e movimento, valem os documentos Apple (2, 4 a 13). Se houver conflito, a regra mais restritiva vence até uma decisão registrada na seção 9.

Cuidado de origem. As páginas Apple são orientações para plataformas Apple. Valores em pontos (pt) precisam ser convertidos para a unidade do suporte web antes de virarem teste. O documento 14 avisa que sua compilação mistura fontes; cite a origem de cada regra ao referenciá-la.

Como ler cada regra. Toda regra tem um ID, uma severidade e um método de verificação. Os IDs do documento 14 foram mantidos (DES, SIM, COP, PAG, VOZ, REV, EST, LEI, GES, ESP, TIP). Os derivados dos documentos Apple, ou propostos aqui, usam COR, LAY, TOQ, ESC, ACE, INC, MOV, IMG e RTL; a coluna Origem diz de onde veio cada um.

| Severidade | Efeito se falhar |
|---|---|
| Bloqueante | Impede a publicação |
| Alerta | Exige justificativa registrada |
| Recomendação | Orienta, sem bloquear |

| Método | O que garante |
|---|---|
| Automático (código) | Apenas as condições testadas |
| Visual (renderização) | Apenas os formatos e telas inspecionados |
| Editorial (julgamento) | Parecer com justificativa; pode exigir revisão humana |

Resultado de cada regra: aprovado, reprovado, pendente ou não aplicável. Teste obrigatório não executado fica pendente.

## 2. Princípios

Seis princípios orientam toda decisão. Cada regra das seções seguintes deriva de pelo menos um deles.

| Princípio | O que exige | Origem |
|---|---|---|
| 1. Conteúdo primeiro | A marca cede espaço ao texto; logotipo e cor de marca não competem com a leitura | Branding, Layout, DES-01 |
| 2. Clareza e hierarquia | Níveis distintos de título, subtítulo e corpo; o mais importante no topo e no início da linha | Typography, Layout, DES-02 a DES-04 |
| 3. Moderação | Cor, movimento, negrito e humor entram só com propósito | Color, Motion, VOZ-03, TIP-07 |
| 4. Acessível por padrão | Intuitivo, perceptível por mais de um canal e adaptável às preferências da pessoa | Accessibility |
| 5. Linguagem simples e inclusiva | Palavras conhecidas, voz ativa, sem jargão, sem gênero desnecessário | Writing, Inclusion, SIM-01 a SIM-08 |
| 6. Verificável | Cada exigência vira critério de aceitação com evidência registrada | Apple HIG (texto de apoio) |

Regra de desempate. Quando clareza e estilo divergem, vence a clareza. Quando marca e acessibilidade divergem, vence a acessibilidade.

## 3. Cor

A base é preto, branco e cinza, como na linguagem Apple. A cor de marca entra só em acentos pontuais e vem das suas imagens: os valores abaixo foram amostrados nos arquivos enviados (mediana de uma pequena área), não estimados a olho.

### 3.1 Tokens neutros

| Token | Claro | Escuro | Uso | Contraste |
|---|---|---|---|---|
| fundo/base | #FFFFFF | #1D1D1F | Fundo da página | — |
| fundo/suave | #F2F2F7 | #2C2C2E | Cartões, blocos | — |
| texto/primário | #1D1D1F | #FFFFFF | Títulos e corpo | 16,8:1 · 17,0:1 |
| texto/secundário | #6C6C70 | #AEAEB2 | Subtítulo, legenda | 5,2:1 · 7,6:1 |
| texto/apoio | #8E8E93 | #8E8E93 | Só texto grande ou decorativo | 3,3:1 claro · 5,2:1 escuro |
| separador | #E5E5EA | #3A3A3C | Linhas e divisões | — |

Os cinzas vêm da tabela de cores do sistema Apple (documento 10). O fundo escuro #1D1D1F coincide com o fundo medido no carrossel de referência.

### 3.2 Acentos de marca (amostrados das imagens)

| Token | Valor medido | Onde aparece | Sobre branco | Sobre escuro | Uso permitido |
|---|---|---|---|---|---|
| acento/azul-ação | #306EDB | Botão "Comprar" (apple.com) | 4,8:1 | 3,5:1 | Botão e link em fundo claro |
| acento/azul-pista | #3B6EA0 | Pista de atletismo | 5,4:1 | 3,1:1 | Ilustração, destaque grande |
| acento/azul-quadra | #6796CA | Quadra no slide 07 | 3,1:1 | 5,4:1 | Ilustração; texto só em fundo escuro |
| acento/verde | #6CBA54 | Gramado da quadra | 2,4:1 | 7,0:1 | Ilustração; texto só em fundo escuro |
| acento/roxo | #7C5EA3 | Quadra no slide 05 | 5,3:1 | 3,2:1 | Ilustração, destaque grande |

No modo escuro, o azul de ação passa a #0088FF (azul do sistema, ≥ 4,8:1) e o roxo precisa de uma variante mais clara, a definir e recalcular (seção 9).

### 3.3 Regras

| ID | Regra | Severidade | Método | Origem |
|---|---|---|---|---|
| COR-01 | A interface usa só tokens neutros; cor de marca é exceção declarada | Alerta | Automático | Proposta, a partir de Branding |
| COR-02 | Acento só em ação primária, indicador de status ou camada de conteúdo; nunca em vários controles ao mesmo tempo | Alerta | Visual | Color, Branding |
| COR-03 | Texto até 17 pt: contraste mínimo 4,5:1; texto de 18 pt ou negrito: 3:1; em fundo escuro, buscar 7:1 para texto pequeno | Bloqueante | Automático | Accessibility, Dark Mode |
| COR-04 | Nunca usar cor como único sinal: acompanhar de rótulo, forma ou ícone | Bloqueante | Visual | Accessibility, Color |
| COR-05 | Cada cor tem um só significado em todo o sistema | Alerta | Editorial | Color |
| COR-06 | Toda cor personalizada tem variante clara, escura e de contraste aumentado | Bloqueante | Automático | Color |
| COR-07 | Cores vêm de tokens; valor hexadecimal solto no código reprova | Alerta | Automático | Color (evitar valores fixos) |
| COR-08 | Verde e azul-quadra não são cor de texto sobre fundo claro | Bloqueante | Automático | Proposta, a partir de COR-03 |
| COR-09 | Imagem com fundo branco é levemente escurecida no modo escuro | Recomendação | Visual | Dark Mode |
| COR-10 | Conferir o significado da cor em cada idioma e região atendidos | Recomendação | Editorial | Color, Inclusion |

### 3.4 Achados nas imagens de referência

- Slide 07 (fundo escuro): o cinza do subtítulo, amostrado em cerca de #66666B, dá 2,9:1 sobre #1D1D1F. Reprova COR-03. Trocar por texto/secundário escuro (#AEAEB2).
- Captura do Mac Studio: o cinza do texto de corpo, amostrado em cerca de #7E7E80, dá 4,0:1 sobre branco. Está abaixo de 4,5:1; confirme com o arquivo original, pois a amostra pode pegar borda suavizada.
- Nos dois slides, o rodapé "GESTÃO E PROCESSOS" e a paginação usam cinza claro e corpo pequeno. Conferir contraste antes de publicar.
## 4. Tipografia

O texto precisa ser legível antes de ser bonito: poucas famílias, pesos que não somem em tamanho pequeno e uma hierarquia que sobrevive quando a pessoa aumenta a letra.

### 4.1 Referências numéricas

| Plataforma | Tamanho padrão | Tamanho mínimo | Fonte |
|---|---|---|---|
| iOS, iPadOS | 17 pt | 11 pt | Typography, Accessibility |
| macOS | 13 pt | 10 pt | Typography, Accessibility |
| Blog (documento 14) | 12 a 14 pt (TIP-03); corpo de partida ≥ 11 pt (DES-06) | 11 pt | Risco Cognitivo Guidelines |

Os documentos 14 e Apple dão números diferentes para o corpo. Esta versão mantém os dois e propõe o seguinte para o blog: corpo de leitura longa no padrão de 17 px; nenhum texto abaixo de 12 px; 11 px apenas para legenda e aviso legal. A decisão final está na seção 9.

### 4.2 Funções tipográficas

| Função | Peso | Cor | Observação |
|---|---|---|---|
| Título | Bold | texto/primário | Frase curta; é o nível mais forte da página |
| Subtítulo | Regular | texto/secundário | Explica o benefício em uma ou duas frases |
| Corpo | Regular | texto/primário ou secundário | Blocos curtos, ver seção 5 |
| Rótulo e rodapé | Regular ou Medium | texto/secundário | Caixa-alta com espaçamento só em rótulos curtos |

A hierarquia nasce da combinação de tamanho, peso e cor, e deve continuar visível quando a pessoa amplia o texto.

### 4.3 Regras

| ID | Regra | Severidade | Método | Origem |
|---|---|---|---|---|
| DES-02 | Tamanhos bem definidos para título, subtítulo e corpo | Bloqueante | Automático | Doc. 14 |
| DES-05 | Fontes legíveis: SF Pro e New York, ou sans-serif limpa | Alerta | Visual | Doc. 14 |
| DES-06 | Evitar corpo pequeno: referência de pelo menos 11 pontos | Bloqueante | Automático | Doc. 14 |
| TIP-01 | Preferir sans-serif limpas (Arial, Verdana, Tahoma, Calibri, Lexend) | Recomendação | Visual | Doc. 14 |
| TIP-02 | OpenDyslexic e Dyslexie são opções a avaliar, sem prometer correção de condição | Recomendação | Editorial | Doc. 14 |
| TIP-03 | Corpo de 12 a 14 pt como faixa do bloco de legibilidade, informando o suporte | Alerta | Automático | Doc. 14 |
| TIP-04 | Conferir o tamanho no resultado renderizado | Alerta | Visual | Doc. 14 |
| TIP-05 | Não usar itálico como ênfase principal | Alerta | Automático | Doc. 14 |
| TIP-06 | Não usar sublinhado decorativo | Alerta | Automático | Doc. 14 |
| TIP-07 | Negrito com moderação | Alerta | Editorial | Doc. 14 |
| TIP-08 | Evitar pesos Ultralight, Thin e Light (abaixo de 400); preferir Regular, Medium, Semibold, Bold | Bloqueante | Automático | Typography |
| TIP-09 | Se usar fonte própria de peso fino, ampliar o tamanho acima do recomendado | Alerta | Visual | Typography, Accessibility |
| TIP-10 | Poucas famílias: no máximo duas (fonte própria em títulos, fonte do sistema em corpo e legenda) | Alerta | Automático | Typography, Branding; limite de duas é proposta |
| TIP-11 | Tamanhos em unidades relativas (rem, em); ampliar o texto em 200% não pode cortar nem sobrepor conteúdo | Bloqueante | Visual | Accessibility |
| TIP-12 | Ao ampliar, preservar a hierarquia e priorizar o conteúdo importante; rótulos de navegação não crescem junto | Alerta | Visual | Typography |
| TIP-13 | Truncar o mínimo possível em tamanhos grandes; em áreas roláveis, só truncar se houver uma vista para ler o resto | Alerta | Visual | Typography |
| TIP-14 | Fontes personalizadas respondem a negrito e a preferências de tamanho do sistema como as fontes do sistema | Bloqueante | Visual | Typography |

### 4.4 Conferência

É possível distinguir título, subtítulo e corpo? Algum peso fino em corpo pequeno? A página continua utilizável com a letra a 200%? Há mais de duas famílias?

Nota: as fontes do sistema Apple não devem ser embutidas no código; use as famílias do sistema (system-ui) e declare alternativas na pilha.

## 5. Layout, espaçamento e toque

O layout mostra a estrutura antes da leitura: o mais importante no topo e no início da linha, grupos separados por espaço e uma coluna de texto que cabe em qualquer tela.

### 5.1 Hierarquia e agrupamento

| ID | Regra | Severidade | Método | Origem |
|---|---|---|---|---|
| DES-01 | A página prioriza o texto principal como foco da leitura | Alerta | Visual | Doc. 14 |
| DES-03 | Espaço em branco entre elementos; composição não comprimida | Alerta | Visual | Doc. 14 |
| DES-04 | Títulos e subtítulos mostram a estrutura antes da leitura integral | Alerta | Visual | Doc. 14 |
| LAY-01 | Ordenar por importância: itens principais no topo e no lado de início | Alerta | Visual | Layout |
| LAY-02 | Alinhar elementos; usar recuo só para indicar subordinação | Alerta | Visual | Layout |
| LAY-03 | Revelar aos poucos: menus, vistas aninhadas ou seções roláveis em vez de tudo de uma vez | Recomendação | Editorial | Layout |
| GES-01 a GES-04 | Proximidade: elementos do mesmo assunto ficam juntos; o espaço entre título e parágrafo é menor que o espaço entre blocos temáticos | Alerta | Visual | Doc. 14 |
| GES-05 a GES-07 | Isolamento: espaço ao redor de citação, imagem, frase ou botão que deve receber atenção | Recomendação | Visual | Doc. 14 |
| GES-08 a GES-10 | Semelhança: mesmo estilo para mesma função; citações e listas com recuo e alinhamento padronizados | Alerta | Automático | Doc. 14 |
| GES-11 a GES-13 | Grade: eixos coerentes, colunas com margens e calhas; alinhamento e espaço indicam blocos sem depender de divisórias | Recomendação | Visual | Doc. 14 |

### 5.2 Texto de leitura

| ID | Regra | Severidade | Método | Origem |
|---|---|---|---|---|
| ESP-01 | Entrelinha de 1,4 a 1,6, com 1,5 como referência | Bloqueante | Automático | Doc. 14 |
| ESP-02 | Linhas não comprimidas no texto renderizado | Alerta | Visual | Doc. 14 |
| ESP-03 | Texto corrido alinhado à esquerda | Bloqueante | Automático | Doc. 14 |
| ESP-04 | Sem justificação | Bloqueante | Automático | Doc. 14 |
| ESP-05 e ESP-06 | Espaço entre palavras de cerca de 3,5 vezes o espaço entre letras; palavras distinguíveis. Definir o que se mede antes de virar CSS | Recomendação | Visual | Doc. 14 |
| ESP-07 | Coluna principal com 60 a 80 caracteres por linha | Alerta | Automático | Doc. 14 |
| ESP-08 | Em telas estreitas, a coluna se adapta e a leitura continua fluida | Alerta | Visual | Doc. 14 |
| ESP-09 e ESP-10 | Parágrafos separados por espaço vertical, com padrão consistente entre blocos de mesma função | Alerta | Automático | Doc. 14 |
| TIP-15 | Com três ou mais linhas, evitar entrelinha apertada, mesmo em áreas de altura limitada | Alerta | Visual | Typography |

### 5.3 Adaptação e responsividade

| ID | Regra | Severidade | Método | Origem |
|---|---|---|---|---|
| DES-10 | Conteúdo principal ajustado à largura disponível | Bloqueante | Visual | Doc. 14 |
| DES-11 | Leitura sem exigir ampliação manual | Bloqueante | Visual | Doc. 14 |
| DES-12 | Sem rolagem horizontal no texto principal | Bloqueante | Automático | Doc. 14 |
| LAY-04 | Decidir o layout pelo espaço disponível (largura e altura da janela), não pelo tipo de aparelho nem pela orientação | Alerta | Automático | Layout (classes de tamanho) |
| LAY-05 | Manter a mesma funcionalidade em qualquer tamanho; só muda a quantidade visível | Alerta | Visual | Layout |
| LAY-06 | Respeitar áreas seguras e margens; nada de controle ou informação crítica sob recortes e barras | Bloqueante | Visual | Layout |
| LAY-07 | Testar o menor e o maior layout, com tamanhos de texto e idiomas diferentes | Alerta | Visual | Layout |
| LAY-08 | Em texto ampliado, empilhar itens ao lado do texto e reduzir colunas | Alerta | Visual | Typography, Layout |

### 5.4 Botões e áreas de toque

| Plataforma | Tamanho padrão | Tamanho mínimo |
|---|---|---|
| iOS, iPadOS | 44 × 44 pt | 28 × 28 pt |
| macOS | 28 × 28 pt | 20 × 20 pt |

| ID | Regra | Severidade | Método | Origem |
|---|---|---|---|---|
| DES-13 | Área de toque de referência de 44 × 44 para botões, menus e outras ações | Bloqueante | Automático | Doc. 14, Accessibility |
| DES-14 | Medir a região que recebe o toque, não só o desenho do botão ou ícone | Bloqueante | Automático | Doc. 14 |
| TOQ-01 | Espaço entre controles: cerca de 12 pt em volta de elementos com contorno e 24 pt em elementos sem contorno | Alerta | Visual | Accessibility |
| TOQ-02 | Toda ação feita por gesto tem alternativa em botão | Bloqueante | Visual | Accessibility |
| TOQ-03 | No macOS, sem controle nem informação crítica na borda inferior da janela | Alerta | Visual | Layout |

Nota de conversão: o documento 14 pede para identificar plataforma e unidade antes de implementar na web. Esta versão trata 1 pt Apple como 1 px CSS, o que precisa ser confirmado na seção 9.

## 6. Escrita, copy e tom de voz

A voz é confiante e humana: frases curtas, verbos de ação e o benefício antes da especificação. Nos seus slides de referência, "Abra espaço." e "Siga o movimento." seguem esse padrão: dois a três termos, verbo no imperativo, uma ideia só.

### 6.1 Voz e tom

| ID | Regra | Severidade | Método | Origem |
|---|---|---|---|---|
| ESC-01 | Definir a voz (para quem se fala e que sensação se quer) e manter uma lista de termos comuns | Alerta | Editorial | Writing |
| ESC-02 | Ajustar o tom ao contexto: direto e sério em alerta; leve em conquista | Alerta | Editorial | Writing |
| DES-15 a DES-18 | Clareza, menos formalidade burocrática, menos ruído, linguagem inclusiva | Alerta | Editorial | Doc. 14 |
| VOZ-01 e VOZ-02 | Verbos ativos que indicam ação (Crie, Explore, Descubra, Transforme) | Recomendação | Editorial | Doc. 14 |
| VOZ-03 e VOZ-04 | Humor com moderação; a mensagem continua reconhecível | Alerta | Editorial | Doc. 14 |
| VOZ-05 a VOZ-07 | Valor dito com segurança, sem depender de comparação com concorrente; superlativo só se for verdadeiro e demonstrável | Bloqueante | Editorial | Doc. 14 |
| REV-01 a REV-03 | Uma rodada de corte (tentar reduzir à metade), revisar o que sobrou e conferir se o sentido permanece | Recomendação | Editorial | Doc. 14 |

Conflito entre humor e linguagem literal. Humor, metáfora e jogo de palavras valem só em chamadas expressivas (título, headline, copy). Instruções, rótulos, erros e texto de acessibilidade usam linguagem literal e direta (LEI-04 a LEI-07). O próprio documento 14 pede essa escolha por função.

### 6.2 Copy de impacto e página de produto

| Elemento | Regra | Função |
|---|---|---|
| Headline (PAG-01) | Frase curta, poética ou provocativa, sobre a principal inovação ou benefício | Prender a atenção |
| Subheadline (PAG-02) | Benefício real em uma ou duas frases | Estimular a continuidade |
| Corpo (PAG-03) | Blocos curtos, referência visual de duas a três linhas; dado técnico com dimensão humana | Explicar e responder a objeções |
| CTA (PAG-04) | Chamada direta, como "Comprar" ou "Saber mais", com poucas distrações | Facilitar o próximo passo |

PAG-05 mantém a sequência headline, subheadline, corpo e CTA como partes conectadas; PAG-06 permite avançar para a ação ou buscar mais informação.

| ID | Técnica | Observação |
|---|---|---|
| SIM-01 a SIM-03 | Traduzir característica em benefício; evitar especificação isolada | Exemplo do material: armazenamento em megabytes vira "1.000 músicas no seu bolso" |
| SIM-04 a SIM-08 | Trocar jargão por palavra conhecida; compreensão imediata | Nomes simples condensam conceitos técnicos |
| COP-01 e COP-02 | Regra dos três com paralelismo | Técnica de ritmo; não garante memória |
| COP-03 a COP-05 | Frases curtas; títulos de duas a quatro palavras em chamadas de impacto; uma ideia por chamada | Não impor esse tamanho a títulos editoriais |
| COP-06 e COP-07 | Antítese quando reforça uma característica real | Frases curtas ou segmentos paralelos |

### 6.3 Leitura fácil

| ID | Regra | Severidade | Método |
|---|---|---|---|
| LEI-01 a LEI-03 | Parágrafos curtos; listas para conjuntos; listas numeradas para etapas ordenadas | Alerta | Visual |
| LEI-04 a LEI-07 | Formulação literal; sem metáfora exagerada, ironia ou dupla negação quando a compreensão direta é prioridade | Alerta | Editorial |
| LEI-08 a LEI-10 | Voz ativa, frases curtas, ordem sujeito, verbo, objeto quando deixar a frase mais direta | Alerta | Editorial |

### 6.4 Interface e inclusão

| ID | Regra | Severidade | Método | Origem |
|---|---|---|---|---|
| ESC-03 | Rótulos de botão e link usam verbo e dizem o que fazem; "Enviar" vale mais que uma frase cativante; nunca "Clique aqui" | Bloqueante | Automático | Writing |
| ESC-04 | Escolher uma regra de capitalização por tipo de elemento e aplicá-la sempre | Alerta | Automático | Writing |
| ESC-05 | Em fluxos de vários passos, usar sempre os mesmos termos para começar, avançar e concluir | Alerta | Editorial | Writing |
| ESC-06 | Pronomes possessivos com moderação; evitar "nós" quando não está claro quem fala | Alerta | Editorial | Writing |
| ESC-07 | Erro perto do problema, sem culpa, dizendo como corrigir; sem "ops" | Alerta | Editorial | Writing |
| ESC-08 | Estado vazio com próximo passo e botão ou link | Alerta | Visual | Writing |
| ESC-09 | Descrever gestos conforme o aparelho: tocar no celular, clicar no computador | Alerta | Editorial | Writing |
| ESC-10 | Tratar a pessoa por "você"; evitar "o usuário" e termos de gênero desnecessários | Alerta | Editorial | Inclusion |
| ESC-11 | Definir termos técnicos antes de usar; trocar expressões coloquiais e específicas de uma cultura por linguagem simples | Alerta | Editorial | Inclusion |
| ESC-12 | Escrever sobre pessoas com deficiência em primeiro lugar pela pessoa, sem usar deficiência como imagem negativa | Alerta | Editorial | Inclusion |
| ESC-13 | Nenhum texto de preenchimento ("Lorem ipsum") em material publicado | Bloqueante | Automático | Proposta |

Nota: ESC-13 vem das suas peças de referência, que ainda carregam "Lorem ipsum" no corpo.

### 6.5 Consistência editorial e localização

| ID | Regra | Severidade | Método |
|---|---|---|---|
| EST-01 a EST-03 | Mesmas convenções de escrita, termos e nomes de produto; guia consultado antes de produzir | Alerta | Editorial |
| EST-04 | Registrar exceções às referências editoriais | Alerta | Editorial |
| EST-05 | Consultar convenções do idioma e da região para conteúdo localizado | Alerta | Editorial |
| EST-06 e EST-07 | Separar o que é regra editorial do que é regra de interface; identificar o contexto de regras suplementares | Alerta | Editorial |

As convenções de hifenização e de dicionário citadas no documento 14 valem para inglês americano; em português, consulte a referência equivalente do idioma.

## 7. Acessibilidade, movimento, imagens e localização

Uma interface acessível é intuitiva, perceptível por mais de um canal e adaptável às preferências da pessoa. Estas regras valem para qualquer peça publicada.

### 7.1 Acessibilidade e inclusão

| ID | Regra | Severidade | Método | Origem |
|---|---|---|---|---|
| ACE-01 | Ampliar o texto em pelo menos 200% sem perder conteúdo (ver TIP-11) | Bloqueante | Visual | Accessibility |
| ACE-02 | Toda imagem com informação tem descrição para leitor de tela; imagem decorativa é marcada como tal | Bloqueante | Automático | Accessibility (VoiceOver) |
| ACE-03 | Vídeo e áudio com legenda; mídia longa com transcrição; conteúdo só visual relevante com audiodescrição | Bloqueante | Editorial | Accessibility |
| ACE-04 | Toda função operável só com teclado, na ordem de leitura, com foco visível; sem sobrescrever atalhos do sistema | Bloqueante | Automático | Accessibility |
| ACE-05 | Elementos de interface com rótulo claro, para leitor de tela e controle por voz | Bloqueante | Automático | Accessibility |
| ACE-06 | Sem elementos que somem sozinhos por tempo; fechar por ação explícita | Alerta | Visual | Accessibility |
| ACE-07 | Sem áudio ou vídeo com autoplay sem controle visível para iniciar e parar | Bloqueante | Automático | Accessibility |
| ACE-08 | Sem flashes rápidos e intensos; respeitar a preferência de reduzir flashes | Bloqueante | Visual | Accessibility |
| ACE-09 | Fluxos longos divididos em uma interação por tela; confirmar duas vezes ações difíceis de desfazer | Recomendação | Editorial | Accessibility (Assistive Access) |
| INC-01 | Retratar variedade de pessoas, idades, corpos e capacidades; evitar estereótipos de profissão, família e gênero | Alerta | Editorial | Inclusion |
| INC-02 | Sem referência a gênero quando desnecessária; ícones de pessoa genéricos e sem gênero | Alerta | Editorial | Inclusion |
| INC-03 | Cenário e objetos familiares à maioria; evitar sinais de riqueza que afastam | Recomendação | Editorial | Inclusion |

### 7.2 Movimento

| ID | Regra | Severidade | Método | Origem |
|---|---|---|---|---|
| MOV-01 | Movimento só com propósito: apoia a experiência, não compete com ela | Alerta | Editorial | Motion |
| MOV-02 | Movimento nunca é o único meio de informar; complementar com texto, som ou outro sinal | Bloqueante | Editorial | Motion |
| MOV-03 | Animações de feedback curtas e precisas; sem animação em interações muito frequentes | Alerta | Visual | Motion |
| MOV-04 | A pessoa pode cancelar ou pular uma animação sem esperar | Alerta | Visual | Motion |
| MOV-05 | Com "reduzir movimento" ativo, trocar zoom, escala e transições por esmaecimento e cortar animações repetitivas | Bloqueante | Automático | Accessibility |

### 7.3 Imagens e modo escuro

| ID | Regra | Severidade | Método | Origem |
|---|---|---|---|---|
| IMG-01 | Raster em alta resolução: @2x e @3x para iOS; @1x e @2x para macOS; desenhar na menor resolução e escalar | Bloqueante | Automático | Images |
| IMG-02 | Formatos: PNG sem entrelaçamento para raster; JPEG ou HEIC para fotos; SVG ou PDF para ícones e arte plana | Alerta | Automático | Images |
| IMG-03 | Perfil de cor embutido em cada imagem; sRGB como base, Display P3 quando houver cor ampla | Bloqueante | Automático | Images, Color |
| IMG-04 | Testar imagens em aparelhos reais: nada pixelado, esticado ou comprimido | Alerta | Visual | Images |
| IMG-05 | Imagem de fundo escalada para preencher a tela, sem mudar a proporção | Alerta | Visual | Layout |
| COR-11 | A aparência escura segue a preferência do sistema; sem seletor de aparência próprio | Alerta | Automático | Dark Mode |
| COR-12 | Testar claro e escuro, com contraste aumentado e transparência reduzida; contraste mínimo 4,5:1 em ambos | Bloqueante | Visual | Dark Mode, Color |
| COR-13 | Ilustração e ícone com variante para fundo escuro quando perder contraste | Alerta | Visual | Dark Mode |
| COR-14 | Aparência escura única só em peça de mídia imersiva, onde a interface recua; os slides de fundo escuro entram nesta exceção | Recomendação | Editorial | Dark Mode (exceção) |

Se a imagem for recortada sobre fundo transparente, confirme que a transparência foi preservada. Na foto da pista de atletismo enviada, a área superior esquerda é branca opaca e viraria um bloco branco sobre fundo escuro.

### 7.4 Direita para a esquerda (condicional)

Estas regras só se ativam quando houver idioma como árabe ou hebraico. O blog atual está em português do Brasil.

| ID | Regra | Severidade | Método |
|---|---|---|---|
| RTL-01 | Espelhar o layout e alinhar o texto ao sentido do idioma; parágrafo de três ou mais linhas alinha pelo idioma do próprio texto | Bloqueante | Visual |
| RTL-02 | Nunca inverter a ordem dos dígitos de um número; inverter só a sequência de numerais que indica progresso ou contagem | Bloqueante | Visual |
| RTL-03 | Espelhar controles de progresso e de navegação (voltar, avançar); manter setas que apontam direção real | Alerta | Visual |
| RTL-04 | Não espelhar fotos, ilustrações, logotipos nem símbolos universais; inverter a ordem de imagens quando a sequência importa | Bloqueante | Visual |
| RTL-05 | Ao lado de latim em caixa-alta, aumentar a fonte árabe ou hebraica em cerca de 2 pt | Recomendação | Visual |

O documento 3 (Spatial layout) trata só do visionOS e fica como referência, sem regras aplicáveis ao blog.

## 8. Registro de regras verificáveis

Uma guideline só protege quando cada exigência vira critério de aceitação com evidência. Esta seção define o formato do registro e lista as regras que um script consegue testar. O script garante as condições testadas, nada além disso: clareza, tom e adequação das fontes seguem como julgamento editorial.

### 8.1 Formato de cada regra

| Campo | Conteúdo |
|---|---|
| id | Código único (COR-03, ESP-01) |
| versao | Versão da regra |
| descricao | O que deve acontecer, em uma frase |
| aplica_a | Formato: artigo_html, carrossel, página de produto |
| severidade | bloqueante, alerta ou recomendação |
| verificacao | Tipo (automática, visual, editorial), seletor, medida e tolerância |
| excecoes | Lista; vazia quando não há |
| evidencia | O que prova o resultado: medida, captura de tela, parecer |
| se_falhar | Ação: bloquear, justificar ou orientar |

Exemplo de regra automática, ilustrativo e escrito no formato proposto:

```yaml
id: COR-03
versao: "1.0"
descricao: "Texto com contraste mínimo contra o fundo real."
aplica_a: [artigo_html, carrossel]
severidade: bloqueante
verificacao:
  tipo: automatica
  alvo: "cada nó de texto renderizado"
  medida: "razão de contraste WCAG entre cor do texto e fundo"
  criterio:
    - "texto normal: >= 4.5"
    - "texto grande (18 ou mais) ou negrito: >= 3.0"
excecoes: ["texto decorativo marcado como tal"]
evidencia: "lista de nós com razão medida"
se_falhar: bloquear
```

### 8.2 Regras que um script consegue testar

| ID | O que medir | Critério |
|---|---|---|
| COR-03 | Contraste de cada texto contra o fundo | ≥ 4,5:1; ≥ 3:1 para texto grande ou em negrito |
| COR-06, COR-07 | Cores fora dos tokens do sistema | Zero valores hexadecimais soltos |
| COR-08 | Verde e azul-quadra como cor de texto em fundo claro | Zero ocorrências |
| DES-06, TIP-03 | Tamanho da fonte do corpo | ≥ 12 px; 11 px só em legenda e aviso legal (a confirmar na seção 9) |
| DES-02 | Tamanhos distintos de título, subtítulo e corpo | Três valores diferentes e ordenados |
| TIP-05, TIP-06 | Itálico e sublinhado no corpo | Zero fora de links |
| TIP-08 | Peso da fonte | ≥ 400 |
| TIP-10 | Famílias de fonte por página | ≤ 2 |
| ESP-01 | Entrelinha do corpo | Entre 1,4 e 1,6 |
| ESP-03, ESP-04 | Alinhamento do texto corrido | Esquerda; nunca justificado |
| ESP-07 | Caracteres por linha na coluna principal | 60 a 80 |
| DES-12 | Largura do conteúdo contra a janela | Sem rolagem horizontal nas larguras testadas (proposta: 320, 390, 768, 1280 px) |
| DES-13, DES-14 | Área acionável de cada botão e menu | ≥ 44 × 44 px; links dentro de texto corrido ficam fora |
| ESC-03 | Rótulos de link e botão | Sem "clique aqui" e equivalentes |
| ESC-13 | Texto de preenchimento | Zero "lorem ipsum" |
| ACE-02 | Atributo de descrição em cada imagem | Presente (vazio só para decorativa) |
| ACE-07 | Mídia com autoplay | Zero sem controle |
| MOV-05 | Regra de reduzir movimento no CSS | Presente quando há animação |
| IMG-03 | Perfil de cor da imagem | Embutido |

Tudo o que depende de julgamento (VOZ-05 a VOZ-07, SIM, COP, LEI, ESC-02, ESC-07, INC) é avaliado por IA ou pessoa, com parecer escrito, justificativa e evidência. Esse parecer é uma avaliação, não uma medida.

### 8.3 Testes dos próprios validadores

Cada regra automática mantém no mínimo três casos de teste:

- Um exemplo que deve passar.
- Um exemplo que deve falhar.
- Um caso de limite. Para COR-03: 4,50:1 passa e 4,49:1 falha. Para ESP-01: 1,40 e 1,60 passam; 1,39 e 1,61 falham.
Isso reduz o risco de o script aprovar algo por erro de implementação. Os valores de contraste das seções 3.1 e 3.2 foram calculados com a fórmula de luminância relativa do WCAG.

## 9. Validação, relatório e decisões pendentes

Nenhuma peça sai sem relatório de conformidade ligado à versão final do arquivo. Há 10 decisões abertas antes de a versão 1.0 valer como padrão.

### 9.1 Fluxo com bloqueios

- Carregar a versão das diretrizes e o template do formato.
- Produzir o conteúdo em estrutura definida.
- Rodar os validadores automáticos (seção 8.2).
- Corrigir as falhas e repetir só as verificações afetadas.
- Renderizar e inspecionar as regras visuais nas larguras e nos modos claro e escuro.
- Registrar o parecer editorial das regras de julgamento.
- Emitir o relatório com o hash do arquivo validado.
Se o conteúdo mudar depois, a aprovação anterior deixa de valer para a nova versão. Uma média alta não compensa uma falha bloqueante.

### 9.2 Relatório

| Resultado | Quando |
|---|---|
| Aprovado | Regra testada e atendida, com evidência |
| Reprovado | Regra testada e não atendida |
| Pendente | Teste obrigatório não executado |
| Não aplicável | Regra fora do formato (ex.: RTL em artigo em português) |

Cada linha traz ID da regra, resultado, evidência (medida, captura ou parecer), versão das diretrizes e hash do arquivo.

### 9.3 Decisões pendentes

| # | Decisão | Opções | Proposta desta versão |
|---|---|---|---|
| 1 | Tamanho do corpo no blog | 11 pt (DES-06), 12 a 14 pt (TIP-03) ou 17 pt (padrão Apple) | 17 px em leitura longa; mínimo 12 px; 11 px só em legenda e aviso legal |
| 2 | Conversão de pontos Apple para a web | 1 pt = 1 px CSS ou outra relação | 1 pt = 1 px CSS |
| 3 | Valores das cores de marca | Amostragem atual ou paleta oficial da marca | Usar os valores amostrados até haver paleta oficial |
| 4 | Variante escura do roxo e do azul-pista | Definir e recalcular o contraste sobre #1D1D1F | Escolher um tom mais claro com ≥ 4,5:1 |
| 5 | Fonte principal | Pilha do sistema (SF Pro), Lexend ou outra sans-serif da lista TIP-01 | Pilha do sistema, com Lexend como opção |
| 6 | Limite de famílias de fonte | Duas ou outro número | Duas |
| 7 | Proporção 3,5 entre espaço de palavras e de letras (ESP-05) | Medir em CSS ou tratar só como conferência visual | Conferência visual |
| 8 | Larguras de teste responsivo | 320, 390, 768, 1280 px ou outras | Essas quatro |
| 9 | Correções nas peças de referência | Trocar o cinza do subtítulo do slide 07, remover "Lorem ipsum", tratar a área branca da foto da pista | Aplicar antes de publicar |
| 10 | Escopo do piloto | Um formato, um template e 10 a 20 regras | Artigo HTML, com as regras de contraste, tamanho, entrelinha, largura de linha, alinhamento, toque, imagem e texto de preenchimento |

### 9.4 Próximo passo

Escolher o piloto (decisão 10), escrever os casos de teste do COR-03 e do ESP-01 e rodar o primeiro relatório sobre um artigo real. Depois, ampliar para carrossel e página de produto.

