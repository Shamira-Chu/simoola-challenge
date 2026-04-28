# Auditoria UX/UI — Simoola
Diagnóstico de design do simulador de atendimento da Scooto, em sua versão atual (build sem refinamento de UX/UI).

**Severidade**
🔴 Crítico — compromete a experiência, gera erro do usuário ou quebra a confiança no produto.
🟡 Importante — adiciona fricção, inconsistência ou ruído de marca.
🟢 Polimento — refinamento fino de acabamento.

## Sumário
1. Primeira impressão
2. Sistema visual atual
3. Auditoria por tela
4. Análise dos fluxos
5. Estados de erro
6. Personas
7. Acessibilidade percebida
8. Benchmarks
9. Relatório executivo
10. Estrutura narrativa para o Challenge FIAP

---

## 1. Primeira impressão

O Simoola hoje **não parece um produto da Scooto** — parece um painel administrativo genérico. A interface comunica "ferramenta interna feita às pressas", não "experiência avaliativa séria de uma empresa de atendimento ao cliente".

A sensação geral é de protótipo: sidebar escura padronizada, conteúdo branco, KPIs grandes que gritam todos no mesmo volume, ausência de qualquer elemento de marca (logo, cor de acento, ilustração, voz). A interface é neutra ao ponto de ser invisível — não tem personalidade, não tem aconchego, não tem rigor.

Para o **candidato**, parece um teste técnico qualquer. Não cria a sensação de "estou sendo avaliado pela Scooto numa simulação real de atendimento".

Para o **RH**, parece uma planilha glorificada. Não cria a sensação de "esta é minha ferramenta de trabalho diária para tomar decisões sobre pessoas".

Falta personalidade, falta hierarquia narrativa e falta tom. O produto cumpre a função, mas não comunica valor.

---

## 2. Sistema visual atual

**Paleta:** preto-azulado + cinza claro + branco + vermelho (apenas em ações destrutivas). Sem cor de marca, sem cor de acento, sem cor com função semântica (ex.: verde para sucesso, amarelo para atenção). A única cor "com voz" é o vermelho de erro.

**Tipografia:** uma única família neutra, sem hierarquia tonal clara. Títulos, números de KPI e rótulos competem entre si com pesos parecidos. A diferença entre "informação importante" e "metadado de apoio" não é evidente à primeira vista.

**Botões:** quatro variações disponíveis (cheio, contornado, fantasma, destrutivo), mas usadas de forma intercambiável. A mesma ação ("Salvar", "Criar") aparece com ênfases diferentes em telas diferentes — o usuário não consegue construir um modelo mental do que é "ação principal".

**Ícones:** estilo linha, decorativos, sem container, sem cor própria, sem padronização de tamanho. Soltos no canto dos cards, perdem função sígnica e viram ornamento.

**Ilustrações:** nenhuma. Não há imagem, ilustração de marca ou empty state visual em nenhuma tela. Onde não há dado, há texto cinza.

**Voz / nomenclatura:** mistura inconsistente de português e inglês. A mesma entidade aparece como "Simoolador", "Scenario", "Cenário" e "Teste". Papéis aparecem como "Treinando", "Candidato" e "Usuário". Não há um glossário de produto.

**Resumo:** existe um conjunto de elementos visuais, mas não existe um sistema. Cada tela parece ter sido decidida isoladamente.

---

## 3. Auditoria por tela

### Tela 1 — Dashboard (admin)
**Função pretendida:** dar ao admin uma leitura rápida do estado da operação.
**Função entregue:** mostra números, mas não responde "o que preciso fazer agora?".

