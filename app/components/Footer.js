'use client';

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="text-white py-20 bg-gray-800 h-[571px]">
            <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
                <div className="flex">
                    <p className="font-bold text-center">
                    <h1 className="text-[32px] mt-[89px]">Uzair graphic & Printing</h1>
                    </p>
                </div>

                <div>
                    <p>QUICK LINKS</p>
                    <div className="flex flex-col text-start mb-4 md:mb-0">
                        {['Home', 'About', 'Services', 'Contact', 'Chiefs'].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="block md:inline-block py-2 hover:text-gray-500"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <p>LEGAL</p>
                    <div className="flex flex-col text-start mb-4 md:mb-0 text-[14px]">
                        {['Terms and Conditions', 'License Agreement', 'Privacy Policy', 'Copyright Information', 'Cookies Policy'].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="block md:inline-block py-2 hover:text-gray-500"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col">
                    <p>SOCIAL MEDIA</p>
                    <div className="flex mt-4 gap-3">
                        {[
                            { icon: FaFacebook, bgColor: 'bg-blue-600', link: '#' },
                            { icon: FaInstagram, bgColor: 'bg-pink-600', link: '#' },
                            { icon: FaTwitter, bgColor: 'bg-blue-600', link: '#' },
                            { icon: FaYoutube, bgColor: 'bg-red-600', link: '#' }
                        ].map(({ icon: Icon, bgColor, link }, index) => (
                            <a
                                key={index}
                                href={link}
                                className={`${bgColor} p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110`}
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center py-10">
                <span className="text-gray-400 leading-10">© Copyright, All Rights Reserved by Uzair graphic & printing</span>
            </div>
        </footer>
        
    );
};

export default Footer;