import React from 'react';
import { FaCcVisa } from 'react-icons/fa';
import { MdFlightTakeoff, MdHotel } from "react-icons/md";
import { SiMentorcruise } from "react-icons/si";

const BookingCard = () => {
    return (
        <div className='bg-white p-4 w-[1100px] rounded-xl border-t-2 border-[#D0A148] border-b-4'>
            {/* tabs  */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <p>Umrah Package</p>
                    <p>Hajj Package</p>
                    <p>Business Travel</p>
                    <p>Holiday Package</p>
                </div>
                <div className='flex items-center gap-3'>
                    <button className='text-[16px] px-6 py-2 rounded-lg bg-[#D0A148] text-white font-semibold'>Custom Package</button>
                    <button className='text-[16px] px-6 py-2 rounded-lg bg-[#FFF] border border-[#D0A148] text-[#D0A148] font-semibold'>Pre-Made Package</button>
                </div>
            </div>

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

                <div className='w-[50%]'>
                    {/* card  */}
                    <div>
                        <div>
                            <p className='text-[15px]'>Journey Date</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;