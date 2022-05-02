import Document, { Html, Head, Main, NextScript } from 'next/document';
// TODO: set Google Font in a correct way

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
