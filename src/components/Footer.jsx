import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGooglePlus, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {motion} from 'framer-motion'
const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="w-full py-16 px-6">
                <motion.div 
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="flex justify-center space-x-6 mb-8">
                    <a href="#" className="p-3 bg-white rounded-full text-black hover:bg-gray-900 hover:text-white transition">
                        <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
                    </a>
                    <a href="#" className="p-3 bg-white rounded-full text-black hover:bg-gray-900 hover:text-white transition">
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                    </a>
                    <a href="#" className="p-3 bg-white rounded-full text-black hover:bg-gray-900 hover:text-white transition">
                        <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
                    </a>
                    <a href="#" className="p-3 bg-white rounded-full text-black hover:bg-gray-900 hover:text-white transition">
                        <FontAwesomeIcon icon={faGooglePlus} className="text-2xl" />
                    </a>
                    <a href="#" className="p-3 bg-white rounded-full text-black hover:bg-gray-900 hover:text-white transition">
                        <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
                    </a>
                </motion.div>
                <motion.div
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                 className="mb-8">
                    <ul className="flex justify-center space-x-8 text-lg font-medium opacity-70">
                        <li><a href="#" className="hover:opacity-100 transition">Home</a></li>
                        <li><a href="#" className="hover:opacity-100 transition">News</a></li>
                        <li><a href="#" className="hover:opacity-100 transition">About</a></li>
                        <li><a href="#" className="hover:opacity-100 transition">Contact Us</a></li>
                        <li><a href="#" className="hover:opacity-100 transition">Our Team</a></li>
                    </ul>
                </motion.div>
            </div>
            <div className="bg-black py-6 text-center">
                <p className="text-sm opacity-70">Copyright &copy;2024; Designed by <span className="uppercase tracking-wider font-semibold">BIG DAWGS</span></p>
            </div>
        </footer>
    );
}

export default Footer;
