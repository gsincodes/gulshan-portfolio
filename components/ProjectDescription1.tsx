import Image from "next/image";
import {motion} from "motion/react";
 
export default function ProjectDescription1() {
    return (
        <div id="projects" className="grid grid-rows-2 grid-cols-1 min-h-screen bg-primary font-inconsolata px-4 py-4 gap-8">
            <div className="grid grid-rows-[1fr_4fr_1fr_4fr] md:grid-rows-[1fr_4fr] md:grid-cols-2 border-b-1 border-black gap-4">
                <motion.div initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{y:{duration: 0.5, delay: 0.25}, opacity: {duration:0.5, delay: 0.5}, ease: 'easeOut', type: "spring"}} className="bg-coolgreen text-black text-[clamp(1rem,1.5vw,5rem)] w-fit max-md:w-[clamp(100px,90vw,400px)] row-start-1 shadow-xl px-4 py-2 row-span-1 shadow-xl">
                    FileUp
                    <br></br>
                    Fullstack File Uploader Platform
                </motion.div>

                <motion.div initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{y:{duration: 0.5, delay: 0.5}, opacity: {duration:0.5, delay: 0.5}, ease: 'easeOut', type: "spring"}}  className="bg-coolorange flex justify-evenly items-center w-[clamp(100px,90vw,400px)] place-self-center h-full shadow-xl border border-black max-md:h-auto max-md:p-2 max-md:row-start-3 max-md:row-span-1 max-md:justify-self-end">
                    <motion.div whileHover={{scale: 1.15}}>
                        <Image
                            className="w-[50px] h-[50px]"
                            src="/images/postgresql SVG.png"
                            width={50}
                            height={50}
                            alt="postgreSQL icon"
                        />
                    </motion.div>
                    <motion.div whileHover={{scale: 1.15}}>
                        <Image
                            className="w-[50px] h-[50px]"
                            src="/images/express SVG.png"
                            width={50}
                            height={50}
                            alt="express icon"
                        />
                    </motion.div>
                    <motion.div whileHover={{scale: 1.15}}>
                        <Image
                            className="w-[50px] h-[50px]"
                            src="/images/react SVG.png"
                            width={50}
                            height={50}
                            alt="react icon"
                        />
                    </motion.div>
                    <motion.div whileHover={{scale: 1.15}}>
                        <Image
                            className="w-[50px] h-[50px]"
                            src="/images/node SVG.png"
                            width={50}
                            height={50}
                            alt="node icon"
                        />
                    </motion.div>
                    <motion.div whileHover={{scale: 1.15}}>
                        <Image
                            className="w-[50px] h-[50px]"
                            src="/images/prisma SVG.png"
                            width={50}
                            height={50}
                            alt="prisma icon"
                        />
                    </motion.div>
                </motion.div>

                <motion.div initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{y:{duration: 0.5, delay: 0.25}, opacity: {duration:0.5, delay: 0.5}, ease: 'easeOut', type: "spring"}} className="self-center">
                    <Image
                        className="w-[clamp(100px,90vw,400px)] h-auto shadow-lg border border-black rounded-md"
                        src="/images/Screenshot 2025-12-09 230112.png"
                        alt="FileUp App"
                        width={400}
                        height={300}
                    />
                </motion.div>

                <motion.div initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{y:{duration: 0.5, delay: 0.5, staggerChildren: 0.25}, opacity: {duration:0.5, delay: 0.5}, ease: 'easeOut', type: "spring"}} className="flex flex-col justify-center place-self-center max-md:justify-self-end">
                    <motion.a href="https://github.com/gsincodes/file-uploader" whileTap={{scale: 0.95, y: 3}} className="text-black text-[clamp(2rem,1.5vw,6rem)] bg-coolgreen w-fit shadow-lg">
                        [Github]
                    </motion.a>
                    <div className="text-black text-[clamp(1rem,1.5vw,5rem)]">
                        <motion.div initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay:0.5}} viewport={{once:true}}>
                            Multer + Prisma indexing
                            <br></br>
                            → 100MB uploads in &#60;2 seconds
                        </motion.div>
                        <motion.div initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay:0.7}} viewport={{once:true}}>
                            Passport.js auth + PostgreSQL
                            <br></br>
                            → reduced unauthorized access by 85%
                        </motion.div>
                        <motion.div initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay:0.9}} viewport={{once:true}}>
                            Containerized with Docker Compose
                            <br></br>
                            → one‑command dev setup
                        </motion.div>
                    </div>
                </motion.div>
            </div>


            <div className="grid grid-rows-[1fr_3fr_1fr_3fr] md:grid-rows-[1fr_4fr] md:grid-cols-2 gap-4 border-b-1 border-black">

                <motion.div initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{y:{duration: 0.5, delay: 0.25}, opacity: {duration:0.5, delay: 0.5}, ease: 'easeOut', type: "spring"}} className="bg-coolpurple flex justify-evenly items-center col-start-1 row-start-1 w-[clamp(100px,90vw,400px)] h-full shadow-xl border border-black max-md:h-fit max-md:p-2 max-md:row-start-3 max-md:row-span-1 max-md:self-center max-md:justify-self-end">
                    <motion.div whileHover={{scale: 1.15}}>
                        <Image
                            className="w-[50px] h-[50px]"
                            src="/images/postgresql SVG.png"
                            width={50}
                            height={50}
                            alt="postgreSQL icon"
                        />
                    </motion.div>
                    <motion.div whileHover={{scale: 1.15}}>
                        <Image
                            className="w-[50px] h-[50px]"
                            src="/images/express SVG.png"
                            width={50}
                            height={50}
                            alt="express icon"
                        />
                    </motion.div>
                    <motion.div whileHover={{scale: 1.15}}>
                        <Image
                            className="w-[50px] h-[50px]"
                            src="/images/react SVG.png"
                            width={50}
                            height={50}
                            alt="react icon"
                        />
                    </motion.div>
                    <motion.div whileHover={{scale: 1.15}}>
                        <Image
                            className="w-[50px] h-[50px]"
                            src="/images/node SVG.png"
                            width={50}
                            height={50}
                            alt="node icon"
                        />
                    </motion.div>
                    <motion.div whileHover={{scale: 1.15}}>
                        <Image
                            className="w-[50px] h-[50px]"
                            src="/images/prisma SVG.png"
                            width={50}
                            height={50}
                            alt="prisma icon"
                        />
                    </motion.div>
                </motion.div>

                <motion.div initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{y:{duration: 0.5, delay: 0.5}, opacity: {duration:0.5, delay: 0.5}, ease: 'easeOut', type: "spring"}} className="bg-black text-coolgreen text-[clamp(1rem,1.5vw,5rem)] w-fit max-md:w-[clamp(100px,90vw,400px)] h-full row-start-1 shadow-xl px-4 py-2 row-span-1 min-md:place-self-center">
                    Memo
                    <br></br>
                    Fullstack Microblogging App
                </motion.div>

                <motion.div initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{y:{duration: 0.5, delay: 0.5, staggerChildren: 0.25}, opacity: {duration:0.5, delay: 0.5}, ease: 'easeOut', type: "spring"}} className="flex flex-col justify-center place-self-center max-md:justify-self-end">
                    <motion.a href="https://github.com/gsincodes/Member-Authentication" whileTap={{scale: 0.95, y: 3}} className="text-coolgreen text-[clamp(2rem,1.5vw,6rem)] bg-black w-fit shadow-lg">
                        [Github]
                    </motion.a>
                    <div className="text-black text-[clamp(1rem,1.5vw,5rem)]">
                        <motion.div initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay:0.5}} viewport={{once:true}}>
                            Role‑based access control (member vs. admin)
                            <br></br>
                            → granular permission management
                        </motion.div>
                        <motion.div initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay:0.7}} viewport={{once:true}}>
                            Passport.js authentication + bcryptJS encryption
                            <br></br>
                            → secure user sessions and data
                        </motion.div>
                        <motion.div initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay:0.9}} viewport={{once:true}}>
                            RESTful API with protected route middleware
                            <br></br>
                            → cut code duplication by 30% via reusable controllers
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once:true}} transition={{y:{duration: 0.5, delay: 0.25}, opacity: {duration:0.5, delay: 0.5}, ease: 'easeOut', type: "spring"}} className="self-center">
                    <Image
                        className="w-[clamp(100px,90vw,400px)] h-auto shadow-lg border border-black self-center min-md:place-self-center shadow-xl max-md:row-start-2 rounded-md"
                        src="/images/Screenshot 2025-12-09 223318.png"
                        alt="FileUp App"
                        width={400}
                        height={300}
                    />
                </motion.div>
                
            </div>
        </div>
    );
}