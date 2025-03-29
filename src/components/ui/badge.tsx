"use client";

import { Nunito, Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: "400"
});
const nunito = Nunito({ subsets: ['latin'] });

interface BadgeProps {
    text: string;
}

export default function Badge({ text }: BadgeProps) {
    return (
        <div className={`${poppins.className} flex items-center justify-center gap-2 w-fit font-bold text-sm text-transparent bg-gradient-to-r from-[#7F52FF] to-[#6f3be7d3] p-[1.4px] rounded-full`}>
            <div className="flex items-center justify-center w-full h-full bg-white rounded-full px-3 py-1">
                <div className="flex items-center justify-center gap-1 text-[#703BE7]">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="url(#diamondGradient)"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="diamondGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#7F52FF" />
                                <stop offset="100%" stopColor="#6f3be7d3" />
                            </linearGradient>
                        </defs>
                        <path d="M18 4a1 1 0 0 1 .783 .378l.074 .108l3 5a1 1 0 0 1 -.032 1.078l-.08 .103l-8.53 9.533a1.7 1.7 0 0 1 -1.215 .51c-.4 0 -.785 -.14 -1.11 -.417l-.135 -.126l-8.5 -9.5a1 1 0 0 1 -.172 -1.067l.06 -.115l3.013 -5.022l.064 -.09a.982 .982 0 0 1 .155 -.154l.089 -.064l.088 -.05l.05 -.023l.06 -.025l.109 -.032l.112 -.02l.117 -.005h12zm-8.886 3.943a1 1 0 0 0 -1.371 .343l-.6 1l-.06 .116a1 1 0 0 0 .177 1.07l2 2.2l.09 .088a1 1 0 0 0 1.323 -.02l.087 -.09a1 1 0 0 0 -.02 -1.323l-1.501 -1.65l.218 -.363l.055 -.103a1 1 0 0 0 -.398 -1.268z" />
                    </svg>
                    {text}
                </div>
            </div>
        </div>
    );
}
