import React from "react";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const LandingPage = () => {
  return (
    <div className="bg-white ">
      <Navbar />
      <Header />
    </div>
  );
};

const App = () => {
  return <LandingPage />;
};

export default App;
