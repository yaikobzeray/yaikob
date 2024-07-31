import ProjectCard from '../../components/ProjectCard';
import { useEffect } from "react";
import Aos from 'aos';


import './Project.css'

function Projects() {
    useEffect(() => {
        Aos.init({ duration: 2000 });

        return () => {
            Aos.refresh();
        };
    }, []);

    return (
        <>
            <div className="flex  md:h-screen  " data-aos="fade-up" data-aos-anchor-placement="center-bottom" >
                <div className=' md:block'>
                    <div className="w-full flex justify-center pt-20 pb-8">
                        <p className=' font-lato bg-transparent text-[#928490] text-2xl font-normal'>Projects</p>
                    </div>
                    <div className=" hidden md:flex md:h-full  md:ml-32">

                        <div className="pc">
                            <div className="web-img">

                            </div>

                        </div>
                        <div className="phone-icon mt-60 -ml-28">
                            <div className="phone-img">

                            </div>
                        </div>
                    </div>

                </div>

                <ProjectCard />
            </div>
        </>
    );
}

export default Projects