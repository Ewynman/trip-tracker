import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Login from "./login";
import Signup from "./Signup";
import AuthHome from "./AuthHome";
import AuthProfile from "./Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/AuthHome">
            <AuthHome />
          </Route>
          <Route path="/profile">
            <AuthProfile />
          </Route>
          <Route path="/login">
            <Navbar />
            <Login />
            <Footer />
          </Route>
          <Route path="/signup">
            <Navbar />
            <Signup />
            <Footer />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
            <Footer />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
