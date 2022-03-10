import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
// using material ui for UI frontend
const App = () => {
  let routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );

  return (
    <Container maxWidth="lg">
      <Router>
        <Navbar />
        {routes}
      </Router>
    </Container>
  );
};

export default App;
