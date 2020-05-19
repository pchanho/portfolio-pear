import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Conversation from "./pages/Conversation";
import Create from "./pages/Create";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./css/styles.css";

export default function App() {
  return (

      <Router>
        <div className="App">
          {/* the content */}
          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Landing />
              <Footer />
            </Route>

            <Route path="/home">
              <Nav />
              <Conversation />
              <Footer />
            </Route>

            <Route path="/create">
              <Nav />
              <Create />
              <Footer />
            </Route>

          </Switch>
        </div>
      </Router>
  );
}
