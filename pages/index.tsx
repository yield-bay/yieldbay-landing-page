import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen font bg-baseBlue text-white  bg-bg-pattern-mob sm:bg-bg-pattern ">
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default Home;
