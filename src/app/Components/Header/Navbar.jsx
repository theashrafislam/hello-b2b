import Image from 'next/image';
import React from 'react';
import { FaAngleDown, FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";

const Navbar = () => {
    return (
        <section
            className='relative px-4 pr-48 before:absolute before:inset-0 before:backdrop-blur-[10px] before:z-0'
            style={{ backgroundImage: "url('/bg.png')" }}
        >
            {/* navbar */}
            <nav className='relative flex items-center gap-[133px] pt-[47px] pb-[30px] z-10'>
                {/* logo */}
                <div className='w-[10%]'>
                    <Image src={'/logo.png'} width={150} alt='logo' height={150} />
                </div>

                {/* menu items */}
                <div className='w-[90%]'>
                    <div className='flex items-center justify-between pb-[14px] border-b-2 border-[#D0A148]'>
                        <div className='text-[#D0A148] flex items-center gap-[15px]'>
                            <div className='flex items-center gap-2'>
                                <FaFacebookSquare className='w-[22px] h-[25px]' />
                                <FaYoutube className='w-[22px] h-[25px]' />
                                <FaInstagramSquare className='w-[22px] h-[25px]' />
                            </div>
                            <div className='flex items-center gap-[15px] text-[15px]'>
                                <p className='border-l border-[#D0A148] pl-2'>+49 177 9365929 </p>
                                <p className='border-l border-[#D0A148] pl-2'>vasqueztravel.de</p>
                            </div>
                        </div>
                        <div className='text-[#D0A148] flex items-center gap-[15px]'>
                            <div className='flex items-center gap-1'>
                                <p>English</p>
                                <FaAngleDown />
                            </div>
                            <div className='flex items-center gap-1'>
                                <p>USD</p>
                                <FaAngleDown />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center pt-[24px]'>
                        <ul className='flex items-center gap-[53px] text-[30px] font-semibold text-[#FFF]'>
                            <li className='px-5 py-2 rounded-lg hover:border-b-2 hover:border-[#FFF]'>Home</li>
                            <li className='px-5 py-2 rounded-lg hover:border-b-2 hover:border-[#FFF]'>Package</li>
                            <li className='px-5 py-2 rounded-lg hover:border-b-2 hover:border-[#FFF]'>Hotels</li>
                            <li className='px-5 py-2 rounded-lg hover:border-b-2 hover:border-[#FFF]'>About</li>
                            <li className='px-5 py-2 rounded-lg hover:border-b-2 hover:border-[#FFF]'>Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;