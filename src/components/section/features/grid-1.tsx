
// Libs
import Image from 'next/image';
// UI Libs

// Font

import { Button } from '@/components/ui/button';
import { ShineBorder } from '@/components/ui/shine-border';
import { LoaderCircle } from 'lucide-react';
import { Nunito, Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: "400"
});
const nunito = Nunito({ subsets: ['latin'] })

// Icons
import { HiOutlineLink } from "react-icons/hi";

interface Grid01Props {
    className?: string;
}

export default function Grid01({ className }: Grid01Props) {
    return (
        <>
            <main>
                <div className={`${poppins.className} w-full flex flex-col items-center justify-center px-4 py-8 pb-0 relative gap-6`}>
                    <div className='w-full relative bg-transparent p-2 rounded-full'>
                        <ShineBorder shineColor={["#9747FF", "#b469d4", "#EEE2FF"]} />
                        <div className='w-full flex items-center justify-between bg-white rounded-full p-1 text-[8px] text-zinc-500'>
                            <div className='flex items-center gap-2'>
                                <HiOutlineLink />
                                Masukkan URL produk di sini...
                            </div>
                            <div className='bg-[#703BE7] rounded-md text-white py-1 px-3'>
                                Analisa
                            </div>
                        </div>
                    </div>

                    <div className='relative flex scale-90'>
                        <Button className='bg-gradient-to-b from-[#7d51e4] to-[#703BE7] border border-[#703BE7] z-20 text-xs'>
                            <LoaderCircle
                                className="animate-spin"
                                size={16}
                                strokeWidth={2}
                                aria-hidden="true"
                            />
                            Processing
                        </Button>
                        <Image
                            src='/section/features/grid-1/arrow.png'
                            width={7}
                            height={75}
                            alt='Arrow'
                            className='absolute -top-3 left-1/2 z-10'
                        />
                    </div>

                    <div className='w-full py-2 px-4'>
                        <div className='w-full relative bg-transparent rounded-md'>
                            <ShineBorder shineColor={["#9747FF", "#b469d4", "#EEE2FF"]} />
                            <div className='w-full grid grid-cols-4 justify-between rounded-md p-2 text-[8px] text-zinc-500'>
                                <Image
                                    src='/section/features/grid-1/video-1.png'
                                    width={70}
                                    height={116}
                                    alt='Grid01 1'
                                    className='w-full rounded-md'
                                />
                                <Image
                                    src='/section/features/grid-1/video-2.png'
                                    width={70}
                                    height={116}
                                    alt='Grid01 2'
                                    className='w-full rounded-md'
                                />
                                <Image
                                    src='/section/features/grid-1/video-3.png'
                                    width={70}
                                    height={116}
                                    alt='Grid01 3'
                                    className='w-full rounded-md'
                                />
                                <Image
                                    src='/section/features/grid-1/video-4.png'
                                    width={70}
                                    height={116}
                                    alt='Grid01 4'
                                    className='w-full rounded-md'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    );
}