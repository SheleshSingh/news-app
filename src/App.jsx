import React from "react";
import Button from "./components/Button";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="flex justify-center bg-slate-700 h-full">
      <Wrapper>
        <Header />
        <Button />
        <div className="grid grid-cols-4 gap-3">
          <Hero />
          <Hero />
          <Hero />
          <Hero />
          <Hero />
        </div>
      </Wrapper>
    </div>
  );
};

export default App;
