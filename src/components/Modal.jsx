import { RiFlutterFill } from "react-icons/ri";

import { FaReact } from "react-icons/fa";
import { BsDatabaseFillGear } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import "../components/Modal.css"
import { useRef, useState } from "react";

function Modal({onClose,content}) {
    const modalRef = useRef( );
    const closeModal =(event)=>{
        if(modalRef.current === event.target){
            onClose();
        }
    }
 

    return (<>
        <div ref={modalRef} onClick={closeModal} className=" fixed inset-0 bg-[#928490] bg-opacity-40 backdrop-blur-sm flex items-center justify-end z-20" >
            <div className="flex items-start bg-transparent mt-40">
                <div className="text-[#433E49] bg-[#FFF7F3] p-10 rounded-xl mt-10 ml-10 modal">

                    <div className="w-80">
                        <div className=" flex justify-start w-full ">
                            <content.icon size={40} className="bg-transparent w-20" />
                            <div className="bg-transparent text-[#433E49]">
                                <span className=" bg-transparent text-[#433E49] font-lato font-bold text-sm w-full">{content['title']}</span>
                                <p className="bg-transparent text-[#433E49] font-lato font-lighter text-xs w-full"  >{content['sub-title']}</p>
                            </div>
                        </div>
                        <p className=" overflow-hidden bg-transparent text-[#433E49] w-full font-lato text-sm mt-3 text-justify">
                            {content['description']}
                        </p>
                    </div>


                </div>
                <button onClick={()=>onClose()}><AiOutlineClose size={30} className=" bg-transparent text-[#433E49] mr-14" /></button>
            </div>


        </div>
    </>);
}

export default Modal