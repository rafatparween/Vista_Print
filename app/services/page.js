// import React from 'react';
// import Home from './pages/Home';
// import Navbar from './pages/Navbar';
// import PrinterOffline from './service/PrinterOffline';
// import Footer from './pages/Footer';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PrinterSetup from './service/PrinterSetupIssue';
// import ScannerSetup from './service/Scannersetup';
// import PrivacyPolicy from './service/PrivacyPolicy';


import JivoChat from "../Jivochat";
import FooterPrinter from "./component/Footer";
import Navbar from "./component/Navabar";
import Sliderprinter from "./component/Sliderprinter";

function Home(){
    return(
        <>
            <Navbar/>
            <Sliderprinter/>
            <FooterPrinter/>
            <JivoChat/>
        </>
    )
}
export default Home;