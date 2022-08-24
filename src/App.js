import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Particle from './components/Particle';
import Title from './components/Title';
import SocialNetworks from './components/SocialNetworks';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Skills from './components/Skills';



function App() {
  return (
    <div>
    <Particle/>
    <NavBar/>
    <Title/>
    <SocialNetworks/>
    <Projects/>
    <AboutMe/>
    <Skills/>
    <Footer/>
    </div>
  );
}

export default App;
