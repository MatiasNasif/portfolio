import globantImg from "../assets/hornero-app-logo.png";
import ecommerceImg from "../assets/ecommerce-logo.png";
import fastDeliveryImg from "../assets/fastDeliveryLogo.jpg";
import underClubLogo from "../assets/underClubLogo.jpg";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <div className="information-container">
        <h3>Fast Delivery</h3>
        <p>
          Desarrollé una aplicación que es una plataforma de gestión de entregas
          que permite a los repartidores seleccionar y entregar hasta 10
          paquetes al día. La empresa puede utilizar la aplicación para hacer
          seguimiento y gestión de sus repartidores y entregas, junto a un
          equipo de 3 personas en 3 meses. Tecnologías. Github Actions ·
          TypeScript • NestJS • Next.js • MongoDB • Mongoose • JSON Web Token
          (JWT) • Docker • Amazon Web Services (AWS) • Cypress
        </p>
        <a
          href="https://github.com/MatiasNasif/Fast-delivery"
          alt="fast-delivery-projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            initial={{ x: 0 }}
            whileTap={{ x: "+100vw" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="button-projects"
          >
            Conocer más
          </motion.button>
        </a>
      </div>
      <div className="image-container">
        <img src={fastDeliveryImg} alt="fast-delivery-logo" />
      </div>

      <div className="information-container">
        <h3>Under Club</h3>
        <p>
          Desarrollé una Página web para una importante discoteca de Buenos
          Aires donde se publica su cultura, historia y eventos, junto a un
          equipo de 2 personas en 5 meses. Utilizamos metodologías ágiles y las
          siguientes tecnologías. React.js • JavaScript • DonWeb • Docker •
          Express.js • PostgreSQL • React Hooks • Node.js • Redux.js •
          Sequelize.js
        </p>
        <a
          href="https://www.underclub.com.ar/"
          alt="under-club-projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            initial={{ x: 0 }}
            whileTap={{ x: "+100vw" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="button-projects"
          >
            Conocer más
          </motion.button>
        </a>
      </div>
      <div className="image-container">
        <img src={underClubLogo} alt="under-club-logo" />
      </div>

      <div className="information-container">
        <h3>Hornero App</h3>
        <p>
          Desarrollé una aplicación móvil junto con un equipo de 5 personas como
          práctica profesional en Globant. Implementamos metodologías ágiles y
          accesibilidad a un nivel WCAG AA. Tecnologías. • React • Express •
          MongoDB • NodeJS • Redux • JavaScript • Sequelize•js • React Hooks
        </p>
        <a
          href="https://github.com/MatiasNasif/Hornero-App"
          alt="globant-projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            initial={{ x: 0 }}
            whileTap={{ x: "+100vw" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="button-projects"
          >
            Conocer más
          </motion.button>
        </a>
      </div>
      <div className="image-container">
        <img src={globantImg} alt="globant-logo" />
      </div>
    </>
  );
};

export default Projects;
