# RiegosDev NagoaDev-Style Redesign Design

Data: 2026-05-06

## Status de Execucao

- Implementacao concluida em 2026-05-06.
- Redesign integrado em `master` pelo merge `afc52d8` e publicado em `origin/master`.
- Commit atual observado em 2026-05-07: `e1d3522`.
- `master` esta sincronizado com `origin/master` (`0 ahead / 0 behind`).
- Verificacao registrada: `npm run lint` com 0 erros/4 warnings existentes; `npm run build` passou.
- Pendente apos publicar: revisao visual final, decisao de deploy final e limpeza dos worktrees temporarios se o usuario autorizar.

## Instrucao de Continuidade

- Nao alterar codigo sem autorizacao explicita do usuario.
- Usar `/caveman ultra` quando o objetivo for economizar tokens.
- Antes de nova mudanca, confirmar se o alvo e ajuste visual, push/PR, deploy, limpeza de worktrees ou documentacao.
- Se for mexer no app, rodar no final `npm run lint` e `npm run build`.

## Objetivo

Reformular a landing da RiegosDev seguindo o padrão do documento `NagoaDev Textos Site.pdf`: linguagem simples, intenção clara, baixo esforço cognitivo e benefício antes do nome técnico do serviço.

O visitante deve entender em 5 a 10 segundos que a RiegosDev ajuda empresas a responder clientes, tirar dúvidas e encaminhar vendas pelo WhatsApp, mesmo quando a equipe não está disponível.

## Direção Estratégica

- Seguir a estrutura 01-08 do documento NagoaDev.
- Manter o site amplo e multi-tenant, sem prender o hero ao nicho de proteção veicular.
- Usar proteção veicular/benefícios como primeiro exemplo de mercado.
- Usar clínicas/recepção sobrecarregada como segundo exemplo.
- Trocar a sessão paga do modelo NagoaDev por diagnóstico gratuito.
- Manter a paleta clara/ciano atual da RiegosDev.
- Evitar voltar para dark theme, partículas, typewriter ou linguagem abstrata.

## Regra de Copy

O serviço nunca deve aparecer sozinho. Primeiro vem uma cena concreta do cliente; depois vem a solução.

Exemplo ruim:

> Automação inteligente para captação de clientes.

Exemplo desejado:

> Cliente chamou fora do horário? A IA responde com a linguagem da sua empresa e evita que a oportunidade esfrie.

## Tom de Voz

Usar tom misto:

- Hero e serviços: mais humano, com "a gente" quando soar natural.
- Processo e diagnóstico: mais firme, com "nós" ou verbo direto.
- Evitar excesso de "a gente" em sequência.
- Evitar jargões sem contexto: "captação", "alta conversão", "automação inteligente", "crescimento previsível".

## Estrutura Aprovada

### 01 Navegação

Logo:

`RiegosDev`

Links:

- `O que fazemos`
- `Como funciona`
- `Projetos`

CTA destacado:

`Agendar diagnóstico gratuito`

### 02 Hero - Primeira Dobra

Título principal:

`Seu negócio respondendo clientes, tirando dúvidas e fechando vendas — mesmo quando você não está.`

Subtítulo:

`A gente configura uma IA que fala pela sua empresa. Com a linguagem certa, na hora certa, sem aumentar sua equipe.`

Botões:

- `Agendar diagnóstico gratuito`
- `Ver projetos que entregamos`

Observação de direção:

O hero deve ser amplo, concreto e compreensível. Não deve citar proteção veicular no título principal, porque a solução é multi-tenant.

### 03 O Que Fazemos

Título:

`Três coisas que a gente faz — e o que elas mudam no seu negócio`

Bloco 1:

`Atendimento com IA no WhatsApp`

Mensagem:

`Sabe aquela mensagem que chega fora do horário e ninguém respondeu? A IA responde na hora, com a linguagem da sua empresa. O cliente não espera, a venda não esfria e sua equipe não precisa parar tudo para responder dúvida repetida.`

Bloco 2:

`Vídeos que explicam e vendem enquanto você trabalha`

Mensagem:

`Criamos roteiros e vídeos para explicar o que sua empresa faz de um jeito simples. O cliente entende melhor sua oferta e chega mais preparado para conversar.`

Bloco 3:

`Site e página de vendas`

Mensagem:

`Não adianta ter um site bonito que ninguém entende. Criamos páginas com uma mensagem clara e um objetivo específico: fazer quem visitou entrar em contato com você.`

