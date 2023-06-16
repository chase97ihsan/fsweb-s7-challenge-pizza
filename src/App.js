import React from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import SiparisVer from "./components/SiparisVer";
import AnaSayfa from "./components/AnaSayfa";
import Siparisim from "./components/Siparisim";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <AnaSayfa />
          </Route>
          <Route path="/pizza" exact>
            <SiparisVer />
          </Route>
          <Route path="/pizza/siparisim" exact>
            <Siparisim />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
