"use client"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer"
import { Menu, X } from "lucide-react"
import { Nunito, Poppins } from 'next/font/google'
import Image from "next/image"
import Link from "next/link"
import * as React from "react"

const poppins = Poppins({
    subsets: ['latin'],
    weight: "400"
});
const nunito = Nunito({
    subsets: ['latin'],
});

const data = [
    {
        goal: 400,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 239,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 349,
    },
]

export function Mobile() {
    const [goal, setGoal] = React.useState(350)

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }

    return (
        <div className={`${poppins.className}`}>
            <Drawer direction="right">
                <div className="w-full p-2 flex items-center justify-between">
                    <Image
                        src="/videfly-logo.png"
                        className="h-10 w-auto navbar-logo object-contain"
                        alt="Logo Videfly"
                        width={2356}
                        height={870}
                    />
                    <div className="flex items-center gap-2">
                        <Link href="/login" rel="canonical" aria-label="Log In">
                            <p
                                className="cursor-pointer transition-all bg-zinc-100 text-zinc-700 text-sm font-semibold border-zinc-200 border-2 rounded-lg px-6 py-2"
                            >
                                Masuk
                            </p>
                        </Link>
                        <DrawerTrigger asChild>
                            <Menu className="text-[#703BE7]" />
                        </DrawerTrigger>
                    </div>
                </div>
                <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader className={`${nunito.className} flex flex-row items-center justify-between text-[#703BE7]`}>
                            <DrawerTitle className="text-[#703BE7]">Menu</DrawerTitle>
                            <DrawerClose asChild>
                                <X />
                            </DrawerClose>
                        </DrawerHeader>
                        <div className="p-4 pb-0">
                            <div className="flex flex-col gap-2">
                                <Link
                                    href='#'
                                    rel="canonical"
                                    className="text-center font-normal text-lg px-6 py-2 hover:bg-indigo-100 rounded-md"
                                >
                                    Fitur AI
                                </Link>
                                <Link
                                    href='#'
                                    rel="canonical"
                                    className="text-center font-normal text-lg px-6 py-2 hover:bg-indigo-100 rounded-md"
                                >
                                    Cara Kerja
                                </Link>
                                <Link
                                    href='#'
                                    rel="canonical"
                                    className="text-center font-normal text-lg px-6 py-2 hover:bg-indigo-100 rounded-md"
                                >
                                    Harga
                                </Link>
                                <Link
                                    href='#'
                                    rel="canonical"
                                    className="text-center font-normal text-lg px-6 py-2 hover:bg-indigo-100 rounded-md"
                                >
                                    Support
                                </Link>
                            </div>
                        </div>
                        <DrawerFooter>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
