import React from 'react';
import styled from 'styled-components';
import projectStaticData from './staticProjectData.json';

const ProjectTopWrapper = styled.div ``
const ProjectWrapper = styled.div `
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 30px;
  justify-content: space-between;
  margin: 0 10%;
  max-width: 80%;
  height: 100%;

  @media (max-width: 1098px){
    grid-template-columns: repeat(2, auto);
    grid-gap: 25px;
    margin: 0 10%;
    max-width: 80%;
  }

  @media (max-width: 640px){
    grid-template-columns: repeat(1, auto);
    grid-gap: 20px;
    margin: 0 15%;
    max-width: 70%;
  }

  @media (max-width: 400px){
    grid-template-columns: repeat(1, auto);
    grid-gap: 20px;
    margin: 0 5%;
    max-width: 90%;
  }
  
`

const TopWrapper = styled.div `
    width: 100%;
    display: grid;
    grid-template-rows: 80px auto;
    border-radius: 5px;
    margin: 20px 0;
    box-shadow: 1px 1px 20px -4px;
    position: relative;
    cursor: pointer;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    border-top: 10px solid #02b3e4;

    :hover {
        box-shadow: 1px 2px 12px -4px;
        ${'' /* transform: scale(1.1); */}
    }

    @media (max-width: 768px){
        margin: 5px 0;
    }

    @media (max-width: 400px){
            margin: 5px 0;
    }
   
`
const LanguageIcon = styled.img `
    margin: 0 auto;
    align-self: end;
    height: 50px;
`
const ProjectDetails = styled.div `
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 100%;
    
`
const ProjectTitle = styled.h2 `
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    margin: 0 auto 10px;
    background: -webkit-linear-gradient(#2193b0, #6dd5ed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const ProjectDescription = styled.p `
    text-align: center;
    color: rgba(27, 39, 53, 0.7);
    padding: 0 2px;
    margin: 0 auto 20px;

`

const SmallCard = styled.div `
    height: 40px;
    width: 40px;
    background-color: #02b3e4;
    opacity: 0.9;
    position: absolute;
    top: 20px;
    left: -10px;
    border-radius: 0px;
  
`
const TriangleCard = styled.div `
    width: 0;
	height: 0;
    top: 20px;
    left: -10px;
	border-top: 20px solid transparent;
	border-left: 30px solid #555;
	border-bottom: 20px solid transparent;
    position: absolute;
    z-index: -1;
`

const Title = styled.h2 `
  text-align: center;
  font-size: 40px;
  background: -webkit-linear-gradient(#2193b0, #6dd5ed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px){
    font-size: 20px;
  }
`

const Projects = () => (
    <ProjectTopWrapper id="projects">
        <Title>Famous Projects</Title>
        <ProjectWrapper>
            {
                projectStaticData.projectData.map(data => (
                    <TopWrapper image={data.image}>
                        <SmallCard></SmallCard>
                        <TriangleCard></TriangleCard>
                        <LanguageIcon src={data.icon} />
                        <ProjectDetails>
                            <ProjectTitle>{data.title}</ProjectTitle>
                            <ProjectDescription>{data.description}</ProjectDescription>
                        </ProjectDetails>
                    </TopWrapper>
                ))
            }
        </ProjectWrapper>
    </ProjectTopWrapper>
)

export default Projects;
