import React from 'react';
import Banner from './Banner/Banner';
import Gallary from '../../Component/Gallary/Gallary';
import Extrasection from '../../Component/ExtraSection/Extrasection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallary></Gallary>
            <Extrasection></Extrasection>
        </div>
    );
};

export default Home;