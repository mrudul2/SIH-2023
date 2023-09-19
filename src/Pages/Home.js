import React from "react";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div
      className="home-section"
      style={{ background: "rgba(214, 226, 241, 0.7)" }}
    >
      <Hero />
      <Info />
      <About />
      {/* <BookAppointment /> */}
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home;
