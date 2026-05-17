import Image from "next/image";
import {easeOut, motion, useInView} from "motion/react";
import { useRef } from "react";

export default function ThingsIveBuilt() {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <div className="grid min-h-screen md:h-screen bg-primary font-inconsolata px-4 py-4 grid-cols-1 grid-rows-[1fr_24fr] gap-4 place-items-start">
            <div className="justify-self-start self-center">
                <motion.div initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{duration: 0.5, ease: easeOut, delay: 0.25}} className="bg-coolgreen text-black font-bold text-[clamp(1.5rem,3vw,5rem)] w-fit flex justify-start items-center row-start-1 shadow-xl px-4 py-2 row-span-1 col-span-2">
                    Things I've Built
                </motion.div>
            </div>

            <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <motion.div ref={ref} initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} whileHover={{scale: 1.02}} transition={{y:{duration: 0.5, delay: 0.25}, opacity: {duration:0.5, delay: 0.25}, ease: easeOut, type: "spring"}} className="bg-blue-400 border border-black grid grid-rows-[3fr_1fr] items-center w-full h-[clamp(20rem,40vh,50rem)] shadow-xl m-auto">
                    <Image
                        className="w-[clamp(100px,90vw,400px)] h-auto shadow-lg border border-black self-center justify-self-center"
                        src="/images/Screenshot 2025-12-09 230112.png"
                        alt="FileUp App"
                        width={400}
                        height={300}
                    />
                    <motion.div whileTap={{scale:0.95, y:5}} transition={{type: 'spring', stiffness: 400, damping: 17}} className="text-black text-[clamp(1rem,1.5vw,3rem)] h-fit w-[clamp(100px,90vw,500px)] md:w-[clamp(100px,40vw,500px)] rounded-full p-1 bg-coolgreen text-center shadow-lg justify-self-center border">
                        FileUp
                        <br></br>
                        Fullstack File Uploader Platform
                    </motion.div>
                </motion.div>

                <motion.div ref={ref} initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} whileHover={{scale: 1.02}} transition={{y:{duration: 0.5, delay: 0.25}, opacity: {duration:0.5, delay: 0.5}, ease: easeOut, type: "spring"}} className="bg-blue-400 border border-black grid  grid-rows-[3fr_1fr] items-center w-full h-[clamp(20rem,40vh,50rem)] shadow-xl m-auto">
                    <Image
                        className="w-[clamp(100px,90vw,400px)] h-auto shadow-lg border border-black self-center justify-self-center"
                        src="/images/Screenshot 2025-12-09 223318.png"
                        alt="Memo App"
                        width={400}
                        height={300}
                    />
                    <motion.div whileTap={{scale:0.95, y:5}} transition={{type: 'spring', stiffness: 400, damping: 17}} className="text-coolgreen text-[clamp(1rem,1.5vw,3rem)] h-fit w-[clamp(100px,90vw,500px)] md:w-[clamp(100px,40vw,500px)] rounded-full p-1 bg-black text-center shadow-lg justify-self-center">
                        Memo
                        <br></br>
                        Fullstack Microblogging App
                    </motion.div>
                </motion.div>

                <motion.div ref={ref} initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} whileHover={{scale: 1.02}} transition={{y:{duration: 0.5, delay: 0.25}, opacity: {duration:0.5, delay: 0.25}, ease: easeOut, type: "spring"}} className="bg-blue-400 border border-black grid grid-rows-[3fr_1fr] items-center w-fit h-[clamp(20rem,40vh,50rem)] shadow-xl m-auto w-full">
                    <Image
                        className="w-[clamp(100px,90vw,400px)] h-auto shadow-lg border border-black self-center justify-self-center"
                        src="/images/Screenshot 2025-12-09 221659.png"
                        alt="Pokemon App"
                        width={400}
                        height={300}
                    />
                    <motion.div whileTap={{scale:0.95, y:5}} transition={{type: 'spring', stiffness: 400, damping: 17}} className="text-black text-[clamp(1rem,1.5vw,3rem)] h-fit w-[clamp(100px,90vw,500px)] md:w-[clamp(100px,40vw,500px)] rounded-full p-4 bg-coolgreen text-center shadow-lg justify-self-center border">
                        Poke´ Memory Game
                    </motion.div>
                </motion.div>

                <motion.div ref={ref} initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} whileHover={{scale: 1.02}} transition={{y:{duration: 0.5, delay: 0.25}, opacity: {duration:0.5, delay: 0.5}, ease: easeOut, type: "spring"}} className="bg-blue-400 border border-black grid grid-rows-[3fr_1fr] items-center w-fit h-[clamp(20rem,40vh,50rem)] shadow-xl m-auto w-full">
                    <Image
                        className="w-[clamp(100px,90vw,400px)] h-auto shadow-lg border border-black self-center justify-self-center"
                        src="/images/Screenshot 2025-07-27 204641.png"
                        alt="weather app"
                        width={400}
                        height={300}
                    />
                    <motion.div whileTap={{scale:0.95, y:5}} transition={{type: 'spring', stiffness: 400, damping: 17}} className="text-coolgreen text-[clamp(1rem,1.5vw,3rem)] h-fit w-[clamp(100px,90vw,500px)] md:w-[clamp(100px,40vw,500px)] rounded-full p-4 bg-black text-center shadow-lg justify-self-center">
                        Weather Dashboard App
                    </motion.div>
                </motion.div>
            </div>

        </div>
    );
}