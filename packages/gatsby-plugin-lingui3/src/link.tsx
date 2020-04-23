import * as React from "react"
import { useContext } from "react"

import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby"
import { LinguiConfigContext } from "./wrap-page"

interface I18nLinkComponent<T>
  extends React.ForwardRefRenderFunction<any, GatsbyLinkProps<T>> {}

const I18nLinkComponent: I18nLinkComponent<any> = (
  { ref, to, ...props },
  forwardedRef
) => {
  const { defaultLocale, lang } = useContext(LinguiConfigContext)

  const newPath = defaultLocale === lang ? to : `/${lang}${to}`

  return <GatsbyLink ref={forwardedRef} to={newPath} {...props} />
}

export const Link = React.forwardRef(I18nLinkComponent)
