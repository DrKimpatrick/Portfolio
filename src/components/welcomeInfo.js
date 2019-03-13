import React from 'react';
import welcomeData from './staticProjectData.json';
import styled, { keyframes } from 'styled-components';

const welcomeAnimation = keyframes `
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`
const WrapperTop = styled.div ``
const Title = styled.h2 `
    margin: 0 0 5%;
    font-size: 50px;
    font-weight: 700;
    line-height: 1.2;
    background: -webkit-linear-gradient(rgba(48, 69, 92, 0.9), #6dd5ed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0;
    animation: ${welcomeAnimation} 0.8s ease-in 0s forwards;

    @media (max-width: 768px){
        font-size: 30px;
    }
`
const Description = styled.p `
    margin: 0 0 20%;
    font-size: 26px;
    font-weight: 700;
    line-height: 1.2;
    background: -webkit-linear-gradient(rgba(48, 69, 92, 0.9), #525c65);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0;
    animation: ${welcomeAnimation} 0.8s ease-in 0s forwards;

    @media (max-width: 768px){
        font-size: 20px;
    }
`
const Button = styled.a `
    font-size: 17px;
    font-weight: 600;
    color: white;
    background: #525c65;
    padding: 9px 20px;
    text-transform: uppercase;
    border: 1px solid rgb(255, 255, 255, 0.25);
    border-radius: 20px;
    text-decoration: none;
    opacity: 0;
    animation: ${welcomeAnimation} 0.8s ease-in-out 0s forwards;

    :hover {
        background-color: white;
        color: #525c65;
        box-shadow: 0 0 5px black;
        transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
    
    @media (max-width: 768px){
        font-size: 14px;
    }

    @media (max-width: 400px){
        font-size: 10px;
    }

`

const WelcomeInfo = () => (
    <WrapperTop>
        <Title>{welcomeData.introductionData.title}</Title>
        <Description>{welcomeData.introductionData.description}</Description>
        <Button href="#contact" id='contactButton'>please get in touch</Button>
    </WrapperTop>
)

export default WelcomeInfo;