// Libs

// UI Libs

// Font

import { Nunito, Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: "400"
});
const nunito = Nunito({ subsets: ['latin'] })

// Icons
import Badge from "@/components/ui/badge";
import { BentoDemo } from "./components/bentodemo";

export default function Features() {
    return (
        <>
            <div className="flex flex-col items-center justify-center p-8 pb-20 sm:p-20 relative gap-8 mx-20">
                <Badge text="Features" />
                <h2 className={`${nunito.className} text-4xl font-bold text-center leading-snug`}>
                    Bagaimana Videfly Membantu Bisnismu?
                    <br />
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-300'>
                        Lebih Efisien, Lebih Mudah, Hasil Maksimal!
                    </span>
                </h2>

                <BentoDemo />
            </div>
        </>
    );
}