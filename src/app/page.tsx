"use client"

// Libs

// UI Libs

// Font

import { Nunito, Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const nunito = Nunito({ subsets: ['latin'] })

// Icons
import Features from '@/components/section/features/features';
import Footer from '@/components/section/footer/footer';
import Hero from "@/components/section/hero/hero";
import Tutorial from '@/components/section/tutorial/tutorial';
import Bounce from '@/components/ui/bounce';

export default function Home() {

  return (
    <>
      <main>
        <Bounce>
          <Hero />
        </Bounce>

        <Bounce>
          <Features />
        </Bounce>

        <Bounce>
          <Tutorial />
        </Bounce>

        <Bounce>
          <Footer />
        </Bounce>

      </main >
    </>
  );
}