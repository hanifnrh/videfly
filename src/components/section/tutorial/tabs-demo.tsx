import { Card, CardContent } from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";
import Image from "next/image";
import { useState } from "react";

import { Nunito, Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "400",
});
const nunito = Nunito({ subsets: ["latin"] });

export function TabsDemo() {
    const [activeStep, setActiveStep] = useState(1);
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const steps = [
        {
            id: 1,
            title: "Step 1 - Masukkan URL",
            description:
                "Cukup Tempelkan tautan produk atau bisnis Anda, dan sistem kami akan secara otomatis mengambil informasi penting untuk memulai.",
            image: "/section/tutorial/step-1.jpg",
        },
        {
            id: 2,
            title: "Step 2 - Verifikasi Data",
            description:
                "Pastikan informasi yang diambil sudah benar sebelum melanjutkan ke langkah berikutnya.",
            image: "/section/tutorial/step-2.jpg",
        },
        {
            id: 3,
            title: "Step 3 - Selesaikan Proses",
            description:
                "Konfirmasikan dan simpan data yang telah diverifikasi untuk menyelesaikan langkah ini.",
            image: "/section/tutorial/step-3.jpg",
        },
    ];

    return (
        <div
            className={`${poppins.className} grid grid-cols-2 items-center justify-between w-full rounded-3xl gap-6`}
        >
            <div>
                <Card className="aspect-[3/2] bg-[#F5F5F9] shadow-none border-2 border-[#E6E6E6] p-20 rounded-3xl">
                    <CardContent className="flex items-center justify-center bg-white aspect-[3/2] rounded-3xl border border-[#E6E6E6]">
                        {activeStep === 3 ? (
                            <video
                                width="100%"
                                height="auto"
                                autoPlay
                                loop
                                muted
                                playsInline
                                disablePictureInPicture
                                controlsList="nodownload nofullscreen noplaybackrate"
                            >
                                <source src="/section/tutorial/video-step.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <Image
                                src={steps.find((step) => step.id === activeStep)?.image || ""}
                                height={1280}
                                width={851}
                                alt={`Step ${activeStep}`}
                                className="w-full"
                            />
                        )}
                    </CardContent>
                </Card>
            </div>


            <div className="grid w-full grid-cols-1 gap-6 rounded-4xl bg-transparent rounded-md">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className={`relative cursor-pointer p-4 rounded-3xl transition-all duration-300 border border-[#E6E6E680] 
            ${(activeStep === step.id || hoveredStep === step.id) ? "shadow-[1px_4px_30px_0px_#6636D214]" : ""}
            `}
                        onClick={() => setActiveStep(step.id)}
                        onMouseEnter={() => setHoveredStep(step.id)}
                        onMouseLeave={() => setHoveredStep(null)}
                    >
                        {(activeStep === step.id || hoveredStep === step.id) && (
                            <ShineBorder
                                shineColor={["#9747FF", "#b469d4", "#EEE2FF"]}
                            />
                        )}
                        <h4
                            className={`text-start text-xl font-semibold transition-all duration-300 ${activeStep === step.id || hoveredStep === step.id
                                ? "bg-gradient-to-br from-[#7F52FF] to-[#FB8570] bg-clip-text text-transparent"
                                : "text-black"
                                }`}
                        >
                            {step.title}
                        </h4>
                        <p className="text-start text-sm text-zinc-600">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
