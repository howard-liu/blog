import React from "react";
import { BrowserRouter as HashRouter, Route, Link } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Blogs from "./Blogs";
import PressureCooker from "./blogs/PressureCooker";
import ToggleXWorkflow from "./blogs/ToggleXWorkflow";
import Ets2 from "./blogs/Ets2";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app-borders">
        <HashRouter>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pressure-cooker" component={PressureCooker} />
          <Route path="/toggle-x-workflow" component={ToggleXWorkflow} />
          <Route path="/ets2" component={Ets2} />
          <Route path="/blogs" component={Blogs} />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
