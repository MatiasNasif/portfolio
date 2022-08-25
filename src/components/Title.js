import iconRight from "../assets/iconRight.svg"
import { motion } from "framer-motion"

const Title = () => {
  return (
    <div id="home">
      <div className="title-container">
        <motion.h3 initial={{x:"-100vw"}} animate={{x: 0}} transition={{type: "spring", stiffness:120}} className="name-title">MATIAS NASIF</motion.h3>
        <motion.h4 initial={{x:"-100vw"}} animate={{x: 0}} transition={{type: "spring", stiffness:120}} className="stack-title">FULL STACK<br></br>DEVELOPER</motion.h4>
        <a href="#projects" alt="projects">
        <button className="button-title">Mis Proyectos
            <img src={iconRight} style={{width: "20px", background:"white", borderRadius:"50%", marginLeft:"0.5rem"}} alt="logo flecha"/>
        </button>
        </a>
    </div>
    </div>
    
  )
}

export default Title