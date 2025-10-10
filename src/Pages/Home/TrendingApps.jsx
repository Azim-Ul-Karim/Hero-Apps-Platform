import React from 'react';
import Card from '../../Components/Card/Card';
import { Link } from 'react-router';

const TrendingApps = ({trending}) => {
    return (
        <section className='bg-[#f5f5f5]'>
            <div className='max-w-[1440px] mx-auto text-center p-4 md:py-10 lg:py-16 flex flex-col items-center'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                    Trending Apps
                </h2>
                <p className='text-[#627382] md:text-lg mt-6'>
                    Explore All Trending Apps on the Market developed by us
                </p>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 my-4 md:my-10'>
                    {
                        trending.map(card => <Card key={card.id} card={card}></Card>)
                    }
                </div>
                <Link to='/apps'>
                    <button className='text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8 py-2 rounded-md cursor-pointer'>
                        Show All
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default TrendingApps;