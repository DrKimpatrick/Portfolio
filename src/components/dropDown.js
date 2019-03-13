import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components';
import './dropDown.css';

const TopWrapper = styled.div ``
const Wrapper = styled.div `
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 10px;
    background: white;
    width: 100%;
    align-items: center;
    opacity: 0.9;
`
const Links = styled.a `
    text-align: center;
    border-top: 1px solid #abbaab;
    font-size: 18px;
    padding: 0 0 10px;
`

class DropDown extends React.Component {
    componentDidMount(){
        // Hide and show the dropdown
        let humburgerIcon = document.getElementById('humburgerIcon');
        humburgerIcon.addEventListener('click', this.handleDropDown)

        // Dismiss the drop when dropdown items are clicked
        let dropDownItems = document.querySelectorAll('#dropItems a');
        dropDownItems.forEach(item => {
            item.addEventListener('click', this.handleDropDown)
        })
    }

    handleDropDown = () => {
        let dropDown = document.querySelector('#dropDown');
        if(dropDown.classList.contains('hideDropDown')){
            dropDown.classList.remove('hideDropDown');
            dropDown.classList.add('showDropDown');
        }else {
            dropDown.classList.remove('showDropDown');
            dropDown.classList.add('hideDropDown');
        }
    }
    render(){
        return (
            <TopWrapper id='dropDown' className='hideDropDown'>
                <Wrapper id='dropItems'>
                    <Links href='#projects'>Projects</Links>
                    <Links href='#skills'>skills</Links>
                    <Links href='#gallery'>Gallery</Links>
                </Wrapper>
            </TopWrapper>
        )
    }
}

export default DropDown;