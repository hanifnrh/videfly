"use client"

// Libs

// UI Libs
import { NumberTicker } from '@/components/ui/number-ticker';

// Font

import { Nunito, Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const nunito = Nunito({ subsets: ['latin'] })

// Icons
import Features from '@/components/section/features/features';
import Hero from "@/components/section/hero/hero";

export default function Home() {

  return (
    <>
      <main>
        <Hero />
        <Features/>

        <div className="overflow-x-hidden flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 rounded-xl xl:mx-20">


          <div className={`${nunito.className} bg-sky-100 p-8 lg:p-20 rounded-xl`}>
            <div className="text-xl lg:text-5xl font-semibold max-w-2xl">
              Kami mengutamakan kepuasan pelanggan, demi memberikan pelayanan terbaik
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 items-start justify-between gap-4">
              <div className="flex flex-col gap-4">
                <div className={`${nunito.className} text-7xl lg:text-8xl`}>
                  <NumberTicker value={20} /><span className="text-3xl">tahun</span>
                </div>
                <div className="text-xl lg:text-3xl font-semibold">
                  Pengalaman
                </div>
                <div className="text-md lg:text-lg">
                  Kami sudah bergerak 20 tahun di bidang plumbing service
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className={`${nunito.className} text-7xl lg:text-8xl`}>
                  <NumberTicker value={65} />+
                </div>
                <div className="text-xl lg:text-3xl font-semibold">
                  Klien
                </div>
                <div className="text-lg">
                  Kami telah melayani berbagai klien perusahaan dan dipercaya hotel bintang lima, mall, perkantoran, dan klien retail
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className={`${nunito.className} text-7xl lg:text-8xl`}>
                  <NumberTicker value={25} />+
                </div>
                <div className="text-xl lg:text-3xl font-semibold">
                  Expert
                </div>
                <div className="text-lg">
                  Lebih dari 40 expert berpengalaman yang siap membantu Anda
                </div>
              </div>
              <div>

              </div>
            </div>
          </div>

        </div>
      </main >
    </>
  );
}