| # | Categoria | Severidade | Diagnóstico |
|---|---|---|---|
| 1.1 | Hierarquia | 🔴 | Quatro KPIs visualmente idênticos, sem destaque para o mais relevante. Nada chama atenção, então nada vira ação. |
| 1.2 | Tipografia | 🟡 | Título da página e número do KPI competem em tamanho e peso, achatando a hierarquia. |
| 1.3 | Cores | 🟢 | KPIs sem cor semântica — uma taxa de aprovação de 30% e de 90% têm a mesma aparência neutra. |
| 1.4 | Espaçamento | 🟡 | Cards "colam" entre si por falta de respiro; perdem identidade individual. |
| 1.5 | Microinterações | 🟢 | Cards parecem clicáveis, mas não respondem ao mouse — promessa visual quebrada. |
| 1.6 | Fluxo | 🔴 | Tela de chegada sem CTA. O admin entra, lê números e fica sem caminho seguinte. |

### Tela 2 — Projetos
**Função pretendida:** organizar projetos/turmas. **Função entregue:** lista funcional, sem hierarquia de status.

| # | Categoria | Severidade | Diagnóstico |
|---|---|---|---|
| 2.1 | Hierarquia | 🟡 | "Novo projeto" tem o mesmo peso visual da busca. CTA primário deveria dominar. |
| 2.2 | Tipografia | 🟢 | Nome do projeto e descrição quase idênticos — difícil escanear. |
| 2.3 | Cores | 🟡 | Status (ativo/encerrado/rascunho) sem cor de identificação. |
| 2.4 | Componentes | 🟡 | Item de lista com comportamento de clique inconsistente em relação ao resto do produto. |
| 2.5 | Microinterações | 🟡 | Editar e deletar não geram feedback visível de confirmação. |
| 2.6 | Fluxo | 🟡 | Sem empty state — primeiro acesso fica vazio, sem guia. |

### Tela 3 — Agentes
**Função pretendida:** configurar perfis de IA que farão o papel de cliente. **Função entregue:** funciona, mas o conceito "agente" não é explicado em lugar nenhum.

| # | Categoria | Severidade | Diagnóstico |
|---|---|---|---|
| 3.1 | Hierarquia | 🟡 | Agentes sem avatar/imagem identificadora — todos visualmente iguais. |
| 3.2 | Cores | 🟡 | Texto descritivo cinza-claro sobre branco no limite mínimo de leitura. |
| 3.3 | Componentes | 🔴 | "Criar" abre uma janela modal; "Editar" muda de tela. Mesma família de ação, padrões de interação diferentes. |
| 3.4 | Microinterações | 🟡 | Salvar fecha o modal sem confirmação visível — usuário fica em dúvida se foi realmente salvo. |
| 3.5 | Fluxo | 🔴 | A relação entre "Agente" e "Simoolador" não é evidente. O admin cria um agente, mas não sabe se/como ele será usado. |

### Tela 4 — Simooladores (cenários)
**Função pretendida:** listar cenários de simulação. **Função entregue:** lista, mas a nomenclatura é caótica.

| # | Categoria | Severidade | Diagnóstico |
|---|---|---|---|
| 4.1 | Consistência | 🔴 | Mesma entidade chamada de quatro nomes diferentes pelo produto. Quebra modelo mental. |
| 4.2 | Hierarquia | 🟡 | Sem distinção visual entre rascunho, publicado e arquivado. |
| 4.3 | Tipografia | 🟢 | Título de cenário com peso semelhante ao de uma legenda. |
| 4.4 | Fluxo | 🔴 | Sem preview do briefing antes de "Testar" — admin é obrigado a rodar a simulação inteira para revisar. |
| 4.5 | Microinterações | 🟡 | "Testar" não dá indicação visual de carregamento; usuário pensa que travou. |

### Tela 5 — Usuários
**Função pretendida:** gerenciar pessoas. **Função entregue:** lista densa e operacionalmente fraca.

