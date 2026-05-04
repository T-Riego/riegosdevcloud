# Briefing Design Atual - Riegos Dev

Atualizado em: 2026-05-04

## Objetivo deste documento

Este documento descreve o design atual do site da Riegos Dev para servir como briefing visual. A intenção é pedir ajuda para deixar o site mais leve, limpo e moderno sem perder a sensação de tecnologia, automação e inteligência artificial.

O ponto mais importante: o hero atual tem uma direção interessante e deve ser preservado como base, principalmente pelo clima tecnológico criado pelas partículas, pelo fundo escuro e pela chamada forte.

## Contexto do projeto

A Riegos Dev é uma marca de automação inteligente, atendimento via WhatsApp, captação de clientes, marketing digital com IA e desenvolvimento de soluções operacionais.

O site atual é uma landing page institucional em página única, bilíngue PT-BR/EN, com foco em conversão para WhatsApp.

Seções atuais:

1. Header
2. Hero
3. Serviços
4. Portfólio
5. Processo
6. Depoimentos
7. Sobre
8. Contato
9. Footer
10. Botão flutuante de WhatsApp

## Stack visual atual

O site é feito em Next.js, React, TypeScript e Tailwind CSS.

Bibliotecas visuais e de interação:

- `motion`: animações de entrada, stagger e modal.
- `@tsparticles/react`: partículas no hero.
- `lenis`: smooth scroll.
- `lucide-react`: ícones.
- `react-type-animation`: texto animado no hero.

## Identidade visual atual

### Paleta

A interface usa uma estética escura e tecnológica:

- Fundo principal: preto profundo `#0A0A0A`.
- Superfícies/cards: quase preto `#111111`.
- Cor de destaque: ciano elétrico `#00FFFF`.
- Texto principal: branco.
- Texto secundário: cinza claro `#E0E0E0`.
- WhatsApp: verde oficial `#25D366`.

### Tipografia

- Títulos: Space Grotesk.
- Corpo: Inter.
- Headlines grandes, com peso forte.
- Visual geral tende a ser direto, técnico e institucional.

### Estética

O design atual comunica:

- tecnologia;
- automação;
- IA;
- interface escura;
- energia de produto digital;
- foco em conversão.

O risco atual é ficar um pouco pesado visualmente, porque muitos elementos usam fundo escuro, bordas, cards, glow e ciano ao mesmo tempo.

## Hero atual

O hero é a parte mais interessante visualmente e deve ser mantido como inspiração principal.

Elementos atuais:

- Fundo escuro full-bleed.
- Partículas ciano com conexões sutis.
- Gradiente radial muito discreto no topo.
- Headline grande e centralizada.
- Typewriter em ciano.
- Subheadline em cinza claro.
- Dois CTAs:
  - botão principal em ciano;
  - botão secundário com borda ciano.

Conteúdo PT-BR atual:

- Headline: "Transformamos atendimento em máquina de captação de clientes"
- Subheadline: "Não é só automação. É crescimento previsível: Atendimentos para Whatsapp, redução de trabalho manual, sem falhas. Para empresas que querem crescer e lucrar mais."
- Typewriter:
  - "Transforme planilhas em dados"
  - "Agendamentos, lembretes e follow ups automáticos e sem erros"
  - "Captação Inteligente de Clientes"
  - "Marketing digital personalizado"

### O que preservar no hero

- A sensação tecnológica das partículas.
- O fundo escuro elegante.
- A centralização e clareza da mensagem.
- O typewriter, porque dá vida e reforça tecnologia.
- O uso do ciano como assinatura visual.

### O que pode melhorar no hero

- Refinar espaçamentos e hierarquia para ficar mais premium.
- Deixar a subheadline mais leve e respirada.
- Reduzir um pouco a intensidade visual dos botões ou do glow, se necessário.
- Tornar o hero menos "pesado" sem perder impacto.

## Header atual

O header é sticky, com logo "Riegos Dev", links internos e toggle de idioma.

No desktop:

- logo à esquerda;
- navegação central/direita;
- botão PT/EN.

No mobile:

- hamburger;
- overlay fullscreen;
- links grandes;
- toggle de idioma.

Direção desejada:

- manter simples e funcional;
- deixar mais leve visualmente;
- talvez reduzir bordas e peso do fundo quando rolar a página;
- preservar boa leitura e navegação clara.

## Cards e seções

O site usa muitos cards escuros com borda e efeitos hover:

- Serviços: cards com ícones lucide em ciano.
- Portfólio: cards clicáveis com tags de tecnologia e modal.
- Processo: timeline + bloco Antes/Depois.
- Depoimentos: cards em marquee horizontal.
- Sobre: cards de Daniel e Tiago.

### Pontos fortes

- Boa organização.
- Visual consistente.
- Ícones ajudam leitura.
- Hover dá sensação de produto digital.
- Cards funcionam bem para explicar serviços e cases.

### Pontos a aliviar

