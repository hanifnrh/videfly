
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

interface Grid02Props {
    className?: string;
}

export default function Grid02({ className }: Grid02Props) {
    return (
        <>
            <main>
                <div className={`${poppins.className} w-full flex flex-col items-center justify-center px-4 py-8 pb-0 relative gap-6`}>
                    <div className='w-full relative bg-transparent rounded-md'>
                        <ShineBorder shineColor={["#9747FF", "#b469d4", "#EEE2FF"]} />
                        <div className='w-full grid grid-flow-col grid-rows-2 justify-between rounded-md p-2 text-[8px] text-zinc-500'>
                            <Image
                                src='/section/grid-2/template-1.png'
                                width={117}
                                height={208}
                                alt='Grid02 1'
                                className='rounded-md row-span-2'
                            />
                            <Image
                                src='/section/grid-2/template-2.png'
                                width={101}
                                height={101}
                                alt='Grid02 2'
                                className='rounded-md row-span-1'
                            />
                            <Image
                                src='/section/grid-2/template-3.png'
                                width={101}
                                height={101}
                                alt='Grid02 3'
                                className='rounded-md row-span-1'
                            />
                            <Image
                                src='/section/grid-2/template-4.png'
                                width={117}
                                height={208}
                                alt='Grid02 4'
                                className='rounded-md row-span-2'
                            />
                        </div>
                    </div>
                </div>
            </main >
        </>
    );
}