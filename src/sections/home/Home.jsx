import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Aos from 'aos';
import 'aos/dist/aos.css';

import './Home.css';

function Home({ click }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });

    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <section className='h-screen bg-[#FFF7F3] backdrop-blur-2xl'>
      <nav className='bg-transparent flex p-4 md:p-20 justify-between h-24 items-center' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <div className='bg-transparent flex items-center cursor-pointer'>
          <span className='bg-transparent text-[#433E49] text-20px font-bold font-nico-moji'>Yaikob</span>
          <div className="bg-transparent w-6 h-6 rounded-full border-2 border-[#433E49] flex items-center justify-center ml-1">
            <span className='text-[#433E49] text-sm font-bold font-nico-moji bg-transparent'>Z</span>
          </div>
        </div>
        <div onClick={() => {
          const contact = document.getElementById('contact-section');
          contact.scrollIntoView({ behavior: 'smooth' });
        }} className="bg-transparent flex items-center cursor-pointer hover:border-b-2 transition duration-1000 border-[#433E49]">
          <FaArrowRight className='bg-transparent' />
          <span className='bg-transparent font-lato font-bold ml-1'>Contact</span>
        </div>
      </nav>
      <div className="pt-20 md:pt-0">
        
      <div className="bg-transparent px-4 md:px-20 flex flex-col md:flex-row justify-between mt-10 md:mt-20" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <div className="bg-transparent md:w-1/4 md:flex md:justify-center">
          <img src="icon.svg" className="h-20 w-20 md:h-40 md:w-40 mx-auto md:mx-0 bg-transparent hidden md:block" alt="logo" />
        </div>
        <div className="bg-transparent description w-full md:w-80 mt-4 md:mt-0">
          <p className='bg-transparent text-center md:text-left w-full md:w-70 font-lato text-base font-normal mb-2 text-[#433E49]'>
            Focusing on full-stack development & UI/UX designing for both Mobile Apps and WebApps.
          </p>
          <hr className='bg-transparent w-full md:w-70 border-t-1 border-dashed border-[#433E49]' />
          <div className="bg-transparent flex justify-center md:justify-between mt-3">
            <a href="https://www.linkedin.com/in/yaikob-zeray" className='none'><FaLinkedin className='bg-transparent cursor-pointer mx-2' /></a>
            <a href="https://github.com/yaikobzeray/Yaikob-Zeray" className='none'><FaGithub className='bg-transparent cursor-pointer mx-2' /></a>
            <a href="https://x.com/YaikobZeray" className='none'><FaXTwitter className='bg-transparent cursor-pointer mx-2' /></a>
            <a href="https://www.instagram.com/yaikobzeray/" className='none'><FaInstagram className='bg-transparent cursor-pointer mx-2' /></a>
            <a href="mailto:yaikobzeray@gmail.com" className='none'><MdAlternateEmail className='bg-transparent cursor-pointer mx-2' /></a>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-20 flex flex-col justify-start mt-10 md:mt-20 bg-transparent" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <div className="bg-transparent description w-full md:w-80">
          <p className='bg-transparent text-center md:text-left w-full md:w-70 font-lato text-4xl font-bold mb-2 text-[#433E49]'>
            I'm Yaikob Zeray
          </p>
          <hr className='w-full md:w-70 border-t-1 border-dashed border-[#433E49]' />
          <div className="bg-transparent mt-3">
            <p className='bg-transparent text-center md:text-left w-full md:w-70 font-lato text-sm font-light text-[#433E49]'>
              " Turning Ideas into Reality through Code "
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Home;