| # | Categoria | Severidade | Diagnóstico |
|---|---|---|---|
| 5.1 | Hierarquia | 🟡 | Sem agrupamento por papel; admin filtra manualmente. |
| 5.2 | Cores | 🟡 | Papéis (Admin/Treinando/Candidato) sem identificação visual distintiva. |
| 5.3 | Componentes | 🟡 | Cabeçalho da tabela some no rolar — em listas longas, perde-se a referência. |
| 5.4 | Fluxo | 🔴 | Sem ações em massa. Convidar 30 candidatos é o caso de uso #1 do RH e exige um por um. |
| 5.5 | Microinterações | 🟡 | Deletar usuário sem confirmação dupla — risco real de perda acidental. |

### Tela 6 — Monitoria
**Função pretendida:** acompanhar simulações ao vivo. **Função entregue:** lista que não dá sensação de tempo real.

| # | Categoria | Severidade | Diagnóstico |
|---|---|---|---|
| 6.1 | Hierarquia | 🔴 | Sessões ativas e encerradas misturadas, sem separação visual clara. |
| 6.2 | Cores | 🟡 | "Ao vivo" sem ponto pulsante / cor que comunique presença. |
| 6.3 | Microinterações | 🔴 | Sem auto-atualização e sem marcador de "atualizado há X segundos". O coordenador não sabe se está vendo dado fresco. |
| 6.4 | Fluxo | 🔴 | "Visualizar" leva a uma tela parecida, mas estática. A promessa de monitoria ao vivo não é entregue. |

### Tela 7 — Configurações
**Função pretendida:** ajustes da conta/instância. **Função entregue:** lista plana, sem hierarquia.

| # | Categoria | Severidade | Diagnóstico |
|---|---|---|---|
| 7.1 | Hierarquia | 🟡 | Sem agrupamento por tema (Conta / Notificações / Integrações / Faturamento). |
| 7.2 | Componentes | 🟡 | Tudo em uma página única, sem navegação interna. |
| 7.3 | Fluxo | 🔴 | Itens do menu como "Hub CAJ" e "Integrações" levam silenciosamente para o dashboard — links mortos sem aviso. Usuário acha que clicou errado. |
| 7.4 | Microinterações | 🟡 | Sem feedback de "Configurações salvas". |

### Tela 8 — Área do Treinando
**Função pretendida:** ser a casa do candidato/treinando. **Função entregue:** parece um admin pequeno, não uma jornada.

| # | Categoria | Severidade | Diagnóstico |
|---|---|---|---|
| 8.1 | Hierarquia | 🔴 | Mesma estrutura do dashboard admin. Para o candidato, KPIs frios não são o ponto — o ponto é "qual é minha próxima ação". |
| 8.2 | Voz | 🔴 | Sem saudação, sem progresso, sem etapa atual. A tela parece um relatório, não uma jornada. |
| 8.3 | Componentes | 🟡 | "Próxima simulação" tem o mesmo peso de "Histórico". O agora deveria ser hero. |
| 8.4 | Cores | 🟡 | Nenhum sinal visual celebrando conclusão ou progresso. |
| 8.5 | Fluxo | 🔴 | Sem indicação de "etapa X de Y" no processo seletivo — o candidato não sabe onde está na trilha. |
| 8.6 | Microinterações | 🟡 | Conclusão de simulação sem celebração nem feedback positivo. |

### Tela 9 — Briefing pré-simulação
**Função pretendida:** preparar o candidato para a prova. **Função entregue:** o momento mais sensível do produto, mal resolvido.

| # | Categoria | Severidade | Diagnóstico |
|---|---|---|---|
| 9.1 | Hierarquia | 🔴 | Briefing em parágrafo corrido, sem destaque para objetivo, regras, tempo e critérios de avaliação. Tudo é texto. |
| 9.2 | Tipografia | 🔴 | Texto pequeno em bloco longo — desconfortável para leitura cuidadosa, especialmente para idades acima de 40. |
| 9.3 | Componentes | 🟡 | Sem checklist do tipo "li e entendi". O botão "Iniciar" fica disponível instantaneamente. |
| 9.4 | Microinterações | 🔴 | Sem contagem regressiva e sem aviso "ao iniciar você não pode voltar". |
| 9.5 | Fluxo | 🔴 | Candidato entra na simulação sem saber quanto tempo terá, quantas conversas simultâneas, nem como será avaliado. É o equivalente a uma prova sem enunciado. |

