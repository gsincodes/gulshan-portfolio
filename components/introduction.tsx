export default function Introduction() {
    return (
        <div className="flex min-h-screen flex-col bg-primary font-inconsolata sm:px-2 md:px-4 lg:px-8 xl:px-16 py-4">

            <nav className="flex items-center justify-around w-full mb-4">
                <div className="flex justify-center items-center bg-lime-400 rounded-[200px] w-auto h-15 sm:h-25"> {/* Green rectangle */}
                <header>
                    <h1 className="text-[1rem] sm:text-[2rem] font-bold text-black">gulshan(gsincodes){}</h1>
                </header>
                </div>
                <a href="#projects" className="hover:text-gray-900 text-sm font-medium text-gray-600 sm:text-lg lg:text-2xl">Projects</a>
                <a href="#resume" className="hover:text-gray-900 text-sm font-medium text-gray-600 sm:text-lg lg:text-2xl">Resume</a>
                <a href="#about" className="hover:text-gray-900 text-sm font-medium text-gray-600 sm:text-lg lg:text-2xl">About</a>
                <a href="#contact" className="hover:text-gray-900 text-sm font-medium text-gray-600 sm:text-lg lg:text-2xl">Contact</a>
            </nav>

            {/* <div className="w-[1440px] h-0.5 outline outline-1 outline-offset-[-0.50px] outline-black mt-4"></div> */}
            <main className="flex flex-col flex-1 items-center justify-center">

                {/*First Gulshan */}
                <div className="flex md:flex-row flex-col text-[6rem] md:text-[6rem] lg:text-[7rem] xl:text-[12rem] font-bold justify-center items-center text-center leading-none">
                <div className="text-white/15 text-stroke-1a">Gulshan</div>
                <div className="text-black/15">Singh</div>
                </div>

                <div className="flex flex-col justify-center items-center text-center leading-none">
                <h2 className="flex text-intro text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-bold justify-center items-center relative z-10">Hi, I'm</h2>
                <div>
                    {/*Second Gulshan */}
                    <div className="flex flex-col text-[6rem] md:text-[6rem] lg:text-[7rem] xl:text-[12rem] md:flex-row font-bold justify-center items-center text-center">
                    <div className="w-[370px] md:w-[633px] lg:w-[738px] xl:w-[1234px] h-24 bg-lime-300 rounded-[200px] fixed inset-y-auto flex items-center justify-center absolute z-0" /> {/* Yellow rectangle */}
                    <h1 className="text-stroke-1b z-10">Gulshan</h1>
                    <h1 className="text-black z-10">Singh</h1>
                    </div>
                </div>
                </div>

                <div> {/*Fullstack Developer*/}
                <h2 className="text-black font-bold text-[2rem] md:text-[3rem] xl:text-[6rem] text-center relative z-10">a fullstack developer</h2>
                </div>

                {/*Third Gulshan */}
                <div className="flex md:flex-row flex-col text-[6rem] md:text-[6rem] lg:text-[7rem] xl:text-[12rem] font-bold justify-center items-center text-center leading-none">
                <h1 className="text-white/15 text-stroke-1a">Gulshan</h1>
                <h1 className="text-black/15">Singh</h1>
                </div>
            </main>
        </div>
    );
}