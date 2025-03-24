import Image from 'next/image';
import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';

const Featured = () => {
    return (
        <div className='bg-[#202020]'>
            <h1 className='text-[45px] text-center font-semibold text-[#D0A148] pb-[200px]'>EXPLORE OUR FEATURED CRUISE</h1>

            <div className='flex items-center justify-between gap-5 text-white max-w-7xl mx-auto pb-[256px]'>
                <div className='rounded-xl border border-[#D0A148] border-b-4 border-t-4 w-96'>
                    <Image src={'/popular/7.png'} alt='hello' width={1000} height={600} className='w-96 rounded-t-xl' />
                    <div className='p-[20px] bg-[#FFF] rounded-b-xl'>
                        <p className='text-[20px] font-semibold text-[#D0A148]'>Karnika</p>
                        <p className='text-[10px] text-[#807A7A]'><IoLocationSharp className='inline mr-1 text-base' />Dubai</p>
                        <p className='text-[12px] text-[#807A7A] pt-[17px]'>Laboris anim duis sunt aliquip tempor qui. Est in nulla eiusmod ad aliqua laboris jugni lol occaecat excepteur voluptate. </p>
                        <div className='pt-[21px] flex items-center justify-between'>
                            <div className="flex items-center gap-2">
                                <p className='text-[15px] text-[#212020] font-bold'>$990.00</p>
                                <del className='text-[10px] text-[#807A7A]'>1500.00 / per person</del>
                            </div>
                            <div className='text-center'>
                                <p className='text-[#255DEB] text-[10px] font-semibold'>4.8/5 Excellent</p>
                                <p className='text-[#807A7A] text-[7px] pt-1'>(1216 reviews)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-xl border border-[#D0A148] border-b-4 border-t-4 w-96'>
                    <Image src={'/popular/8.png'} alt='hello' width={1000} height={600} className='w-96 rounded-t-xl' />
                    <div className='p-[20px] bg-[#FFF] rounded-b-xl'>
                        <p className='text-[20px] font-semibold text-[#D0A148]'>Karnika</p>
                        <p className='text-[10px] text-[#807A7A]'><IoLocationSharp className='inline mr-1 text-base' />Dubai</p>
                        <p className='text-[12px] text-[#807A7A] pt-[17px]'>Laboris anim duis sunt aliquip tempor qui. Est in nulla eiusmod ad aliqua laboris jugni lol occaecat excepteur voluptate. </p>
                        <div className='pt-[21px] flex items-center justify-between'>
                            <div className="flex items-center gap-2">
                                <p className='text-[15px] text-[#212020] font-bold'>$990.00</p>
                                <del className='text-[10px] text-[#807A7A]'>1500.00 / per person</del>
                            </div>
                            <div className='text-center'>
                                <p className='text-[#255DEB] text-[10px] font-semibold'>4.8/5 Excellent</p>
                                <p className='text-[#807A7A] text-[7px] pt-1'>(1216 reviews)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-xl border border-[#D0A148] border-b-4 border-t-4 w-96'>
                    <Image src={'/popular/9.png'} alt='hello' width={1000} height={600} className='w-96 rounded-t-xl' />
                    <div className='p-[20px] bg-[#FFF] rounded-b-xl'>
                        <p className='text-[20px] font-semibold text-[#D0A148]'>Karnika</p>
                        <p className='text-[10px] text-[#807A7A]'><IoLocationSharp className='inline mr-1 text-base' />Dubai</p>
                        <p className='text-[12px] text-[#807A7A] pt-[17px]'>Laboris anim duis sunt aliquip tempor qui. Est in nulla eiusmod ad aliqua laboris jugni lol occaecat excepteur voluptate. </p>
                        <div className='pt-[21px] flex items-center justify-between'>
                            <div className="flex items-center gap-2">
                                <p className='text-[15px] text-[#212020] font-bold'>$990.00</p>
                                <del className='text-[10px] text-[#807A7A]'>1500.00 / per person</del>
                            </div>
                            <div className='text-center'>
                                <p className='text-[#255DEB] text-[10px] font-semibold'>4.8/5 Excellent</p>
                                <p className='text-[#807A7A] text-[7px] pt-1'>(1216 reviews)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;