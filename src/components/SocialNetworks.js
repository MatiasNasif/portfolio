import iconDownload from "../assets/iconDownload.svg"
import iconLinkedin from "../assets/iconLinkedin.svg"
import iconGithub from "../assets/iconGithub.svg"

const SocialNetworks = () => {
  return (
    <div className="social-container" id="projects">
        
        <a href="https://drive.google.com/file/d/1rEnKxrybkttIqHKfmDSfXhrsGnQemz3w/view?usp=share_link" target="_blank" rel="noopener noreferrer">Descargar CV
        <img src={iconDownload} alt="icon download" style={{width: "25px", background:"white", borderRadius:"50%", marginLeft: "0.5rem", padding:"3px"}} />
        </a>

        <a href="https://www.linkedin.com/in/matiasnasif/" target="_blank" rel="noopener noreferrer">Linkedin
        <img src={iconLinkedin} alt="icon linkedin" style={{width: "25px", background:"white", borderRadius:"50%", marginLeft: "0.5rem", padding:"3px"}} />
        </a>

        <a href="https://github.com/MatiasNasif" target="_blank" rel="noopener noreferrer">GitHub
        <img src={iconGithub} alt="icon github" style={{width: "25px", background:"white", borderRadius:"50%", marginLeft: "0.5rem", padding:"3px"}} />
        </a>

    </div>
  )
}

export default SocialNetworks;