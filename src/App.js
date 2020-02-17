import React from "react";

import "./App.css";
import Header from "./components/Header";
import Game from "./pages/Game";
import { Switch, Route } from "react-router-dom";
import HighScore from "./pages/HighScore";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <Game />
        </Route>
        <Route path="/scores">
          <HighScore />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
