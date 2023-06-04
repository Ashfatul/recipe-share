import React from 'react';
import HomeBanner from '../../../Banner/HomeBanner';
import ChefList from '../Chef/ChefList';
import Search from './Search';
import RandomProduct from './RandomProduct';

const Home = () => {
    return (
        <>
            <HomeBanner/>
            <ChefList/>
            <Search />
            <RandomProduct/>
        </>
    );
};

export default Home;