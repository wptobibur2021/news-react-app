import Home from "./components/home/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Covid from "./components/covid19/Covid";
import React from "react";
import Header from "./components/header/Header";
import Feed from "./components/news-feed/Feed";
import FooterTop from "./components/footer-top/FooterTop";

function App() {
  return (
      <Router>
          <Header></Header>
          <Switch>
              <Route exact path='/'>
                  <Home></Home>
              </Route>
              <Route exact path='/covid19'>
                  <Covid></Covid>
              </Route>
          </Switch>
          <FooterTop></FooterTop>
      </Router>
  );
}

export default App;
