import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import WhoWeAre from "./components/WhoWeAre"; // remove if you merged into Homepage
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      {/* Navbar always at top */}
      <Navbar />

      {/* Homepage / Hero Section */}
      <Homepage />

      {/* Who We Are Section */}
      <WhoWeAre /> 

      {/* Services Section */}
      <Services />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <Contact />
      
    </div>
  );
}

export default App;