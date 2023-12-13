// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-neutral-300 to-stone-200 py-6">
      <div className="container mx-auto">
        <Link to="/">
          <h1 className="text-2xl text-zinc-600 font-bold">Mi salud mental</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
