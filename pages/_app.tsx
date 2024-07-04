import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Layout from "@/components/ui/Layout";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={inter.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
