import React from 'react';
import { Link } from 'react-router';

const Footer = () => {

    const footerTitle = { color: 'white' }
    const footerContent = { color: '#A1A1AA' }

    return (
        <section className='bg-[#001931]'>

            <div className='max-w-[1440px] mx-auto p-4 md:pt-7 md:pb-3 lg:p-4 lg:pt-10 grid grid-cols-1 md:grid-cols-5 gap-8'>

                <div className='md:col-span-2'>
                    <div className='flex items-center gap-2'>
                        <img src="/src/assets/logo.png" alt="Logo" className='w-[40px] h-[40px]' />
                        <h4 style={footerTitle} className='md:text-lg font-bold'>HERO.IO</h4>
                    </div>
                    <p style={footerContent} className='text-sm md:text-base mt-4 max-w-96'>
                        We build productive, meaningful, and inspiring apps designed to make your daily life simpler, smarter, and more exciting.
                    </p>
                </div>

                <div>
                    <h3 style={footerTitle} className='font-medium'>
                        Quick Links
                    </h3>
                    <div className='flex flex-col text-sm mt-4 space-y-2' style={footerContent}>
                        <Link to='/'>Home</Link>
                        <Link to='/apps'>Apps</Link>
                        <Link to='/installation'>Installation</Link>
                    </div>
                </div>

                <div>
                    <h3 style={footerTitle} className='font-medium'>
                        Resources
                    </h3>
                    <div className='flex flex-col text-sm mt-4 space-y-2' style={footerContent}>
                        <Link>Privacy Policy</Link>
                        <Link>Terms of Service</Link>
                        <Link>FAQ</Link>
                    </div>
                </div>

                <div>
                    <h3 style={footerTitle} className='font-medium'>
                        Follow Us
                    </h3>
                    <div className='text-sm mt-4' style={footerContent}>
                        <Link className='rounded-full bg-white mr-3.5'><i className="fa-brands fa-x-twitter"></i></Link>
                        <Link className='rounded-full bg-white mr-3.5'><i className="fa-brands fa-linkedin-in"></i></Link>
                        <Link className='rounded-full bg-white mr-3.5'><i className="fa-brands fa-facebook-f"></i></Link>
                        <Link className='rounded-full bg-white'><i className="fa-regular fa-envelope"></i></Link>
                    </div>
                </div>
            </div>

            <div className='max-w-[1440px] mx-auto p-4'>
                <hr className='border border-gray-700' />
                <p className='text-white text-center text-sm md:text-base pt-4'>
                    Copyright &copy; 2025 - All rights reserved
                </p>
            </div>
        </section>
    );
};

export default Footer;