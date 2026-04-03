// lib/types.ts
// D-04: Locale union type — 'pt-BR' is the default (D-06)
export type Locale = 'pt-BR' | 'en'

// SiteContent is inferred from ptBR in pt-BR.ts and re-exported here for convenience
// The canonical type lives on the ptBR export (see lib/content/pt-BR.ts)
export type { SiteContent } from './content/pt-BR'
