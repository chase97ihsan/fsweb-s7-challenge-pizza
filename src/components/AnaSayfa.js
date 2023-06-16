import React from "react";
import { Link } from "react-router-dom";
import "./AnaSayfa.css";

const AnaSayfa = () => {
  return (
    <div className="anasayfa">
      <h2>Teknolojik Yemekler</h2>
      <p>KOD ACIKTIRIR,</p>
      <p className="pizzadoyurur">PIZZA DOYURUR</p>
      <div id="order-pizza">
        <Link to="/pizza" data-cy="acıktım" exact>
          ACIKTIM
        </Link>
      </div>
    </div>
  );
};

export default AnaSayfa;
