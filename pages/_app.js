import "tailwindcss/tailwind.css";
import { Fragment } from "react";

import Head from "next/head";

import Content from "../components/content";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function NucleusApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Jakub Leško</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </Fragment>
  );
}
