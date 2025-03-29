
// Libs
import Image from 'next/image';
// UI Libs

// Font

import { ShineBorder } from '@/components/ui/shine-border';
import { Nunito, Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: "400"
});
const nunito = Nunito({ subsets: ['latin'] })

// Icons

interface Grid03Props {
    className?: string;
}

export default function Grid03({ className }: Grid03Props) {
    return (
        <>
            <main>
                <div className={`${poppins.className} w-full grid grid-cols-12 items-start justify-center px-4 py-8 pb-0 relative gap-2`}>
                    <div className='w-full relative bg-transparent rounded-md col-span-3'>
                        <ShineBorder shineColor={["#9747FF", "#b469d4", "#EEE2FF"]} />
                        <div className='w-full justify-between rounded-md p-2 text-[8px] font-semibold'>
                            <div className='bg-white items-center justify-center rounded-md border border-[#ECECEC] flex flex-col gap-1 p-2'>
                                <div className='w-full flex flex-col items-center justify-center text-center gap-1 px-2 py-2 rounded-md bg-[#D2C2F84D] text-[#703BE7]'>
                                    <svg id="Template--Streamline-Carbon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height={20} width={20} ><desc>{"Template Streamline Icon: https://streamlinehq.com"}</desc><defs /><title>{"template"}</title><path d="M13 3v2H3V3h10m0 -1H3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1 -1V3a1 1 0 0 0 -1 -1Z" fill="#703BE7" strokeWidth={0.5} /><path d="M5 8v5H3V8h2m0 -1H3a1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1V8a1 1 0 0 0 -1 -1Z" fill="#703BE7" strokeWidth={0.5} /><path d="M13 8v5H8V8h5m0 -1H8a1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1 -1V8a1 1 0 0 0 -1 -1Z" fill="#703BE7" strokeWidth={0.5} /><path d="M0 0h16v16H0Z" fill="none" strokeWidth={0.5} /></svg>
                                    Tema
                                </div>

                                <div className='w-full flex flex-col items-center justify-center text-center gap-1 px-4 py-2 rounded-md text-zinc-900'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 16 16" strokeLinecap="round" strokeLinejoin="round" stroke="#000000" id="Image--Streamline-Mynaui" height={20} width={20} ><desc>{"Image Streamline Icon: https://streamlinehq.com"}</desc><path d="M4.0625 5a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0 -2.5 0m9.016874999999999 1.24375c-4.1312500000000005 -0.5675 -7.6937500000000005 2.5 -7.454375 6.56875" strokeWidth={1} /><path d="M1.875 8.16625c1.7374999999999998 -0.240625 3.296875 0.59875 4.14 1.9375" strokeWidth={1} /><path d="M1.875 5.875c0 -1.4000000000000001 0 -2.1 0.2725 -2.6350000000000002a2.5 2.5 0 0 1 1.0925 -1.0925C3.775 1.875 4.475 1.875 5.875 1.875h3.25c1.4000000000000001 0 2.1 0 2.6350000000000002 0.2725a2.5 2.5 0 0 1 1.0925 1.0925C13.125 3.775 13.125 4.475 13.125 5.875v3.25c0 1.4000000000000001 0 2.1 -0.2725 2.6350000000000002a2.5 2.5 0 0 1 -1.0925 1.0925C11.225000000000001 13.125 10.525 13.125 9.125 13.125H5.875c-1.4000000000000001 0 -2.1 0 -2.6350000000000002 -0.2725a2.5 2.5 0 0 1 -1.0925 -1.0925C1.875 11.225000000000001 1.875 10.525 1.875 9.125z" strokeWidth={1} /></svg>
                                    Gambar
                                </div>

                                <div className='w-full flex flex-col items-center justify-center text-center gap-1 px-4 py-2 rounded-md text-zinc-900'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers" id="Layers--Streamline-Feather" height={20} width={20} ><desc>{"Layers Streamline Icon: https://streamlinehq.com"}</desc><path d="M7.5 1.25 1.25 4.375l6.25 3.125 6.25 -3.125 -6.25 -3.125z" strokeWidth={1} /><path d="m1.25 10.625 6.25 3.125 6.25 -3.125" strokeWidth={1} /><path d="m1.25 7.5 6.25 3.125 6.25 -3.125" strokeWidth={1} /></svg>
                                    Elemen
                                </div>

                                <div className='w-full flex flex-col items-center justify-center text-center gap-1 px-4 py-2 rounded-md text-zinc-900'>
                                    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M5.5 10V8.5m0 0v-5a1 1 0 012 0v4h3.353c.91 0 1.647.737 1.647 1.647V10A4.5 4.5 0 018 14.5h-.5a4 4 0 01-4-4 2 2 0 012-2zm3.5-3h2a2.5 2.5 0 000-5H4a2.5 2.5 0 000 5" stroke="currentColor"></path></svg>
                                    Tombol CTA
                                </div>

                                <div className='w-full flex flex-col items-center justify-center text-center gap-1 px-4 py-2 rounded-md text-zinc-900'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2M5.17 4a3.001 3.001 0 0 1 5.66 0H22v2H10.83a3.001 3.001 0 0 1-5.66 0H2V4zm8 7a3.001 3.001 0 0 1 5.66 0H22v2h-3.17a3.001 3.001 0 0 1-5.66 0H2v-2zM16 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-8 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H22v2H10.83a3.001 3.001 0 0 1-5.66 0H2v-2z"></path></svg>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='w-full relative bg-transparent rounded-md col-span-9'>
                        <ShineBorder shineColor={["#9747FF", "#b469d4", "#EEE2FF"]} />

                        <div className='w-full justify-between rounded-md p-2'>
                            <div className='grid grid-cols-1 gap-4 bg-white rounded-md border border-[#ECECEC] p-2'>
                                <div className='text-sm flex items-center justify-between p-2 font-medium'>
                                    Pilih desain kamu
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Info--Streamline-Rounded-Material" height={16} width={16} ><desc>{"Info Streamline Icon: https://streamlinehq.com"}</desc><path fill="#703BE7" d="M12.0795 17c0.21365 0 0.39135 -0.0719 0.533 -0.21575 0.14165 -0.14365 0.2125 -0.32175 0.2125 -0.53425v-4.5c0 -0.2125 -0.07235 -0.39065 -0.217 -0.5345 -0.1445 -0.14365 -0.32365 -0.2155 -0.5375 -0.2155 -0.21365 0 -0.39135 0.07185 -0.533 0.2155 -0.14165 0.14385 -0.2125 0.322 -0.2125 0.5345v4.5c0 0.2125 0.07235 0.3906 0.217 0.53425 0.1445 0.14385 0.32365 0.21575 0.5375 0.21575Zm-0.08 -7.85c0.23365 0 0.42965 -0.07665 0.588 -0.23 0.15835 -0.15335 0.2375 -0.34335 0.2375 -0.57 0 -0.24085 -0.079 -0.44265 -0.237 -0.6055 -0.158 -0.163 -0.35385 -0.2445 -0.5875 -0.2445 -0.23365 0 -0.42965 0.0815 -0.588 0.2445 -0.15835 0.16285 -0.2375 0.36465 -0.2375 0.6055 0 0.22665 0.079 0.41665 0.237 0.57 0.158 0.15335 0.35385 0.23 0.5875 0.23Zm0.00725 12.85c-1.379 0 -2.67485 -0.2625 -3.8875 -0.7875 -1.21285 -0.525 -2.2734 -1.24165 -3.18175 -2.15 -0.908335 -0.90835 -1.625 -1.9695 -2.15 -3.1835C2.2625 14.665 2 13.36785 2 11.9875s0.2625 -2.6775 0.7875 -3.8915c0.525 -1.214 1.241665 -2.271 2.15 -3.171 0.90835 -0.9 1.9695 -1.6125 3.1835 -2.1375C9.335 2.2625 10.63215 2 12.0125 2s2.6775 0.2625 3.8915 0.7875c1.214 0.525 2.271 1.2375 3.171 2.1375 0.9 0.9 1.6125 1.95835 2.1375 3.175C21.7375 9.31665 22 10.6144 22 11.99325c0 1.379 -0.2625 2.67485 -0.7875 3.8875 -0.525 1.21285 -1.2375 2.2719 -2.1375 3.17725 -0.9 0.90515 -1.95835 1.62185 -3.175 2.15C14.68335 21.736 13.3856 22 12.00675 22Zm0.00575 -1.5c2.35835 0 4.3625 -0.82915 6.0125 -2.4875 1.65 -1.65835 2.475 -3.66665 2.475 -6.025s-0.8234 -4.3625 -2.47025 -6.0125C16.3829 4.325 14.373 3.5 12 3.5c-2.35 0 -4.35415 0.823415 -6.0125 2.47025C4.329165 7.6171 3.5 9.627 3.5 12c0 2.35 0.829165 4.35415 2.4875 6.0125C7.64585 19.67085 9.65415 20.5 12.0125 20.5Z" strokeWidth={0.5} /></svg>
                                </div>

                                <div className='flex items-center gap-1 p-1 bg-[#F6F6F6] text-[#8A8A8A] text-xs rounded-md'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round" id="Search--Streamline-Lucide" height={16} width={16} ><desc>{"Search Streamline Icon: https://streamlinehq.com"}</desc><path d="M1.875 6.875a5 5 0 1 0 10 0 5 5 0 1 0 -10 0" strokeWidth={1} /><path d="m13.125 13.125 -2.6875 -2.6875" strokeWidth={1} /></svg>
                                    Cari tema...
                                </div>

                                <div className='flex items-center justify-between'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>left_line</title><g id="left_line" fill='none' fillRule='evenodd'><path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z' /><path fill='#000000FF' d='M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414l-5.657-5.657Z' /></g></svg>

                                    <div className='bg-[#8D62EC] px-3 py-[2px] rounded-full text-white text-[10px]'>
                                        Popular
                                    </div>

                                    <div className='bg-[#F6F6F6] px-3 py-[2px] rounded-full text-[#8A8A8A] text-[10px]'>
                                        Holiday
                                    </div>

                                    <div className='bg-[#F6F6F6] px-3 py-[2px] rounded-full text-[#8A8A8A] text-[10px]'>
                                        Nature
                                    </div>

                                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>right_line</title><g id="right_line" fill='none' fillRule='evenodd'><path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z' /><path fill='#000000FF' d='M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z' /></g></svg>
                                </div>

                                <div className='w-full grid grid-cols-2 justify-between rounded-md text-[8px] text-zinc-500'>
                                    <Image
                                        src='/section/grid-3/edit-1.png'
                                        width={99}
                                        height={99}
                                        alt='Grid03 1'
                                        className='w-full rounded-md'
                                    />
                                    <Image
                                        src='/section/grid-3/edit-2.png'
                                        width={99}
                                        height={99}
                                        alt='Grid03 2'
                                        className='w-full rounded-md'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    );
}