// components/Header.js

import Image from 'next/image';

const NavbarSection = () => {
  return (
    <header className="bg-white py-4 border-b-2 ">
      <div className="container mx-auto flex items-center 2xl:ml-[179px]">
        {/* HP Logo */}
        <div className="flex items-center mr-4">
          <Image
            src="/hplogo.png" // Replace with the correct path to your logo
            alt="HP Logo"
            width={53}
            height={53}
          />
        </div>
        {/* Product Links */}
        <nav className="flex space-x-8 text-gray-600 text-lg">
          <a href="#" className="hover:text-[#007DBA]">OfficeJet</a>
          <a href="#" className="hover:text-[#007DBA]">DeskJet</a>
          <a href="#" className="hover:text-[#007DBA]">ENVY</a>
          <a href="#" className="hover:text-[#007DBA]">LaserJet</a>
        </nav>
      </div>
    </header>
  );
};

export default NavbarSection;