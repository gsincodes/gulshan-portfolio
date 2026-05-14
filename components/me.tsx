import Image from "next/image";

export default function Me() {
    return (
        <div className="grid h-screen bg-primary font-inconsolata px-4 py-4 place-items-center">

            <div className="col-start-1 row-start-1">
                <div className="w-[clamp(250px,80vw,600px)] h-[clamp(250px,80vw,600px)] bg-lime-300 rounded-full relative z-0" />
            </div>

            <div className="col-start-1 row-start-1 z-10">
                <Image 
                    className="w-[clamp(50px,60vw,400px)] h-auto border border-black"
                    src="/images/Snapchat-127158452 1.png" 
                    alt="Gulshan Singh" 
                    width={391}
                    height={694}
                />
            </div>

            <div className="flex-1 z-5 text-[clamp(3.5rem,10vw,13rem)] col-start-1 row-start-1">
                <div className="flex z-7">
                    <div className="text-white font-extrabold font-anek-gurmukhi">ਗੁਲਸ਼ਨ</div>
                    <div className="text-black font-extrabold font-anek-gurmukhi">ਸਿੰਘ</div>
                </div>
                <div className="flex z-6">
                    <div className="text-black font-extrabold font-anek-gurmukhi">ਗੁਲਸ਼ਨ</div>
                    <div className="text-white font-extrabold font-anek-gurmukhi">ਸਿੰਘ</div>
                </div>
            </div>

            <div className="col-start-1 row-start-1 h-full w-full grid grid-cols-1 grid-rows-6">

                <div className="text-white font-inconsolata font-extrabold text-[clamp(1.3rem,3vw,2.3rem)] z-5 leading-none row-start-1">
                    Full-stack Developer <br /> (React, Node.js, PostgreSQL, Docker)
                </div>

                <div className="text-white font-inconsolata font-extrabold text-[clamp(1.3rem,3vw,2.3rem)] z-10 leading-none row-start-2 flex justify-end">
                    B.Tech ECE Graduate <br /> published IEEE <br /> reasearcher turned coder.
                </div>

                <div className="text-white font-inconsolata font-extrabold text-[clamp(1.3rem,3vw,2.3rem)] z-10 leading-none row-start-5 max-sm:flex justify-center items-center">
                    Looking for a team <br /> where I can ship, learn, <br /> and refactor with purpose.
                </div>

                <div className="text-[clamp(3rem,10vw,6rem)] text-black font-extrabold font-inconsolata z-20 row-start-6 flex flex-col items-end">
                    ME
                </div>
            </div>

        </div>
    );
}