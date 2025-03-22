import React from 'react';

const Package = () => {
    return (
        <div className='bg-[#202020]'>
            <h1 className='text-[45px] font-medium text-center text-[#D0A148] pb-[78px]'>PACKAGE DEALS</h1>

            <div className='flex items-center justify-center  pb-[412px]'>
                <div className='flex items-center gap-[169px]'>
                    <div className='flex flex-col gap-[90px]'>
                        <img src="/package/1.png" alt="" className='w-[590px]' />
                        <img src="/package/2.png" alt="" className='w-[590px]' />
                    </div>
                    <div className='flex flex-col gap-[90px]'>
                        <img src="/package/3.png" alt="" className='w-[590px]' />
                        <img src="/package/4.png" alt="" className='w-[590px]' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Package;