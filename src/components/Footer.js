import React from "react";
import iconWhattsap from "../assets/iconWhattsap.svg";
import iconMail from "../assets/iconMail.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <h5>¿Estás interesado en mi perfil?</h5>
      <h3>Trabajemos juntos</h3>
      <div className="links-footer">
        <a href="">
          <img
            src={iconWhattsap}
            alt="icon-wattsap"
            target="_blank"
            style={{
              width: "25px",
              background: "white",
              borderRadius: "50%",
              marginLeft: "0.5rem",
              padding: "3px",
            }}
          />
        </a>
        <a href="">
          <img
            src={iconMail}
            alt="icon-wattsap"
            target="_blank"
            style={{
              width: "25px",
              background: "white",
              borderRadius: "50%",
              marginLeft: "0.5rem",
              padding: "3px",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
