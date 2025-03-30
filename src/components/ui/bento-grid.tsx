import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Nunito, Poppins } from 'next/font/google';
import Link from "next/link";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const nunito = Nunito({ subsets: ['latin'] })

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 xl:grid-cols-6 xl:gap-4 gap-y-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",

      "bg-[#F5F5F9]",
      className,
    )}
    {...props}
  >
    <div className="relative">
      {background}
      <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#F5F5F9] from-40% to-transparent"></div>
    </div>

    <div className="pointer-events-none z-10 fade-y- flex transform-gpu flex-col gap-1 p-4 transition-all duration-300 group-hover:-translate-y-10">
      <div className="flex items-center gap-2">
        <Icon className="h-14 w-14 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className={`${nunito.className} font-bold text-xl text-zinc-900`}>
          {name}
        </h3>
      </div>
      <p className={`${poppins.className} text-sm text-zinc-600`}>{description}</p>
    </div>

    <Link
      href={href}
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 cursor-pointer",
      )}
    >
      <div className={`${nunito.className} flex items-center text-zinc-800 text-sm font-bold`}>
        {cta}
        <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
      </div>
    </Link>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
