import { motion } from "framer-motion"

const Title = () => {
  return (
    <div id="home">
      <div className="title-container">
        <motion.h3 initial={{x:"-100vw"}} animate={{x: 0}} transition={{type: "spring", stiffness:120}} className="name-title">MATIAS NASIF</motion.h3>
        <motion.h4 initial={{x:"-100vw"}} animate={{x: 0}} transition={{type: "spring", stiffness:120}} className="stack-title">FULL STACK<br></br>DEVELOPER</motion.h4>
        <a href="#projects" alt="projects">
        <button className="button-title">Mis Proyectos
        </button>
        </a>
    </div>
    </div>
    
  )
}

export default Title