### 04 Como Funciona

Título:

`Como trabalhamos — sem enrolação`

Passo 1:

`Entendemos seu negócio`

`Uma conversa de 40 minutos já basta para identificar onde seu atendimento está perdendo cliente e o que dá para melhorar agora.`

Passo 2:

`Montamos o que faz sentido para você`

`Nada de pacote genérico. O que você recebe é único, pensado para seu tipo de negócio, sua equipe e sua forma de atender.`

Passo 3:

`Colocamos no ar e você acompanha o resultado`

`Você não precisa entender de tecnologia. Nós configuramos, testamos e mostramos o que mudou.`

### 05 Projetos

Título:

`Projetos que já entregamos`

Projeto 1:

`Agente de Atendimento no WhatsApp`

`Uma IA configurada para responder clientes, tirar dúvidas, qualificar leads e encaminhar atendimentos quando a equipe não está disponível. Inclusive de madrugada ou finais de semana.`

Projeto 2:

`ConectaSaúde`

`Plataforma criada para conectar pacientes com profissionais de saúde. Site, atendimento automático e humanizado, agendamento e lembrete de consultas em um só lugar.`

Projeto 3:

`Sites & Landing Pages`

`Páginas criadas com foco em conversão — não só em parecer bonito. Cada uma com uma mensagem clara e um objetivo específico.`

### 06 Diagnóstico Gratuito

Título:

`Antes de qualquer proposta, alinhamos e entendemos como funciona o seu negócio.`

Texto:

`Muitas empresas não sabem exatamente onde estão perdendo clientes. Em uma conversa gratuita de 30 minutos, olhamos para seu atendimento atual, identificamos os gargalos e mostramos o que pode ser melhorado agora. Não é "apenas" mais uma reunião de vendas.`

Você sai com:

- `Um mapa claro dos gargalos do seu atendimento hoje`
- `3 ações práticas para melhorar agora`
- `Um mini plano de automação pensado para seu negócio`
- `Clareza sobre se faz sentido seguir com a RiegosDev`

CTA:

`Agendar diagnóstico gratuito`

Garantia/observação:

`Sem compromisso. A ideia é você sair da conversa com clareza, mesmo que a gente não siga junto.`

### 07 CTA Final

Título:

`Cansado de perder cliente porque a resposta demorou?`

Texto:

`A gente resolve isso começando por uma conversa gratuita de 30 minutos.`

CTA:

`Agendar diagnóstico gratuito`

Observação:

`Atendemos empresas em todo o Brasil. Diagnóstico feito por videochamada.`

### 08 Rodapé

Texto:

`RiegosDev`

`Automação · Vídeos · Sites`

`Instagram · WhatsApp · LinkedIn`

`© 2026 RiegosDev. Todos os direitos reservados.`

## Implicações de Design

- A primeira dobra deve parecer menos "dashboard genérico" e mais "atendimento real que continua funcionando".
- A hierarquia deve privilegiar texto curto, fácil de escanear e orientado a consequência.
- O bento de serviços pode continuar, mas cada card deve explicar o benefício antes do recurso.
- Os projetos devem parecer prova real, não vitrine genérica.
- O diagnóstico gratuito deve ter destaque maior que "orçamento" ou "começar agora".
- CTAs devem apontar para WhatsApp com mensagem alinhada ao diagnóstico gratuito.

## Não Objetivos

- Não incluir preço no diagnóstico.
- Não transformar o hero em nicho exclusivo de proteção veicular.
- Não reintroduzir dark theme, partículas ou typewriter.
- Não criar nova identidade visual do zero.
- Não alterar stack, arquitetura ou fluxo de i18n sem necessidade.

## Critérios de Aceite

- Em 5 a 10 segundos, o visitante entende o benefício principal.
- O hero usa o título e subtítulo aprovados.
- A estrutura 01-08 segue o documento NagoaDev.
- O CTA principal é diagnóstico gratuito.
- O site continua claro, premium e alinhado à paleta atual.
- O conteúdo PT-BR deve ser fonte principal; EN deve ser atualizado depois para manter paridade.
- Mobile deve manter leitura confortável, sem corte de texto ou CTA fora da tela.

## Verificação Recomendada Antes de Implementar

- Revisar os textos finais com o usuário.
- Conferir se os assets atuais ajudam a explicar atendimento/WhatsApp ou se precisam troca.
- Depois da implementação, rodar `npm run lint` e `npm run build`.
- Validar visual em desktop e mobile.
