import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="sv">
        <Head>
          <meta charSet="utf-8" />
          <meta name="language" content="English" />
          <meta property="og:locale" content="en_EN" />
          <meta property="og:site_name" content="Emeliesabel" />
          <meta name="copyright" content="Emeliesabel" />
          <meta name="author" content="Emeliesabel" />
          <link rel="shortcut icon" href="/favicon.svg" />
          <link rel="apple-touch-icon" href="/favicon.svg" />
          <link rel="stylesheet" href="/fonts.css" />
        </Head>
      </Html>
    )
  }
}
