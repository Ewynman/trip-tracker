import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Login from "./login";
import Signup from "./Signup";
import AuthHome from "./AuthHome";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/AuthHome">
            <AuthHome />
          </Route>
          <Route path="/login">
            <Navbar />
            <Login />
          </Route>
          <Route path="/signup">
            <Navbar />
            <Signup />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
