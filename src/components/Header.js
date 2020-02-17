import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <header>
      <h1>How Fast Can You Type?</h1>
      <nav>
        <Link to="/">Take The Test</Link>
        <Link to="/scores">High Scores</Link>
      </nav>
    </header>
  );
}
