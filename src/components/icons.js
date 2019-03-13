import React from 'react';
import styled from 'styled-components';

const IconTopWrapper = styled.div `
  margin: 100px 0;

  @media (max-width: 768px){
    margin: 50px 0;
  }
`
const IconInnerWrapper = styled.div `
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-items: center;

  @media (max-width: 768px){
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 10px;
    z-index: 1;
  }
`
const IconLink = styled.a ``
const IconImage = styled.img `
  background-color: none;
  border-radius: 50%;
  box-shadow: 2px 2px 10px black;
`

const Icons = () => (
    <IconTopWrapper>
        <IconInnerWrapper>
            <IconLink href='https://github.com/DrKimpatrick'><IconImage src={require('../images/github2.png')} alt='social' width='50px' /></IconLink>
            <IconLink href='https://web.facebook.com/dr.kimpatrick'><IconImage src={require('../images/facebook2.png')} alt='social' width='50px' /></IconLink>
            <IconLink href='https://twitter.com/DrKimpatrick'><IconImage src={require('../images/twitter2.png')} alt='social' width='50px' /></IconLink>
            <IconLink href='https://www.linkedin.com/in/drkimpatrick'><IconImage src={require('../images/linkedin.png')} alt='social' width='50px' /></IconLink>
            <IconLink href='https://profile.codersrank.io/user/drkimpatrick/asOthersSee'><IconImage src={require('../images/coderank.jpg')} alt='social' width='50px' /></IconLink>
        </IconInnerWrapper>
    </IconTopWrapper>
)

export default Icons;