### Tela 10 — Simulação multi-chat
**Função pretendida:** o coração do produto — atender múltiplos clientes em paralelo. **Função entregue:** três chats genéricos lado a lado.

| # | Categoria | Severidade | Diagnóstico |
|---|---|---|---|
| 10.1 | Hierarquia | 🔴 | As três conversas têm o mesmo peso visual. Nada indica "este cliente espera há mais tempo" — exatamente a competência que se quer avaliar. |
| 10.2 | Cores | 🔴 | As bolhas do "cliente" e do "atendente" estão em tons de cinza muito próximos. Difícil distinguir rapidamente quem disse o quê. |
| 10.3 | Tipografia | 🟡 | Marcadores de tempo quase invisíveis. |
| 10.4 | Microinterações | 🔴 | Sem "cliente digitando…", sem badge de mensagem nova nas outras abas, sem som. Multi-chat sem sinais é multi-chat cego. |
| 10.5 | Microinterações | 🟡 | Botão de envio sem estado de carregamento — clique duplo manda duas vezes. |
| 10.6 | Fluxo | 🔴 | Sem cronômetro e sem "conversas restantes". Candidato não sabe quanto falta. |
| 10.7 | Fluxo | 🟡 | Encerrar conversa sem confirmação — clique acidental encerra. |
| 10.8 | Comportamento | 🔴 | Falha de comunicação com servidor capturada em runtime: aparece um alerta efêmero e a simulação continua em estado ambíguo, sem retry, sem orientação. Risco real de injustiça avaliativa. |

### Tela 11 — Resultados
**Função pretendida:** entregar a avaliação. **Função entregue:** mostra dados, não conta uma história.

| # | Categoria | Severidade | Diagnóstico |
|---|---|---|---|
| 11.1 | Hierarquia | 🔴 | Métricas listadas em sequência, sem destaque para o que mais importa (nota geral / recomendação). |
| 11.2 | Cores | 🔴 | Nota em texto neutro, sem cor semântica (verde/amarelo/vermelho). RH precisa interpretar manualmente. |
| 11.3 | Componentes | 🟡 | Sem visualização gráfica (barras, radar, evolução) — só números soltos. |
| 11.4 | Fluxo | 🔴 | Sem exportação, sem link compartilhável, sem comentário do avaliador. RH é forçado a printar a tela. |
| 11.5 | Fluxo | 🟡 | Sem link da nota para a transcrição da conversa correspondente. |

### Tela 12 — Criar Simoolador
**Função pretendida:** configurar um novo cenário. **Função entregue:** formulário longo e frágil.

| # | Categoria | Severidade | Diagnóstico |
|---|---|---|---|
| 12.1 | Hierarquia | 🟡 | Formulário em página única, sem etapas nem agrupamento por seção. |
| 12.2 | Tipografia | 🟢 | Textos de ajuda quase ilegíveis pelo tamanho. |
| 12.3 | Microinterações | 🔴 | Validação só ao tentar salvar; mensagens genéricas do navegador, em vez de orientação amigável e contextual. |
| 12.4 | Fluxo | 🔴 | Sem preview, sem rascunho, sem auto-save. Queda de conexão = perde tudo. |

### Tela 13 — Relatórios e Ranking
**Função pretendida:** visão analítica e ranqueamento. **Função entregue:** cobertura mínima.

| # | Categoria | Severidade | Diagnóstico |
|---|---|---|---|
| 13.1 | Hierarquia | 🟡 | "Visão geral" e "Ranking" são abas isoladas, sem leitura cruzada. |
| 13.2 | Cores | 🟡 | Sem destaque para top 3 (sem ouro/prata/bronze, sem barra de progresso). |
| 13.3 | Fluxo | 🔴 | Sem filtros por projeto, cenário ou data. A partir de algumas centenas de candidatos vira inutilizável. |
| 13.4 | Fluxo | 🔴 | Sem exportação e sem atalho da posição do ranking para o resultado individual. |

