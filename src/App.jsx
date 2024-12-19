import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./ReactRouter/Header/Headre";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;
