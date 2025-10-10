import React from 'react';
import { useNavigate } from 'react-router';

const PathError = () => {

    const navigate = useNavigate();

    return (
        <section className='bg-[#f5f5f5]'>
            <div className='max-w-[1440px] mx-auto p-10 md:p-16 flex flex-col items-center text-center'>
                <img src="/src/assets/error-404.png" />
                <h1 className='mt-10 font-semibold text-3xl md:text-4xl lg:text-5xl'>
                    Oops, page not found!
                </h1>
                <p className='md:text-lg lg:text-xl text-[#627382] mt-4 mb-6'>
                    The page you are looking for is not available.
                </p>
                <button className='font-semibold text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8 py-2 rounded-lg cursor-pointer' onClick={() => navigate(-1)}>
                    Go Back!
                </button>
            </div>
        </section>
    );
};

export default PathError;