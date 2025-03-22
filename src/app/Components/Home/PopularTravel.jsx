import React from 'react';

const ExploreFeatures = () => {
    return (
        <div className='bg-[#202020]'>
            <h1 className='text-[45px] text-center font-semibold text-[#D0A148] pb-[213px]'>OUR POPULAR TRAVEL PACKAGES</h1>

            <div className='flex items-center justify-between gap-5 text-white max-w-7xl mx-auto pb-[150px]'>
                <img src="/popular/1.png" alt="" className='w-96' />
                <img src="/popular/2.png" alt="" className='w-96' />
                <img src="/popular/3.png" alt="" className='w-96' />
            </div>
            <div className='flex items-center justify-between gap-5 text-white max-w-7xl mx-auto pb-[297px]'>
                <img src="/popular/4.png" alt="" className='w-96' />
                <img src="/popular/5.png" alt="" className='w-96' />
                <img src="/popular/6.png" alt="" className='w-96' />
            </div>
        </div>
    );
};

export default ExploreFeatures;