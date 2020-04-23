import { CreatePageArgs } from "gatsby"
import { LinguiConfig, PluginOptions } from "."

const defaultOptions: PluginOptions = {
  defaultLocale: "en",
  prefixDefault: false,
}

export const onCreatePage = async (
  { page, actions }: CreatePageArgs,
  pluginOptions: PluginOptions
) => {
  if (typeof page.context.messages === "object") {
    return
  }
  // Merge default and given options
  const { defaultLocale } = { ...defaultOptions, ...pluginOptions }

  const { createPage } = actions

  const cwd = process.cwd()
  const config: LinguiConfig = require(`${cwd}/lingui.config.js`)

  for (let i = 0; i < config.locales.length; i += 1) {
    const locale = config.locales[i]
    const newPath = `/${locale}${page.path}`

    const { messages } = require(`${cwd}/src/locale/${locale}/messages.js`)

    createPage({
      ...page,
      path: locale === config.sourceLocale ? page.path : newPath,
      context: {
        ...page.context,
        lang: locale,
        defaultLocale,
        messages,
      },
    })
  }
}
