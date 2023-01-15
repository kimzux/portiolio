import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";



function App() {
  return (
    <div className="">
      <NavBar/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
     <SocialLinks/>
    </div>
  );
}

export default App;
