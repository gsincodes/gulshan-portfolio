'use client'

import Image from "next/image";
import {easeInOut, easeOut, motion} from "motion/react";

export default function Me() {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.8}} className="grid h-screen bg-primary font-inconsolata px-4 py-4 place-items-center">

            <motion.div initial={{scale: 1.15, y: 30, opacity: 0.5}} animate={{scale: 1, y: 0, opacity: 1}} transition={{duration: 1, ease: 'easeIn', type: 'spring'}} whileHover={{scale: 1.5}} className="col-start-1 row-start-1">
                <div className="w-[clamp(250px,80vw,600px)] h-[clamp(250px,80vw,600px)] bg-coolgreen rounded-full relative z-0 shadow-xl" />
            </motion.div>

            <motion.div initial={{scale: 1.05}} animate={{scale: 1}} transition={{duration: 1, ease: easeOut}} className="col-start-1 row-start-1 z-10">
                <Image 
                    className="w-[clamp(50px,60vw,400px)] h-auto border border-black shadow-xl backdrop-blur-[2px] backdrop-contrast-100"
                    src="/images/Snapchat-127158452 1.png" 
                    alt="Gulshan Singh" 
                    width={391}
                    height={694}
                    priority
                />
            </motion.div>

            <motion.div initial={{scale: 0.9, y: 30, opacity: 0.5}} animate={{scale: 1, y: 0, opacity: 1}} transition={{duration: 1, ease: 'easeInOut', type: 'spring'}} whileHover={{scale: 1.05}}className="flex-1 z-5 text-[clamp(3.5rem,10vw,13rem)] col-start-1 row-start-1">
                <div className="flex z-7">
                    <div className="text-white font-extrabold font-anek-gurmukhi">ਗੁਲਸ਼ਨ</div>
                    <div className="text-black font-extrabold font-anek-gurmukhi">ਸਿੰਘ</div>
                </div>
                <div className="flex z-6">
                    <div className="text-black font-extrabold font-anek-gurmukhi">ਗੁਲਸ਼ਨ</div>
                    <div className="text-white font-extrabold font-anek-gurmukhi">ਸਿੰਘ</div>
                </div>
            </motion.div>

            <div className="col-start-1 row-start-1 h-full w-full grid grid-cols-1 grid-rows-6">

                <motion.div initial={{x: 80, y: 80}} animate={{x: 0, y: 0}} transition={{duration: 1, ease: easeOut}} className="text-white font-inconsolata font-extrabold text-[clamp(1.3rem,3vw,2.3rem)] z-5 leading-none row-start-1">
                    Full-stack Developer <br /> (React, Node.js, PostgreSQL, Docker)
                </motion.div>

                <motion.div initial={{x: -80, y: 80}} animate={{x: 0, y: 0}} transition={{duration: 1, ease: easeOut}} className="text-white font-inconsolata font-extrabold text-[clamp(1.3rem,3vw,2.3rem)] z-10 leading-none row-start-2 flex justify-end">
                    B.Tech ECE Graduate <br /> published IEEE <br /> reasearcher turned coder.
                </motion.div>

                <motion.div initial={{x: 80, y: -80}} animate={{x: 0, y: 0}} transition={{duration: 1, ease: easeOut}} className="text-white font-inconsolata font-extrabold text-[clamp(1.3rem,3vw,2.3rem)] z-10 leading-none row-start-5 max-sm:flex justify-center items-center">
                    Looking for a team <br /> where I can ship, learn, <br /> and refactor with purpose.
                </motion.div>

                <motion.div initial={{x: -20, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1}} className="text-[clamp(3rem,10vw,6rem)] text-black font-extrabold font-inconsolata z-20 row-start-6 flex flex-col items-end">
                    ME
                </motion.div>
            </div>

        </motion.div>
    );
}