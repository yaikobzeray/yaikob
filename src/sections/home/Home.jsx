import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import Aos from 'aos';
import 'aos/dist/aos.css'

import './Home.css'

function Home({ click }) {
  const [isOpen, setIsOpen] = useState(false);



  useEffect(() => {
    Aos.init({ duration: 2000 });

    return () => {
      Aos.refresh();
    };
  }, []);
  return (
    <section className='h-screen bg-[#FFF7F3] backdrop-blur-2xl'>
      <nav className='bg-transparent flex p-20 justify-between h-24 items-start  ' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <div className='bg-transparent flex cursor-pointer'>
          <span className='bg-transparent text-[#433E49] text-20px font-bold font-nico-moji mt-3'>Yaikob</span>
          <div className="bg-transparent w-6 h-6 rounded-full border-2 border-[#433E49] flex items-center justify-center mb-2px " >
            <span className=' text-[#433E49] text-sm font-bold font-nico-moji bg-transparent'>Z</span>
          </div>
        </div>
        <div onClick={() => {
          const contact = document.getElementById('contact-section');
          contact.scrollIntoView({ behavior: 'smooth' });
        }} className="bg-transparent flex items-center  cursor-pointer hover:border-b-2 transition duration-1000 w- 30 border-[#433E49]" >
          <span><FaArrowRight className='bg-transparent' /></span>
          <span className='bg-transparent font-lato font-bold' >Contact</span>
        </div>
      </nav>

      <div className="bg-transparent mr-20 ml-20 flex w=100 justify-between mt-20 " data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <div className="bg-transparent  ">
          <img src="../assets/photos/icon.svg" className="h-40 w-40 ml-16 bg-transparent hidden  md:block " alt="" />
        </div>
        <div className="bg-transparent description w-80">
          <p className='bg-transparent w-70 font-lato text-base font-normal mb-2 txet-[#433E49]'>
            Focusing on full-stack development & ui|ux designing for both Mobile Apps and WebApps.
          </p>
          <hr className='bg-transparent w-70 border-t-1 border-dashed border-[#433E49]' />
          <div className="bg-transparent flex w-40 mt-3 justify-between">
            <a href="https://www.linkedin.com/in/yaikob-zeray" className='none'><FaLinkedin className='bg-transparent cursor-pointer' /></a>
            <a href="https://github.com/yaikobzeray/Yaikob-Zeray" className='none'><FaGithub className='bg-transparent cursor-pointer' /></a>
            <a href="https://x.com/YaikobZeray" className='none'><FaXTwitter className='bg-transparent cursor-pointer' /></a>
            <a href="https://www.instagram.com/yaikobzeray/" className='none'><FaInstagram className='bg-transparent cursor-pointer' /> </a>
            <a href="mailto:yaikobzeray@gmail.com" className='none'><MdAlternateEmail className='bg-transparent cursor-pointer' /></a>


          </div>
        </div>
      </div>

      <div className="mr-20 ml-20 flex w=100 justify-start mt-20 bg-transparent" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <div className="bg-transparent  description w-80">
          <p className='bg-transparent w-70 font-lato text-4xl font-bold mb-2 txet-[#433E49]'>
            I'm Yaikob Zeray
          </p>
          <hr className='w-70 border-t-1 border-dashed border-[#433E49]' />
          <div className="bg-transparent  w-70 justify-between mt-3">

            <p className=' bg-transparent w-70  font-lato text-sm font-lighter txet-[#433E49]'>

              " Turning Ideas into Reality through Code "
            </p>

          </div>


        </div>
      </div>
    </section>
  );
}

export default Home;
