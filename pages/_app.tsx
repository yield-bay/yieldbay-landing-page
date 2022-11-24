import "../styles/globals.css";
import type { AppProps } from "next/app";
import useAnalyticsSetup from "../hooks/useAnalyticsSetup";

function MyApp({ Component, pageProps }: AppProps) {
  useAnalyticsSetup(process.env.NEXT_PUBLIC_URL_FATHOM_CODE as string);

  return <Component {...pageProps} />;
}

export default MyApp;
