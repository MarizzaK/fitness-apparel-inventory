import React from "react";
import Navbar from "./components/navbar";
import "./App.css"; // Importera CSS för hero-styling

// Importera bilderna istället för att använda relativ sökväg
import heroImg1 from "./assets/images/hero-img-1.png";
import heroImg2 from "./assets/images/hero-img-2.png";
import heroImg3 from "./assets/images/hero-img-3.png";

function App() {
  return (
    <div>
      <Navbar />
      {/* Hero-sektionen här */}
      <section className="hero">
        <div className="hero-images">
          <img src={heroImg2} alt="Hero Image 2" className="hero-image" />
          <img src={heroImg1} alt="Hero Image 1" className="hero-image" />

          <img src={heroImg3} alt="Hero Image 3" className="hero-image" />
        </div>
        <h2 className="hero-title">Collection</h2>
      </section>

      <main>
        <h1>Välkommen till Fitness Apparel Inventory!</h1>
        {/* Lägg till fler komponenter här senare */}
      </main>
    </div>
  );
}

export default App;
