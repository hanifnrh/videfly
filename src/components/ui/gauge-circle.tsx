import { cn } from "@/lib/utils"


interface Props {
    max: number
    value: number
    min: number
    gaugePrimaryColor: string
    gaugeSecondaryColor: string
    className?: string
}

export function GaugeCircle({
    max = 100,
    min = 0,
    value = 0,
    gaugePrimaryColor,
    gaugeSecondaryColor,
    className,
}: Props) {
    const circumference = 2 * Math.PI * 45
    const percentPx = circumference / 100
    const currentPercent = ((value - min) / (max - min)) * 100

    return (
        <div
            className={cn("relative size-30 rounded-full bg-[#F1EBFD] text-2xl font-semibold", className)}
            style={
                {
                    "--circle-size": "100px",
                    "--circumference": `${circumference}px`,
                    "--percent-to-px": `${percentPx}px`,
                    "--gap-percent": "5",
                    "--offset-factor": "0",
                    "--transition-length": "1s",
                    "--transition-step": "200ms",
                    "--delay": "0s",
                    "--percent-to-deg": "3.6deg",
                    transform: "translateZ(0)",
                } as React.CSSProperties
            }
        >
            <svg
                fill="none"
                className="size-full"
                strokeWidth="2"
                viewBox="0 0 100 100"
            >
                {currentPercent <= 90 && currentPercent >= 0 && (
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        strokeWidth="7"
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-100"
                        style={{
                            stroke: gaugeSecondaryColor,
                            strokeDasharray: `${(90 - currentPercent) * percentPx}px ${circumference}px`,
                            transform: `rotate(calc(1turn - 90deg - (5 * 3.6deg * (1 - 0)))) scaleY(-1)`,
                            transition: "all 1s ease 0s",
                            transformOrigin: "50px 50px",
                        }}
                    />
                )}
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    strokeWidth="7"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-100"
                    style={{
                        stroke: gaugePrimaryColor,
                        strokeDasharray: `${currentPercent * percentPx}px ${circumference}px`,
                        transition: "1s ease 0s, stroke 1s ease 0s",
                        transitionProperty: "stroke-dasharray,transform",
                        transform: "rotate(calc(-90deg + 5 * 0 * 3.6deg))",
                        transformOrigin: "50px 50px",
                    }}
                />
            </svg>
            <div
                className="w-16 h-16 flex flex-col justify-center items-center rounded-full bg-white shadow-md p-4 animate-in fade-in absolute inset-0 m-auto size-fit text-[#703BE7] text-center text-lg"
                style={{
                    animationDelay: "0s",
                    transitionDuration: "1s",
                }}
            >
                <span className="text-xs font-light text-center text-black">
                    Nilai
                </span>
                {Math.round(currentPercent)}
            </div>
        </div>
    )
}
