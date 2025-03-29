"use client";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@heroui/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Font
import { Outfit, Poppins } from 'next/font/google';
import Image from "next/image";
import Link from "next/link";

const outfit = Outfit({ subsets: ['latin'] });
const poppins = Poppins({
    subsets: ['latin'],
    weight: "400"
});

export default function ResponsiveNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = usePathname();

    // Define menu items and their corresponding paths
    const menuItems = [
        { label: "Fitur AI", path: "/fiturai" },
        { label: "Cara Kerja", path: "/carakerja" },
        { label: "Harga", path: "/harga" },
        { label: "Support", path: "/support" },
        { label: "Masuk", path: "/masuk" },
        { label: "Buat Video", path: "/video" },
    ];

    return (
        <div
            className="fixed top-0 z-50 px-8 md:px-20 w-full bg-white max-w-screen-2xl"
        >
            {/* Navbar for large screens */}
            <nav className="items-center justify-between py-2 hidden lg:flex xl:px-20">
                <div className="left-nav flex items-center space-x-4">
                    <Link
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse p-0 sm:py-2 sm:px-3 md:bg-transparent md:p-0"
                        rel="canonical"
                        aria-label="Brand Logo"
                    >
                        <Image
                            src="/videfly-logo.png"
                            className="h-14 w-full navbar-logo"
                            alt="Logo Videfly"
                            width={2356}
                            height={870}
                        />
                    </Link>
                </div>
                <div className={`w-full hidden md:block md:w-auto`} id="navbar-default">
                    <div className="items-center flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <div className={`${poppins.className} font-medium flex flex-col md:flex-row md:gap-x-10 gap-y-3 items-center`}>
                            <Link href="/fiturai" rel="canonical" aria-label="Fitur AI">
                                <p
                                    className="cursor-pointer transition-all text-zinc-500 text-base rounded-xl px-4 py-3"
                                >
                                    Fitur AI
                                </p>
                            </Link>
                            <Link href="/carakerja" rel="canonical" aria-label="Cara Kerja">
                                <p
                                    className="cursor-pointer transition-all text-zinc-500 text-base rounded-xl px-4 py-3"
                                >
                                    Cara Kerja
                                </p>
                            </Link>
                            <Link href="/harga" rel="canonical" aria-label="Harga">
                                <p
                                    className="cursor-pointer transition-all text-zinc-500 text-base rounded-xl px-4 py-3"
                                >
                                    Harga
                                </p>
                            </Link>
                            <Link href="/support" rel="canonical" aria-label="Support">
                                <p
                                    className="cursor-pointer transition-all text-zinc-500 text-base rounded-xl px-4 py-3"
                                >
                                    Support
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={`${poppins.className} flex gap-3`}>
                    <Link href="/login" rel="canonical" aria-label="Log In">
                        <p
                            className="cursor-pointer transition-all bg-zinc-100 text-zinc-700 text-sm font-semibold border-zinc-200 border-2 rounded-lg px-6 py-2"
                        >
                            Masuk
                        </p>
                    </Link>
                    <Link href="/video" rel="canonical" aria-label="Video">
                        <p
                            className="cursor-pointer transition-all bg-gradient-to-r from-purple-700 to-rose-300 text-white text-sm font-medium border-2 border-purple-200 rounded-lg px-6 py-2"
                        >
                            Buat Video
                        </p>
                    </Link>
                </div>
            </nav>

            {/* Navbar for small screens */}
            <Navbar
                className="lg:hidden"
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
            >
                <NavbarContent justify="start">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    />
                </NavbarContent>

                <NavbarContent justify="center">
                    <NavbarBrand>
                        <Link href="/" className="flex items-center space-x-4" rel="canonical" aria-label="Brand Logo">
                            <Image
                                src="/hero-videfly.png"
                                className="h-8 w-auto navbar-logo"
                                alt="Logo Videfly"
                                width={1000}
                                height={1000}
                            />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarMenu className="flex justify-center items-center text-center gap-10">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item.label}-${index}`}>
                            <Link
                                className={`${outfit.className} w-full ${currentPath === item.path
                                    ? "font-semibold" // Apply active class if the link is active
                                    : ""}`}
                                href={item.path === "#" ? "#" : item.path} // Fix for Mode Toggle
                                rel="canonical"

                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    );
}
