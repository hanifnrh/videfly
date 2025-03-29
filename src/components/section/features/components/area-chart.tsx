'use client'

import { motion } from 'framer-motion'

export const AreaChart = () => (
    <div className={'dark:shadow-none overflow-hidden rounded-lg w-full h-[70px]'}>
        <div className={'bg-white'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 653 200">
                <motion.path
                    transition={{ delay: 0.3 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    d="M0 180 C20 160, 40 170, 60 165 S100 150, 120 155 S160 140, 180 145 S220 130, 240 135 
                    S280 120, 300 125 S340 110, 360 115 S400 100, 420 105 S460 90, 480 95 S520 80, 540 85 
                    S580 70, 600 75 S640 60, 660 65 L653 200 H0 Z"
                    className={'fill-purple-200'}
                />
                <motion.path
                    transition={{ duration: 0.4 }}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    d="M0 180 C20 160, 40 170, 60 165 S100 150, 120 155 S160 140, 180 145 S220 130, 240 135 
                    S280 120, 300 125 S340 110, 360 115 S400 100, 420 105 S460 90, 480 95 S520 80, 540 85 
                    S580 70, 600 75 S640 60, 660 65"
                    fill="none"
                    className={'stroke-[#703BE7]'}
                    strokeWidth="3"
                />
            </svg>
        </div>
    </div>
)