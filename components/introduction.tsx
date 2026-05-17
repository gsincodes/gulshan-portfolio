'use client';

import {easeIn, easeInOut, easeOut, motion, px, spring} from "motion/react";
import { small } from "motion/react-client";

export default function Introduction() {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} className="h-screen bg-primary font-inconsolata px-4 py-4 grid grid-rows-[1fr_12fr] grid-cols-1">

            <motion.nav className="grid grid-cols-5 items-center row-span-1 p-1">
                <motion.div initial={{scale: 0.9, y: 10}} animate={{scale: 1, y: 0}} transition={{duration: 0.8, ease: easeIn, type: 'spring'}} whileHover={{scale: 1.05}} className="flex justify-center items-center bg-black rounded-[200px] w-auto h-full col-span-2 shadow-xl">
                    <header>
                        <h1 className="text-[clamp(0.7rem,2.8vw,4rem)] text-coolgreen">gulshan(gsincodes){}</h1>
                    </header>
                </motion.div>
                <div className="flex col-span-3 justify-evenly h-full items-center">
                    <motion.a whileHover={{scale: 1.05}} href="#projects" className="hover:text-gray-900 font-medium text-gray-600 text-[clamp(0.7rem,3vw,3rem)] lg:text-2xl">Projects</motion.a>
                    <motion.a whileHover={{scale: 1.05}} href="Gulshan-Singh-Resume-March-2026.pdf" target='_blank' rel="noopener noreferrer" className="hover:text-gray-900 font-medium text-gray-600 text-[clamp(0.7rem,3vw,3rem)] lg:text-2xl">Resume</motion.a>
                    <motion.a whileHover={{scale: 1.05}} href="#about" className="hover:text-gray-900 font-medium text-gray-600 text-[clamp(0.7rem,3vw,3rem)] lg:text-2xl">About</motion.a>
                    <motion.a whileHover={{scale: 1.05}} href="#contact" className="hover:text-gray-900 font-medium text-gray-600 text-[clamp(0.7rem,3vw,3rem)] lg:text-2xl">Contact</motion.a>
                </div>
            </motion.nav>

            <motion.main className="grid grid-cols-1 grid-rows-[1fr_2fr_1fr]">

                <motion.div initial={{scale: 0.5, y: 200}} animate={{scale: 1, y: 0}} transition={{duration: 0.8, ease: easeInOut}} className="flex md:flex-row flex-col text-[clamp(4rem,7vw,10rem)] font-bold justify-center items-center text-center leading-none">
                    <div className="text-white/70 text-stroke-1a">Gulshan</div>
                    <div className="text-black/70">Singh</div>
                </motion.div>

                <div className="flex flex-col justify-evenly items-center text-center leading-none">
                    <motion.h2 initial={{y:15, scale:0.9, opacity: 0}} animate={{y:0, scale: 1, opacity: 1}} transition={{duration: 1, ease: easeOut}} className="flex text-intro text-[clamp(3rem,4vw,6rem)] font-bold justify-center items-center">Hi, I'm</motion.h2>
                    
                    
                    <motion.div initial={{scale: 0.9, y: 30, opacity: 0}} animate={{scale: 1, y: 0, opacity: 1}} transition={{duration: 1, ease: easeIn, type: 'spring'}} whileHover={{scale: 1.05}}  className="w-auto bg-coolgreen rounded-[200px] flex items-center justify-center p-4 shadow-xl">
                        <motion.div initial={{scale: 1.5}} animate={{scale: 1}} transition={{duration: 1, ease: easeOut}} className="flex flex-col text-[clamp(4rem,9vw,10rem)] md:flex-row font-bold justify-center items-center text-center mt-4">
                            <h1 className="text-stroke-1b">Gulshan</h1>
                            <h1 className="text-black">Singh</h1>
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{y:15, scale:0.9, opacity:0}} animate={{y:0, scale: 1, opacity: 1}} transition={{duration: 1, ease: easeOut}}>
                        <h2 className="text-black font-bold text-[clamp(2rem,3vw,5rem)] text-center relative z-10">a fullstack developer</h2>
                    </motion.div>
                </div>

                <motion.div initial={{scale: 0.5, y: -200}} animate={{scale: 1, y: 0}} transition={{duration: 0.8, ease: easeInOut}} className="flex md:flex-row flex-col text-[clamp(4rem,7vw,10rem)] font-bold justify-center items-center text-center leading-none">
                    <h1 className="text-white/70 text-stroke-1a">Gulshan</h1>
                    <h1 className="text-black/70">Singh</h1>
                </motion.div>
            </motion.main>
        </motion.div>
    );
}