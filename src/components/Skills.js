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
import iconNestJs from "../assets/nestJsLogo.svg";
import iconTypescript from "../assets/typescriptLogo.svg";
import iconAws from "../assets/awsLogo.svg";
import iconcypress from "../assets/cypressLogo.svg";
import iconDocker from "../assets/dockerLogo.svg";
import iconMongoDb from "../assets/mongodbLogo.svg";
import iconNextJs from "../assets/nextJsLogo.svg";
import iconMaterialUi from "../assets/materialUiLogo.svg";

const Skills = () => {
  return (
    <div className="title-skills-container">
      <h5 className="title-skills">Skills</h5>
      <br></br>
      <div className="skills-container">
        <div className="box-skills">
          <img src={iconJavascript} alt="icon-javascript" />
          <h6 className="text-logo">JavaScript</h6>
        </div>
        <div className="box-skills">
          <img src={iconReact} alt="icon-react" />
          <h6 className="text-logo">React</h6>
        </div>
        <div className="box-skills">
          <img src={iconRedux} alt="icon-redux" />
          <h6 className="text-logo">Redux</h6>
        </div>
        <div className="box-skills">
          <img src={iconPostgreSql} alt="icon-postgresql" />
          <h6 className="text-logo">PostgreSQL</h6>
        </div>
        <div className="box-skills">
          <img src={iconNodeJs} alt="icon-nodejs" />
          <h6 className="text-logo">NodeJS</h6>
        </div>
        <div className="box-skills">
          <img src={iconSequelize} alt="icon-sequelize" />
          <h6 className="text-logo">Sequelize</h6>
        </div>
        <div className="box-skills">
          <img src={iconGit} alt="icon-git" />
          <h6 className="text-logo">Git</h6>
        </div>
        <div className="box-skills">
          <img src={iconBootstrap} alt="icon-bootstrap" />
          <h6 className="text-logo">Bootstrap</h6>
        </div>
        <div className="box-skills">
          <img src={iconHtml} alt="icon-html" />
          <h6 className="text-logo">Html 5</h6>
        </div>
        <div className="box-skills">
          <img src={iconCss} alt="icon-css" />
          <h6 className="text-logo">Css 3</h6>
        </div>
        <div className="box-skills">
          <img src={iconNestJs} alt="icon-nestjs" />
          <h6 className="text-logo">NestJS</h6>
        </div>
        <div className="box-skills">
          <img src={iconTypescript} alt="icon-TypeScript" />
          <h6 className="text-logo">TypeScript</h6>
        </div>
        <div className="box-skills">
          <img src={iconAws} alt="icon-AWS" />
          <h6 className="text-logo">AWS</h6>
        </div>
        <div className="box-skills">
          <img src={iconcypress} alt="icon-Cypress" />
          <h6 className="text-logo">Cypress</h6>
        </div>
        <div className="box-skills">
          <img src={iconDocker} alt="icon-Docker" />
          <h6 className="text-logo">Docker</h6>
        </div>
        <div className="box-skills">
          <img src={iconMongoDb} alt="icon-MongoDB" />
          <h6 className="text-logo">MongoDB</h6>
        </div>
        <div className="box-skills">
          <img src={iconNextJs} alt="icon-NextJS" />
          <h6 className="text-logo">NextJS</h6>
        </div>
        <div className="box-skills">
          <img src={iconMaterialUi} alt="icon-MaterialUi" />
          <h6 className="text-logo">Material UI</h6>
        </div>
      </div>
    </div>
  );
};

export default Skills;
