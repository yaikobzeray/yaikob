import { FaAppStore } from "react-icons/fa";
import { BsDatabaseFillGear } from "react-icons/bs";
import { AiFillApi } from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";
import { LuLayoutTemplate } from "react-icons/lu";
import { FaHeadphones } from "react-icons/fa6";
import { useEffect } from "react";
import Aos from "aos";

function Services() {
    useEffect(() => {
        Aos.init({ duration: 2000 });

        return () => {
            Aos.refresh();
        };
    }, []);
    let services = [
        { id: 1, icon: FaAppStore, title: 'Native and Cross-Platform Mobile App Development', description: 'I create high-quality native and cross-platform mobile applications tailored to your design specifications, ensuring seamless performance and user experience.' },
        { id: 2, icon: RiComputerFill, title: 'Frontend Web App Development', description: 'I build dynamic and responsive frontends using React or vanilla JavaScript, translating your designs into interactive and engaging web experiences.' },
        { id: 3, icon: BsDatabaseFillGear, title: 'Backend Development', description: "I develop robust backend systems using a range of technologies, customized to fit your project's needs and ensure reliable performance."},
        { id: 4, icon: LuLayoutTemplate, title: 'UI/UX Design', description: 'I craft intuitive and visually appealing UI/UX designs tailored to your needs, focusing on user-centered experiences that enhance functionality and aesthetics.' },
        { id: 5, icon: AiFillApi, title: 'API Integration', description: 'I integrate various APIs into your applications, enabling seamless data exchange and functionality enhancements tailored to your specific requirements.' },
        { id: 6, icon: FaHeadphones, title: 'Consultation', description: 'I offer expert consultation to help you define your project requirements, plan your development strategy, and address any technical challenges.' }
    ];
    

    return (
        <div data-aos="fade-up" data-aos-anchor-placement="right-bottom" className="h-screen">
            <div className="md:px-40  py-16">
                <p className='font-lato bg-transparent text-[#928490] text-2xl font-normal'>
                    Services
                </p>
            </div>

            <div className="flex h-1/2 w-full justify-center items-center mt-20">
                <ul className=" md:grid md:grid-cols-2 md:gap-10 ">
                    {services.map(service => (
                        <li key={service.id} className="mt-5">
                            <div className="flex w-96">
                                <div>
                                    <service.icon className="text-6xl text-[#433E49]" />
                                </div>
                                <div className="ml-6">
                                    <p className="font-lato text-sm font-bold text-[#433E49]">{service.title}</p>
                                    <p className="font-lighter text-xs font-lato text-[#433E49]">{service.description}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Services;
