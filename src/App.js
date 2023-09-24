import React from "react";
import About from "./components/About";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div basename={'/react-app'}>
      <Navbar />
      <Hero />
      <About />
      <Search />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
