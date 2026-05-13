export default function Introduction() {
    return (
        <div className="h-screen bg-primary font-inconsolata px-4 py-4 grid grid-rows-[1fr_12fr] grid-cols-1">

            <nav className="grid grid-cols-5 items-center row-span-1 p-1">
                <div className="flex justify-center items-center bg-lime-400 rounded-[200px] w-auto h-full col-span-2 shadow-xl">
                    <header>
                        <h1 className="text-[clamp(0.7rem,3vw,4rem)] 2xl:text-[4rem] font-bold text-black">gulshan(gsincodes){}</h1>
                    </header>
                </div>
                <div className="flex col-span-3 justify-evenly h-full items-center">
                    <a href="#projects" className="hover:text-gray-900 font-medium text-gray-600 text-[clamp(0.7rem,3vw,3rem)] lg:text-2xl">Projects</a>
                    <a href="#resume" className="hover:text-gray-900 font-medium text-gray-600 text-[clamp(0.7rem,3vw,3rem)] lg:text-2xl">Resume</a>
                    <a href="#about" className="hover:text-gray-900 font-medium text-gray-600 text-[clamp(0.7rem,3vw,3rem)] lg:text-2xl">About</a>
                    <a href="#contact" className="hover:text-gray-900 font-medium text-gray-600 text-[clamp(0.7rem,3vw,3rem)] lg:text-2xl">Contact</a>
                </div>
            </nav>

            <main className="grid grid-cols-1 grid-rows-[1fr_2fr_1fr]">

                
                <div className="flex md:flex-row flex-col text-[clamp(4rem,9vw,10rem)] font-bold justify-center items-center text-center leading-none">
                <div className="text-white/15 text-stroke-1a">Gulshan</div>
                <div className="text-black/15">Singh</div>
                </div>

                <div className="flex flex-col justify-evenly items-center text-center leading-none">
                    <h2 className="flex text-intro text-[clamp(3rem,4vw,6rem)] font-bold justify-center items-center">Hi, I'm</h2>
                    
                    
                    <div className="w-auto bg-lime-300 rounded-[200px] flex items-center justify-center p-4 shadow-xl">
                        <div className="flex flex-col text-[clamp(4rem,9vw,10rem)] md:flex-row font-bold justify-center items-center text-center mt-4">
                            <h1 className="text-stroke-1b">Gulshan</h1>
                            <h1 className="text-black">Singh</h1>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-black font-bold text-[clamp(2rem,3vw,5rem)] text-center relative z-10">a fullstack developer</h2>
                    </div>
                </div>

                
                <div className="flex md:flex-row flex-col text-[clamp(4rem,9vw,10rem)] font-bold justify-center items-center text-center leading-none">
                    <h1 className="text-white/15 text-stroke-1a">Gulshan</h1>
                    <h1 className="text-black/15">Singh</h1>
                </div>
            </main>
        </div>
    );
}