import React from 'react';

const Banner = () => {
    return (
        <section className='text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col items-center text-center p-4 py-10 md:p-14 lg:p-20'>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>
                Trusted by Millions, Built for You
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
                <div>
                    <p className='text-sm md:text-base'>Total Downloads</p>
                    <h1 className='font-extrabold text-4xl md:text-5xl lg:text-6xl m-3'>29.6M</h1>
                    <p className='text-sm md:text-base'>21% more than last month</p>
                </div>
                <div>
                    <p className='text-sm md:text-base'>Total Reviews</p>
                    <h1 className='font-extrabold text-4xl md:text-5xl lg:text-6xl m-3'>906K</h1>
                    <p className='text-sm md:text-base'>46% more than last month</p>
                </div>
                <div>
                    <p className='text-sm md:text-base'>Active Apps</p>
                    <h1 className='font-extrabold text-4xl md:text-5xl lg:text-6xl m-3'>132+</h1>
                    <p className='text-sm md:text-base'>31 more will Launch</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;