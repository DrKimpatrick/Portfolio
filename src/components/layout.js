import React from "react"
import PropTypes from "prop-types"
import Header from './header';
import styled from 'styled-components';
import './layout.css';
import About from "./about";
import Projects from "./projects";
import projectStaticData from './staticProjectData.json';
import Skills from "./skills";
import Gallery from "./gallery";
import Footer from "./footer";
import WelcomeInfo from "./welcomeInfo";
import Icons from "./icons";


const Hero = styled.div `
  background: url(${props => props.image});
  height: 800px;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 700px;
  }
`

const HeroGroup = styled.div `
  margin: 0 10%;
  max-width: 500px;
  padding: 200px 50px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`

const Layout = () => (
      <>
        <Hero image={require('../images/background6.jpg')}>
          <Header/>
          <HeroGroup>
            <WelcomeInfo/>
            <Icons/>
          </HeroGroup>
        </Hero>
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
