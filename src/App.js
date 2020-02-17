import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import TypingTest from "./pages/TypingTest";

function App() {
  return (
    <div className="App">
      <Header />
      <TypingTest />
    </div>
  );
}

export default App;
