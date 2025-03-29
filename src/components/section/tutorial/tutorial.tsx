"use client"

// Libs

// UI Libs

// Font

import { Nunito, Poppins } from 'next/font/google';
import Badge from '../../ui/badge';

const poppins = Poppins({
    subsets: ['latin'],
    weight: "400"
});
const nunito = Nunito({ subsets: ['latin'] })

// Icons

export default function Tutorial() {
    return (
        <>
            <main>
                <div className="flex flex-col items-center justify-center p-8 pb-20 sm:p-20 relative gap-8">
                    <Badge text='Tutorial' />
                    
                    <h2 className={`${nunito.className} font-bold text-4xl text-center leading-normal`}>
                        Bagaimana Videfly Membantu Bisnismu?
                        <br />
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-300'>
                            Lebih Efisien, Lebih Mudah, Hasil Maksimal!
                        </span>
                    </h2>

                </div>
            </main >
        </>
    );
}