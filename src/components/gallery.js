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
`
const ManyImages = styled.div `
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 5px;
    
`
const SingleImage = styled.div `
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 300px;
    max-width: 100%;

    .fadeIn {
        opacity: 0;
        animation: fadeIn 0.5s ease-in 1 forwards;
    }

`
const NestedImage = styled.img `
    width: 100%;
    height: 110px;
    :hover {
        transform: scale(1.1);
        transition: 0.8s;
    }
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
        )
    }
}


export default Gallery;