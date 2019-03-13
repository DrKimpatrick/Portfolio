import React from 'react';
import styled from 'styled-components';

const HumbTopWrapper = styled.div `
    height: 50px;
    width: 50px;
    display: grid;
    grid-template-rows: auto;
    align-items: center;
`
const Hspan = styled.span `
    width: 100%;
    background: rgba(27, 39, 53, 0.9);
    height: 5px;
`

const Humburger = () => (
    <HumbTopWrapper>
        <Hspan></Hspan>
        <Hspan></Hspan>
        <Hspan></Hspan>
    </HumbTopWrapper>
)

export default Humburger;