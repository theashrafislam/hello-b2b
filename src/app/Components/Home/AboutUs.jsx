import React from 'react';

const AboutUs = () => {
    return (
        <div className='bg-[#202020] text-left px-12 pt-[342px]'>

            <div className='flex justify-between gap-[64px] pb-[183px]'>
                <div className='w-[50%]'>
                    <img src="/about.png" alt="" className='w-full h-[1001px] rounded-xl' />
                </div>
                <div className='w-[50%] text-[#D0A148]'>
                    <p className='font-medium text-[25px] mb-[36px]'>About Us</p>
                    <h3 className='text-[45px] font-bold'>Sail in Serenity, Dine in Purity! </h3>
                    <h5 className='text-[30px] font-medium mb-[21px]'>We Provide the best Umrah and Hajj Experience</h5>
                    <p className='text-[20px]'>Laboris anim duis sunt aliquip tempor qui. Est in nulla eiusmod ad aliqua laboris jugni lol occaecat excepteur voluptate. Eiusmod enim ea minim occaecat in occaecat occaecat. Adipisicing velit aute duis pariatur minim officia officia velit nostrud ipsum ullamco anim aute sint reprehenderit nulla enim.</p>

                    {/* Our Mission and vision  */}
                    <div className='flex items-center gap-[180px] pb-[32px] mt-[38px]'>
                        <div>
                            <h3 className='text-[25px]'>Our Mission</h3>
                            <p className='text-[20px]'>Eiusmod enim ea minim occaecat in occaecat occaecat. Adipisicing velit aute duis.</p>
                        </div>
                        <div>
                            <h3 className='text-[25px]'>Our Vision</h3>
                            <p className='text-[20px]'>Eiusmod enim ea minim occaecat in occaecat occaecat. Adipisicing velit aute duis.</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[20px] pb-[33px] border-b-2 border-[#D0A148]'>Laboris anim duis sunt aliquip tempor qui. Est in nulla eiusmod ad aliqua laboris jugni lol occaecat excepteur voluptate.</p>
                    </div>
                    <div className='pt-10'>
                        <h1 className='text-[35px]'>IvanVasquez</h1>
                        <p className='text-[30px]'>(CEO and Founder)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;