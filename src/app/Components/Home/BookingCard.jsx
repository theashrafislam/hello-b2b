'use client'

import React, { useState } from 'react';
import { FaCcVisa, FaPlusCircle } from 'react-icons/fa';
import { MdFlightTakeoff, MdHotel } from "react-icons/md";
import { SiMentorcruise } from "react-icons/si";
import { CiCalendarDate } from "react-icons/ci";

const BookingCard = () => {
    const [activeTab, setActiveTab] = useState('umrah');
    return (
        <div className='bg-white p-4 w-[1100px] rounded-xl border-t-2 border-[#D0A148] border-b-4'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    {['umrah', 'hajj', 'business', 'holiday'].map(tab => (
                        <p
                            key={tab}
                            className={`cursor-pointer ${activeTab === tab ? 'border-[#D0A148] pb-2 border-b-2 font-bold' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab === 'umrah' ? 'Umrah Package' : tab === 'hajj' ? 'Hajj Package' : tab === 'business' ? 'Business Travel' : 'Holiday Package'}
                        </p>
                    ))}
                </div>
                <div className='flex items-center gap-3'>
                    <button className='text-[16px] px-6 py-2 rounded-lg bg-[#D0A148] text-white font-semibold'>Custom Package</button>
                    <button className='text-[16px] px-6 py-2 rounded-lg bg-[#FFF] border border-[#D0A148] text-[#D0A148] font-semibold'>Pre-Made Package</button>
                </div>
            </div>
            {/* content  */}
            {activeTab === 'umrah' ? (<div>
                <div className='p-3 flex items-center justify-between mt-[60px]'>
                    <div className='flex items-center gap-2'>
                        <button className='px-2 pt-[9px] pb-[21px] border border-[#D0A148] rounded-lg hover:bg-[#D0A148] hover:text-white text-[#D0A148]'><MdFlightTakeoff className='inline mr-1 text-xl' />Flights</button>
                        <button className='px-2 pt-[9px] pb-[21px] border border-[#D0A148] rounded-lg hover:bg-[#D0A148] hover:text-white text-[#D0A148]'><MdHotel className='inline mr-1 text-xl' />Hotels</button>
                        <button className='px-2 pt-[9px] pb-[21px] border border-[#D0A148] rounded-lg hover:bg-[#D0A148] hover:text-white text-[#D0A148]'><FaCcVisa className='inline mr-1 text-xl' />Visa</button>
                        <button className='px-2 pt-[9px] pb-[21px] border border-[#D0A148] rounded-lg hover:bg-[#D0A148] hover:text-white text-[#D0A148]'><SiMentorcruise className='inline mr-1 text-xl' />Cruise</button>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='font-medium hover:text-[#D0A148] cursor-pointer'>One way</p>
                        <p className='font-medium hover:text-[#D0A148] cursor-pointer'>Round Trip</p>
                        <p className='font-medium hover:text-[#D0A148] cursor-pointer'>Multi City</p>
                    </div>

                </div>
                <div className='flex items-center gap-7 justify-between mt-[35px]'>
                    <div className='w-[50%] grid grid-cols-2 gap-5'>
                        {/* card  */}
                        {[1, 2, 3, 4].map((card, index) => {
                            return <div key={index} className='flex items-center pl-[20px] pb-[22px] pt-[16px] border-x-2 border-b-4 border-t-4 border-[#D0A148] pr-[96px] rounded-xl'>
                                <MdFlightTakeoff className='inline mr-2 text-2xl' />
                                <div>
                                    <p className='text-[15px] text-[#C5C0C0]'>From</p>
                                    <p className='text-[20px] font-medium mb-[3px]'>Berlin</p>
                                    <p className='text-[10px] font-medium'>BIA-Berlin International Airport</p>
                                </div>
                            </div>
                        })}
                    </div>

                    <div className='w-[50%] flex items-center gap-3 justify-between'>
                        {/* card  */}
                        <div className='pl-[26px] pt-[17px] pb-[54px] pr-4 border-2 border-[#D0A148] border-t-4 border-b-4 rounded-lg w-[50%]'>
                            <div className='flex items-center justify-between'>
                                <p className='text-[15px] text-[#C5C0C0]'>Journey Date</p>
                                <CiCalendarDate className='text-xl' />
                            </div>
                            <p className='text-[20px] font-medium'>12/02/2025</p>
                            <p className='text-[15px] font-medium ml-1 text-[#C5C0C0]'>Wednesday</p>
                        </div>
                        <div className='pl-[26px] pt-[17px] pb-[54px] pr-4 border-2 border-[#D0A148] border-t-4 border-b-4 rounded-lg w-[50%]'>
                            <div className='flex items-center justify-between'>
                                <p className='text-[15px] text-[#C5C0C0]'>Passenger,Class</p>
                                <CiCalendarDate className='text-xl' />
                            </div>
                            <p className='text-[20px] font-medium'>15</p>
                            <p className='text-[15px] font-medium ml-1 text-[#C5C0C0]'>Economy</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between pt-[15px]'>
                    <FaPlusCircle className='text-3xl text-[#D0A148]' />
                    <button className='rounded-lg bg-[#D0A148] text-white px-10 py-2 font-medium'>Search</button>
                </div>
            </div>
            ) : (
                <div className='text-center py-20 font-semibold text-gray-500 text-xl'>
                    Coming Soon...
                </div>
            )}

        </div>
    );
};

export default BookingCard;