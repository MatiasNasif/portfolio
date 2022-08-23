import globantImg from "../assets/hornero-app-logo.png"
import ecommerceImg from "../assets/ecommerce-logo.png"
import movieImg from "../assets/cinema-logo.png"
import iconRight from "../assets/iconRight.svg";
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <>
      <div className="information-container">
        <h3>Hornero App</h3>
        <p>
          Desarrollé una aplicación móvil junto con un equipo de 5 personas como
          práctica profesional en Globant. Implementamos ágil y accesibilidad a
          un nivel WCAG AA. Tecnologías. • React • Express • MongoDB • NodeJS •
          Redux
        </p>
        <a
          href="https://github.com/MatiasNasif/Hornero-App"
          alt="globant-projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button 
          initial={{x:0}}
          whileTap={{x:"+100vw"}}
          transition={{type: "spring", stiffness:120}} 
          className="button-projects">
            Conocer más
            <img
              src={iconRight}
              style={{
                width: "20px",
                background: "white",
                borderRadius: "50%",
                marginLeft: "0.5rem",
              }}
              alt="logo flecha"
            />
          </motion.button>
        </a>
      </div>
      <div className="image-container">
        <img src={globantImg} alt="globant-logo"/>
      </div>

      <div className="information-container">
        <h3>Good Vibes</h3>
        <p>
          Desarrollé un e-commerce de ropa junto a un equipo de 5 personas en 2
          semanas. Utilizamos metodologías ágiles y las siguientes tecnologías.
          • PostgreSQL • Sequelize • Express • React • NodeJS • Redux
        </p>
        <a
          href="https://github.com/MatiasNasif/e-commerce"
          alt="eccomerce-projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button 
          initial={{x:0}}
          whileTap={{x:"+100vw"}}
          transition={{type: "spring", stiffness:120}} 
          className="button-projects">
            Conocer más
            <img
              src={iconRight}
              style={{
                width: "20px",
                background: "white",
                borderRadius: "50%",
                marginLeft: "0.5rem",
              }}
              alt="logo flecha"
            />
          </motion.button>
        </a>
      </div>
      <div className="image-container">
        <img src={ecommerceImg} alt="ecommerce-logo"/>
      </div>

      <div className="information-container">
        <h3>TMDB</h3>
        <p>
          Desarrollé esta aplicación web de forma independiente, te permite como
          usuario buscar películas, mostrar tu perfil, autenticar, guardar y
          mostrar películas favoritas. Tecnologías. • PostgreSQL • Sequelize •
          Express • React • NodeJS • Redux
        </p>
        <a
          href="https://github.com/MatiasNasif/Movie-DB"
          alt="tmdb-projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button 
          initial={{x:0}}
          whileTap={{x:"+100vw"}}
          transition={{type: "spring", stiffness:120}} 
          className="button-projects">
            Conocer más
            <img
              src={iconRight}
              style={{
                width: "20px",
                background: "white",
                borderRadius: "50%",
                marginLeft: "0.5rem",
              }}
              alt="logo flecha"
            />
          </motion.button>
        </a>
      </div>
      <div className="image-container">
        <img src={movieImg} alt="movie-logo"/>
      </div>
    </>
  );
};

export default Projects;
