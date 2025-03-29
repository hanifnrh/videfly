// Libs
import Image from "next/image";
import { useState } from "react";

// UI Libs
import StaggeredDropDown from "@/components/section/hero/dropdown";
import Badge from "@/components/ui/badge";

// Font
import { Nunito, Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: "400"
});
const nunito = Nunito({ subsets: ['latin'] })

export default function Hero() {
    const [showAnalysis, setShowAnalysis] = useState(false);
    const [name, setName] = useState("");

    const handleAnalyze = () => {
        setShowAnalysis(true);
    };

    const handleBack = () => {
        setShowAnalysis(false);
    };

    return (
        <main>
            <div className="mt-16 flex flex-col items-center justify-center p-8 pb-20 sm:p-20 relative md:flex-row gap-8 bg-gradient-to-br from-[#7261EF] via-[#B9AFF7] to-[#F1EDFD]">
                <div className={`${nunito.className} w-full aspect-[5/3] relative flex items-start justify-center gap-4 bg-white rounded-3xl px-10 py-14 mx-20`}>
                    {!showAnalysis ? (
                        // Original Hero Layout
                        <>
                            <div className="w-full flex flex-col gap-14">
                                <div className="flex flex-col gap-4">
                                    <Badge text="Live Demo" />
                                    <h1 className="leading-snug text-5xl font-bold">
                                        Coba Fitur URL to Video <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-300">
                                            Tanpa Biaya!
                                        </span>
                                    </h1>
                                    <p className={`${poppins.className} text-zinc-700 text-base`}>
                                        Masukkan URL, ubah jadi video dalam hitungan detik.
                                        <br />
                                        Mudah dan gratis!
                                    </p>
                                </div>
                                <StaggeredDropDown onAnalyze={handleAnalyze} />
                            </div>
                            <div className="w-full">
                                <Image
                                    src="/hero-videfly.png"
                                    alt="Hero Image Videfly"
                                    width={542}
                                    height={485}
                                    className="absolute right-0 z-20"
                                />
                                <Image
                                    src="/element-hero.png"
                                    alt="Hero Image Videfly"
                                    width={1000}
                                    height={1000}
                                    className="w-auto h-full absolute inset-y-0 right-0 z-10 rounded-b-3xl"
                                />
                            </div>
                        </>
                    ) : (
                        // Analysis Hero Layout
                        <>
                            <div className="w-full flex flex-col gap-14">
                                <div className="flex flex-col gap-4">
                                    <Badge text="Analysis Mode" />
                                    <h1 className="leading-snug text-5xl font-bold">
                                        Masukkan Nama Anda <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-300">
                                            Untuk Memulai!
                                        </span>
                                    </h1>
                                    <p className={`${poppins.className} text-zinc-700 text-base`}>
                                        Kami akan menganalisa produk Anda dan membuat video dalam hitungan detik.
                                    </p>
                                </div>
                                <div className="w-full flex flex-col gap-4">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Masukkan nama Anda"
                                        className="w-full px-4 py-3 rounded-xl text-zinc-700 bg-white border-2 border-[#703BE7] transition-colors"
                                    />
                                    <div className="flex gap-2">
                                        <button
                                            onClick={handleBack}
                                            className="text-[#703BE7] text-lg px-6 py-3 bg-white hover:bg-gray-100 border border-[#703BE7] rounded-xl transition-all cursor-pointer"
                                        >
                                            Kembali
                                        </button>
                                        <button
                                            className="text-white text-lg px-6 py-3 bg-[#703BE7] hover:bg-[#6f3be7d8] rounded-xl transition-all cursor-pointer"
                                        >
                                            Lanjutkan
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <Image
                                    src="/hero-analysis.png"  // You might want to use a different image
                                    alt="Analysis Image"
                                    width={542}
                                    height={485}
                                    className="absolute right-0 z-20"
                                />
                                <Image
                                    src="/element-analysis.png"  // Different background element
                                    alt="Analysis Background"
                                    width={1000}
                                    height={1000}
                                    className="w-auto h-full absolute inset-y-0 right-0 z-10 rounded-b-3xl"
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}