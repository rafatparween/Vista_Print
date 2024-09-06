import React from 'react';
import Link from 'next/link';
<link href="https://fonts.googleapis.com/css2?family=FontName:wght@weight&display=swap" rel="stylesheet" />
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="h-[800px] flex items-center justify-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 ml-[347px] mt-[-300px]]">
          {/* Left Side: Text Content */}
          <div className="text-left md:w-1/2 flex flex-col justify-center mb-[263px] mt-[63px] ml-[-109px]">
            <h1 className="text-[50px] h-[58px] w-[1100px] mb-[30px] font-hp">
              Easy setup, effortless printing!
            </h1>
            <p className="text-lg md:text-xl mb-4 mb-[58px] font-hp">
              Click Install Setup for Install HP Smart
            </p>
            <Link href="./install/process">
              <button className="install text-[#0096D6] w-[267px] h-[64px] mt-[-50px] pr-[50px] pb-[1px] pl-[67px] text-[24px] border-2 border-[#0096D6] px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-[#007BCC] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#007BCC] active:bg-[#005C9A]">

                Install Setup
              </button>
            </Link>
          </div>

          {/* Right Side: Image */}
          {/* <div className="md:w-1/12 flex justify-center mt-8 md:mt-0"> */}
            <Image
              src="/laptipsetup.png"
              alt="Printers"
              width={600} // Provide a specific width
              height={600} 
              className="max-w-l ml-[-357px] mb-[-109px] mr-[-397pxpx]"
            />
            {/* <img 
              src="/printer.png" 
              alt="Printers" 
              className="w-full max-w-lg h-[350px] w-[900px] ml-[69px]"
            /> */}
          </div>
        </div>

      
      <div className='h-[165px] bg-gray-200'></div>

    </>
  );
}





