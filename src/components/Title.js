import iconRight from "../assets/iconRight.svg"

const Title = () => {
  return (
    <div className="title-container">
        <h3 className="name-title">MATIAS</h3>
        <h4 className="stack-title">FULL STACK<br></br>DEVELOPER</h4>
        <button className="button-title">Mis Proyectos
            <img src={iconRight} style={{width: "20px", background:"white", borderRadius:"50%", marginLeft: "0.5rem"}} alt="logo flecha"/>
        </button>
    </div>
  )
}

export default Title