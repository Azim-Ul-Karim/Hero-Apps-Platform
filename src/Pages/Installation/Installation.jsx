import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../../Components/Loader/Loader';

const Installation = () => {

    const [apps, setApps] = useState([]);
    const [sortOrder, setSortOrder] = useState('default');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('installedApps')) || [];
        setApps(stored);
        setTimeout(() => setLoading(false), 500);
    }, []);

    const handleUninstall = (id) => {
        const updated = apps.filter(app => app.id !== id);
        setApps(updated);
        localStorage.setItem('installedApps', JSON.stringify(updated));
        toast.info('App uninstalled successfully!');
    };

    const handleSort = (e) => {
        const value = e.target.value;
        setSortOrder(value);

        let sorted = [...apps];
        const parseDownloads = (count) => {
            if (typeof count === 'string') {
                if (count.includes('B')) return parseFloat(count) * 1000000000;
                if (count.includes('M')) return parseFloat(count) * 1000000;
                if (count.includes('K')) return parseFloat(count) * 1000;
            }
            return parseFloat(count);
        };

        if (value === 'high-low') {
            sorted.sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));
        } else if (value === 'low-high') {
            sorted.sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads));
        }

        setApps(sorted);
    };

    return (
        <section className='bg-[#f5f5f5]'>
            <div className='max-w-[1440px] mx-auto min-h-70 md:min-h-80 lg:min-h-110 p-4 md:pt-10 lg:pt-16 lg:pb-10 flex flex-col items-center'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                    Your Installed Apps
                </h1>
                <p className='text-sm md:text-lg lg:text-xl text-[#627382] mt-6 mb-8'>
                    Explore all apps on the market developed by us.
                </p>
                <div className='flex items-center justify-between w-full mb-5'>
                    <p className='font-semibold text-lg md:text-xl lg:text-2xl'>
                        {apps.length} Apps Found
                    </p>
                    <select className='select border-[#D2D2D2] w-43 text-[#627382]' value={sortOrder} onChange={handleSort}>
                        <option value='default'>Sort By Downloads</option>
                        <option value='high-low'>High-Low</option>
                        <option value='low-high'>Low-High</option>
                    </select>
                </div>

                {loading ? (
                    <div className='w-full flex justify-center items-center py-10'>
                        <Loader></Loader>
                    </div>
                ) : apps.length === 0 ? (
                    <p></p>
                ) : (
                    <div className='flex flex-col gap-4 w-full'>
                        {apps.map(app => (
                            <div
                                key={app.id}
                                className='bg-white p-2 md:p-3 flex items-center justify-between w-full rounded-lg'
                            >
                                <span className='flex items-center gap-4 md:gap-6'>
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className='w-10 md:w-20 rounded-lg'
                                    />
                                    <div>
                                        <h3 className='font-medium text-sm md:text-lg lg:text-xl'>
                                            {app.title}
                                        </h3>
                                        <div className='flex gap-4 md:gap-6 lg:gap-8 mt-2 md:mt-4'>
                                            <button className='flex items-center gap-2'>
                                                <img
                                                    src="/src/assets/icon-downloads.png"
                                                    className='w-3 md:w-4 h-3 md:h-4'
                                                />
                                                <p className='font-medium text-xs md:text-base text-[#00D390]'>
                                                    {app.downloads}
                                                </p>
                                            </button>

                                            <button className='flex items-center gap-2'>
                                                <img
                                                    src="/src/assets/icon-ratings.png"
                                                    className='w-3 md:w-4 h-3 md:h-4'
                                                />
                                                <p className='font-medium text-xs md:text-base text-[#FF8811]'>
                                                    {app.ratingAvg}
                                                </p>
                                            </button>

                                            <p className='text-xs md:text-base'>
                                                {app.size} MB
                                            </p>
                                        </div>
                                    </div>
                                </span>

                                <button
                                    className='text-white bg-[#00D390] font-semibold text-xs md:text-base px-4 md:px-6 py-1 md:py-1.5 rounded-md'
                                    onClick={() => handleUninstall(app.id)}
                                >
                                    Uninstall
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <ToastContainer></ToastContainer>
            </div>
        </section>
    );
};

export default Installation;