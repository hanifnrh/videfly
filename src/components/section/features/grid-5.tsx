
// Libs
import Image from 'next/image';

// UI Libs

// Font

import { ShineBorder } from '@/components/ui/shine-border';
import { Nunito, Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: "400"
});
const nunito = Nunito({ subsets: ['latin'] })

// Icons
import { GradientTracing } from '@/components/ui/gradient-tracing';
import { FaCircleCheck } from "react-icons/fa6";

interface Grid05Props {
    className?: string;
}

export default function Grid05({ className }: Grid05Props) {

    return (
        <>
            <main>
                <div className={`${poppins.className} w-full grid grid-cols-12 items-start justify-center px-4 py-8 pb-0 relative gap-2`}>
                    <div className='relative flex flex-col gap-2 col-span-6'>
                        <div className='w-full relative bg-transparnt rounded-lg'>
                            <div className='bg-white border border-[#ECECEC] grid grid-cols-6 items-center justify-between rounded-xl gap-1 p-1'>
                                <div className='flex items-center justify-center'>
                                    <Image
                                        src='/section/features/grid-5/tiktok-logo.png'
                                        height={1097}
                                        width={1280}
                                        alt='TikTok Logo'
                                        className='w-6 h-6 object-contain'
                                    />
                                </div>
                                <div className='relative flex items-center justify-center p-2 w-10 h-10 border-2 border-[#703BE7] rounded-full'>
                                    <Image
                                        src='/section/features/grid-5/instagram-logo.png'
                                        height={679}
                                        width={679}
                                        alt='Instagram Logo'
                                        className='w-6 h-6 object-contain'
                                    />
                                    <FaCircleCheck className='absolute top-0 right-0 text-[#703BE7]' />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <Image
                                        src='/section/features/grid-5/youtube-logo.png'
                                        height={640}
                                        width={443}
                                        alt='YouTube Logo'
                                        className='w-6 h-6 object-contain'
                                    />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <Image
                                        src='/section/features/grid-5/facebook-logo.png'
                                        height={1097}
                                        width={1280}
                                        alt='Facebook Logo'
                                        className='w-6 h-6 object-contain'
                                    />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <Image
                                        src='/section/features/grid-5/linkedin-logo.png'
                                        height={1097}
                                        width={1280}
                                        alt='LinkedIn Logo'
                                        className='w-6 h-6 object-contain'
                                    />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <Image
                                        src='/section/features/grid-5/shopee-logo.png'
                                        height={1097}
                                        width={1280}
                                        alt='Shopee Logo'
                                        className='w-6 h-6 object-contain'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='w-full relative bg-transparent rounded-lg'>
                            <div className='bg-white border border-[#ECECEC] flex items-center justify-between rounded-lg gap-1 py-2 px-4'>
                                <p className='text-xs font-semibold'>
                                    25-10-2024
                                </p>
                                <svg viewBox="-0.5 -0.5 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Calendar--Streamline-Solar-Ar" height={16} width={16} ><desc>{"Calendar Streamline Icon: https://streamlinehq.com"}</desc><path d="M1.25 7.5c0 -2.357025 0 -3.53553125 0.73223125 -4.26776875C2.71446875 2.5 3.8929750000000003 2.5 6.25 2.5h2.5c2.3569999999999998 0 3.5355625 0 4.26775 0.73223125C13.75 3.96446875 13.75 5.142975 13.75 7.5v1.25c0 2.3569999999999998 0 3.5355625 -0.73225 4.26775C12.285562500000001 13.75 11.107 13.75 8.75 13.75h-2.5c-2.357025 0 -3.53553125 0 -4.26776875 -0.73225C1.25 12.285562500000001 1.25 11.107 1.25 8.75v-1.25Z" stroke="#000000" strokeWidth={1} /><path d="M4.375 2.5V1.5625" stroke="#000000" strokeLinecap="round" strokeWidth={1} /><path d="M10.625 2.5V1.5625" stroke="#000000" strokeLinecap="round" strokeWidth={1} /><path d="M1.5625 5.625h11.875" stroke="#000000" strokeLinecap="round" strokeWidth={1} /><path d="M11.25 10.625c0 0.3451875 -0.2798125 0.625 -0.625 0.625s-0.625 -0.2798125 -0.625 -0.625 0.2798125 -0.625 0.625 -0.625 0.625 0.2798125 0.625 0.625Z" fill="#000000" strokeWidth={1} /><path d="M11.25 8.125c0 0.3451875 -0.2798125 0.625 -0.625 0.625s-0.625 -0.2798125 -0.625 -0.625 0.2798125 -0.625 0.625 -0.625 0.625 0.2798125 0.625 0.625Z" fill="#000000" strokeWidth={1} /><path d="M8.125 10.625c0 0.3451875 -0.2798125 0.625 -0.625 0.625s-0.625 -0.2798125 -0.625 -0.625 0.2798125 -0.625 0.625 -0.625 0.625 0.2798125 0.625 0.625Z" fill="#000000" strokeWidth={1} /><path d="M8.125 8.125c0 0.3451875 -0.2798125 0.625 -0.625 0.625s-0.625 -0.2798125 -0.625 -0.625 0.2798125 -0.625 0.625 -0.625 0.625 0.2798125 0.625 0.625Z" fill="#000000" strokeWidth={1} /><path d="M5 10.625c0 0.3451875 -0.279825 0.625 -0.625 0.625s-0.625 -0.2798125 -0.625 -0.625 0.279825 -0.625 0.625 -0.625 0.625 0.2798125 0.625 0.625Z" fill="#000000" strokeWidth={1} /><path d="M5 8.125c0 0.3451875 -0.279825 0.625 -0.625 0.625s-0.625 -0.2798125 -0.625 -0.625 0.279825 -0.625 0.625 -0.625 0.625 0.2798125 0.625 0.625Z" fill="#000000" strokeWidth={1} /></svg>
                            </div>
                        </div>

                        <div className='w-full relative bg-transparent rounded-lg'>
                            <div className='bg-white border border-[#ECECEC] flex items-center justify-between rounded-lg gap-1 py-2 px-4'>
                                <p className='text-xs font-normal text-zinc-400'>
                                    Waktu
                                </p>
                                <div className='text-xs font-semibold flex items-center gap-2'>
                                    WIB (UTC+07)
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" id="Clock-3--Streamline-Lucide" height={16} width={16} ><desc>{"Clock 3 Streamline Icon: https://streamlinehq.com"}</desc><path d="M1.25 7.5a6.25 6.25 0 1 0 12.5 0 6.25 6.25 0 1 0 -12.5 0" strokeWidth={1} /><path d="m7.5 3.75 0 3.75 2.8125 0" strokeWidth={1} /></svg>
                                </div>
                            </div>
                        </div>

                        <div className='w-full relative bg-transparent rounded-lg'>
                            <div className='w-fit bg-[#703BE7] text-white flex items-center justify-between rounded-lg gap-2 py-2 px-4'>
                                <p className='text-sm'>
                                    Buat Jadwal
                                </p>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 16 16" strokeLinecap="round" strokeLinejoin="round" stroke="#ffffff" id="Calendar-Plus--Streamline-Mynaui" height={20} width={20} ><desc>{"Calendar Plus Streamline Icon: https://streamlinehq.com"}</desc><path d="M10.3125 3.125V1.875m-5.625 1.25V1.875M2.03125 5h10.9375M6.25 8.75h2.5m-1.25 -1.25v2.5m-5.625 -3.7225c0 -1.3218750000000001 0 -1.983125 0.2725 -2.488125a2.435 2.435 0 0 1 1.0925 -1.031875C3.775 2.5 4.475 2.5 5.875 2.5h3.25c1.4000000000000001 0 2.1 0 2.6350000000000002 0.2575 0.470625 0.22625 0.8525 0.5874999999999999 1.0925 1.03125 0.2725 0.5062500000000001 0.2725 1.1675 0.2725 2.489375v3.07c0 1.3218750000000001 0 1.983125 -0.2725 2.488125a2.435 2.435 0 0 1 -1.0925 1.031875C11.225000000000001 13.125 10.525 13.125 9.125 13.125H5.875c-1.4000000000000001 0 -2.1 0 -2.6350000000000002 -0.2575a2.435 2.435 0 0 1 -1.0925 -1.03125C1.875 11.33 1.875 10.66875 1.875 9.346875z" strokeWidth={1} /></svg>
                            </div>
                        </div>

                        <GradientTracing width={100} height={25} path="M50,0 V25 V50" className="absolute bottom-2 left-6" />

                        <GradientTracing width={300} height={50} path="M0,25 H25 H190" className="absolute bottom-10 left-18" />

                    </div>

                    <div className='w-full relative bg-transparent rounded-md col-span-3'>
                        <ShineBorder shineColor={["#9747FF", "#b469d4", "#EEE2FF"]} />
                        <div className='w-full justify-between rounded-lg p-2 text-[8px] font-semibold'>
                            <Image
                                src='/section/features/grid-5/jadwal-1.png'
                                height={452}
                                width={760}
                                alt='Jadwal'
                                className='w-full rounded-lg'
                            />
                        </div>
                    </div>

                    <div className='w-full relative bg-transparent rounded-md col-span-3'>
                        <ShineBorder shineColor={["#9747FF", "#b469d4", "#EEE2FF"]} />
                        <div className='w-full justify-between rounded-lg p-2 text-[8px] font-semibold'>
                            <Image
                                src='/section/features/grid-5/jadwal-2.png'
                                height={452}
                                width={758}
                                alt='Jadwal'
                                className='w-full rounded-lg'
                            />
                        </div>
                    </div>

                </div>
            </main >
        </>
    );
}