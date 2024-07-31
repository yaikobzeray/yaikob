import { useEffect, useRef, useState } from 'react';
import { BsDownload } from "react-icons/bs";
import { RiFlutterFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { BsDatabaseFillGear } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import Aos from "aos";

import 'aos/dist/aos.css';

import './About.css'
import Modal from '../../components/Modal';
import Card from '../../components/AboutCard'

function About() {

    const btnRef = useRef(null);
    const spanRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { width } = e.target.getBoundingClientRect();
            const offset = e.offsetX;
            const left = `${(offset / width) * 100}%`;
            spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
            console.log(left);

        }
        const handleMouseLeave = () => {
            spanRef.current.animate(
                { left: "50%" },
                { duration: 100, fill: "forwards" }
            );
        };

        btnRef.current.addEventListener("mousemove", handleMouseMove);
        btnRef.current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            btnRef.current.removeEventListener("mousemove", handleMouseMove);
            btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState();

    let description = {
        flutter: {
            icon: RiFlutterFill,
            'title': 'Flutter Framework',
            'sub-title': 'For X-platform Mobile App development',
            'description': "I possess a robust skill set that allows me to build high-performance, visually appealing, and cross-platform applications with a single codebase. My expertise includes a deep understanding of the Dart programming language and the Flutter framework, enabling me to create expressive and flexible UIs using Flutter's rich set of customization widgets. My skills extend to integrating Firebase, Nodejs, Laravel, Django and other backend services, ensuring seamless functionality across mobile, web, and desktop platforms. Additionally, I am adept at optimizing app performance, managing state effectively, and utilizing third-party libraries to enhance app features."
        },
        murn: {
            icon: FaReact,
            'title': 'Murn Framework',
            'sub-title': 'For fullstack WebApp development',
            'description': 'I have comprehensive skills in building full-stack web applications using MongoDB, Express.js, React, and Node.js. My expertise includes designing and developing dynamic front-end interfaces with React, managing application state with Redux, and implementing responsive UI components. On the backend, I am proficient in creating RESTful APIs with Node.js and Express.js, integrating with MongoDB for robust database management. I excel in handling server-side logic, user authentication, and data validation, ensuring secure and efficient application performance. My skills also encompass using version control systems like Git, deploying applications to cloud platforms, and maintaining clean, modular code for scalability and maintainability.'
        },
        backend: {
            icon: BsDatabaseFillGear,
            'title': 'Backend Development',
            'sub-title': 'Building Apis',
            'description': 'I have advanced skills in backend development with expertise in Node.js, Laravel, and Django frameworks. My experience includes working with various databases such as SQL, MongoDB, and SQLite. I excel in building robust, scalable, and secure server-side applications, creating efficient APIs, and ensuring data integrity. I have a strong understanding of database design, optimization, and management. My ability to integrate with frontend applications and third-party services ensures seamless and performant user experiences. I am committed to maintaining high standards of code quality and implementing best practices for security and performance.'
        },
        figma: {
            icon: FaFigma,
            'title': 'Figma',
            'sub-title': 'For UI/UX designs',
            'description': "I have advanced skills in creating intuitive and visually compelling user interfaces and experiences. My expertise includes crafting detailed wireframes, interactive prototypes, and high-fidelity designs using Figma's collaborative design tools. I excel in implementing design systems, ensuring consistency and scalability across projects. I have a keen eye for detail, strong typography and color theory knowledge, and the ability to create accessible and user-centered designs that meet both aesthetic and functional requirements."
        },
    };
    useEffect(() => {
        Aos.init({ duration: 2000 });

        return () => {
            Aos.refresh();
        };
    }, []);
    return (<section className="md:h-screen ml-20 mr-20 block md:flex justify-around">
        <div className='h-screen  flex-col justify-center '>
            <div className="phone mt-30" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div className="vol ">
                    <div className="vol-inc"></div>
                    <div className="vol-dec"></div>
                </div>
                <div className="phone-frame" >

                    <div className="img-holder">
                        <div className="camera-holder flex justify-end items-center">
                            <div className="camera h-3 w-3 rounded-full mr-1">
                                <div className="camera-lense">

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="power-btn"></div>
            </div>
        </div>

        <div className="flex justify-center w-full  ">
        <div className="mt-40 ml-20">
            <div className="" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <span className='  font-lato bg-transparent text-[#928490] text-2xl font-normal' >About Me</span>
                <p className=' pTxt text-[#433E49] text-sm mt-2'>I'm a Software engineer based in Addis Ababa. I specialize in Mobile App and WebApp design and development. Currently, I’m freelancer.</p>
            </div>
            <div className="">

            <div className="mt-5" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <span className='font-lato bg-transparent text-[#928490] text-base font-normal mt-4'>Skils</span>
                <div className="flex w-80 justify-between mt-5 ml-5" data-aos="fade-right">
                    <RiFlutterFill onMouseEnter={() => {
                        setShowModal(true);
                        setModalContent(description.flutter);
                    }} className='h-10 w-10  text-[#433E49]' />
                    <FaReact onMouseEnter={() => {
                        setShowModal(true);
                        setModalContent(description.murn);
                    }} className='h-10 w-10  text-[#433E49]' />
                    <BsDatabaseFillGear onMouseEnter={() => {
                        setShowModal(true);
                        setModalContent(description.backend);
                    }} className='h-10 w-10 text-[#433E49]' />
                    <FaFigma onMouseEnter={() => {
                        setShowModal(true);
                        setModalContent(description.figma);
                    }} className='h-10 w-10 text-[#433E49]' />
                    {/* <CiCircleMore className='h-10 w-10 text-[#433E49]'/> */}
                </div>
            </div>
            <div className='mt-5 '>
                <span className='font-lato bg-transparent text-[#928490] text-base font-normal mt-4'>More</span>
                <div className="flex pt-4 w-full justify-around" data-aos="fade-right">
                    {/* <Card title="Java" subtitle="As a software engineer, I have extensive experience with Java, having completed numerous mini projects using this programming language throughout my educational journey." Icon={FaJava} /> */}
                    <Card title="Git" subtitle="I have extensive experience using Git for version control, ensuring efficient collaboration and management of code across various projects." Icon={FaGitAlt} href="#" />
                    <Card title="Firebase" subtitle="I'm a Software engineer based in Addis Ababa. I specialize in Mobile App and WebApp design and development. Currently, I’m freelancer." Icon={RiFirebaseFill} href="#"/>
                </div>
            </div>
            </div>
           

        </div>
        </div>
        
        <div className="w-80 h-10 mt-20">
            <button data-aos="fade-up" data-aos-anchor-placement="center-bottom" ref={btnRef} className="flex justify-center relative w-full overflow-hidden rounded-lg ☐ bg-[#928490] px-4 py-3 text-lg font-medium text-white">
                <a href="https://drive.google.com/uc?export=download&id=13AeUw6Ma4rrm3URm5PrG-HqHb9LVMzrB" download='Yaikob-Zeray.pdf' className='none bg-transparent'> <span className=" flex justify-between w-12 items-center font-lato font-normal pointer-events-none relative z-10 mix-blend-difference bg-transparent">
                    <BsDownload className=' bg-transparent' />  CV
                </span></a>
                <span ref={spanRef} className="pointer-events-none absolute left-[50%] top-[50%] h-28 w-28 -translate-x-[50%] -translate-y-[50%] rounded-full bg-[#FFF7F3]"></span>
            </button>
        </div>

        {showModal && <Modal onClose={() => setShowModal(false)} content={modalContent} />}
    </section>);
}

export default About