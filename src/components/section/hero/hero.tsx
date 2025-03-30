// Libs
import Image from "next/image";
import { useState } from "react";

// UI Libs
import StaggeredDropDown from "@/components/section/hero/dropdown";
import Badge from "@/components/ui/badge";

// Font
import { Checkbox } from "@/components/ui/checkbox";
import { Nunito, Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: "400"
});
const nunito = Nunito({ subsets: ['latin'] })

// Define different steps
const STEPS = {
    INITIAL: 0,
    FORM: 1,
    FINAL: 2
};

export default function Hero() {
    const [currentStep, setCurrentStep] = useState(STEPS.INITIAL);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [label, setLabel] = useState("");
    const [isFocusedName, setIsFocusedName] = useState(false);
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedLabel, setIsFocusedLabel] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
        setIsLoading(true);
        // Simulate API call or processing
        setTimeout(() => {
            setIsLoading(false);
            setCurrentStep(STEPS.FINAL);
        }, 2000); // 2 seconds loading time
    };

    const handleNextStep = () => {
        setCurrentStep(prev => prev + 1);
    };

    const handleBack = () => {
        setCurrentStep(prev => prev - 1);
    };

    return (
        <div className="mt-14 lg:mt-16 flex flex-col items-center justify-center p-8 pb-20 sm:p-20 relative md:flex-row gap-8 bg-gradient-to-br from-[#7261EF] via-[#B9AFF7] to-[#F1EDFD]">
            {currentStep === STEPS.INITIAL ? (
                // Initial Step Layout
                <>
                    <div className={`${nunito.className} w-full aspect-[5/3] relative flex flex-col sm:flex-row items-start justify-center gap-4 bg-white rounded-3xl px-6 py-10 sm:px-10 sm:py-14 mx-20`}>
                        <div className="w-full flex flex-col gap-8 sm:gap-14 z-20">
                            <div className="flex flex-col gap-2">
                                <Badge text="Live Demo" />
                                <h1 className="leading-snug text-2xl sm:text-3xl xl:text-5xl font-bold">
                                    Coba Fitur URL to Video <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-300">
                                        Tanpa Biaya!
                                    </span>
                                </h1>
                                <p className={`${poppins.className} sm:w-9/12 text-zinc-700 text-xs sm:text-sm md:text-base`}>
                                    Masukkan URL, ubah jadi video dalam hitungan detik.
                                    Mudah dan gratis!
                                </p>
                            </div>
                            <StaggeredDropDown onAnalyze={handleNextStep} />
                        </div>
                        <div className="w-full">
                            <Image
                                src="/section/hero/hero-videfly.png"
                                alt="Hero Image Videfly"
                                width={542}
                                height={485}
                                className="hidden lg:block w-40 h-auto md:w-64 xl:w-96 2xl:w-xl sm:h-auto absolute right-0 z-20"
                            />
                            <Image
                                src="/section/hero/element-hero.png"
                                alt="Hero Image Videfly"
                                width={1000}
                                height={1000}
                                className="w-40 h-auto sm:w-auto sm:h-full absolute inset-y-0 right-0 z-10 rounded-b-3xl"
                            />
                        </div>
                    </div>
                </>
            ) : currentStep === STEPS.FORM ? (
                // Form Step Layout
                <>
                    {isLoading ? (
                        // Loading State
                        <div className={`${nunito.className} w-full aspect-[5/3] relative flex items-center justify-center bg-white rounded-3xl px-6 py-10 sm:px-10 sm:py-14 xl:mx-20`}>
                            <div className="flex flex-col items-center gap-4">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#703BE7]"></div>
                                <p className={`${poppins.className} text-zinc-700`}>Memproses data Anda...</p>
                            </div>
                        </div>
                    ) : (
                        <div className={`${nunito.className} w-full aspect-[5/3] relative flex flex-col lg:flex-row items-start justify-center gap-4 bg-white rounded-3xl px-6 py-10 sm:px-10 sm:py-14 xl:mx-20`}>
                            <div className="w-full flex flex-col gap-6 z-20">
                                <div className="flex flex-col gap-2">
                                    <Badge text="Live Demo" />
                                    <h1 className="leading-snug text-2xl sm:text-3xl xl:text-5xl font-bold">
                                        Coba Fitur URL to Video <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-300">
                                            Tanpa Biaya!
                                        </span>
                                    </h1>
                                    <p className={`${poppins.className} sm:w-9/12 lg:w-full xl:w-9/12 text-zinc-700 text-xs sm:text-sm md:text-base`}>
                                        Masukkan URL, ubah jadi video dalam hitungan detik.
                                        Mudah dan gratis!
                                    </p>
                                </div>
                                <div className={`${poppins.className} w-full flex flex-col gap-4`}>
                                    <div className="w-full flex flex-col">
                                        <p className="text-xs sm:text-sm text-zinc-600">
                                            Nama <span className="text-red-500">*</span>
                                        </p>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            onFocus={() => setIsFocusedName(true)}
                                            onBlur={() => setIsFocusedName(false)}
                                            placeholder="contoh: John Doe"
                                            className={`w-full py-3 text-sm sm:text-base text-zinc-700 border-b-[2.5px] transition-colors focus:outline-0 focus:ring-0
                ${!name ? "border-b-zinc-300" : isFocusedName ? "border-b-zinc-900" : "border-[#703BE7]"}`}
                                        />
                                    </div>

                                    <div className="flex items-center gap-3 w-full">
                                        <div className="w-full flex flex-col">
                                            <p className="text-xs sm:text-sm text-zinc-600">
                                                Email <span className="text-red-500">*</span>
                                            </p>
                                            <input
                                                type="text"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                onFocus={() => setIsFocusedEmail(true)}
                                                onBlur={() => setIsFocusedEmail(false)}
                                                placeholder="nama@email.com"
                                                className={`w-full py-3 text-sm sm:text-base text-zinc-700 border-b-[2.5px] transition-colors focus:outline-0 focus:ring-0
                ${!email ? "border-b-zinc-300" : isFocusedEmail ? "border-b-zinc-900" : "border-[#703BE7]"}`}
                                            />
                                        </div>

                                        <div className="w-full flex flex-col">
                                            <p className="text-xs sm:text-sm text-zinc-600">
                                                Label <span className="text-red-500">*</span>
                                            </p>
                                            <div className="flex items-center gap-2 w-full transition-colors">
                                                <div className={`px-2 py-3 text-sm sm:text-base text-zinc-700 border-b-[2.5px] transition-colors focus:outline-0 focus:ring-0
                ${!label ? "border-b-zinc-300" : isFocusedLabel ? "border-b-zinc-900" : "border-[#703BE7]"}`}>
                                                    +62
                                                </div>
                                                <input
                                                    type="number"
                                                    value={label}
                                                    onChange={(e) => setLabel(e.target.value)}
                                                    onFocus={() => setIsFocusedLabel(true)}
                                                    onBlur={() => setIsFocusedLabel(false)}
                                                    placeholder=""
                                                    className={`w-full py-3 text-sm sm:text-base text-zinc-700 border-b-[2.5px] transition-colors focus:outline-0 focus:ring-0
                ${!label ? "border-b-zinc-300" : isFocusedLabel ? "border-b-zinc-900" : "border-[#703BE7]"}`}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Checkbox
                                            id="terms"
                                            checked={isChecked}
                                            onCheckedChange={(checked) => setIsChecked(!!checked)}
                                        />
                                        <label
                                            htmlFor="terms"
                                            className="text-xs sm:text-sm text-zinc-700 leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Dengan mendaftar, saya menyatakan telah membaca dan menyetujui <span className="text-[#703BE7]">Syarat dan Ketentuan</span> dan <span className="text-[#703BE7]">Kebijakan Privasi</span> Videfly
                                        </label>
                                    </div>
                                </div>
                                <div className="flex gap-4 text-sm sm:text-base">
                                    <button
                                        onClick={handleSubmit}
                                        className={`mt-4 w-full lg:w-fit px-0 lg:px-20 py-3 text-white bg-[#703BE7] rounded-lg transition-all ${isChecked ? " cursor-pointer brightness-100" : "brightness-75 cursor-not-allowed"
                                            }`}
                                        disabled={!isChecked}
                                    >
                                        Kirim
                                    </button>
                                </div>
                            </div>
                            <div className="w-full">
                                <Image
                                    src="/section/hero/hero-videfly.png"
                                    alt="Hero Image Videfly"
                                    width={542}
                                    height={485}
                                    className="hidden lg:block w-40 h-auto md:w-96 xl:w-96 2xl:w-xl sm:h-auto absolute right-0 z-20"
                                />
                                <Image
                                    src="/section/hero/element-hero.png"
                                    alt="Hero Image Videfly"
                                    width={1000}
                                    height={1000}
                                    className="w-40 h-auto sm:w-64 lg:w-96 xl:w-auto xl:h-full absolute inset-y-0 right-0 z-10 rounded-b-3xl"
                                />
                            </div>
                        </div>
                    )}
                </>
            ) : (
                // Final Step Layout
                <>
                    <div className={`${nunito.className} w-full aspect-[5/3] relative flex flex-col sm:flex-row items-start justify-center gap-4 bg-white rounded-3xl px-6 py-6 sm:px-10 sm:py-14 xl:mx-20`}>
                        <div className="w-full aspect-square sm:w-full lg:aspect-video flex flex-col">
                            <div className="flex flex-col text-center z-30">
                                <h1 className="leading-snug text-2xl sm:text-3xl lg:text-5xl font-bold">
                                    Videomu Sudah Siap!
                                </h1>
                                <p className={`${poppins.className} text-zinc-700 text-xs md:text-base`}>
                                    Yuk, coba jadwalkan demo untuk bikin video tanpa batas dengan semua fitur lengkap.
                                    <br />
                                    Butuh yang lebih fleksibel? Lihat paket harga yang sesuai dengan kebutuhanmu!
                                </p>
                            </div>

                            <div className="flex gap-4 z-20 w-full justify-center items-center">
                                <button
                                    className="mt-4 w-fit px-4 py-3 text-sm sm:text-lg font-semibold text-[#703BE7] bg-white border-2 border-[#703BE7] rounded-lg transition-all cursor-pointer"
                                >
                                    Lihat Pricing
                                </button>
                                <button
                                    className="mt-4 w-fit px-4 py-3 text-sm sm:text-lg font-semibold text-white bg-[#703BE7] hover:bg-[#6f3be7d8] border-2 border-[#703BE7]  rounded-lg transition-all cursor pointer">
                                    Jadwalkan Demo
                                </button>
                            </div>

                            <Image
                                src="/section/hero/hero-final.png"
                                alt="Hero Image Videfly"
                                width={1410}
                                height={565}
                                className="absolute bottom-0 inset-x-0 rounded-b-3xl object-contain"
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}