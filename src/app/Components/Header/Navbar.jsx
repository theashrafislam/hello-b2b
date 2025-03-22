import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <header
            className="flex items-center justify-between h-[188px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/nav.png')" }}
        >
            <Image src={'/logo.png'} width={100} height={100} alt='logo' className='w-[180px] h-[150px] px-5'/>
        </header>
    );
};

export default Navbar;