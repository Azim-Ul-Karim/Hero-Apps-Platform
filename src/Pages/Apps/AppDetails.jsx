import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import RatingsChart from './RatingsChart';
import { toast, ToastContainer } from 'react-toastify';
import AppError from '../../Routes/AppError';

const AppDetails = () => {

    const detail = useLoaderData();

    if (!detail) {
        return <AppError></AppError>;
    }

    const { id, image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = detail;

    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        const alreadyInstalled = installedApps.some(a => a.id === id);
        setInstalled(alreadyInstalled);
    }, [id]);

    const handleInstall = () => {
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        if (!installedApps.some(a => a.id === id)) {
            installedApps.push(detail);
            localStorage.setItem('installedApps', JSON.stringify(installedApps));
            setInstalled(true);
            toast.success(`Installed successfully!`);
        } else {
            toast.warning(`Already installed.`);
        }
    };


    return (
        <section className='bg-[#f5f5f5]'>
            <div className='max-w-[1440px] mx-auto p-10 md:p-16'>
                <div className='flex flex-col md:flex-row gap-10'>
                    <img src={image} className='h-[330px] md:h-[320px] lg:h-[300px]' />
                    <div className='flex-1'>
                        <h2 className='font-bold text-xl md:text-3xl'>
                            {title}
                        </h2>
                        <p className='md:text-lg lg:text-xl mt-3'>
                            Developed by <span className='font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span>
                        </p>
                        <hr className='w-full border-gray-400 my-6' />
                        <div className='flex gap-10 md:gap-20 mb-6'>
                            <div>
                                <img src="https://i.postimg.cc/bvpJRfw9/icon-downloads.png" className='w-8 h-8' />
                                <p className='text-sm md:text-base my-1.5'>
                                    Downloads
                                </p>
                                <h1 className='font-extrabold  text-2xl md:text-3xl lg:text-4xl'>
                                    {downloads}
                                </h1>
                            </div>
                            <div>
                                <img src="https://i.postimg.cc/8CN5bgzZ/icon-ratings.png" className='w-8 h-8' />
                                <p className='text-sm md:text-base my-1.5'>
                                    Average Ratings
                                </p>
                                <h1 className='font-extrabold text-2xl md:text-3xl lg:text-4xl'>
                                    {ratingAvg}
                                </h1>
                            </div>
                            <div>
                                <img src="https://i.postimg.cc/mrBDSWgd/icon-review.png" className='w-8 h-8' />
                                <p className='text-sm md:text-base my-1.5'>
                                    Total Reviews
                                </p>
                                <h1 className='font-extrabold  text-2xl md:text-3xl lg:text-4xl'>
                                    {reviews}
                                </h1>
                            </div>
                        </div>
                        <button className='text-white bg-[#00D390] font-semibold md:text-lg lg:text-xl px-4 md:px-6 py-1.5 md:py-2 rounded-md' onClick={handleInstall}>
                            {installed ? 'Installed' : `Install Now (${size} MB)`}
                        </button>
                    </div>
                </div>
                <hr className='border-gray-400 my-8' />
                <h3 className='font-semibold text-lg md:text-xl lg:text-2xl'>
                    Ratings
                </h3>
                <RatingsChart ratings={ratings}></RatingsChart>
                <hr className='border-gray-400 my-8' />
                <h3 className='font-semibold text-lg md:text-xl lg:text-2xl'>
                    Description
                </h3>
                <p className='text-[#627382] md:text-lg lg:text-xl mt-5'>
                    {description}
                </p>
            </div>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default AppDetails;