export default function SendMeAMessage() {
    return(
        <div className="grid grid-cols-1 grid-rows-[1fr_10fr] h-screen bg-primary font-inconsolata px-4 py-4">
            <div className="bg-coolgreen text-black text-[clamp(1.5rem,3vw,5rem)] w-fit p-1 flex items-center font-extrabold">
                Send Me a Message
            </div>
            <div className="flex justify-center items-center">
                <div className="border border-black h-[clamp(300px,80vh,700px)] w-[clamp(100px,90vw,500px)] bg-form grid grid-rows-[1fr_1fr_2fr] grid-cols-1 p-4">
                    <div className="text-[clamp(1rem,5vw,3rem)] grid grid-cols-[1fr_2fr] self-center">
                        <div>
                            Name:
                        </div>
                        <div className="bg-white border border-black h-[clamp(1rem,5vw,3rem)] " />
                    </div>
                    <div className="text-[clamp(1rem,5vw,3rem)] grid grid-cols-[1fr_2fr] self-center">
                        <div>
                            Email:
                        </div>
                        <div className="bg-white border border-black h-[clamp(1rem,5vw,3rem)] " />
                    </div>
                    <div className="text-[clamp(1rem,5vw,3rem)] self-center">
                        <div>
                            Message:
                        </div>
                        <div className="bg-white border border-black h-[clamp(2rem,20vw,10rem)] " />
                    </div>
                </div>
            </div>
        </div>
    );
}