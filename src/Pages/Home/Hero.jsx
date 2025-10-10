import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <section className='bg-[#f5f5f5]'>
            <div className='max-w-[1440px] mx-auto text-center p-4 pb-0 md:pt-10 lg:pt-16 flex flex-col items-center'>
                <div>
                    <h1 className='font-bold text-4xl md:text-6xl lg:text-7xl text-[#001931]'>
                        We Build
                    </h1>
                    <h1 className='font-bold text-4xl md:text-6xl lg:text-7xl text-[#001931] mt-2 md:mt-3 lg:mt-4'>
                        <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps
                    </h1>
                    <p className='text-[#627382] m-6 text-sm md:text-lg lg:text-xl'>
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                        <br />
                        Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                </div>
                <div className='flex gap-4'>
                    <Link to='https://play.google.com/store/'>
                        <button className='flex items-center justify-center gap-3 border-2 border-[#D2D2D2] rounded-md md:text-lg lg:text-xl font-semibold w-40 md:w-43 lg:w-46 py-2 cursor-pointer'>
                            <img src="/src/assets/google.png" className='w-[25px] h-[25px]' />
                            <p>Google Play</p>
                        </button>
                    </Link>
                    <Link to='https://www.apple.com/app-store/'>
                        <button className='flex items-center justify-center gap-3 border-2 border-[#D2D2D2] rounded-md md:text-lg lg:text-xl font-semibold w-40 md:w-43 lg:w-46 py-2 cursor-pointer'>
                            <img src="/src/assets/apple.png" className='w-[25px] h-[25px]' />
                            <p>App Store</p>
                        </button>
                    </Link>
                </div>
                <div className='max-w-3xl mt-6'>
                    <img src="/src/assets/hero.png" className='w-full' />
                </div>
            </div>
        </section>
    );
};

export default Hero;