---

## 4. Análise dos fluxos completos

### Fluxo A — Candidato realiza simulação
*Login → Área do treinando → Iniciar → Briefing → Simulação multi-chat → Encerrar → Resultados.*
1. 🔴 **Briefing sem enunciado real.** O candidato entra sem saber tempo, número de conversas e critérios.
2. 🔴 **Multi-chat sem pistas de prioridade.** O que se quer avaliar (gestão de fila) é justamente o que a interface não comunica.
3. 🔴 **Erros de servidor sem rede de segurança.** Falhas técnicas contaminam a avaliação do candidato.

### Fluxo B — Admin cria cenário e testa
*Simooladores → Criar → preencher → Salvar → Testar → Briefing → rodar → Resultados.*
1. 🔴 **Sem preview** — única forma de validar é rodar a simulação inteira.
2. 🔴 **Sem rascunho/auto-save** num formulário longo.
3. 🟡 **Caminho com nomenclatura instável** ("Simoolador" → "Scenario" → "Cenário" → "Teste").

### Fluxo C — Avaliar resultados (RH/coordenador)
*Monitoria → escolher sessão → Resultados → Ranking.*
1. 🔴 **Monitoria não entrega tempo real.** Sem auto-atualização, sem indicador "ao vivo".
2. 🔴 **Resultados sem export e sem cor semântica.** Força o RH a workflows fora da plataforma (print, planilha).
3. 🟡 **Ranking sem filtros e sem deep link** para o resultado individual.

### Fluxo D — Gerenciar usuários
*Usuários → buscar → editar/deletar/criar.*
1. 🔴 **Sem ações em massa** — operação número 1 do RH em processo seletivo.
2. 🟡 **Deletar sem confirmação dupla** — risco real de perda.
3. 🟡 **Tabela sem ordenação visível e sem cabeçalho fixo** em listas longas.

---

## 5. Estados de erro

- **Formulário de criação:** validação só do navegador, em texto genérico ("Preencha este campo"). Sem ícone, sem orientação de correção, sem tom amigável. 🔴
- **Simulação:** alerta capturado em uso real — "Erro no multi-chat / Falha na comunicação com o servidor" — surge por poucos segundos e desaparece. Sem botão de tentar novamente, sem instrução, sem persistência. O candidato fica num estado ambíguo. 🔴
- **Rotas inexistentes do menu lateral:** redirecionam silenciosamente para o dashboard. Sem 404, sem aviso. Usuário pensa que clicou errado. 🔴
- **Ausências do produto:** empty states ilustrados, página 404 dedicada, mensagem de offline, retry em ações críticas, comunicação amigável de falha.

---

## 6. Personas

### Candidato 45 anos, baixa familiaridade com tecnologia
- 🔴 Texto pequeno em briefing longo cansa e gera ansiedade.
- 🔴 Multi-chat sem pistas visuais sobrecarrega cognitivamente.
- 🔴 Sem indicação de "etapa X de Y" — não sabe quanto falta.
- 🟡 Botões de "encerrar conversa" e "encerrar simulação" muito próximos.
- 🟡 Mensagens de erro genéricas assustam.
- 🟢 Sem onboarding/tour. Primeira vez = se virar.

### RH/avaliador usando 50x por semana
- 🔴 Sem ações em massa — convidar candidatos é manual.
- 🔴 Sem exportação de resultados/ranking — força print de tela.
- 🔴 Monitoria não entrega tempo real — não dá para acompanhar lote em andamento.
- 🟡 Sem filtros salvos / visualizações pré-configuradas.
- 🟡 Sem comentário do avaliador no resultado — feedback fica fora da plataforma.

---

## 7. Acessibilidade percebida

