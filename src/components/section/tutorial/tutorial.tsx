"use client"

// Libs

// UI Libs

// Font

import { Nunito, Poppins } from 'next/font/google';
import Badge from '../../ui/badge';
import { TabsDemo } from './tabs-demo';

const poppins = Poppins({
    subsets: ['latin'],
    weight: "400"
});
const nunito = Nunito({ subsets: ['latin'] })

// Icons

export default function Tutorial() {
    return (
        <>
            <div className="flex flex-col items-center justify-center p-8 pb-20 sm:p-20 relative gap-8 mx-20">
                <Badge text='Tutorial' />

                <h2 className={`${nunito.className} font-bold text-4xl text-center leading-normal`}>
                    Buat Konten Menarik untuk Bisnismu
                    <br />
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-300'>
                        Dalam 3 Langkah Mudah!
                    </span>
                </h2>

                <TabsDemo />

            </div>
        </>
    );
}