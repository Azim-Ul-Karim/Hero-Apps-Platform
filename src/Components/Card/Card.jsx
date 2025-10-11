import React from 'react';
import { Link } from 'react-router';

const Card = ({ card }) => {

    const { id, image, title, downloads, ratingAvg } = card;

    return (
        <Link to={`/apps/${id}`}>
            <div className='bg-white p-4 rounded-lg'>
                <img src={image} className='w-full   rounded-lg' />
                <h3 className='font-medium md:text-lg lg:text-xl my-3 min-h-14 flex items-center'>
                    {title}
                </h3>
                <div className='flex items-center justify-between'>
                    <button className='bg-[#F1F5E8] flex items-center gap-2 px-3 py-1 rounded-sm'>
                        <img src="https://i.postimg.cc/bvpJRfw9/icon-downloads.png" className='w-4 h-4' />
                        <p className='text-[#00D390]'>
                            {downloads}
                        </p>
                    </button>
                    <button className='bg-[#FFF0E1] flex items-center gap-2 px-3 py-1 rounded-sm'>
                        <img src="https://i.postimg.cc/8CN5bgzZ/icon-ratings.png" className='w-4 h-4' />
                        <p className='text-[#FF8811]'>
                            {ratingAvg}
                        </p>
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default Card;