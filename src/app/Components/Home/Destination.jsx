import React from 'react';

const Destination = () => {
    return (
        <div className='pt-[300px] bg-[#202020] pb-[210px] '>
            <div className='pb-[155px]'>
                <h1 className='text-[#D0A148] text-[45px] font-semibold text-center'>YOUR DESIRED DESTINATION</h1>
            </div>
            <div className='flex items-center justify-center'>
                <div className='flex items-center justify-evenly gap-[130px]'>
                    <div className='w-[50%]'>
                        <img src="/destination/1.png" alt="" className='w-96' />
                    </div>
                    <div className='flex flex-col w-[50%] gap-8'>
                        <div>
                            <img src="/destination/2.png" alt="" className='w-96' />
                        </div>
                        <div>
                            <img src="/destination/3.png" alt="" className='w-96' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;