import React from 'react';
import Banner from './Banner/Banner';
import Gallary from '../../Component/Gallary/Gallary';
import Extrasection from '../../Component/ExtraSection/Extrasection';
import Carucel from '../../Component/Gallary/CarucelSection/Carucel';
import Cateorys from '../../Component/Categorys/Cateorys';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Carucel></Carucel>
            <Cateorys></Cateorys>
            <Gallary></Gallary>
            <Extrasection></Extrasection>
        </div>
    );
};

export default Home;