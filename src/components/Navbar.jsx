import React from "react";
import Theamtoggle from "./toggelbtn";

function Navbar() {
  return (
    <header className="navbar">
      <div>
        <h1 className=" ">🎒 Bunk Planner</h1>
        <p className="tagline">Stay above 75%. Bunk smart.</p>
      </div>
      <Theamtoggle/>
    </header>
  );
}

export default Navbar;