- 🔴 **Contraste baixo** em textos auxiliares cinza claro sobre fundos cinza claro — falha em condições reais de leitura (ambiente claro, monitores baixa qualidade, vista cansada).
- 🔴 **Cor como único indicador** de status (erro em vermelho, por exemplo) sem ícone ou rótulo de apoio.
- 🔴 **Mensagens novas no chat sem anúncio** para usuários com leitor de tela — quem usa tecnologia assistiva não percebe a chegada de mensagem.
- 🟡 **Alvos de toque pequenos** (botões e ícones de ação na tabela) — desconfortáveis em mobile e para motricidade reduzida.
- 🟡 **Foco do teclado pouco visível** em vários elementos. Usuário que navega sem mouse se perde.
- 🟡 **Ações ocultas até passar o mouse** (editar/deletar) — invisíveis para teclado e toque.
- 🟡 **Mensagens de erro não associadas ao campo** — leitor de tela não conecta erro à pergunta.

---

## 8. Benchmarks

### SaaS de atendimento (Intercom, Zendesk, Freshdesk, Front)
Todos têm cara de "centro de operações": fila com prioridade, indicador "ao vivo", densidade de informação calibrada para uso prolongado, atalhos de teclado, status em tempo real. Simoola usa o mesmo arquétipo de chat genérico — perde a metáfora operacional.

### E-learning gamificado (Duolingo, simuladores corporativos)
Trilha visível, progresso, conquistas, celebração ao concluir, tom amigável, ilustrações. Simoola não tem nenhum desses sinais — a jornada do candidato é fria e linear.

### Conclusão
Simoola está num "vale do meio": não é operacional o suficiente para parecer Zendesk, nem afetivo o suficiente para parecer Duolingo. A direção sugerida é combinar **base operacional (estilo Front/Zendesk) com camada de jornada (estilo Duolingo)** — operacional para o RH, acolhedor para o candidato.

---

## 9. Relatório executivo

### 9.1 Top 5 problemas mais críticos
1. 🔴 **Briefing sem enunciado.** O momento mais sensível da experiência do candidato não comunica regras nem critérios. Risco direto de injustiça avaliativa.
2. 🔴 **Multi-chat sem pistas de prioridade.** A funcionalidade que define o produto está sem as pistas visuais que tornam a competência avaliável.
3. 🔴 **Erros sem rede de segurança.** Falhas técnicas contaminam a nota do candidato.
4. 🔴 **Resultados frios e sem exportação.** Forçam o RH a operar fora da plataforma.
5. 🔴 **Ausência total de identidade Scooto/Simoola.** Sem cor, sem voz, sem ilustração — o produto não comunica de quem é nem para quê serve.

### 9.2 Temas recorrentes (aparecem em quase todas as telas)
- **Hierarquia plana:** tudo tem o mesmo peso visual; nada é destaque.
- **Falta de cor semântica:** o produto não usa cor para guiar leitura nem indicar estado.
- **Microinterações ausentes:** salvar, enviar, encerrar e errar acontecem sem feedback visível.
- **Nomenclatura instável:** a mesma entidade muda de nome entre telas.
- **Empty states e onboarding ausentes:** primeiro contato é vazio.
- **Sem export, sem ações em massa, sem filtros salvos:** o RH é tratado como usuário casual, não como operador diário.
- **Sem narrativa de jornada:** o candidato não sente que está num processo.

### 9.3 Proposta de direção visual e de UX

**Princípios de design**
1. **Avaliação justa por design.** Toda decisão de interface deve reduzir ambiguidade para o candidato (briefing claro, progresso visível, erros tratados com graça).
2. **Operacional para o RH.** Densidade calibrada, ações em massa, exportação, atalhos, dados em tempo real.
3. **Acolhedor para o candidato.** Tom humano, progresso celebrado, jornada contínua.
4. **Marca presente, não decorativa.** Cor, voz e ilustração sustentando a experiência, não apenas pintando a casca.
5. **Hierarquia antes de tudo.** Cada tela deve ter um foco visual primário, óbvio no primeiro segundo.

