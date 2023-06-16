import React from "react";
import "./SiparisVer.css";
import { NavLink } from "react-router-dom";
import Form from "./Form";

const SiparisVer = () => {
  return (
    <div>
      <header className="headerr">
        <h2>Teknolojik Yemekler</h2>
        <div className="navv">
          <NavLink to="/" exact>
            Ana Sayfa
          </NavLink>
          <span>-</span>
          <NavLink
            to="/pizza"
            style={(isActive) => {
              if (isActive) {
                return {
                  fontWeight: 700,
                };
              } else {
                return {};
              }
            }}
            exact
          >
            Sipariş Oluştur
          </NavLink>
          <span>-</span>
          <NavLink to="/pizza/siparisim" exact>
            Siparişim
          </NavLink>
        </div>
      </header>
      <Form></Form>
    </div>
  );
};

export default SiparisVer;
