import React from 'react';
import Home from './component/Home/Home';
import PortfolioPage from './component/PorfolioPage/PortfolioPage';
import ContactPage from './component/ContactPage/ContactPage';
import Navbar from "./component/Navbar/Navbar";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route exact path={["/", "home"]}>
          <Home />
        </Route>
        <Route exact path="/portfolio">
          <PortfolioPage/>
        </Route>
        <Route exact path="/contact">
          <ContactPage/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
