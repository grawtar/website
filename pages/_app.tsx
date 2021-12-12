import "../styles/globals.css";
// import "tailwindcss/tailwind.css";
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
        <meta name="description" content="Uroš Štok | Software Partner/Consultant experienced in web & iot"></meta>
        <script async defer data-domain="urosstok.com" src="https://lytics.urosstok.com/js/plausible.js"></script>
      </Head>
      <Component {...pageProps} />
    </span>
  );
}
export default MyApp;
