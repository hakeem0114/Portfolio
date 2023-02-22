//Import React Library 
import React from 'react'

//Custom Components: Sections
import { NavBar } from "./sections/navBar/NavBar";
import {Header } from "./sections/header/Header";
import { About } from "./sections/about/About";
import { Projects } from "./sections/projects/Projects";
import { Contact } from "./sections/contact/Contact";
import { Footer } from "./sections/footer/Footer";
import { FloatingNav } from "./sections/floatingNav/FloatingNav";


//Css
import './App.css'

function App() {

  return (
    <div className="App">
        <NavBar/>
        <Header />
        <About />
        <Projects/>
        <Contact/>
        <Footer/>
        <FloatingNav/>
    </div>
  )
}

export default App
