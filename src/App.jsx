import { Routes, Route } from "react-router-dom";
import React from "react";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>

        {/* MAIN PAGE */}
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <AboutUs />
              <Services />
              <Projects />
              <Contact />
            </>
          }
        />

        {/* PROJECT DETAILS */}
        <Route
          path="/projects/:id"
          element={<ProjectDetails />}
        />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;