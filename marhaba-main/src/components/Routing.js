import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import { Loyalty } from '../pages/Loyalty';
import { OurTeam } from '../pages/OurTeam';
import Business from '../pages/Business'
import Error from '../pages/Error';
import Letstalk from '../pages/Letstalk';
import '../style.css'
import { Footer } from './Footer';
import Digital from '../pages/Digital';

const Routing = () => {
    return (
        <div className='routes d-flex flex-column'>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/business" element={<Business />} />
                <Route exact path="/digital" element={<Digital />} />
                <Route exact path="/loyalty" element={<Loyalty />} />
                <Route exact path="/teams" element={<OurTeam />} />
                <Route exact path="/letstalk" element={<Letstalk />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer/>
        </div>
    )
}

export default Routing