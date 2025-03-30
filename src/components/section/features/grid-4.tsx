
// Libs
import Image from 'next/image';

// UI Libs

// Font

import { AreaChart } from '@/components/section/features/components/area-chart';
import { GaugeCircle } from '@/components/section/features/components/gauge-circle';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { ShineBorder } from '@/components/ui/shine-border';
import { Nunito, Poppins } from 'next/font/google';
import { useEffect, useState } from 'react';
import { Bar, BarChart } from 'recharts';

const poppins = Poppins({
    subsets: ['latin'],
    weight: "400"
});
const nunito = Nunito({ subsets: ['latin'] })

// Icons

export default function Grid04() {

    const [value, setValue] = useState(0)

    useEffect(() => {
        const handleIncrement = (prev: number) => {
            if (prev === 100) return 0

            return prev + 10
        }
        setValue(handleIncrement)
        const interval = setInterval(() => setValue(handleIncrement), 2000)
        return () => clearInterval(interval)
    }, [])

    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ]

    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "#2563eb",
        },
        mobile: {
            label: "Mobile",
            color: "#60a5fa",
        },
    } satisfies ChartConfig

    return (
        <>
            <main>
                <div className={`${poppins.className} w-full grid grid-cols-12 items-start justify-center px-4 py-8 pb-0 relative gap-2`}>
                    <div className='w-full relative bg-transparent rounded-lg col-span-8'>
                        <ShineBorder shineColor={["#9747FF", "#b469d4", "#EEE2FF"]} />
                        <div className='w-full flex items-center justify-between rounded-lg p-2 text-[8px] font-semibold'>
                            <div className='relative bg-white border border-[#ECECEC] grid grid-cols-6 items-center justify-between rounded-lg gap-1 py-2 pl-4'>
                                <div className='w-full flex flex-col gap-3 col-span-4'>
                                    <h5 className='text-xs'>
                                        Nilaimu bisa ditingkatkan
                                    </h5>
                                    <p className='text-[8px] font-normal text-zinc-800'>
                                        Cari tahu alasannya dan dapatkan tips cepat untuk memperbaikinya. Klik `&ldquo;Tips`&ldquo; untuk melihat apa yang bisa kamu tingkatkan!
                                    </p>
                                    <div className='w-fit text-white px-4 py-1 text-xs xl:text-sm font-light bg-[#703BE7] rounded-md'>
                                        Tips
                                    </div>
                                </div>

                                <GaugeCircle
                                    max={100}
                                    min={0}
                                    value={value}
                                    gaugePrimaryColor="rgba(118, 74, 230, 1)"
                                    gaugeSecondaryColor="rgba(241, 235, 253, 1)"
                                    className='absolute top-0 -right-4 col-span-2 scale-60 xl:scale-80'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-full bg-transparent col-span-4 flex flex-col justify-between'>
                        <div className='relative rounded-md'>
                            <ShineBorder shineColor={["#9747FF", "#b469d4", "#EEE2FF"]} />
                            <div className='w-full justify-between rounded-md p-2 text-[8px] font-semibold'>
                                <div className='bg-white border border-[#ECECEC] items-center justify-start rounded-md flex gap-1 p-2'>
                                    <div className='bg-[#F2F2F2] rounded-full p-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-3 h-3' viewBox="0 0 16 16" id="Clock--Streamline-Font-Awesome" height="16" width="16">
                                            <defs>
                                                <linearGradient id="gradient1" x1="0" x2="0" y1="0" y2="1">
                                                    <stop offset="0%" stopColor="#DF2727" />
                                                    <stop offset="100%" stopColor="#FF8080" />
                                                </linearGradient>
                                            </defs>
                                            <desc>Clock Streamline Icon: https://streamlinehq.com</desc>
                                            <path d="M8 0a8 8 0 1 1 0 16 8 8 0 1 1 0 -16zm-0.75 3.75v4.25c0 0.25 0.125 0.484375 0.334375 0.625l3 2c0.34375 0.23125 0.809375 0.1375 1.040625 -0.209375s0.1375 -0.809375 -0.209375 -1.040625L8.75 7.6V3.75c0 -0.415625 -0.334375 -0.75 -0.75 -0.75s-0.75 0.334375 -0.75 0.75z" fill="url(#gradient1)" strokeWidth="0.0313" />
                                        </svg>

                                    </div>
                                    <div className='flex flex-col justify-between'>
                                        <div className='text-[6px] xl:text-[8px] font-light'>
                                            Waktu Terbaik untuk Posting
                                        </div>
                                        <div className='text-[8px] xl:text-xs font-semibold'>
                                            Minggu, 11:00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='relative  rounded-md'>
                            <ShineBorder shineColor={["#9747FF", "#b469d4", "#EEE2FF"]} />
                            <div className='w-full justify-between rounded-md p-2 text-[8px] font-semibold'>
                                <div className='bg-white border border-[#ECECEC] items-center justify-start rounded-md flex gap-1 p-2'>
                                    <div className='bg-[#F2F2F2] rounded-full p-2'>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className='w-3 h-3' xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="gradient2" x1="0" x2="0" y1="0" y2="1">
                                                    <stop offset="0%" stopColor="#703BE7" />
                                                    <stop offset="100%" stopColor="#A681F9" />
                                                </linearGradient>
                                            </defs>
                                            <path d="M22.2046 9.41001V14.54C22.2148 14.9224 22.1178 15.2999 21.9246 15.63C21.7143 15.9609 21.4167 16.2274 21.0646 16.4C20.7852 16.5393 20.4769 16.6112 20.1646 16.61H19.9146C19.5489 16.5585 19.2036 16.41 18.9146 16.18L16.3846 14.18V15.09C16.3846 16.241 15.9274 17.3449 15.1135 18.1588C14.2996 18.9728 13.1957 19.43 12.0447 19.43H6.13465C4.98402 19.4273 3.88088 18.971 3.06465 18.16C2.66038 17.7578 2.33996 17.2793 2.12195 16.7523C1.90395 16.2253 1.7927 15.6603 1.79465 15.09V8.92002C1.79386 8.35031 1.90602 7.7861 2.12465 7.26001C2.56667 6.1946 3.41113 5.34654 4.47465 4.9C5.00074 4.68137 5.56494 4.56922 6.13465 4.57001H11.9246C12.4975 4.57025 13.0648 4.68234 13.5946 4.9C14.6582 5.34654 15.5026 6.1946 15.9446 7.26001C16.1657 7.78854 16.2747 8.35719 16.2646 8.93V9.83002L18.7947 7.83002C19.0249 7.64913 19.2905 7.51862 19.5744 7.44696C19.8583 7.37531 20.1541 7.3641 20.4426 7.41407C20.7311 7.46403 21.0059 7.57405 21.2491 7.737C21.4924 7.89996 21.6987 8.11223 21.8546 8.36002C22.0618 8.67306 22.1825 9.03528 22.2046 9.41001Z" fill="url(#gradient2)" />
                                        </svg>
                                    </div>
                                    <div className='flex flex-col justify-between'>
                                        <div className='text-[6px] xl:text-[8px] font-light'>
                                            Jenis Postingan Terbaik
                                        </div>
                                        <div className='text-[8px] xl:text-xs font-semibold'>
                                            Video
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full relative bg-transparent rounded-md col-span-6'>
                        <ShineBorder shineColor={["#9747FF", "#b469d4", "#EEE2FF"]} />
                        <div className='w-full justify-between rounded-md p-2 text-[8px] font-semibold'>
                            <div className='relative bg-white border border-[#ECECEC] items-center justify-center rounded-md flex flex-col gap-1 p-2'>
                                <div className='w-full flex items-center justify-between'>
                                    Peak Engagement Hours
                                    <div className='flex items-center gap-2 border border-[#E6E6E6] rounded-sm px-2 py-1 font-normal'>
                                        Senin

                                        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24'><title>down_line</title><g id="down_line" fill='none' fillRule='evenodd'><path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z' /><path fill='#9B9B9BFF' d='M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95 4.95-4.95a1 1 0 0 1 1.414 1.414l-5.657 5.657Z' /></g></svg>
                                    </div>
                                </div>
                                <div className='absolute inset-x-0 bottom-0 flex flex-col gap-6'>
                                    <div className='border-t border-zinc-300 border-dashed' />
                                    <div className='border-t border-zinc-300 border-dashed' />
                                    <div className='border-t border-zinc-300 border-dashed' />
                                    <div className='border-t border-zinc-300 border-dashed' />
                                </div>
                                <ChartContainer config={chartConfig} className="max-h-[70px] w-full">
                                    <BarChart accessibilityLayer data={chartData}>
                                        <Bar dataKey="desktop" fill="#703BE7" radius={0} />
                                        <Bar dataKey="mobile" fill="#703BE7" radius={0} />
                                    </BarChart>
                                </ChartContainer>
                                <Image
                                    src='/section/features/grid-4/tooltip.png'
                                    height={43}
                                    width={23}
                                    alt='Tooltip'
                                    className='absolute bottom-8 left-7'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='w-full relative bg-transparent rounded-md col-span-6'>
                        <ShineBorder shineColor={["#9747FF", "#b469d4", "#EEE2FF"]} />
                        <div className='w-full justify-between rounded-md p-2 text-[8px] font-semibold'>
                            <div className='relative bg-white border border-[#ECECEC] items-center justify-center rounded-md flex flex-col gap-1 p-2'>
                                <div className='w-full flex items-center justify-between'>
                                    <div className='flex flex-col'>
                                        <div>
                                            Followers Growth
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <p className={`${nunito.className} text-sm font-bold`}>
                                                1550300
                                            </p>
                                            <p className='text-[10px] font-light'>
                                                current followers
                                            </p>
                                        </div>
                                    </div>
                                    <div className='absolute inset-x-0 bottom-0 flex flex-col gap-6'>
                                        <div className='border-t border-zinc-300 border-dashed' />
                                        <div className='border-t border-zinc-300 border-dashed' />
                                        <div className='border-t border-zinc-300 border-dashed' />
                                        <div className='border-t border-zinc-300 border-dashed' />
                                    </div>
                                    <div className='flex items-center gap-2 border border-[#E6E6E6] rounded-sm px-2 py-1 font-normal'>
                                        Monthly

                                        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24'><title>down_line</title><g id="down_line" fill='none' fillRule='evenodd'><path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z' /><path fill='#9B9B9BFF' d='M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95 4.95-4.95a1 1 0 0 1 1.414 1.414l-5.657 5.657Z' /></g></svg>
                                    </div>
                                </div>
                                <AreaChart />
                                <Image
                                    src='/section/features/grid-4/tooltip-2.png'
                                    height={56}
                                    width={35}
                                    alt='Tooltip'
                                    className='absolute bottom-8 left-7'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    );
}