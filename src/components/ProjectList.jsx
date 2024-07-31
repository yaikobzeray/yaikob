import { useReducer } from "react";
import { IoClose } from "react-icons/io5";

function reducer(state, action) {
    switch (action.type) {
        case 'selectProject':
            return {
                ...state,
                isSelected: action.payload,
            };
        case 'popup':
            return {
                ...state,
                ispoppedup: true
            };
        case 'closePopUp':
            return {
                ...state,
                ispoppedup: false,
                isSelected: null,
            };
        default:
            return state;
    }
}

function ProjectList(props) {
    if (!props.project || props.project.length === 0) {
        return null; // or a loading indicator or an empty message
    }

    const [state, dispatch] = useReducer(reducer, {
        isSelected: null,
        ispoppedup: false,
    });

    function selectProject(project) {
        dispatch({ type: 'selectProject', payload: project });
        dispatch({ type: 'popup' });
    }

    function closePopup() {
        dispatch({ type: 'closePopUp' });
    }

    return (
        <>
            <ul className={`${props.isClicked ? 'ml-48 w-96' : 'hidden'}`}>
                {props.project.map(project => (
                    <li
                        onClick={() => selectProject(project)}
                        key={project.id}
                        className={`${state.isSelected && state.isSelected.id === project.id ? "w-full rounded-lg bg-[#433E49] text-[#fff3ff] p-4" : "w-full p-4 font-lato cursor-pointer group"}`}
                    >
                        <div className="group-hover:bg-[#433E49] group-hover:text-[#fff3ff] group-hover:border group-hover:border-[#433E49] p-4 -m-4 rounded-lg transition-colors duration-200 ease-in-out">
                            {project.title}
                        </div>
                    </li>
                ))}
            </ul>
            {/* <div className={`${state.ispoppedup ? 'w-full h-screen fixed inset-0 bg-[#928490] bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-20 rounded-md' : 'hidden'}`}>
                <div className="w-2/3 h-96 flex  px-14 bg-[#FFF7F3] rounded-2xl items-start">
                    <div className="bg-transparent py-16 ">
                        <p className="font-lato font-bold text-[#433E49] bg-transparent">{state.isSelected?.title}</p>
                        <p className="font-lato text-sm mt-2 w-4/4 mr-5 text-[#433E49] bg-transparent">{state.isSelected?.description}</p>
                    </div >
                    <div className={` mr-10 w-7/12 h-80 my-8 bg-cover bg-transparent border-[#433e49a2] border-2 border-solid rounded-xl`}>
                        <img src={state.isSelected?.img} className="w-full h-full rounded-xl bg-cover" alt="" /></div>
                     <IoClose onClick={closePopup} className="text-8xl bg-transparent cursor-pointer hover:text-red-600" />
                </div>
            </div> */}
        </>
    );
}

export default ProjectList;
