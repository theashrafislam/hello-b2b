import React from 'react';

const TravelExplore = () => {
    return (
        <div className='pt-[463px] bg-[#202020] text-left px-12'>
            <h1 className='text-[#D0A148] text-[50px] font-semibold'>TRAVEL WITH FAITH,</h1>
            <h1 className='text-[#D0A148] text-[50px] font-semibold pl-[230px] mb-[23px]'>EXPLORE WITH PEACE</h1>
            <h5 className='text-[#D0A148] text-[35px] font-semibold pb-[51px]'>Discover your ideal experience with us</h5>
            <div className='flex gap-5 justify-between pb-[276px]'>
                <div className='w-[50%]'>
                    <img src="/travel/1st.png" alt="" className='w-full' />
                </div>
                <div className='w-[50%] flex  justify-between'>
                    <div className='w-[50%]'>
                        <img src="/travel/2nd.png" alt="" className='w-full' />
                    </div>
                    <div className='w-[50%]'>
                        <img src="/travel/3rd.png" alt="" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelExplore;