import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* Hader section */}
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
      {/* Footer Section */}
    </div>
  );
};

export default App;
