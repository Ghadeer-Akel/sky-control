import React from "react";
import AboutSection from "../components/AboutSection";
import Service from "../components/Service";
import Subscribe from "../components/Subscribe";
import ReachUs from "../components/ReachUs";
import About from "./About";

const Home = () => {
  return (
    <div>
      <About/>
      <Service />
      <Subscribe />
      <ReachUs/>
    </div>
  );
};

export default Home;
