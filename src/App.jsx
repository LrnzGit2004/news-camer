import React from "react";
import NavBar from "./components/NavBar";
import NewsContainer from "./components/NewsContainer";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="text-center mt-4">
        <h1>
          Dernières<span className="badge text-bg-danger mx-2 ">Nouvelles</span>
        </h1>
      </div>
      <NewsContainer />
    </div>
  );
};

export default App;
