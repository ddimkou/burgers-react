import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import About from "./components/About";
import PgNotFound from "./components/PgNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="https://ddimkou.github.io/burgers-react/"
            element={<Home />}
          />
          <Route
            path="https://ddimkou.github.io/burgers-react/contact"
            element={<Contact />}
          />
          <Route
            path="https://ddimkou.github.io/burgers-react/about"
            element={<About />}
          />
          <Route
            path="https://ddimkou.github.io/burgers-react/menu"
            element={<Menu />}
          />
          <Route path="/*" element={<PgNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
