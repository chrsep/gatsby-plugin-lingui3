export interface PluginOptions {
  prefixDefault: boolean
  defaultLocale: string
}

export interface LinguiConfig {
  locales: string[]
  sourceLocale: string
  catalogs?: Array<{
    path: string
    include: string[]
    exclude: string[]
  }>
}

export * from "./link"
