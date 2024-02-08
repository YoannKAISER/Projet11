import React from "react";
import Header from "../Layout/Header/Header";
import FeatureItemData from "../Components/Feature-itemData";

function Accueil() {
  return( 
    <>
      <Header />
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItemData />
        </section>
      </main>
    </>
  );
};

export default Accueil;