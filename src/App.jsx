import React, { useState } from "react";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const LandingPage = () => {
  const [showLoginForm, setshowLoginForm] = useState(false);
  return (
    <div className="bg-white ">
      <Navbar
        showLoginForm={showLoginForm}
        setshowLoginForm={setshowLoginForm}
      />
      <Header
        showLoginForm={showLoginForm}
        setshowLoginForm={setshowLoginForm}
      />
    </div>
  );
};

const App = () => {
  return <LandingPage />;
};

export default App;
