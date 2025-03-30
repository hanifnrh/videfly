"use client"

// Libs

// UI Libs

// Font

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