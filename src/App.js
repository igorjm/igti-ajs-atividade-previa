import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Routes from "./routes";

const App = () => (
  <>
    <Header />
    <Router>
      <Routes />
    </Router>
    <Footer />
  </>
);

export default App;
