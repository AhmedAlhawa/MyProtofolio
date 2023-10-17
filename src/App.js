import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/hover.css.css';
import './components/css/animate.css';
import NavBar from "./components/NavBar";
import { Banner } from "./components/Banner";
import {Skills} from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import {Footeer} from "./components/Footeer";
import './App.css'


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <Skills/>
        <Projects />
        <Contact/>
        <Footeer />
    </div>
  );
}

export default App;
