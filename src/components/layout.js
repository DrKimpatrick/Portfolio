import React from "react"
import PropTypes from "prop-types"
import Header from './header';
// import styled from 'styled-components';
import './layout.css';
import About from "./about";
import Projects from "./projects";
import projectStaticData from './staticProjectData.json';
import Skills from "./skills";
import Gallery from "./gallery";
import Footer from "./footer";


const Layout = ({children}) => (
      <>
        <div className='Hero'>
          <Header/>
          <main className='HeroGroup' id='home'>{children}</main>
        </div>
        <Projects/>
        <About
          image={require('../images/patrick.jpg')}
          logo={require('../images/patrick.jpg')}
          title={projectStaticData.professionalSurmaryData.title}
          text={projectStaticData.professionalSurmaryData.description}
        />
        <Skills/>
        <Gallery/>
        <Footer/>
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
