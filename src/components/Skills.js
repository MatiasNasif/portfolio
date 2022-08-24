import iconBootstrap from "../assets/iconBootstrap.svg";
import iconCss from "../assets/iconCss.svg";
import iconGit from "../assets/iconGit.svg";
import iconHtml from "../assets/iconHtml.svg";
import iconJavascript from "../assets/iconJavascript.svg";
import iconNodeJs from "../assets/iconNodeJs.svg";
import iconPostgreSql from "../assets/iconPostgreSql.svg";
import iconReact from "../assets/iconReact.svg";
import iconRedux from "../assets/iconRedux.svg";
import iconSequelize from "../assets/iconSequelize.svg";

const Skills = () => {
  return (
    <div className="title-skills-container">
    <h5 className="title-skills">Skills</h5><br></br>
    <div className="skills-container">
      <img src={iconJavascript} alt="icon-javascript" />
      <img src={iconReact} alt="icon-react" />
      <img src={iconRedux} alt="icon-redux" />
      <img src={iconPostgreSql} alt="icon-postgresql" />
      <img src={iconNodeJs} alt="icon-nodejs" />
      <img src={iconSequelize} alt="icon-sequelize" />
      <img src={iconGit} alt="icon-git" />
      <img src={iconBootstrap} alt="icon-bootstrap" />
      <img src={iconHtml} alt="icon-html" />
      <img src={iconCss} alt="icon-css" />
    </div>
    </div>
  );
};

export default Skills;
