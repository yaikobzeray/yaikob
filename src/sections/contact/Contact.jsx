import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import Aos from "aos";
import emailjs from '@emailjs/browser';
import "aos/dist/aos.css";

function Contact({ reference }) {
    const form = useRef();
    const [isSent, setSentStatus] = useState(false);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const validateForm = () => {
        const newErrors = {};

        if (!formState.name) {
            newErrors.name = 'Name is required';
        }

        if (!formState.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formState.message) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) return; // Prevent sending if validation fails

        setSentStatus(false);  // Set status to 'sending'
        console.log(`${import.meta.env.REACT_APP_SERVICE_ID}`);
        emailjs.sendForm(
            import.meta.env.VITE_REACT_APP_SERVICE_ID,
            import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_REACT_APP_USER_ID
        )
        .then(() => {
            setSentStatus(true);  // Set status to 'sent'
            setFormState({
                name: '',
                email: '',
                message: '',
            });  // Reset the form fields
            console.log('SUCCESS!');

            setTimeout(() => {
                setSentStatus(false); 
            }, 3000);
        })
        .catch((error) => {
            console.error('FAILED...', error.text);
        });
    };

    useEffect(() => {
        Aos.init({ duration: 2000 });
        return () => {
            Aos.refresh();
        };
    }, []);

    return (
        <>
            <section id="contact-section">
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="right-bottom"
                    className="w-full mb-20 md:h-screen md:flex md:justify-center">
                    <div className="w-1/2 h-96 pt-28">
                        <span className="font-lato bg-transparent text-[#928490] text-2xl font-normal">
                            Contact Me  
                        </span>
                        <div className="ml-24 mt-14">
                            <p className="font-lato text-sm w-80">
                            Got a brilliant idea? 💡
                            I'm all ears and excited to chat about it!😊✨</p>
                            <div className="">
                                <form ref={form} onSubmit={sendEmail}>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="border-b-2 mt-2 border-[#433E49] w-80 p-2 focus:outline-none focus:placeholder:text-sm placeholder:font-lato placeholder:text-[#433E49]"
                                        placeholder="Name"
                                    />
                                    {errors.name && <p className="text-red-500">{errors.name}</p>}

                                    <input
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="border-b-2 mt-2 border-[#433E49] w-80 p-2 focus:outline-none focus:placeholder:text-sm placeholder:font-lato placeholder:text-[#433E49]"
                                        placeholder="Email"
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email}</p>}

                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        className="border-b-2 mt-2 border-[#433E49] w-80 p-2 focus:outline-none focus:placeholder:text-sm placeholder:font-lato placeholder:text-[#433E49]"
                                        placeholder="Message"
                                    />
                                    {errors.message && <p className="text-red-500">{errors.message}</p>}
                                    
                                    <br />
                                    <div className="w-1/2 flex justify-center">
                                        <input
                                            type="submit"
                                            value="Send"
                                            className="mt-10 px-10 py-2 bg-[#433E49] rounded-md text-[#FFF7F3]"
                                        />
                                    </div>
                                </form>
                              
                                {isSent && <div className="w-64 flex justify-center">
                                    <p className="mt-4 text-[#433E49]">Message sent successfully!</p>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <div className="pt-40">
                        <div className="h-80 flex flex-col justify-around border py-10 px-20 rounded-lg bg-[#433E49]">
                            <div className="flex justify-around bg-transparent">
                                <MdEmail className="text-4xl bg-[#433E49] text-[#FFF7F3]" />
                                <span className="font-lato text-sm ml-4 bg-[#433E49] text-[#FFF7F3]">
                                    yaikobzeray@gmail.com
                                </span>
                            </div>
                            <div className="flex bg-transparent">
                                <IoCall className="text-4xl bg-transparent text-[#FFF7F3]" />
                                <div className="flex flex-col ml-4 bg-transparent">
                                    <span className="font-lato text-sm bg-transparent text-[#FFF7F3]">
                                        +251905221804
                                    </span>
                                    <span className="font-lato text-sm bg-transparent text-[#FFF7F3]">
                                        +251704320055
                                    </span>
                                </div>
                            </div>
                            <div className="flex bg-transparent text-[#FFF7F3]">
                                <IoLocation className="text-4xl bg-transparent" />
                                <div className="flex flex-col ml-4 bg-transparent">
                                    <span className="font-lato text-sm bg-transparent text-[#FFF7F3]">
                                        Ethiopia,
                                    </span>
                                    <span className="font-lato text-sm bg-transparent text-[#FFF7F3]">
                                        Addis Ababa
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
