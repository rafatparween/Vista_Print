// import { Link } from 'react-router-dom';
// import PrintIcon from '@mui/icons-material/Print';
"use client"
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border  shadow-2xl bg-[#1E3A8A] ">
      <div className="flex gap-5 items-center py-3">
        {/* <Link to="/">
          {' '}
          <PrintIcon sx={{ color: '#3730a3', fontSize: '3rem' }} />
        </Link> */}

        <ul className="flex gap-8 text-white">
          <Link href="/" className="hover:border border-[#3730a3] p-2 rounded">
            Home
          </Link>
          <Link
            href="/services/printeroffline"
            className="hover:border border-[#3730a3] p-2 rounded"
          >
            Printer Offline
          </Link>
          <Link
            href="/services/printersetupissue"
            className="hover:border border-[#3730a3] p-2 rounded"
          >
            Printer Setup
          </Link>
          <Link
            href="/services/printerscannersetup"
            className="hover:border border-[#3730a3] p-2 rounded"
          >
            Scanner Setup
          </Link>
          <Link
            href="/services/privacypolicy"
            className="hover:border border-[#3730a3] p-2 rounded"
          >
            Privacy PoLicy
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