**Direção de paleta sugerida**
- **Cor primária Scooto/Simoola** (a ser definida com a marca) usada com parcimônia em CTAs, status "ao vivo" e ênfase de marca.
- **Cor de jornada/progresso** (verde calmo) para conclusões, sucesso, recomendação positiva.
- **Cor de atenção** (âmbar) para "esperando", "pendente", "atenção do avaliador".
- **Cor de risco** (vermelho atual mantido) só para erro real e ações destrutivas.
- **Neutros estendidos:** três níveis de cinza para fundo, conteúdo e texto auxiliar — com contraste mínimo de leitura confortável (não no limite da norma).
- **Modo dark opcional** para a tela de monitoria — coerente com sala de operação.

**Direção tipográfica**
- Uma família para títulos (com mais personalidade) e uma família neutra para corpo, com escala clara: hero, título de seção, corpo, legenda.
- Um único peso para corpo, dois para título. Diferença de hierarquia em **tamanho e cor**, não só em peso.

**Padrões de componente a estabelecer**
- **Card de KPI** com hero e suportes (foco em um KPI, demais como contexto).
- **Status pill** com cor + ícone + texto (nunca cor sozinha).
- **Empty state ilustrado** padrão para "sem dados", "primeira vez aqui" e "filtro vazio".
- **Toast persistente com retry** para erros de operação.
- **Banner de etapa** ("Você está na etapa 2 de 4") padrão para a área do treinando.

**Padrões de microinteração**
- Toda ação que altera dado precisa de feedback visível (toast, mudança de estado, animação curta).
- Ações destrutivas pedem confirmação dupla.
- Botões de envio/salvar mostram estado de carregamento.
- Mensagens novas no chat anunciam-se com som curto opcional, badge na aba e indicador "cliente digitando…".
- Sucesso (concluir simulação, enviar feedback, salvar cenário) é celebrado, não só registrado.

**Direção de voz**
- Português único e consistente ("Cenário", "Treinando", "Avaliador") — eliminar mistura PT/EN.
- Tom direto e respeitoso para o RH (ferramenta de trabalho).
- Tom acolhedor e estimulante para o candidato (jornada de aprendizado e prova).
- Mensagens de erro sempre dizem **o que aconteceu**, **o que fazer agora** e **com tom humano** (nunca "Erro 500" ou "Preencha este campo").

**Direção de jornada (área do treinando)**
- Banner de etapa fixo no topo: "Etapa 2 de 4 — Simulação de atendimento".
- Card-hero da próxima ação com CTA único e visível.
- Histórico em segundo plano, como apoio, não como protagonista.
- Conclusão de cada etapa com tela de "parabéns" curta e tom humano.

---

## 10. Estrutura narrativa — Challenge FIAP

### 10.1 Problema central
> A Scooto contrata e treina pessoas com base em uma simulação de atendimento. Hoje, a interface dessa simulação é tão genérica e instável que **contamina a própria avaliação**: o candidato erra por culpa da interface, o RH decide com dado fragmentado e nenhum dos dois sente que está num produto da Scooto.

Ou seja: o Simoola compromete simultaneamente a **justiça da avaliação**, a **eficiência operacional do RH** e a **percepção de marca da Scooto**.

### 10.2 Hipótese de solução
> Reposicionar o Simoola como uma **ferramenta de avaliação justa por design**, com identidade Scooto, jornada clara para o candidato e densidade operacional para o RH — combinando o vocabulário visual de centros de operação de atendimento com a leveza de plataformas de aprendizagem.

Três compromissos de design sustentam a hipótese:
1. **Reduzir ambiguidade na avaliação** (briefing claro, progresso visível, erros tratados com graça).
2. **Tratar o RH como operador diário**, não como visitante (ações em massa, exportação, tempo real, filtros).
3. **Construir identidade Scooto/Simoola** (paleta, voz, ilustração e tom de jornada).

