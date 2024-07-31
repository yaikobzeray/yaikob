import { FaAppStore } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { useReducer, useState } from "react";
import ProjectList from "./ProjectList";
import { BsGlobe } from "react-icons/bs";
import { BsDatabaseFillGear } from "react-icons/bs";
import { LuLayoutTemplate } from "react-icons/lu";

// Reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'click':
            return {
                ...state,
                items: state.items.filter(item => item.id === action.payload.id),
                isClicked: true
            };
        case 'back':
            return {
                ...state,
                items: [
                    { id: 0, title: 'Mobile Apps', slogan: 'Quality apps are built here!', icon: FaAppStore },
                    { id: 1, title: 'WebApps', slogan: 'Quality apps are built here!', icon: BsGlobe },
                    { id: 2, title: 'Backends', slogan: 'Quality apps are built here!', icon: BsDatabaseFillGear },
                    { id: 3, title: 'Designs', slogan: 'Quality apps are built here!', icon: LuLayoutTemplate },
                ],
                isClicked: false
            };
        default:
            return state;
    }
}

function ProjectCard(props) {
    const [state, dispatch] = useReducer(reducer, {
        items: [
            { id: 0, title: 'Mobile Apps', slogan: 'From Idea to App in No Time', icon: FaAppStore },
            { id: 1, title: 'WebApps', slogan: 'Where Innovation Meets Simplicity', icon: BsGlobe },
            { id: 2, title: 'Backends', slogan: 'Transforming Concepts into Code', icon: BsDatabaseFillGear },
            { id: 3, title: 'Designs', slogan: 'Your Vision, Our Platform', icon: LuLayoutTemplate },
        ],
        isClicked: false
    });

    const handleBack = () => {
        dispatch({ type: 'back' });
    };

    const projects = {
        Mobile: {
            category: 'Mobile Apps',
            slogan: 'Quality apps are built here!',
            projects: [
                {
                    id: 'mobile1',
                    title: 'TripMate',
                    description: 'Tripmate is a digital tourism management system for the Gamo Tourism Bureau. It offers app and web versions with features like booking, e-commerce, tour management, blogs, and tourist information, plus analytics for the bureau.',
                    img: 'https://i.ibb.co/LhnVKdq/Screenshot-20240722-200143.jpg'
                },
                {
                    id: 'mobile2',
                    title: 'HelthPilot',
                    description: 'HealthPilot is a platform for health assessment and private doctor consultations. Users can communicate with doctors via chat and video calls. The system includes features such as health assessment results, a chatbot, and more.',
                    img: 'https://i.ibb.co/jkYFkZp/photo-2024-07-31-08-03-37.jpg'
                },
                {
                    id: 'mobile3',
                    title: 'Owl Events',
                    description: 'Owl Events all-in-one platform for creating, promoting, and managing memorable events with effortless ticketing. https://play.google.com/store/apps/details?id=org.awuraplc.owlevents',
                    img: 'https://i.ibb.co/BgTFvfG/Screenshot-2023-12-27-083408.png'
                },
                {
                    id: 'mobile4',
                    title: 'EasyExam (Ongoing)',
                    description: 'EasyExam is an exam preparation app designed to assist students taking the National Exam. It offers features such as questions categorized by chapters, most rated questions, a chatbot, score tracking, and a schedule planner.',
                    img: 'https://i.ibb.co/ypV2Lcg/i-Phone-13-14-9.png'
                },
                {
                    id: 'mobile5',
                    title: 'Brana Note',
                    description: 'Brana Note is a note and quote-taking app where users can create accounts and sync their data to the cloud. This allows them to access their notes and quotes later from the same device or any other device.',
                    img: 'https://i.ibb.co/CVX7ZtL/Screenshot-20231219-143523.png'
                },
            ]
        },
        WebApps: {
            category: 'WebApps',
            slogan: 'Quality apps are built here!',
            projects: [
                {
                    id: 'webapps1',
                    title: 'Visit Gamo',
                    description: 'A web app offering information on tourist attractions, user registration and authentication, and dynamic admin features for adding destinations and posting blogs.',
                    img: 'https://i.ibb.co/GHHNP2z/Flat-Web-Design-Vector-Design-Images-Modern-Flat-Design-Concept-Of-Web-Seo-Analysis-With-Characters.jpg'
                },
                {
                    id: 'webapps2',
                    title: 'Easy Exam (Ongoing)',
                    description: 'EasyExam is an exam preparation app designed to assist students taking the National Exam. It offers features such as questions categorized by chapters, most rated questions, a chatbot, score tracking, and a schedule planner.',
                    img: 'https://i.ibb.co/GHHNP2z/Flat-Web-Design-Vector-Design-Images-Modern-Flat-Design-Concept-Of-Web-Seo-Analysis-With-Characters.jpg'
                },
            ]
        },
        backend: {
            category: 'Backend',
            slogan: 'Quality apps are built here!',
            projects: [
                {
                    id: 'backend1',
                    title: 'EasyExam',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit.',
                    img: 'https://i.ibb.co/CVX7ZtL/Screenshot-20231219-143523.png'
                },
                {
                    id: 'backend2',
                    title: 'TripMate',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit.',
                    img: 'https://i.ibb.co/CVX7ZtL/Screenshot-20231219-143523.png'
                },
            ]
        },
        design: {
            category: 'Design',
            slogan: 'Quality apps are built here!',
            projects: [
                {
                    id: 'design1',
                    title: 'Owl Events',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit.',
                    img: 'https://i.ibb.co/QQ4RBnT/Screenshot-2023-11-27-150458.png'
                },
                {
                    id: 'design2',
                    title: 'TripMate',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit.',
                    img: 'https://i.ibb.co/CVX7ZtL/Screenshot-20231219-143523.png'
                },
                {
                    id: 'design3',
                    title: 'Easy Exam',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit.',
                    img: 'https://i.ibb.co/CVX7ZtL/Screenshot-20231219-143523.png'
                },
            ]
        },
    };

    const [project, setProject] = useState(projects.Mobile);

    const resetProject = () => {
        setProject([]);
    }

    function selectProject(item) {
        resetProject();
        setTimeout(() => {
            switch (item) {
                case 'Mobile Apps':
                    setProject(projects.Mobile);
                    break;
                case 'WebApps':
                    setProject(projects.WebApps);
                    break;
                case 'Backends':
                    setProject(projects.backend);
                    break;
                case 'Designs':
                    setProject(projects.design);
                    break;
                default:
                    setProject(projects.Mobile);
            }
        }, 0);
    }

    const handleClick = (item) => {
        dispatch({ type: 'click', payload: item });
        selectProject(item.title);
    };

    return (
        <>
            <div className="bg-transparent" data-aos="fade-right" >
                <div className="flex w-full md:ml-24">
                    <ul className="grid grid-cols-2 gap-10 mt-36 md:ml-10">
                        {state.items.map(item => (
                            <li key={item.id} onClick={() => handleClick(item)}>
                                <div
                                    className={`w-48 h-48 flex flex-col px-4 py-4 justify-between items-start border-solid border-[rgba(0, 0, 0, 0.1)] border-2 rounded-lg transition-transform duration-300 
                                ${state.isClicked ? 'w-20 h-20 transform-gpu md:-translate-x-10 -translate-y-14 flex justify-center items-center p-0 ' : ''} cursor-pointer`}
                                >
                                    <div className={`${state.isClicked ? 'hidden' : 'flex w-full transition-opacity'}`}>
                                        <div className="w-6 h-6 border-solid rounded-full border-[rgba(0, 0, 0, 0.1)] border-2"></div>
                                        <item.icon className="text-6xl ml-14 mt-5 text-[rgb(0,0,0,0.2)]" />
                                    </div>
                                    <div className={`${state.isClicked && 'h-full w-full flex items-center justify-center bg-transparent'}`}>
                                        <p className={`font-lato font-bold text-[#433E49] ${state.isClicked ? 'text-center' : ''}`}>{item.title}</p>
                                        <p className={`${state.isClicked ? 'hidden' : "font-lato font-lighter text-[#433E49] text-xs"}`}>{item.slogan}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <IoArrowBackCircle
                        onClick={handleBack}
                        className={`${!state.isClicked ? 'hidden' : 'mt-28 md:ml-28 text-6xl text-[rgb(0,0,0,0.2)]'}`}
                    />
                </div>
                <ProjectList project={project.projects} isClicked={state.isClicked} />
            </div>
        </>
    );
}

export default ProjectCard;
