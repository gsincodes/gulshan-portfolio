import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-primary font-inconsolata sm:px-2 md:px-4 lg:px-8 xl:px-16 py-4">
      <div className="flex items-center justify-between w-full">
        <header>
          <h1 className="text-[1rem] md:text-[2rem] font-bold">gulshan(gsincodes){}</h1>
        </header>
        <nav className="text-sm font-medium text-gray-600 sm:text-base md:text-lg lg:text-xl xl:text-2xl justify-evenly flex-1">
          <ul className="flex space-x-4 justify-evenly">
            <li><a href="#projects" className="hover:text-gray-900">Projects</a></li>
            <li><a href="#resume" className="hover:text-gray-900">Resume</a></li>
            <li><a href="#about" className="hover:text-gray-900">About</a></li>
            <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </div>
      {/* <div className="w-[1440px] h-0.5 outline outline-1 outline-offset-[-0.50px] outline-black mt-4"></div> */}
      <main className="flex flex-col flex-1 items-center justify-center">
        <div className="flex md:flex-row flex-col text-[6rem] md:text-[8rem] lg:text-[9rem] xl:text-[12rem] font-bold justify-center items-center text-center leading-none">
          <div className="text-white/15 text-stroke-1a">Gulshan</div>
          <div className="text-black/15">Singh</div>
        </div>
        <div className="flex flex-col justify-center items-center text-center leading-none">
          <h2 className="flex text-black text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-bold justify-center items-center relative z-10">Hi, I'm</h2>
          <div className="flex flex-col text-[6rem] md:text-[8rem] lg:text-[9rem] xl:text-[12rem] md:flex-row font-bold justify-center items-center text-center relative z-10">
            <h1 className="text-stroke-1b">Gulshan</h1>
            <h1 className="text-black">Singh</h1>
          </div>
          <div className="w-[1234] h-24 bg-lime-300 rounded-[200px] fixed inset-y-auto flex items-center justify-center -z-0" /> {/* Yellow rectangle */}
        </div>
        <div>
          <h2 className="text-white font-bold text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] text-center relative z-10">a fullstack developer</h2>
        </div>
        <div className="flex md:flex-row flex-col text-[6rem] md:text-[8rem] lg:text-[9rem] xl:text-[12rem] font-bold justify-center items-center text-center leading-none">
          <h1 className="text-white/15 text-stroke-1a">Gulshan</h1>
          <h1 className="text-black/15">Singh</h1>
        </div>
      </main>
    </div>
  );
}
