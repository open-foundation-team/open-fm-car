// Module imports
import type { AppProps } from "next/app";

// Global style imports
import "../styles/globals.scss";
import "../styles/styles.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
