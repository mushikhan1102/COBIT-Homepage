import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|landing)">
          <Landing
            place="CoBIT"
            image2="/img/image-3@2x.png"
            place1Props={landingData.place1Props}
            place2Props={landingData.place2Props}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const place1Data = {
    children: "register",
};

const place2Data = {
    children: "sign in",
    className: "register",
};

const landingData = {
    place1Props: place1Data,
    place2Props: place2Data,
};

