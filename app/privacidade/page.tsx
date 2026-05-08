import type { Metadata } from 'next'
import { LegalDocument } from '@/components/legal/LegalDocument'

const contactEmail = 'contato@riegosdev.cloud'

export const metadata: Metadata = {
  title: 'Politica de Privacidade | Riegos Dev',
  description:
    'Politica de Privacidade da Riegos Dev para uso de dados pessoais, dados da Meta, WhatsApp Business, automacao, CRM e exclusao de dados.',
  alternates: {
    canonical: '/privacidade',
  },
}

export default function PrivacyPage() {
  return (
    <LegalDocument
      eyebrow="Politica de Privacidade"
      title="Politica de Privacidade da Riegos Dev"
      description="Este documento explica como coletamos, usamos, protegemos, compartilhamos e excluimos dados pessoais tratados pela Riegos Dev, inclusive dados acessados por integracoes com Facebook, Instagram, WhatsApp e demais APIs da Meta."
      updatedAt="8 de maio de 2026"
      sections={[
        {
          id: 'quem-somos',
          title: '1. Quem somos e escopo',
          content: (
            <>
              <p>
                A Riegos Dev oferece solucoes digitais, automacoes, atendimento com IA, integracoes com WhatsApp,
                CRM, paginas, campanhas e ferramentas operacionais para empresas. Esta Politica se aplica aos
                visitantes do site, leads, clientes, usuarios administradores da plataforma e contatos tratados por
                clientes dentro das solucoes configuradas pela Riegos Dev.
              </p>
              <p>
                Quando um cliente usa a Riegos Dev para atender consumidores finais, esse cliente normalmente atua
                como controlador dos dados de seus proprios contatos, leads e clientes. A Riegos Dev atua como
                operadora ou prestadora de servicos, tratando esses dados conforme as instrucoes do cliente,
                contratos aplicaveis e a legislacao vigente.
              </p>
            </>
          ),
        },
        {
          id: 'coleta',
          title: '2. Coleta de dados pessoais',
          content: (
            <>
              <p>Podemos coletar dados pessoais diretamente de voce, de nossos clientes ou por meio de integracoes autorizadas. Isso pode incluir:</p>
              <ul>
                <li>Dados de identificacao e contato, como nome, e-mail, telefone, empresa, cargo, cidade, CNPJ ou outras informacoes fornecidas voluntariamente.</li>
                <li>Dados de contas e permissoes conectadas via Meta, como identificadores de usuario, Business Manager, Paginas do Facebook, contas do Instagram, contas de anuncios, WhatsApp Business Account, numeros de telefone, modelos de mensagem, permissoes concedidas e eventos recebidos por APIs ou webhooks.</li>
                <li>Dados de atendimento, automacao e CRM, como contatos, leads, historico de interacoes, etiquetas, etapas de funil, mensagens, observacoes, agendamentos, preferencias e informacoes necessarias para qualificar ou dar continuidade ao atendimento.</li>
                <li>Dados de campanhas e desempenho, como metricas, origem de leads, status de campanhas, anuncios, formularios, conversoes e informacoes necessarias para gestao de marketing.</li>
                <li>Dados operacionais e financeiros, como plano contratado, status de pagamento, comprovantes, cobrancas, notas fiscais, dados para suporte e dados necessarios para utilidades administrativas, incluindo envio de boletos quando for necessario.</li>
                <li>Dados tecnicos e de seguranca, como endereco IP, navegador, dispositivo, registros de acesso, logs de autenticacao, data e horario de eventos e informacoes de diagnostico.</li>
              </ul>
            </>
          ),
        },
        {
          id: 'uso',
          title: '3. Uso das informacoes',
          content: (
            <>
              <p>Usamos os dados pessoais para finalidades legitimas, especificas e relacionadas aos nossos servicos, incluindo:</p>
              <ul>
                <li>Configurar e operar automacoes, agentes de atendimento, CRM, fluxos de WhatsApp, campanhas, paginas e integracoes solicitadas pelo cliente.</li>
                <li>Gerenciar campanhas, formularios, leads, conversas, funis comerciais, segmentacoes e relatorios de desempenho.</li>
                <li>Executar comunicacoes operacionais, suporte, onboarding, treinamento, avisos tecnicos, mensagens administrativas e envio de boletos, faturas ou cobrancas quando necessario.</li>
                <li>Conectar, autenticar e manter integracoes com APIs da Meta, WhatsApp Business, Facebook, Instagram e outras plataformas autorizadas pelo usuario ou cliente.</li>
                <li>Proteger contas, prevenir fraude, investigar incidentes, manter logs de seguranca e cumprir obrigacoes legais, regulatórias e contratuais.</li>
                <li>Melhorar nossos servicos, desde que isso seja feito de forma compativel com esta Politica, com os contratos aplicaveis e com as permissoes concedidas.</li>
              </ul>
            </>
          ),
        },
        {
          id: 'bases-legais',
          title: '4. Bases legais de tratamento',
          content: (
            <p>
              Tratamos dados pessoais com base na execucao de contrato ou de procedimentos preliminares, cumprimento
              de obrigacao legal ou regulatoria, exercicio regular de direitos, legitimo interesse, prevencao a fraude
              e, quando aplicavel, consentimento do titular. Quando o tratamento depender de consentimento, ele podera
              ser revogado a qualquer momento, observadas as consequencias tecnicas da revogacao.
            </p>
          ),
        },
        {
          id: 'meta',
          title: '5. Dados obtidos por APIs da Meta',
          content: (
            <>
              <p>
                Quando o usuario ou cliente autoriza uma integracao com produtos da Meta, podemos acessar apenas os
                dados permitidos pelas permissoes concedidas e necessarios para executar as funcionalidades
                contratadas, como gestao de campanhas, atendimento via WhatsApp, automacao, CRM, relatorios e suporte.
              </p>
              <p>
                Nao usamos dados obtidos da Meta para finalidades incompatíveis com as permissoes concedidas, nao
                vendemos esses dados e nao os compartilhamos com terceiros para publicidade independente. Tokens,
                credenciais e identificadores tecnicos sao tratados como informacoes sensiveis de seguranca operacional
                e protegidos por controles de acesso.
              </p>
            </>
          ),
        },
        {
          id: 'compartilhamento',
          title: '6. Compartilhamento de dados',
          content: (
            <>
              <p>
                A Riegos Dev nao vende dados pessoais, dados de clientes, dados de leads ou dados recebidos por APIs da
                Meta. Podemos compartilhar dados apenas quando isso for necessario para prestar os servicos, cumprir a
                lei ou proteger direitos.
              </p>
              <p>O compartilhamento pode ocorrer com provedores de infraestrutura, hospedagem, banco de dados, e-mail, mensageria, pagamento, emissao de boletos, suporte, seguranca, analise tecnica, plataformas integradas autorizadas pelo cliente e autoridades competentes quando houver obrigacao legal.</p>
              <p>
                Esses prestadores devem tratar os dados apenas conforme nossas instrucoes, contratos aplicaveis e
                medidas razoaveis de seguranca. O cliente continua responsavel por garantir que possui base legal para
                inserir, importar ou integrar dados de seus proprios contatos na Riegos Dev.
              </p>
            </>
          ),
        },
        {
          id: 'retencao',
          title: '7. Retencao e exclusao',
          content: (
            <p>
              Mantemos dados pessoais pelo tempo necessario para prestar os servicos, cumprir contratos, resolver
              disputas, manter seguranca, atender obrigacoes legais e preservar registros financeiros ou fiscais. Quando
              os dados deixarem de ser necessarios, poderemos exclui-los, anonimiza-los ou agrega-los de forma que nao
              identifiquem o titular, salvo quando a manutencao for permitida ou exigida por lei.
            </p>
          ),
        },
        {
          id: 'exclusao',
          title: '8. Instrucoes de exclusao de dados',
          content: (
            <>
              <p>
                Usuarios podem revogar o acesso da Riegos Dev aos seus dados pelas configuracoes do Facebook, Instagram,
                WhatsApp Business ou Meta Business, removendo o aplicativo ou a integracao autorizada. Essa revogacao
                impede novos acessos, mas nao exclui automaticamente todos os dados ja armazenados em nossos servidores.
              </p>
              <p>
                Para solicitar a exclusao total dos dados pessoais armazenados pela Riegos Dev, envie um e-mail para{' '}
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a> com o assunto{' '}
                <strong>Exclusao de Dados - Riegos Dev</strong>.
                Inclua, quando possivel, o nome, e-mail, telefone, empresa, identificador da conta Meta Business,
                WhatsApp Business Account ou outro dado que ajude a localizar o cadastro.
              </p>
              <p>
                Confirmaremos o recebimento e processaremos a solicitacao em prazo razoavel, observadas obrigacoes
                legais, fiscais, de seguranca, prevencao a fraude, backup e preservacao de direitos. Quando a Riegos Dev
                atuar como operadora de dados de um cliente, poderemos encaminhar a solicitacao ao cliente controlador
                para validacao e atendimento.
              </p>
            </>
          ),
        },
        {
          id: 'seguranca',
          title: '9. Seguranca',
          content: (
            <p>
              Adotamos medidas tecnicas e administrativas razoaveis para proteger dados pessoais contra acesso nao
              autorizado, perda, uso indevido, alteracao ou divulgacao indevida. Essas medidas podem incluir controle de
              acesso, segregacao de credenciais, protecao de tokens, logs, backups, revisao de permissoes e boas
              praticas de desenvolvimento seguro.
            </p>
          ),
        },
        {
          id: 'direitos',
          title: '10. Direitos dos titulares',
          content: (
            <>
              <p>
                Nos termos da LGPD, titulares podem solicitar confirmacao de tratamento, acesso, correcao, anonimizacao,
                bloqueio, eliminacao, portabilidade, informacoes sobre compartilhamento, revisao de decisoes automatizadas
                quando aplicavel e revogacao de consentimento.
              </p>
              <p>
                Para exercer esses direitos, envie uma solicitacao para <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
                Poderemos pedir informacoes adicionais para confirmar sua identidade e proteger sua privacidade.
              </p>
            </>
          ),
        },
        {
          id: 'transferencias',
          title: '11. Transferencias internacionais',
          content: (
            <p>
              Alguns provedores de tecnologia, hospedagem, automacao, mensageria ou analytics podem processar dados fora
              do Brasil. Quando isso ocorrer, adotaremos medidas contratuais e tecnicas razoaveis para proteger os dados
              conforme a LGPD e os compromissos assumidos com nossos clientes.
            </p>
          ),
        },
        {
          id: 'contato',
          title: '12. Contato',
          content: (
            <p>
              Duvidas sobre esta Politica, privacidade, seguranca ou exclusao de dados podem ser enviadas para{' '}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. Esta Politica podera ser atualizada para refletir
              mudancas nos servicos, exigencias legais ou orientacoes das plataformas integradas.
            </p>
          ),
        },
      ]}
    />
  )
}
