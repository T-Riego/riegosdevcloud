import type { Metadata } from 'next'
import { LegalDocument } from '@/components/legal/LegalDocument'

const contactEmail = 'contato@riegosdev.cloud'

export const metadata: Metadata = {
  title: 'Exclusao de Dados | Riegos Dev',
  description:
    'Instrucoes para revogar acesso da Riegos Dev nas plataformas da Meta e solicitar exclusao de dados pessoais armazenados.',
  alternates: {
    canonical: '/exclusao-de-dados',
  },
}

export default function DataDeletionPage() {
  return (
    <LegalDocument
      eyebrow="Exclusao de Dados"
      title="Instrucoes de Exclusao de Dados"
      description="Esta pagina explica como revogar o acesso da Riegos Dev aos seus dados nas plataformas da Meta e como solicitar a exclusao de dados pessoais armazenados em nossos servidores."
      updatedAt="8 de maio de 2026"
      sections={[
        {
          id: 'revogar-meta',
          title: '1. Revogue o acesso pela Meta',
          content: (
            <p>
              Voce pode revogar o acesso da Riegos Dev diretamente nas configuracoes do Facebook, Instagram, WhatsApp
              Business ou Meta Business, removendo o aplicativo, integracao ou permissao concedida. Essa acao impede que
              a Riegos Dev acesse novos dados por meio da integracao removida.
            </p>
          ),
        },
        {
          id: 'solicitar-email',
          title: '2. Solicite a exclusao por e-mail',
          content: (
            <>
              <p>
                Para excluir dados pessoais ja armazenados pela Riegos Dev, envie um e-mail para{' '}
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a> com o assunto{' '}
                <strong>Exclusao de Dados - Riegos Dev</strong>.
              </p>
              <p>
                Inclua, quando possivel, nome, e-mail, telefone, empresa, identificador da conta Meta Business, WhatsApp
                Business Account, Pagina do Facebook, conta do Instagram ou outro dado que nos ajude a localizar o
                cadastro ou integracao correspondente.
              </p>
            </>
          ),
        },
        {
          id: 'dados-excluidos',
          title: '3. Quais dados podem ser excluidos',
          content: (
            <p>
              A solicitacao pode abranger dados de cadastro, identificadores de integracoes, tokens, registros de CRM,
              leads, contatos, historico de atendimento, vinculos com ativos da Meta, configuracoes de automacao e
              outros dados pessoais armazenados pela Riegos Dev, conforme o caso e a base legal aplicavel.
            </p>
          ),
        },
        {
          id: 'prazos',
          title: '4. Prazo e confirmacao',
          content: (
            <p>
              Confirmaremos o recebimento da solicitacao e iniciaremos a analise em prazo razoavel. A exclusao sera
              realizada quando a Riegos Dev puder validar a identidade do solicitante e localizar os dados, salvo quando
              houver necessidade de manter informacoes por obrigacao legal, fiscal, seguranca, prevencao a fraude,
              backup tecnico ou exercicio regular de direitos.
            </p>
          ),
        },
        {
          id: 'controlador',
          title: '5. Quando a Riegos Dev atua como operadora',
          content: (
            <p>
              Se os dados estiverem sendo tratados em nome de um cliente da Riegos Dev, como dados de consumidores,
              leads ou contatos comerciais desse cliente, poderemos encaminhar a solicitacao ao cliente controlador para
              validacao e atendimento conforme a LGPD e o contrato aplicavel.
            </p>
          ),
        },
        {
          id: 'contato',
          title: '6. Contato para status',
          content: (
            <p>
              Para acompanhar uma solicitacao de exclusao de dados, responda ao mesmo e-mail enviado ou entre em contato
              pelo endereco <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </p>
          ),
        },
      ]}
    />
  )
}
