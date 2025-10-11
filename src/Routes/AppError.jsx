import React from 'react';
import { useNavigate } from 'react-router';

const AppError = ({ compact, onReset }) => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        if (onReset) {
            onReset();
        } else {
            navigate(-1);
        }
    };

    if (compact) {
        return (
            <div className='col-span-full p-10 md:p-16 flex flex-col items-center justify-center text-center'>
                <img src="https://i.postimg.cc/BvCWfXfr/App-Error.png" />
                <h1 className='mt-10 font-semibold text-3xl md:text-4xl lg:text-5xl'>
                    OPPS!!! APP NOT FOUND
                </h1>
                <p className='md:text-lg lg:text-xl text-[#627382] mt-4 mb-6'>
                    The app you are requesting is not found on our system. Please try another apps.
                </p>
                <button className='font-semibold text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8 py-2 rounded-lg cursor-pointer' onClick={handleGoBack}>
                    Go Back!
                </button>
            </div>
        )
    }

    return (
        <section className='bg-[#f5f5f5]'>
            <div className='max-w-[1440px] mx-auto p-10 md:p-16 flex flex-col items-center text-center'>
                <img src="/assets/App-Error.png" className='' />
                <h1 className='mt-10 font-semibold text-3xl md:text-4xl lg:text-5xl'>
                    OPPS!!! APP NOT FOUND
                </h1>
                <p className='md:text-lg lg:text-xl text-[#627382] mt-4 mb-6'>
                    The app you are requesting is not found on our system. Please try another apps.
                </p>
                <button className='font-semibold text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8 py-2 rounded-lg cursor-pointer' onClick={handleGoBack}>
                    Go Back!
                </button>
            </div>
        </section>
    );
};

export default AppError;