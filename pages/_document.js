import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
            <link rel="icon" href="/LafisioLogoTransparent.png" />
            <link rel="shortcut icon" href="/LafisioLogoTransparent.png"/>
            <link rel="apple-touch-icon" href="/LafisioLogoTransparent.png" />
            <meta name="theme-color" content="#12a3ba" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument