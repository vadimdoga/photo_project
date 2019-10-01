import React from 'react'
import { Element } from 'react-scroll'
import General from '../components/Pages/General/General'
import Contact from '../components/Pages/Contact/Contact'
import Services from "../components/Pages/Services/Services";
import AboutMe from "../components/Pages/AboutMe/AboutMe";
import Gallery from "../components/Pages/Gallery/Gallery";

export default Element = () => {
  return (
    <React.Fragment>
      <Element id='general' name='general'>
        <General />
      </Element>
      <Element id='aboutme' name='aboutme'>
        <AboutMe />
      </Element>
      <Element id='gallery' name='gallery'>
        <Gallery />
      </Element>
      <Element id='services' name='services'>
        <Services />
      </Element>
      <Element id='contact' name='contact'>
        <Contact />
      </Element>

    </React.Fragment>
  )
}