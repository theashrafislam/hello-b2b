import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#3D3333]'>
            <div
                className="w-full h-[867px]"
                style={{ backgroundImage: "url('/footer.png')" }}
            >
            </div>
        </footer>
    );
};

export default Footer;