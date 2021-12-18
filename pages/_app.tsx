import "../styles/globals.css";
import "../styles/prism.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <span>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Uroš Štok | Building Cloud and SaaS"></meta>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@urosstok" />
        <meta name="twitter:author" content="@urosstok" />
        <meta name="twitter:title" content="Uros Stok's Website" />
        <meta name="twitter:description" content="Uroš Štok | Building Cloud and SaaS" />
        <script async defer data-domain="urosstok.com" src="https://lytics.urosstok.com/js/plausible.js"></script>
      </Head>
      <Component {...pageProps} />
    </span>
  );
}
export default MyApp;
