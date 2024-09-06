// "use client";
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Home() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredModels, setFilteredModels] = useState([]);
//   const router = useRouter();

//   const printerModels = [
//     'HP ENVY 120 e-All-in-One Printer series',
//     'HP ENVY 4500 e-All-in-One Printer series',
//     'HP ENVY 4510 All-in-One Printer series',
//     'HP ENVY 4520 e-All-in-One Printer series',
//     'HP ENVY 5000 All-in-One Printer series',
//     'HP ENVY 5500 e-All-in-One Printer series',
//     'HP ENVY 5540 All-in-One Printer series',
//     'HP ENVY 5600 e-All-in-One Printer series',
//     'HP ENVY 7600 e-All-in-One Printer series',
//     'HP ENVY Photo 6200 All-in-One Printer series'
//   ];

//   const handleSearchChange = (event) => {
//     const value = event.target.value;
//     setSearchTerm(value);
//     if (value) {
//       const filtered = printerModels.filter((model) =>
//         model.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredModels(filtered);
//     } else {
//       setFilteredModels([]);
//     }
//   };

//   const handleModelClick = (model) => {
//     const modelPath = model.replace(/\s+/g, '-').replace(/\//g, '-');
//     router.push(`./Pages/install`);
//   };

//   return (
//     <div className="min-h-screen bg-[#ececec]">
//       {/* Navbar */}
//       <nav className="bg-white shadow-md h-[70px] mt-[10px]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <a href="#" className="text-xl font-bold text-gray-800">
//                 <img src="https://www.qwebcare.com/help/images/hp-logo.gif" alt="HP Logo" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="flex items-center justify-center py-20">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
//           {/* Left Side: Text Content */}
//           <div className="text-left md:w-1/2">
//             <h1 className="text-3xl md:text-4xl text-[45px] mb-4 w-[1100px] h-[52px]">Set up your printer at 123.hp.com</h1>
//             <p className="text-lg md:text-xl mb-4 h-[40px] w-[730px] text-[30px] mt-[25px]">Download and install your printer software</p>
//             <p className="mb-6 h-[63px] w-[730px] text-[20px] mt-[20px]">Enter your HP ENVY, OfficeJet, LaserJet or DeskJet model number.</p>

//             <div className="relative mb-8">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 placeholder='Enter exact model number or name. Ex: "ENVY 4520"'
//                 className="border border-gray-300 p-3 rounded-l-lg w-full max-w-md"
//               />
//               <Link href="./Pages/install">
//                 <button className="bg-[#0096D6] text-white px-4 py-3 rounded-r-lg w-[130px] ml-[20px]">Search</button>
//               </Link>
              
//               {filteredModels.length > 0 && (
//                 <ul className="absolute left-0 mt-1 w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-lg z-10">
//                   {filteredModels.map((model) => (
//                     <li
//                       key={model}
//                       onClick={() => handleModelClick(model)}
//                       className="cursor-pointer p-2 hover:bg-gray-100"
//                     >
//                       {model}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             <div className="text-sm text-[#007DBA] mb-8">
//               <a href="#" className="block mb-2">Where's the model number?</a>
//               <a href="#">My device is not listed</a>
//             </div>

//             <div className="text-sm text-[#007DBA] mt-[200px]">
//               <a href="#">United Kingdom - English</a>
//             </div>
//           </div>

//           {/* Right Side: Image */}
//           <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
//             <img 
//               src="https://www.qwebcare.com/help/hp-printer_files/DJPrinters.png" 
//               alt="Printers" 
//               className="search w-full max-w-lg h-[224px] w-[224px] "
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
// import './search.css';
import Image from 'next/image';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import JivoChat from '@/app/Jivochat';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredModels, setFilteredModels] = useState([]);
  const router = useRouter();

  const printerModels = [
    'HP ENVY 120 e-All-in-One Printer series',
    'HP ENVY 4500 e-All-in-One Printer series',
    'HP ENVY 4510 All-in-One Printer series',
    'HP ENVY 4520 e-All-in-One Printer series',
    'HP ENVY 5000 All-in-One Printer series',
    'HP ENVY 5500 e-All-in-One Printer series',
    'HP ENVY 5540 All-in-One Printer series',
    'HP ENVY 5600 e-All-in-One Printer series',
    'HP ENVY 7600 e-All-in-One Printer series',
    'HP ENVY Photo 6200 All-in-One Printer series'
  ];

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      const filtered = printerModels.filter((model) =>
        model.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredModels(filtered);
    } else {
      setFilteredModels([]);
    }
  };

  const handleModelClick = (model) => {
    setSearchTerm(model);  // Set the input value to the selected model
    setFilteredModels([]); // Clear the dropdown
  };

  const handleSearchClick = () => {
    if (searchTerm) {
      const searchPath = searchTerm.replace(/\s+/g, '-').replace(/\//g, '-');
      router.push(`./Pages/install?model=${encodeURIComponent(searchPath)}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#ececec]">
      {/* Navbar */}
      <nav className="bg-white shadow-md h-[70px] mt-[10px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-gray-800">
                <img src="https://www.qwebcare.com/help/images/hp-logo.gif" alt="HP Logo" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          {/* Left Side: Text Content */}
          <div className="text-left md:w-1/2">
            <h1 className="text-3xl md:text-4xl text-[45px] mb-4 w-[1100px] h-[52px]">Set up your printer at 123.hp.com</h1>
            <p className="text-lg md:text-xl mb-4 h-[40px] w-[730px] text-[30px] mt-[25px]">Download and install your printer software</p>
            <p className="mb-6 h-[63px] w-[730px] text-[20px] mt-[20px]">Enter your HP ENVY, OfficeJet, LaserJet or DeskJet model number.</p>

            <div className="relative mb-8">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder='Enter exact model number or name. Ex: ENVY 4520'
                className="border border-gray-300 p-3 rounded-l-lg w-[394px] max-w-md"
              />
              <button
                onClick={handleSearchClick}
                className="bg-[#0096D6] text-white px-4 py-3 rounded-r-lg w-[130px] ml-[20px]"
              >
                Search
              </button>
              
              {filteredModels.length > 0 && (
                <ul className="absolute left-0 mt-1 w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {filteredModels.map((model) => (
                    <li
                      key={model}
                      onClick={() => handleModelClick(model)}
                      className="cursor-pointer p-2 hover:bg-gray-100"
                    >
                      {model}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="text-sm text-[#007DBA] mb-8">
              <a href="#" className="block mb-2">Where's the model number?</a>
              <a href="#">My device is not listed</a>
            </div>

            <div className="text-sm text-[#007DBA] mt-[200px]">
              <a href="#">United Kingdom - English</a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <Image 
              src="/picture.png" 
              alt="Printers" 
              height={430}
              width={430}
              className="max-w-lg  mr-[-405px] object-cover"
            />
            
          </div>
        </div>
      </div>
      <JivoChat/>
    </div>
  );
}















