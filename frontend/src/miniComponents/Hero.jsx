/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <h1>Cozinheiros do Bem FF</h1>
        <h3>Combatemos a fome e a desigualdade com muito amor e comida boa.</h3>
        <p>
          
“Aqui o amor prevalece em cada sorriso, em cada colherada, em cada ingrediente escolhido cuidadosamente, porque o povo não precisa de esmolas, precisa de amor”
        </p>
        <Link to={"/donate"} className="btn">
          Ajude a campanha
        </Link>
      </div>
      <div className="banner">
        <img src="/hero.png" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;