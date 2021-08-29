import React, { useEffect } from "react";
import WebFont from "webfontloader";
import logo from "./logo.svg";
import "./App.css";
import SocialIcons from "./SocialIcons";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Roboto",
          "Bebas Neue",
          "Bad Script",
          "Dosis",
          "Roboto Slab",
        ],
      },
    });
  }, []);
  return (
    <div className="App">
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="font-dosis uppercase text-5xl text-bensonpink text-center my-12">
          Under Construction
        </h2>
        <div className="ring flex items-center justify-center">
          <img src={logo} alt="" width="120" className="animate-pulse" />
          <span></span>
        </div>
        <p className="text-white font-roboto mt-8 text-center text-lg">
          I'm rebuilding my website. Something new and more exciting is coming.
          While I'm busy coding, you can check out my social media pages.
        </p>
        <SocialIcons className="text-white flex my-8 text-4xl" />
      </div>
    </div>
  );
}

export default App;
