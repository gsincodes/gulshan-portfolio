export default function SendMeAMessage() {
    return(
        <div id="contact" className="grid grid-cols-1 grid-rows-[1fr_9fr_1fr] h-screen bg-primary font-inconsolata px-4 py-4">
            <div className="bg-coolgreen text-black text-[clamp(1.5rem,3vw,5rem)] w-fit p-1 flex items-center font-extrabold shadow-xl">
                Send Me a Message
            </div>
            <div className="flex justify-center items-center">
                <form className="border border-black max-sm:h-[clamp(70px,50vh,700px)] max-md:h-[clamp(70px,55vh,700px)] h-[clamp(70px,70vh,700px)] w-[clamp(100px,90vw,500px)] bg-form grid grid-rows-[1fr_1fr_2fr_1fr] grid-cols-[1fr_2fr] p-4 shadow-xl leading-none">
                    <div className="grid grid-cols-[1fr_2fr] self-center max-md:flex max-md:flex-col h-full col-span-2">
                        <label htmlFor="name" className="text-[clamp(2rem,5vw,3rem)] self-end">Name:</label>
                        <input type="text" id="name" className="bg-white border border-black text-black w-full h-[clamp(3rem,5vw,6rem)] self-end" />
                    </div>
                    <div className="grid grid-cols-[1fr_2fr] self-center max-md:flex max-md:flex-col h-full col-span-2">
                        <label htmlFor="email" className="text-[clamp(2rem,5vw,3rem)] self-end">Email:</label>
                        <input type="text" id="email" className="bg-white border border-black h-[clamp(3rem,5vw,6rem)] text-black w-full self-end" />
                    </div>
                    <div className="self-center">
                        <label htmlFor="message" className="text-[clamp(2rem,5vw,3rem)] self-end">Message:</label>
                        <input type="textarea" id="message" className="bg-white text-black border border-black h-[clamp(3rem,30vw,10rem)] w-full" />
                    </div>
                    <button type="submit" className="bg-coolgreen rounded-full w-[clamp(2rem,20vw,10rem)] text-black h-[clamp(2rem,5vw,4rem)] justify-self-center self-center shadow-xl border border-black col-span-2">Send</button>
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