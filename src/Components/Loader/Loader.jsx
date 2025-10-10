import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-[#38c4a8] border-t-transparent rounded-full animate-[spin_1s_linear_infinite]"></div>
                <div className="absolute inset-2 border-4 border-[#38c4a8]/40 border-t-transparent rounded-full animate-[spin_0.8s_linear_reverse_infinite]"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#38c4a8] rounded-full animate-pulse"></div>
            </div>
        </div>
    );
};

export default Loader;