- Muitos cards usam a mesma superfície escura.
- Muitas bordas e glows podem deixar o visual denso.
- O ciano aparece em muitos lugares e pode perder força como destaque.
- Algumas seções podem respirar mais, com menos caixas e mais layout editorial.
- O visual pode ficar mais sofisticado se alternar entre áreas sem cards, listas leves e blocos com mais espaço negativo.

## Serviços

Serviços atuais:

- Automação Inteligente
- Atendimento 24/7, Nunca Perca um Cliente
- Captação de Clientes
- Sites / Landing Pages
- Facebook Ads & Marketing Criativo
- Vídeos de Marketing

Visual atual:

- grid de 6 cards;
- ícones ciano;
- fundo `surface`;
- borda escura;
- hover com glow ciano.

Direção desejada:

- preservar os ícones e clareza;
- talvez reduzir o peso dos cards;
- testar cards mais translúcidos ou com menos borda;
- usar mais espaço entre conteúdo;
- deixar os textos mais escaneáveis.

## Portfólio

Projetos atuais:

- Agente de Atendimento WhatsApp
- Automação de Captação de Leads
- Prospecção Ativa & Aumento de Vendas

Visual atual:

- três cards;
- status em pill;
- tags de tecnologia;
- modal ao clicar.

Direção desejada:

- manter tags de tecnologia;
- deixar os cards com aparência mais premium;
- talvez transformar em cards mais horizontais ou cases com métrica em destaque;
- reduzir sensação de "grade pesada".

## Processo

Visual atual:

- timeline de 4 passos;
- linha horizontal no desktop;
- linha vertical no mobile;
- bloco Antes/Depois com vermelho e ciano.

Pontos fortes:

- explica bem a jornada;
- o Antes/Depois é bom para conversão;
- mostra transformação clara.

Direção desejada:

- manter o Antes/Depois;
- deixar os blocos menos pesados;
- talvez usar um layout mais limpo, com ícones e microcopy;
- reduzir contraste agressivo do vermelho para algo mais elegante.

## Depoimentos

Visual atual:

- cards em marquee horizontal infinito;
- estrelas ciano;
- quote em itálico;
- avatar com iniciais.

Direção desejada:

- manter movimento sutil se não prejudicar leitura;
- deixar os cards mais leves;
- talvez reduzir bordas;
- melhorar sensação de prova social real e confiável.

## Sobre

Visual atual:

- dois cards de equipe;
- avatares com iniciais;
- funções e descrições.

Pessoas:

- Daniel Riêgo
- Tiago Riêgo

Direção desejada:

- deixar a seção mais humana;
- talvez trocar cards muito fechados por um layout mais aberto;
- se houver fotos reais no futuro, usar imagem para quebrar a densidade do dark theme.

## Contato

Visual atual:

- headline centralizada;
- formulário com nome, e-mail e mensagem;
- submit abre WhatsApp;
- link direto do WhatsApp abaixo.

Direção desejada:

- preservar foco em WhatsApp;
- deixar formulário mais leve;
- talvez transformar em uma área final mais convidativa e menos "formulário pesado";
- reforçar CTA de demonstração gratuita.

## Problema visual principal

O site tem boa base tecnológica, mas pode ficar pesado por repetir:

- fundo preto;
- cards quase pretos;
- bordas;
- glow;
- ciano;
- grids densos.

O objetivo não é virar um site branco, genérico ou corporativo demais. O objetivo é manter a alma tech, mas com mais respiro, hierarquia e sofisticação.

## Pedido para o Sitch

Quero uma proposta visual para deixar este site mais leve, moderno e premium sem perder a identidade tecnológica.

Preserve:

- hero escuro com partículas;
- sensação de IA, automação e produto digital;
- ciano como cor de assinatura;
- foco em conversão para WhatsApp;
- clareza das seções;
- estética moderna e técnica.

Melhore:

- reduzir peso visual dos cards;
- usar mais respiro e espaço negativo;
- diminuir excesso de bordas e glow;
- usar o ciano com mais intenção;
- criar variação visual entre seções;
- deixar a experiência mais leve, elegante e confiável;
- manter o site com aparência de tecnologia, mas menos carregado.

Evite:

- transformar em site claro demais;
- usar visual genérico de agência;
- remover as partículas do hero;
- perder o tom de automação, IA e engenharia;
- exagerar em gradientes roxos/azuis genéricos;
- deixar com cara de template comum.

## Direção visual sugerida

Uma boa direção seria:

- dark theme mais respirado;
- hero tecnológico e imersivo;
- seções internas com superfícies mais sutis;
- menos glow, mais contraste tipográfico;
- cards com bordas mais suaves ou backgrounds translúcidos;
- ciano usado como detalhe de comando, não em todos os elementos;
- mais branco/cinza para leitura;
- microinterações discretas;
- layout com sensação de produto premium e consultoria técnica.

## Frase de briefing curta

"Quero manter o hero tecnológico com partículas e a identidade dark/ciano, mas deixar o restante do site mais leve, premium e respirado. Menos cards pesados, menos glow repetido, mais hierarquia visual, mais espaço negativo e uma sensação de tecnologia confiável, sem parecer template genérico."
