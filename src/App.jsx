import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs"; // remove if you merged into Homepage
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      {/* Navbar always at top */}
      <Navbar />

      {/* Homepage / Hero Section */}
      <Homepage />

      {/* Who We Are Section */}
      <AboutUs /> 

      {/* Services Section */}
      <Services />

      {/* Gallery Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
     
    </div>
  );
}

export default App;