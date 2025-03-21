import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Program from "./Components/Program/Program";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        {" "}
        <Title subTitle="Our PRORAM" Title="What We Offer" />
        <Program />
        <About />
        <Title subTitle="Gallery" Title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIAL" Title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact us" Title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
