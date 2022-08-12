import iconDownload from "../assets/iconDownload.svg"
import iconLinkedin from "../assets/iconLinkedin.svg"
import iconGithub from "../assets/iconGithub.svg"
import { motion } from "framer-motion"

const SocialNetworks = () => {
  return (
    <div className="social-container" id="projects">
        
        <motion.a href="https://drive.google.com/file/d/12GZyEkOQ-vdSojgpf3Wf6uZk2ZOOXci6/view?usp=sharing" target="_blank">Descargar CV
        <img src={iconDownload} alt="icon download" style={{width: "25px", background:"white", borderRadius:"50%", marginLeft: "0.5rem", padding:"3px"}} />
        </motion.a>

        <a href="https://www.linkedin.com/in/matiasnasif/" target="_blank">Linkedin
        <img src={iconLinkedin} alt="icon linkedin" style={{width: "25px", background:"white", borderRadius:"50%", marginLeft: "0.5rem", padding:"3px"}} />
        </a>

        <a href="https://github.com/MatiasNasif" target="_blank">GitHub
        <img src={iconGithub} alt="icon github" style={{width: "25px", background:"white", borderRadius:"50%", marginLeft: "0.5rem", padding:"3px"}} />
        </a>

    </div>
  )
}

export default SocialNetworks;