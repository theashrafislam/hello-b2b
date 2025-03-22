import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer
            className="w-full h-[867px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/footer.png')" }}
        >
        </footer>
    );
};

export default Footer;