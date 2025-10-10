import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../../Components/Card/Card';
import AppError from '../../Routes/AppError';
import Loader from '../../Components/Loader/Loader';

const Apps = () => {

    const apps = useLoaderData();
    const [searchApp, setSearchApp] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = (e) => {
        setLoading(true);
        setSearchApp(e.target.value);
        setTimeout(() => setLoading(false), 150);
    };

    const filteredApp = apps.filter(app =>
        app.title.toLowerCase().includes(searchApp.toLowerCase())
    );

    return (
        <section className='bg-[#f5f5f5]'>
            <div className='max-w-[1440px] mx-auto text-center p-4 md:pt-10 lg:pt-16 lg:pb-10 flex flex-col items-center'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                    Our All Applications
                </h1>
                <p className='text-sm md:text-lg lg:text-xl text-[#627382] mt-6 mb-8'>
                    Explore all apps on the market developed by us. We code for Millions.
                </p>
                <div className='flex items-center justify-between w-full'>
                    <p className='font-semibold text-lg md:text-xl lg:text-2xl'>
                        ({filteredApp.length}) Apps Found
                    </p>
                    <form className='relative' onSubmit={(e) => e.preventDefault()}>
                        <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-[#627382]'></Search>
                        <input
                            type="search"
                            name="search"
                            placeholder='Search Apps'
                            className='border-3 border-[#D2D2D2] text-[#627382] pl-11 pr-2 py-1.5 w-50 md:min-w-80'
                            value={searchApp}
                            onChange={handleSearch} />
                    </form>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 my-4 md:my-10'>
                    {loading ? (
                        <div className='col-span-full flex justify-center items-center'>
                            <Loader></Loader>
                        </div>
                    ) : filteredApp.length > 0 ? (
                        filteredApp.map(card => <Card key={card.id} card={card} />)
                    ) : (
                        <AppError compact onReset={() => setSearchApp('')}></AppError>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Apps;