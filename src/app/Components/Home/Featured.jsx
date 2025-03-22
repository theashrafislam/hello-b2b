import React from 'react';

const Featured = () => {
    return (
        <div className='bg-[#202020]'>
            <h1 className='text-[45px] text-center font-semibold text-[#D0A148] pb-[200px]'>EXPLORE OUR FEATURED CRUISE</h1>

            <div className='flex items-center justify-between gap-5 text-white max-w-7xl mx-auto pb-[256px]'>
                <img src="/popular/1.png" alt="" className='w-96' />
                <img src="/popular/2.png" alt="" className='w-96' />
                <img src="/popular/3.png" alt="" className='w-96' />
            </div>
        </div>
    );
};

export default Featured;