import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import Hero from "../components/Hero";

// biggest -> bg-bg-pattern -- bg-bg-pattern-md -- bg-bg-pattern-sm <- smallest

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>YieldBay</title>
        <meta name="title" content="YieldBay" />
        <meta
          name="description"
          content="Yield Farming Hub for Polkadot & Kusama ecosystems"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yieldbay.io/" />
        <meta property="og:title" content="YieldBay" />
        <meta
          property="og:description"
          content="Yield Farming Hub for Polkadot & Kusama ecosystems"
        />

        <meta property="twitter:url" content="https://www.yieldbay.io/" />
        <meta property="twitter:title" content="YieldBay" />
        <meta
          property="twitter:description"
          content="Yield Farming Hub for Polkadot & Kusama ecosystems"
        />
      </Head>
      <div className="flex flex-col min-h-screen font bg-baseBlue text-white bg-bg-pattern-sm sm:bg-bg-pattern-md md:bg-bg-pattern bg-[center_top] sm:bg-center">
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default Home;
