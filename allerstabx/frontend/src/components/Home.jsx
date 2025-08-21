import React from "react";
import SearchBox from "./SearchBox";
import Overview from "./Overview";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <h1>AllerStabX</h1>
          <h3>Subheading for description or instructions</h3>
          <p>
            Body text for your whole article or post. We'll put in some lorem
            ipsum to show how a filled-out page might look: Excepteur
            efficient emerging, minim veniam anim aute carefully curated Ginza
            conversation exquisite perfect nostrud nisi intricate Content. Qui
            international first-class nulla ut. Punctual adipisicing,
            essential lovely queen tempor eiusmod irure. Exclusive izakaya
            charming Scandinavian impeccable aute quality of life soft power
            pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et
            Porter destination Toto remarkable officia Helsinki excepteur
            Basset hound. Zürich sleepy perfect consectetur.
          </p>
        </div>
        <div className="hero-right">
          <SearchBox />
        </div>
      </section>

      <Overview />
    </>
  );
} 