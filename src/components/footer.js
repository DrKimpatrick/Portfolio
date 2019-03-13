import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
    display: grid;
    align-items: center;
    padding: 30px 0 30px;
    border-top: 1px solid #abbaab;
    text-align: center;
    color: rgba(27, 39, 53, 0.9);

`

const Footer = () => (
    <Wrapper>
        
        dr.kimpatrick © {new Date().getFullYear()}, All rights reserved
        
    </Wrapper>
)

export default Footer;