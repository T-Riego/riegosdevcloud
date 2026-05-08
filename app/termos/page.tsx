import type { Metadata } from 'next'
import { LegalDocument } from '@/components/legal/LegalDocument'

const contactEmail = 'contato@riegosdev.cloud'

export const metadata: Metadata = {
  title: 'Termos de Servico | Riegos Dev',
  description:
    'Termos de Servico da Riegos Dev para uso de automacoes, CRM, WhatsApp Business, campanhas, integracoes e solucoes digitais.',
  alternates: {
    canonical: '/termos',
  },
}

export default function TermsPage() {
  return (
    <LegalDocument
      eyebrow="Termos de Servico"
      title="Termos de Servico da Riegos Dev"
      description="Estes termos definem as condicoes de uso dos servicos, automacoes, integracoes, atendimento com IA, CRM, campanhas e solucoes digitais fornecidas pela Riegos Dev."
      updatedAt="8 de maio de 2026"
      sections={[
        {
          id: 'aceite',
          title: '1. Aceite dos termos',
          content: (
            <p>
              Ao contratar, acessar ou usar os servicos da Riegos Dev, voce declara que leu, entendeu e concorda com
              estes Termos de Servico e com a nossa Politica de Privacidade. Se voce usa os servicos em nome de uma
              empresa, declara possuir autorizacao para vincular essa empresa a estes termos.
            </p>
          ),
        },
        {
          id: 'servicos',
          title: '2. Servicos prestados',
          content: (
            <>
              <p>
                A Riegos Dev desenvolve e configura solucoes digitais, incluindo automacoes, atendimento com IA,
                integracoes com WhatsApp Business, Facebook, Instagram e outras plataformas, CRM, gestao de campanhas,
                paginas, fluxos operacionais, suporte tecnico e melhorias sob demanda.
              </p>
              <p>
                O escopo, prazos, valores, entregaveis, limites de uso e responsabilidades especificas podem ser
                definidos em proposta comercial, contrato, ordem de servico, conversa formal ou painel operacional
                aceito pelas partes.
              </p>
            </>
          ),
        },
        {
          id: 'responsabilidades-cliente',
          title: '3. Responsabilidades do cliente',
          content: (
            <>
              <p>O cliente e responsavel por:</p>
              <ul>
                <li>Fornecer informacoes verdadeiras, completas e atualizadas para configuracao dos servicos.</li>
                <li>Garantir que possui direitos, permissoes e bases legais para tratar dados de seus contatos, leads, clientes e usuarios finais.</li>
                <li>Manter contas, credenciais, administradores, permissao de pagamento, Business Manager e ativos da Meta em conformidade com as regras das plataformas.</li>
                <li>Aprovar conteudos, mensagens, campanhas, modelos, politicas comerciais e ofertas antes da publicacao ou disparo, quando aplicavel.</li>
                <li>Usar os servicos de forma legal, etica e compativel com a LGPD, regras da Meta, WhatsApp Business Platform, Facebook, Instagram e demais plataformas integradas.</li>
              </ul>
            </>
          ),
        },
        {
          id: 'meta-whatsapp',
          title: '4. Uso de plataformas da Meta e terceiros',
          content: (
            <>
              <p>
                Alguns recursos dependem de servicos de terceiros, como Meta, WhatsApp Business Platform, Facebook,
                Instagram, provedores de hospedagem, bancos de dados, gateways de pagamento, ferramentas de mensageria,
                automacao e analytics. O cliente entende que essas plataformas podem alterar APIs, politicas, precos,
                limites, disponibilidade, permissoes ou processos de revisao.
              </p>
              <p>
                A Riegos Dev nao controla decisoes de aprovacao, bloqueio, suspensao, revisao, limite de mensagens,
                qualidade de conta, verificacao comercial ou alteracoes feitas pela Meta ou por terceiros. Faremos
                esforcos razoaveis para orientar e adaptar as configuracoes quando necessario.
              </p>
            </>
          ),
        },
        {
          id: 'uso-aceitavel',
          title: '5. Uso aceitavel',
          content: (
            <>
              <p>O cliente nao deve usar os servicos para:</p>
              <ul>
                <li>Enviar spam, mensagens enganosas, conteudo ilegal, abusivo, discriminatorio, fraudulento ou que viole direitos de terceiros.</li>
                <li>Coletar, importar ou usar dados pessoais sem base legal, transparencia ou autorizacao necessaria.</li>
                <li>Tentar burlar limites, mecanismos de seguranca, politicas da Meta, regras do WhatsApp ou sistemas de terceiros.</li>
                <li>Compartilhar credenciais de forma insegura ou conceder acesso a pessoas nao autorizadas.</li>
                <li>Revender, copiar ou explorar componentes da Riegos Dev fora do escopo contratado sem autorizacao expressa.</li>
              </ul>
            </>
          ),
        },
        {
          id: 'pagamentos',
          title: '6. Pagamentos, cobrancas e boletos',
          content: (
            <p>
              Valores, periodicidade, reajustes, condicoes de pagamento e eventuais taxas serao definidos na proposta ou
              contrato aplicavel. A Riegos Dev podera usar dados de contato, cadastro e faturamento para enviar
              cobrancas, faturas, notas fiscais, lembretes administrativos e boletos quando for necessario para a
              execucao dos servicos contratados.
            </p>
          ),
        },
        {
          id: 'privacidade',
          title: '7. Privacidade e protecao de dados',
          content: (
            <p>
              O tratamento de dados pessoais segue a nossa Politica de Privacidade. O cliente reconhece que, ao inserir
              dados de contatos, leads, consumidores ou usuarios finais nos sistemas configurados pela Riegos Dev, deve
              possuir base legal adequada e informar os titulares quando exigido pela legislacao.
            </p>
          ),
        },
        {
          id: 'propriedade-intelectual',
          title: '8. Propriedade intelectual',
          content: (
            <p>
              Marcas, layouts, codigos, fluxos, documentacoes, templates, metodos, prompts, configuracoes e materiais
              criados pela Riegos Dev continuam protegidos por direitos de propriedade intelectual, salvo quando houver
              cessao expressa em contrato. Conteudos, marcas, bases de dados e materiais fornecidos pelo cliente
              permanecem de titularidade do cliente ou de seus respectivos proprietarios.
            </p>
          ),
        },
        {
          id: 'confidencialidade',
          title: '9. Confidencialidade',
          content: (
            <p>
              As partes devem proteger informacoes confidenciais recebidas durante a prestacao dos servicos, incluindo
              credenciais, dados de clientes, estrategias comerciais, configuracoes tecnicas, documentos internos e
              informacoes nao publicas. Essa obrigacao permanece mesmo apos o termino da relacao comercial.
            </p>
          ),
        },
        {
          id: 'suspensao',
          title: '10. Suspensao e encerramento',
          content: (
            <p>
              A Riegos Dev podera suspender ou encerrar o acesso aos servicos em caso de inadimplencia, uso indevido,
              risco de seguranca, violacao destes termos, violacao de politicas de terceiros ou exigencia legal. O
              cliente pode solicitar encerramento conforme as condicoes comerciais aplicaveis e pode solicitar exclusao
              de dados conforme a Politica de Privacidade.
            </p>
          ),
        },
        {
          id: 'garantias',
          title: '11. Disponibilidade e limitacao de responsabilidade',
          content: (
            <p>
              Empregamos esforcos razoaveis para manter os servicos funcionais e seguros, mas nao garantimos operacao
              ininterrupta, ausencia total de falhas, resultados comerciais especificos, aprovacao por plataformas de
              terceiros ou disponibilidade permanente de APIs externas. Na extensao permitida por lei, a responsabilidade
              da Riegos Dev fica limitada aos danos diretos comprovados relacionados ao servico contratado.
            </p>
          ),
        },
        {
          id: 'contato',
          title: '12. Contato',
          content: (
            <p>
              Duvidas sobre estes Termos de Servico podem ser enviadas para{' '}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. Estes termos podem ser atualizados para refletir
              mudancas nos servicos, exigencias legais, regras de plataformas integradas ou ajustes operacionais.
            </p>
          ),
        },
      ]}
    />
  )
}
