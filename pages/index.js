import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Jakub Leško</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="text-center text-gray-800">It works!</p>
      </main>

      <footer>&copy; 2021.</footer>
    </Fragment>
  );
}
