import React from 'react';
import staticData from './staticProjectData.json';
import styled from 'styled-components';
import styles from './gallery.css';

const GalleryTopWrapper = styled.div `
    height: 500px;
    margin: auto;
    display: grid;
    grid-template-rows: 65% auto;
    max-width: 60%;
    margin: 30px auto;
    box-shadow: 0 0 5px -2px;

    @media (max-width: 1098px){
        max-width: 80%;
    }

    @media (max-width: 768px){
        max-width: 90%;
    }
`
const ManyImages = styled.div `
    display: grid;
    grid-template-columns: repeat(12, auto);
    grid-gap: 5px;

    @media (max-width: 768px){
        grid-template-columns: repeat(8, auto);
    }

    @media (max-width: 400px){
        grid-template-columns: repeat(6, auto);
    }
`
const SingleImage = styled.div `
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 300px;
    max-width: 100%;

`
const NestedImage = styled.img `
    width: 100%;
    height: 80px;
    :hover {
        transform: scale(1.1);
        transition: 0.8s;
    }

    @media (max-width: 768px){
        height: 60px;
    }

    @media (max-width: 768px){
        height: 40px;
    }

    @media (max-width: 400px){
        height: 30px;
    }
`

const GalleryTitle = styled.h2 `
    text-align: center;
    margin: 20px 0;
    font-weight: 600;
    background: -webkit-linear-gradient(#2193b0, #6dd5ed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`


class Gallery extends React.Component {
    state = {
        src: staticData.gallery[0].src
    }
    componentDidMount(){
        const imgs = document.querySelectorAll('.imgs img');

        // add onClick on all images
        imgs.forEach(img => img.addEventListener('click', this.imgClick))

        // set first image opacity
        imgs[0].style.opacity = 0.5;
    }

    imgClick = (e) => {
        const imgs = document.querySelectorAll('.imgs img');

        // reset all images to default opacity
        imgs.forEach(img => img.style.opacity = 1)
        const current = document.querySelector('#currentImage');
        this.setState({src: e.target.src, clickedImage: e.target});
        current.src = this.state.src;
        e.target.style.opacity = 0.5;

        // add fade-in class
        current.classList.add('fade-in');

        // remove fade-in class after 0.5s 
        setTimeout(() => current.classList.remove('fade-in'), 500)
    }
    render(){
        return (
            <div>
                <GalleryTitle>Gallery</GalleryTitle>
                <GalleryTopWrapper id="gallery">
                <SingleImage image={this.state.src} id="currentImage"></SingleImage>
                <ManyImages className='imgs'>
                    {
                        staticData.gallery.map((image, index) => (
                            <NestedImage src={image.src} key={index} />
                        ))
                    }
                    
                </ManyImages>
            </GalleryTopWrapper>
            </div>
            
        )
    }
}


export default Gallery;