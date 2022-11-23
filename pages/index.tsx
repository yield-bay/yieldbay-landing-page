import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";

// biggest -> bg-bg-pattern -- bg-bg-pattern-md -- bg-bg-pattern-sm <- smallest

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen font bg-baseBlue text-white bg-bg-pattern-sm sm:bg-bg-pattern-md md:bg-bg-pattern bg-[center_top] sm:bg-center">
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default Home;
