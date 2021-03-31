import React, { useState, useContext } from 'react'
import { LoginContext } from '../../LoginContext'
import './AboutUs.css';

import AboutCard from '../pages/AboutPage/Aboutcard'

const Aboutpage = () => {
    // const [user, setUser] = useContext(LoginContext);
    return (
        <div className="bigContainerAbout" >
        <div className="container2">
        <AboutCard name="Wasif Salamat" info="Peoples know me as a highly motivated, creative, and versatile. Especially skilled in 
        creating and directing corporate and new business."/>
        <AboutCard name="Sulaiman Khan" info="Capable of quick learning and delivering solutions as an individual and as part of a team. 
        Strong knowledge of ReactJs and New Buisness." />
        </div>

        <div className="container2" style={{marginTop:"105px"}}>
        <AboutCard name="Abdullah Shah" info="Peoples know me as a highly motivated, creative, and versatile. Especially skilled in 
        creating and directing corporate and new business."/>
        <AboutCard name="Tanveer Abbas" info="Peoples know me as a highly motivated, creative, and versatile. Especially skilled in 
        creating and directing corporate and new business."/>
        </div>

        <div className="newContainer" style={{marginBottom:"75px"}}>

        <AboutCard name="Hasnat Ali" info="Peoples know me as a highly motivated, creative, and versatile. Especially skilled in 
        creating and directing corporate and new business."/>
        </div>


    </div>
    )
}
export default Aboutpage;