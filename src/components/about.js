import React from 'react';
import styled from 'styled-components';
import StaticWave from './staticWave';

const SectionGroup = styled.div`
    display: grid;
    grid-template-rows: 30% auto;
    ${'' /* background:  rgba(27, 39, 53, 0.9); // #525c65; */}
    background: -webkit-linear-gradient(rgba(27, 39, 53, 0.9), #ffffff);
    -webkit-text-fill-color: transparent;
    height: 650px;
    position: relative;
    grid-gap: 30px;

    @media (max-width: 1098px){
        height: 700px;
    }

    @media (max-width: 768px){
        grid-template-rows: 25% auto;
        height: 750px;
    }


`
const SectionLogo = styled.img `
    width:100px;
    height: 100px;
    align-self:end;
    margin: 0 auto; // positioning to center
    background-color: red;
`
const SectionText = styled.p `
    margin: 0;
    text-align: center;
    background: -webkit-linear-gradient(black, #6dd5ed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
`
const WaveBottom = styled.div `
    position: absolute;
    bottom: -6px;
    width: 100%;
`

const WaveTop = styled.div `
    position: absolute;
    top:-7px;
    width: 100%;
    transform: rotate(180deg);

`
const ProfessionalSummary = styled.h2 `
    text-align: center;
    align-self: end;
    margin: 0 auto;
    font-weight: 600;
    background: -webkit-linear-gradient(#2193b0, #6dd5ed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const ProfessionalInfo = styled.div `
    display: grid;
    grid-template-rows: 20% auto;
    grid-gap: 20px;
    margin: 0 auto;
    max-width: 60%;
    
`


const About = props => (
    <SectionGroup image={props.image} id="about">
        <WaveTop><StaticWave/></WaveTop>
        <WaveBottom><StaticWave /></WaveBottom>
        <ProfessionalSummary>PROFESSIONAL SUMMARY</ProfessionalSummary>
        <ProfessionalInfo>
            <SectionLogo src={props.logo}/>
            <SectionText>{props.text}</SectionText>
        </ProfessionalInfo>  
    </SectionGroup>
)

export default About;