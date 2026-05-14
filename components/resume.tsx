import Image from "next/image";

export default function Resume() {
    return (
        <div className="grid grid-cols-[1fr_3fr] h-screen bg-primary font-inconsolata px-4 py-4 place-items-center">
            <div className="text-black text-[clamp(1.5rem,10vw,5rem)] leading-none">
                <div>
                    Resume
                </div>
                <br></br>
                <a href="" className="text-sm">Click to View in Separate Window</a>
            </div>
            <Image
                className="w-170 h-auto shadow-xl rounded-xl"
                src="/images/Gulshan-Singh-Resume-March-2026-1.png"
                width={500}
                height={700}
                alt="resume"
            />
        </div>
    );
}