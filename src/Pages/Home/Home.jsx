import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import TrendingApps from './TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {

    const trendingData = useLoaderData();

    const trending = trendingData.slice(0,8);

    return (
        <div>
            <Hero></Hero>
            <Banner></Banner>
            <TrendingApps trending={trending}></TrendingApps>
        </div>
    );
};

export default Home;