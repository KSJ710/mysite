import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=DotGothic16&family=Hachi+Maru+Pop&family=Hina+Mincho&family=Kaisei+Decol:wght@400;500;700&family=Kaisei+HarunoUmi:wght@400;500;700&family=Kaisei+Opti:wght@400;500;700&family=Kaisei+Tokumin:wght@400;500;700;800&family=Kiwi+Maru:wght@300;400;500&family=Klee+One:wght@400;600&family=Kosugi&family=Kosugi+Maru&family=Mochiy+Pop+One&family=Mochiy+Pop+P+One&family=Murecho:wght@100;200;300;400;500;600;700;800;900&family=New+Tegomin&family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Noto+Serif+JP:wght@200;300;400;500;600;700;900&family=Potta+One&family=Rampart+One&family=Reggae+One&family=RocknRoll+One&family=Sawarabi+Gothic&family=Sawarabi+Mincho&family=Shippori+Antique&family=Shippori+Antique+B1&family=Shippori+Mincho+B1:wght@400;500;600;700;800&family=Shippori+Mincho:wght@400;500;600;700;800&family=Stick&family=Train+One&family=Yomogi&family=Yuji+Boku&family=Yuji+Mai&family=Yuji+Syuku&family=Yusei+Magic&family=Zen+Antique&family=Zen+Antique+Soft&family=Zen+Kaku+Gothic+Antique:wght@300;400;500;700;900&family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&family=Zen+Kurenaido&family=Zen+Maru+Gothic:wght@300;400;500;700;900&family=Zen+Old+Mincho:wght@400;700;900&display=swap"
            rel="stylesheet"
          ></link> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{``}</style>
      </Html>
    );
  }
}
