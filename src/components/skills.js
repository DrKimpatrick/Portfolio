import React from 'react';
import styled from 'styled-components';
import staticData from './staticProjectData.json';

const TopWrapper = styled.div `
    width: 100%;
`


const SkillsWrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(2, auto);
    max-width: 60%;
    margin: 0 auto;
    color: #525c65;
    grid-column-gap: 30px;
    grid-row-gap: 10px;

    @media (max-width: 768px){
        max-width: 90%;
        grid-column-gap: 15px;
        grid-row-gap: 10px;
    }

    @media (max-width: 640px){
        max-width: 80%;
        grid-template-columns: 1fr;
    }
`
const SingleSkill = styled.div `
    display: grid;
    grid-template-columns: 20% auto;
    align-items: center;
`
const SkillIcon = styled.div `
    background-image: url(${props => props.icon});
    height: 60px;
    width: 60px;
    background-size: 60px;
    border-radius: 50%;
    background-repeat: no-repeat;
`
const SkillDescription = styled.p `
    box-shadow: 0 1px 1px -1px;
    margin: 0 0 0 15px;
`

const SkillTitle = styled.h2 `
    text-align: center;
    margin: 20px 0;
    font-weight: 600;
    background: -webkit-linear-gradient(#2193b0, #6dd5ed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Skills = () => (
    <TopWrapper id='skills'>
        <SkillTitle>MY SKILLS</SkillTitle>
        <SkillsWrapper>
        
        {
            staticData.mySkills.map(data => (
                <SingleSkill>
                    <SkillIcon icon={data.icon}></SkillIcon>
                    <SkillDescription>{data.skill}</SkillDescription>
                </SingleSkill>
            ))
        }
    </SkillsWrapper>
    </TopWrapper>
    
)

export default Skills;