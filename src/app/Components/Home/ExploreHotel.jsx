import React from 'react';

const ExploreHotel = () => {
    return (
        <div className='bg-[#202020]'>
            <h1 className='text-[45px] font-medium text-center text-[#D0A148] pb-[78px]'>EXPLORE HOTELS</h1>

            <div className='flex items-center justify-center  pb-[100px]'>
                <div className='flex items-center gap-[169px]'>
                    <div className='flex flex-col gap-[90px]'>
                        <img src="/hotel.png" alt="" className='w-[590px]' />
                        <img src="/hotel.png" alt="" className='w-[590px]' />
                    </div>
                    <div className='flex flex-col gap-[90px]'>
                        <img src="/hotel.png" alt="" className='w-[590px]' />
                        <img src="/hotel.png" alt="" className='w-[590px]' />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center pb-[230px]'>
                <button className='text-[35px] font-semibold text-[#595959] p-4 border'>
                    ALL HOTELS
                </button>
            </div>

        </div>
    );
};

export default ExploreHotel;