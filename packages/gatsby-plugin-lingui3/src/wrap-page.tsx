import { WrapPageElementBrowserArgs } from "gatsby"
import * as React from "react"
import { I18nProvider } from "@lingui/react"
import { Messages, setupI18n } from "@lingui/core"
import { Helmet } from "react-helmet-async"

export const LinguiConfigContext = React.createContext({
  defaultLocale: "en",
  lang: "en",
})

export const wrapPage = ({
  element,
  props,
}: WrapPageElementBrowserArgs<
  {},
  { lang: string; messages: Messages; defaultLocale: string }
>) => {
  const { lang, messages, defaultLocale } = props?.pageContext

  const i18n = setupI18n()
  i18n.load(lang, messages)
  i18n.activate(lang)

  return (
    <LinguiConfigContext.Provider value={{ lang, defaultLocale }}>
      <Helmet htmlAttributes={{ lang }} />
      <I18nProvider i18n={i18n}>{element}</I18nProvider>
    </LinguiConfigContext.Provider>
  )
}

export default wrapPage
