import "./App.css";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "./footerSection/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Footer></Footer>
    </div>
  );
}

export default App;
