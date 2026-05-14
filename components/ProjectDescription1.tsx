import Image from "next/image";

export default function ProjectDescription1() {
    return (
        <div className="grid grid-rows-2 grid-cols-1 min-h-screen bg-primary font-inconsolata px-4 py-4 gap-8">
            <div className="grid grid-rows-[1fr_3fr_1fr_3fr] md:grid-rows-[1fr_4fr] md:grid-cols-2 border-b-1 border-black gap-4">
                <div className="bg-coolgreen text-black text-[clamp(1rem,1.5vw,5rem)] w-fit max-md:w-[clamp(100px,90vw,400px)] row-start-1 shadow-xl px-4 py-2 row-span-1 shadow-xl">
                    FileUp
                    <br></br>
                    Fullstack File Uploader Platform
                </div>

                <div className="bg-coolorange flex justify-evenly items-center w-[clamp(100px,90vw,400px)] place-self-center h-full shadow-xl border border-black max-md:h-auto max-md:p-2 max-md:row-start-3 max-md:row-span-1 max-md:justify-self-end">
                    <Image
                        className="w-[50px] h-[50px]"
                        src="/images/postgresql SVG.png"
                        width={50}
                        height={50}
                        alt="postgreSQL icon"
                    />
                    <Image
                        className="w-[50px] h-[50px]"
                        src="/images/express SVG.png"
                        width={50}
                        height={50}
                        alt="express icon"
                    />
                    <Image
                        className="w-[50px] h-[50px]"
                        src="/images/react SVG.png"
                        width={50}
                        height={50}
                        alt="react icon"
                    />
                    <Image
                        className="w-[50px] h-[50px]"
                        src="/images/node SVG.png"
                        width={50}
                        height={50}
                        alt="node icon"
                    />
                    <Image
                        className="w-[50px] h-[50px]"
                        src="/images/prisma SVG.png"
                        width={50}
                        height={50}
                        alt="prisma icon"
                    />
                </div>

                <Image
                    className="w-[clamp(100px,90vw,400px)] h-auto shadow-lg border border-black self-center rounded-md"
                    src="/images/Screenshot 2025-12-09 230112.png"
                    alt="FileUp App"
                    width={400}
                    height={300}
                />

                <div className="flex flex-col justify-center place-self-center max-md:justify-self-end">
                    <div className="text-black text-[clamp(2rem,1.5vw,6rem)] bg-coolgreen w-fit shadow-lg">
                        [Github]
                    </div>
                    <div className="text-black text-[clamp(1rem,1.5vw,5rem)]">
                        <div>
                            Multer + Prisma indexing
                            <br></br>
                            → 100MB uploads in &#60;2 seconds
                        </div>
                        <div>
                            Passport.js auth + PostgreSQL
                            <br></br>
                            → reduced unauthorized access by 85%
                        </div>
                        <div>
                            Containerized with Docker Compose
                            <br></br>
                            → one‑command dev setup
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid grid-rows-[1fr_3fr_1fr_3fr] md:grid-rows-[1fr_4fr] md:grid-cols-2 gap-4">

                <div className="bg-coolpurple flex justify-evenly items-center col-start-1 row-start-1 w-[clamp(100px,90vw,400px)] h-full shadow-xl border border-black max-md:h-fit max-md:p-2 max-md:row-start-3 max-md:row-span-1 max-md:self-center max-md:justify-self-end">
                    <Image
                        className="w-[50px] h-[50px]"
                        src="/images/postgresql SVG.png"
                        width={50}
                        height={50}
                        alt="postgreSQL icon"
                    />
                    <Image
                        className="w-[50px] h-[50px]"
                        src="/images/express SVG.png"
                        width={50}
                        height={50}
                        alt="express icon"
                    />
                    <Image
                        className="w-[50px] h-[50px]"
                        src="/images/react SVG.png"
                        width={50}
                        height={50}
                        alt="react icon"
                    />
                    <Image
                        className="w-[50px] h-[50px]"
                        src="/images/node SVG.png"
                        width={50}
                        height={50}
                        alt="node icon"
                    />
                    <Image
                        className="w-[50px] h-[50px]"
                        src="/images/prisma SVG.png"
                        width={50}
                        height={50}
                        alt="prisma icon"
                    />
                </div>

                <div className="bg-black text-coolgreen text-[clamp(1rem,1.5vw,5rem)] w-fit max-md:w-[clamp(100px,90vw,400px)] h-full row-start-1 shadow-xl px-4 py-2 row-span-1 min-md:place-self-center">
                    Memo
                    <br></br>
                    Fullstack Microblogging App
                </div>

                <div className="flex flex-col justify-center place-self-center max-md:justify-self-end">
                    <div className="text-coolgreen text-[clamp(2rem,1.5vw,6rem)] bg-black w-fit shadow-lg">
                        [Github]
                    </div>
                    <div className="text-black text-[clamp(1rem,1.5vw,5rem)]">
                        <div>
                            Role‑based access control (member vs. admin)
                            <br></br>
                            → granular permission management
                        </div>
                        <div>
                            Passport.js authentication + bcryptJS encryption
                            <br></br>
                            → secure user sessions and data
                        </div>
                        <div>
                            RESTful API with protected route middleware
                            <br></br>
                            → cut code duplication by 30% via reusable controllers
                        </div>
                    </div>
                </div>

                <Image
                    className="w-[clamp(100px,90vw,400px)] h-auto shadow-lg border border-black self-center min-md:place-self-center shadow-xl max-md:row-start-2 rounded-md"
                    src="/images/Screenshot 2025-12-09 223318.png"
                    alt="FileUp App"
                    width={400}
                    height={300}
                />
            </div>
        </div>
    );
}