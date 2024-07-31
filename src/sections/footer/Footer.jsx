import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { ImOpt, ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { useEffect } from "react";
import Aos from "aos";
function Footer() {
    useEffect(() => {
        Aos.init({ duration: 2000 });

        return () => {
            Aos.refresh();
        };
    }, []);
    const currentYear = new Date().getFullYear();
    return (<>
        <div className="w-full h-96 bg-[#433E49] " data-aos="fade-up" data-aos-anchor-placement="right-bottom">

            <div className="flex w-full justify-center bg-transparent pt-20">
                <div className=" w-96 flex bg-transparent justify-around ">
                    <div className="bg-transparent flex flex-col justify-center items-center cursor-pointer">
                        <a href="https://www.linkedin.com/in/yaikob-zeray" className='none bg-transparent'> <FaLinkedin className="text-2xl bg-transparent text-[#FFF7F3]" /></a>

                        <p className="text-sm bg-transparent text-[#FFF7F3] font-lato pt-2">Linkedin</p>
                    </div>
                    <div className="bg-transparent flex flex-col justify-center items-center cursor-pointer">
                        <a href="https://github.com/yaikobzeray/Yaikob-Zeray" className='none bg-transparent'><FaGithub className="text-2xl bg-transparent text-[#FFF7F3]" /></a>

                        <p className="text-sm bg-transparent text-[#FFF7F3] font-lato pt-2">Github</p>
                    </div>


                    <div className="bg-transparent flex flex-col justify-center items-center cursor-pointer">
                        <a href="https://x.com/YaikobZeray" className='none bg-transparent'><FaXTwitter className="text-2xl bg-transparent text-[#FFF7F3]" /></a>

                        <p className="text-sm bg-transparent text-[#FFF7F3] font-lato pt-2">Twitter</p>
                    </div>

                    <div className="bg-transparent flex flex-col justify-center items-center cursor-pointer">
                        <a href="https://www.instagram.com/yaikobzeray/" className='none bg-transparent'><FaInstagram className="text-2xl bg-transparent text-[#FFF7F3]" /></a>


                        <p className="text-sm bg-transparent text-[#FFF7F3] font-lato pt-2">Instagram</p>
                    </div>

                    <div className="bg-transparent flex flex-col justify-center items-center cursor-pointer">
                        <a href="mailto:yaikobzeray@gmail.com" className='none bg-transparent'><MdAlternateEmail className="text-2xl bg-transparent text-[#FFF7F3]" /></a>


                        <p className="text-sm bg-transparent text-[#FFF7F3] font-lato pt-2">Email</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center bg-transparent pt-14">
                <div className="bg-transparent w-60 ">
                    <div className="bg-transparent flex justify-start">
                        <ImQuotesLeft className="bg-transparent text-[#FFF7F3] text-3xl" />
                    </div>
                    <p className="bg-transparent text-center text-[#FFF7F3] ml-5 font-lato text-sm">
                        Your vision deserves the best. <br /> Let's build it together with expertise, passion, and innovation.
                    </p>

                    <div className="bg-transparent flex justify-end">
                        <ImQuotesRight className="bg-transparent text-[#FFF7F3] text-3xl" />
                    </div>
                </div>
            </div>

            <div className="bg-transparent w-full flex justify-center pt-14 font-lato text-xs">
                <p className="bg-transparent text-[#FFF7F3] font-lato">&copy; {currentYear}, All Rights Are Reserved</p>
            </div>


        </div>
    </>);
}

export default Footer;
