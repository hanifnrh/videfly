// Libs
import Image from "next/image";

// UI Libs

// Font

import { Nunito, Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: "400"
});
const nunito = Nunito({ subsets: ['latin'] })

// Icons
import StaggeredDropDown from "@/components/section/hero/dropdown";
import Badge from "@/components/ui/badge";

export default function Hero() {
    return (
        <>
            <main>
                <div className="mt-16 flex flex-col items-center justify-center p-8 pb-20 sm:p-20 relative md:flex-row gap-8 bg-gradient-to-br from-[#7261EF] via-[#B9AFF7] to-[#F1EDFD]">
                    <div className={`${nunito.className} w-full aspect-[5/3] relative flex items-start justify-center gap-4 bg-white rounded-3xl px-10 py-14 mx-20`}>
                        <div className="w-full flex flex-col gap-14">
                            <div className="flex flex-col gap-4">
                                <Badge text="Live Demo" />

                                <h1 className="leading-snug text-5xl font-bold">
                                    Coba Fitur URL to Video <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-300">
                                        Tanpa Biaya!
                                    </span>
                                </h1>

                                <p className={`${poppins.className} text-zinc-700 text-base`}>
                                    Masukkan URL, ubah jadi video dalam hitungan detik.
                                    <br />
                                    Mudah dan gratis!
                                </p>

                            </div>

                            <StaggeredDropDown />

                        </div>

                        <div className="w-full">
                            <Image
                                src="/hero-videfly.png"
                                alt="Hero Image Videfly"
                                width={542}
                                height={485}
                                className="absolute right-0 z-20"
                            />

                            <Image
                                src="/element-hero.png"
                                alt="Hero Image Videfly"
                                width={1000}
                                height={1000}
                                className="w-auto h-full absolute inset-y-0 right-0 z-10 rounded-b-3xl"
                            />
                        </div>
                    </div>
                </div>
            </main >
        </>
    );
}