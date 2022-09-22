import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const docProps = await Document.getInitialProps(ctx);
  return { ...docProps };
};
