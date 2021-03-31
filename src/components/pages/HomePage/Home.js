import React from 'react'
import HeroSection from '../../HeroSection'
import HeroSectionTwo from '../../HeroSectionTwo'
import {useAuth} from '../../../LoginContext'


import { homeObjOne } from './Data'
import { homeObjTwo } from './Data'

function Home() {
    const {currentUser} = useAuth();
    console.log(currentUser)
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSectionTwo {...homeObjTwo} />





        </>

    )
}

export default Home
