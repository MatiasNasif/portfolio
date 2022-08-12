import React from "react";
import iconWhattsap from "../assets/iconWhattsap.svg";
import iconMail from "../assets/iconMail.svg";
import iconUp from "../assets/iconUp.svg";
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer id="contact">
    <div className="footer-container">
      <a href="#home">
        <motion.img
          whileTap ={{scale:1.5, background:"#0077b6"}}
          src={iconUp}
          style={{
            width: "35px",
            borderRadius: "50%",
            background: "white",
            marginBottom: "10px"
          }}
        />
      </a>
      <h5>¿Estás interesado en mi perfil?</h5>
      <h3>Trabajemos juntos</h3>
      <div className="links-footer">
        <a href="https://wa.me/+5491165761087" target="_blank">
          <motion.img
            whileTap ={{scale:1.5, background:"#0077b6"}}
            src={iconWhattsap}
            alt="icon-wattsap"
            style={{
              width: "25px",
              background: "white",
              borderRadius: "50%",
              marginLeft: "0.5rem",
              padding: "3px",
            }}
          />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=matiasezequielnasif@gmail.com"
          target="_blank"
        >
          <motion.img
           whileTap ={{scale:1.5, background:"#0077b6"}}
            src={iconMail}
            alt="icon-wattsap"
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
    </footer>
  );
};

export default Footer;
