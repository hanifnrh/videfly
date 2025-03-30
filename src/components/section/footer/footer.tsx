"use client"

// Libs

// UI Libs

// Font

import { NumberTicker } from '@/components/ui/number-ticker';
import { Nunito, Poppins } from 'next/font/google';
import Link from 'next/link';

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const companies = [
    {
        name: "Tokopedia",
        url: "/section/footer/tokopedia-logo.png",
    },
    {
        name: "Shopee",
        url: "/section/footer/shopee-logo.png",
    },
    {
        name: "Beauty Haul",
        url: "/section/footer/beauty-haul-logo.png",
    },
    {
        name: "Sociolla",
        url: "/section/footer/sociolla-logo.png",
    },
    {
        name: "TikTok Shop",
        url: "/section/footer/tiktok-shop-logo.png",
    },
    {
        name: "Lazada",
        url: "/section/footer/lazada-logo.png",
    },
    {
        name: "Blibli",
        url: "/section/footer/blibli-logo.png",
    },
];

const poppins = Poppins({
    subsets: ['latin'],
    weight: "400"
});
const nunito = Nunito({ subsets: ['latin'] })

// Icons

export default function Footer() {
    return (
        <>
            <div className="w-full max-w-screen-xl mx-auto overflow-x-hidden flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 xl:mx-20 rounded-xl">
                <div className={`${nunito.className} w-full flex flex-col items-center justify-center gap-6 p-8 lg:p-20 rounded-3xl border border-[#E6E6E6]`}>
                    <h3 className="text-xl lg:text-4xl font-bold text-center">
                        Lebih Produktif, Lebih Untung, Lebih Hemat!
                    </h3>

                    <p className={`${poppins.className} text-sm text-zinc-500 text-center`}>
                        Jangan tunggu lagi! Buat video pakai Videfly sekarang, biar cepat, untung besar, dan hemat!
                    </p>

                    <Link
                        href='#'
                        rel='canonical'
                        className='bg-gradient-to-br from-[#7F52FF] to-[#FB8570] text-white font-semibold w-fit flex items-center gap-2 px-6 py-2 rounded-lg'
                    >
                        Buat Video
                        <svg
                            fill="#FFFFFF"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                        >
                            <g id="SVGRepo_iconCarrier">
                                <path d="M2,16A14,14,0,1,0,16,2,14,14,0,0,0,2,16Zm6-1H20.15L14.57,9.3926,16,8l8,8-8,8-1.43-1.4272L20.15,17H8Z" />
                                <polygon
                                    id="inner-path"
                                    fill="none"
                                    points="16 8 14.57 9.393 20.15 15 8 15 8 17 20.15 17 14.57 22.573 16 24 24 16 16 8"
                                />
                                <rect width="32" height="32" fill="none" />
                            </g>
                        </svg>
                    </Link>

                    <div className="w-full flex items-center justify-between gap-4 mt-12">
                        <div className="flex flex-col gap-4 text-center">
                            <div className={`${nunito.className} flex items-center font-bold text-3xl  sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl bg-gradient-to-br from-[#7F52FF] to-[#FB8570] text-transparent bg-clip-text`}>
                                <NumberTicker value={70} className='bg-gradient-to-br from-[#7F52FF] to-[#FB8570] text-transparent bg-clip-text' />%
                            </div>
                            <div className={`${poppins.className} text-xs sm:text-sm xl:text-base font-bold text-zinc-800 text-center`}>
                                Produktivitas Meningkat
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 text-center">
                            <div className={`${nunito.className} flex items-center font-bold text-3xl  sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl bg-gradient-to-br from-[#7F52FF] to-[#FB8570] text-transparent bg-clip-text`}>
                                <NumberTicker value={50} className='bg-gradient-to-br from-[#7F52FF] to-[#FB8570] text-transparent bg-clip-text' />%
                            </div>
                            <div className={`${poppins.className} text-xs sm:text-sm xl:text-base font-bold text-zinc-800 text-center`}>
                                Kenaikan ROI
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 text-center">
                            <div className={`${nunito.className} flex items-center font-bold text-3xl  sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl bg-gradient-to-br from-[#7F52FF] to-[#FB8570] text-transparent bg-clip-text`}>
                                <NumberTicker value={20} className='bg-gradient-to-br from-[#7F52FF] to-[#FB8570] text-transparent bg-clip-text' />%
                            </div>
                            <div className={`${poppins.className} text-xs sm:text-sm xl:text-base font-bold text-zinc-800 text-center`}>
                                Lebih Hemat
                            </div>
                        </div>
                    </div>
                </div>

                <section id="logos">
                    <div className="flex flex-col xl:flex-row items-center container mx-auto py-12">
                        <h3 className={`${poppins.className} w-1/4 text-center text-xs sm:text-sm xl:text-base font-normal text-zinc-700`}>
                            Platform yang didukung:
                        </h3>
                        <div className="w-3/4 relative mt-6">
                            <Marquee className="[--duration:40s] flex items-center">
                                {companies.map((company, idx) => (
                                    <Image
                                        key={idx}
                                        width={1000}
                                        height={1000}
                                        src={company.url}
                                        className={`px-3 opacity-30 grayscale dark:brightness-0 dark:invert object-contain logo-${company.name.toLowerCase().replace(/\s+/g, '-')}`}
                                        alt={company.name}
                                    />
                                ))}

                            </Marquee>
                            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}