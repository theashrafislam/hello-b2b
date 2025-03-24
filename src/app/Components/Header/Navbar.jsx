import Image from 'next/image';
import React from 'react';
import { FaAngleDown, FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";

const Navbar = () => {
    return (
        // <header
        //     className="flex items-center justify-between h-[188px] bg-cover bg-center bg-no-repeat"
        //     style={{ backgroundImage: "url('/nav.png')" }}
        // >
        //     <Image src={'/logo.png'} width={100} height={100} alt='logo' className='w-[180px] h-[150px] px-5'/>
        // </header>
        <section
            style={{ backgroundImage: "url('/bg.png')" }}
        >
            {/* navbar  */}
            <nav className='flex items-center gap-[133px]'>
                {/* logo  */}
                <div>
                    <Image src={'/logo.png'} width={100} alt='logo' height={100} />
                </div>

                {/* menu items  */}
                <div>
                    <div>
                        <div>
                            <div>
                                <FaFacebookSquare />
                                <FaYoutube />
                                <FaInstagramSquare />
                            </div>
                            <div>
                                <p>+49 177 9365929 </p>
                                <p>vasqueztravel.de</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>English</p>
                                <FaAngleDown />
                            </div>
                            <div>
                                <p>USD</p>
                                <FaAngleDown />
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul className='flex items-center gap-[53px] text-[30px] font-semibold text-[#FFF]'>
                            <li>Home</li>
                            <li>Package</li>
                            <li>Hotels</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* hero section  */}

        </section>
    );
};

export default Navbar;