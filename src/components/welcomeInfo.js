import React from 'react';
import { Link } from "gatsby";
import welcomeData from './staticProjectData.json';

const WelcomeInfo = () => (
    <>
        <h1>{welcomeData.introductionData.title}</h1>
        <p>{welcomeData.introductionData.description}</p>
        <Link to="/page-2/" id='videLink'>please get in touch</Link>
    </>
)

export default WelcomeInfo;