### 10.3 Antes & depois mais impactantes para a apresentação

Cinco pares de tela que carregam sozinhos a história. São, por ordem de impacto narrativo:

1. **Briefing pré-simulação**
   *Antes:* parágrafo corrido, fonte pequena, sem tempo, sem critérios, botão "Iniciar" disponível na hora.
   *Depois:* tela em três blocos visuais (Objetivo / Regras / Como você será avaliado), tempo e número de chats em destaque, checklist "li e entendi", contagem regressiva amigável antes de começar.

2. **Multi-chat (runtime)**
   *Antes:* três chats genéricos, mesmo peso, bolhas em tons quase idênticos, sem cronômetro, sem indicador de espera.
   *Depois:* fila lateral com prioridade visível ("esperando há 2 min"), aba pulsando quando chega mensagem nova, indicador "cliente digitando", cronômetro global, separação clara entre cliente e atendente.

3. **Resultados**
   *Antes:* lista de números neutros, sem cor, sem gráfico, sem export.
   *Depois:* hero com nota geral em cor semântica + recomendação ("Aprovado / Em análise / Não recomendado"), gráfico radar de competências, transcrição linkada a cada métrica, exportação em um clique e link compartilhável.

4. **Área do Treinando**
   *Antes:* dashboard frio com KPIs e histórico.
   *Depois:* saudação + banner de etapa ("Etapa 2 de 4") + card-hero da próxima ação + histórico em apoio.

5. **Identidade**
   *Antes:* tema padrão, sem logo, sem cor de marca, mistura PT/EN, ícones soltos.
   *Depois:* paleta Scooto/Simoola aplicada com hierarquia, voz única em português, ilustrações de marca em estados vazios, logo com presença consistente.

### 10.4 Métricas de sucesso para defender o redesign
- **Tempo do candidato no briefing antes de iniciar** (proxy de leitura/compreensão).
- **Taxa de simulações concluídas sem erro técnico** (qualidade operacional).
- **Tempo médio do RH para decidir aprovação após o resultado** (eficiência).
- **NPS / CSAT do candidato pós-simulação** (percepção de justiça e marca).
- **Taxa de exportação/compartilhamento de resultados** (uso real do RH além da plataforma).

### 10.5 Fio narrativo sugerido para a banca
1. **Contexto.** Scooto avalia e treina pessoas via simulação.
2. **Tensão.** A interface atual contamina a avaliação, sobrecarrega o RH e apaga a marca.
3. **Insight.** Não é problema de feature — é problema de design: hierarquia plana, ausência de jornada, ausência de identidade.
4. **Princípios.** Avaliação justa por design + operacional para o RH + acolhedor para o candidato + marca presente.
5. **Prova.** Cinco antes/depois mostrando o sistema novo aplicado em momentos-chave.
6. **Impacto.** Como cada decisão de design endereça uma das três frentes (justiça, eficiência, marca).

---

## 11. Próximos passos sugeridos para a equipe

- [ ] Validar com o cliente (Scooto) a paleta, voz e tom propostos antes de detalhar telas.
- [ ] Definir o glossário oficial do produto (Cenário, Avaliador, Treinando, Sessão, Resultado) e aplicá-lo em toda a interface.
- [ ] Redesenhar primeiro as **5 telas dos antes/depois** — são as que carregam a apresentação.
- [ ] Estabelecer biblioteca mínima de componentes (KPI hero, status pill, empty state, toast com retry, banner de etapa) antes de espalhar para o resto.
- [ ] Reservar uma rodada exclusiva para microinterações (envio, salvar, encerrar, mensagem nova, sucesso).
- [ ] Fazer um teste de usabilidade rápido com candidato real (idade 40+) e RH antes de fechar o protótipo.

---

*Auditoria realizada como diagnóstico inicial. Próxima etapa: passar para a fase de recomendações detalhadas e protótipo de alta fidelidade.*