import {motion} from "motion/react";
import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";

export default function SendMeAMessage() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;

        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, form, process.env.NEXT_PUBLIC_PUBLIC_KEY!).then((result) => {
            alert("Message Sent Successfully!")
            setFormData({name: "", email: "", message: ""});
            form.reset();
        }).catch((error) => {
            console.error("EmailJS Error:", JSON.stringify(error));
            alert("Oops!!! Something Went Wrong!!! Please Try Again.")
        })
    };

    return(
        <div id="contact" className="grid grid-cols-1 grid-rows-[1fr_9fr_1fr] h-screen bg-primary font-inconsolata px-4 py-4">
            <div className="bg-coolgreen text-black text-[clamp(1.5rem,3vw,5rem)] w-fit p-1 flex items-center font-extrabold shadow-xl">
                Send Me a Message
            </div>
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit} className="border border-black max-sm:h-[clamp(70px,50vh,700px)] max-md:h-[clamp(70px,55vh,700px)] h-[clamp(70px,70vh,700px)] w-[clamp(100px,90vw,500px)] bg-form grid grid-rows-[1fr_1fr_1fr_1fr] grid-cols-1 p-4 shadow-xl leading-none gap-2">
                    <div className="grid grid-cols-[1fr_2fr] max-md:flex max-md:flex-col h-full col-span-2 gap-y-2">
                        <label htmlFor="name" className="text-[clamp(2rem,5vw,3rem)] md:self-center">Name:</label>
                        <input type="text" id="name" name="name" required value={formData.name} 
                        onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                        className="bg-white text-[clamp(2rem,5vw,3rem)] border border-black text-black w-full h-[clamp(3rem,5vw,6rem)] self-center" />
                    </div>
                    <div className="grid grid-cols-[1fr_2fr] max-md:flex max-md:flex-col h-full col-span-2 gap-y-2">
                        <label htmlFor="email" className="text-[clamp(2rem,5vw,3rem)] md:self-center">Email:</label>
                        <input type="email" required name="email" id="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))} className="bg-white text-[clamp(2rem,5vw,3rem)] border border-black h-[clamp(3rem,5vw,6rem)] text-black w-full self-center" />
                    </div>
                    <div className="grid gap-y-2 ">
                        <label htmlFor="message" className="text-[clamp(2rem,5vw,3rem)] self-center">Message:</label>
                        <textarea required name="message" value={formData.message} onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))} id="message" className="bg-white text-[clamp(2rem,5vw,3rem)] text-black border border-black h-[clamp(3rem,30vw,10rem)] w-full self-center" />
                    </div>
                    <motion.button whileTap={{scale: 0.9, y: 3}} type="submit" className="bg-coolgreen rounded-full w-[clamp(2rem,20vw,10rem)] text-black h-[clamp(2rem,5vw,4rem)] justify-self-center self-center shadow-xl border border-black col-span-2">Send</motion.button>
                </form>
            </div>
            <div className="bg-form max-md:flex max-md:flex-col max-md:text-center grid grid-rows-2 grid-cols-1 text-[clamp(1rem,1.5vw,5rem)] shadow-xl text-black">
                <div className="row-start-1 flex justify-evenly max-md:flex-col">
                    <div>
                        Email: gsincodes@gmail.com
                    </div>
                    <div className="">
                        Check Out My Other Projects:
                        <a href="">Github</a>
                    </div>
                </div>
                <div className="row-start-2 flex justify-center">
                    gsincodes@2026
                </div>
            </div>
        </div>
    );
}