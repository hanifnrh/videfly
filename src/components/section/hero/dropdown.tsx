import { motion } from "framer-motion";
import { Nunito, Poppins } from 'next/font/google';
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineLink } from "react-icons/hi";

const poppins = Poppins({
    subsets: ['latin'],
    weight: "400"
});
const nunito = Nunito({ subsets: ['latin'] })

interface OptionProps {
    text: string;
    link: string;
    imageSrc: string;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setSelectedUrl: Dispatch<SetStateAction<string>>;
}

interface StaggeredDropDownProps {
    onAnalyze: () => void;
}

const StaggeredDropDown: React.FC<StaggeredDropDownProps> = ({ onAnalyze }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedUrl, setSelectedUrl] = useState<string>("");

    const handleAnalyze = () => {
        if (selectedUrl) {
            onAnalyze();  // Call the parent's analyze function
        }
    };

    return (
        <div className="w-full flex flex-col bg-white gap-2">
            <div className="flex items-center justify-between gap-2">
                <motion.div animate={open ? "open" : "closed"} className="w-full relative">
                    <button
                        onClick={() => setOpen((pv) => !pv)}
                        className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl text-zinc-400 bg-white border-2 border-[#703BE7] transition-colors"
                    >
                        <span className={`${poppins.className} w-sm flex items-center gap-2 font-medium text-base text-start`}>
                            <HiOutlineLink className="flex-shrink-0" />
                            <span className="truncate flex-1">
                                {selectedUrl || "Pilih Link URL Product"}
                            </span>
                        </span>
                        <motion.span variants={iconVariants} className="text-zinc-800 text-xl">
                            <FiChevronDown />
                        </motion.span>
                    </button>

                    <motion.ul
                        initial={wrapperVariants.closed}
                        variants={wrapperVariants}
                        style={{ originY: "top", translateX: "-50%" }}
                        className="w-full flex flex-col gap-2 p-2 rounded-lg bg-white border border-zinc-200 shadow-lg absolute top-[120%] left-[50%] overflow-hidden z-50"
                    >
                        <Option
                            setOpen={setOpen}
                            setSelectedUrl={setSelectedUrl}
                            imageSrc="/dropdown/emina.png"
                            text="Emina Bright Stuff Moisturizing Cream"
                            link="https://www.tokopedia.com/emina-official/emina-bright-stuff-for-acne-prone-skin-moisturizing-cream-20-ml?extParam=ivf%3Dtrue%26keyword%3Demina+bright+stuff+moisturizing+cream&src=topads"
                        />
                        <Option
                            setOpen={setOpen}
                            setSelectedUrl={setSelectedUrl}
                            imageSrc="/dropdown/wardah.png"
                            text="Wardah UV Shield Sunscreen SPF 50++"
                            link="https://www.tokopedia.com/wardah-official/wardah-uv-shield-sunscreen-all-series-spf-35-spf-50-essential-35-87876?extParam=whid%3D97508&aff_unique_id=&channel=others&chain_key="
                        />
                        <Option
                            setOpen={setOpen}
                            setSelectedUrl={setSelectedUrl}
                            imageSrc="/dropdown/kahf.png"
                            text="Kahf Oil and Acne Care Face Wash"
                            link="https://www.tokopedia.com/kahfofficial/kahf-oil-and-acne-care-face-wash-100-ml-sabun-wajah-pria?src=topads"
                        />
                    </motion.ul>
                </motion.div>

                <button
                    onClick={handleAnalyze}
                    className="text-white text-lg px-6 py-3 bg-[#703BE7] hover:bg-[#6f3be7d8] rounded-xl transition-all cursor-pointer"
                >
                    Analisa
                </button>
            </div>
        </div>
    );
};

const Option: React.FC<OptionProps> = ({ text, link, imageSrc, setOpen, setSelectedUrl }) => {
    const handleClick = () => {
        setSelectedUrl(link);
        setOpen(false);
    };

    return (
        <motion.li
            variants={itemVariants}
            onClick={handleClick}
            className="w-full flex items-center gap-2 p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-zinc-200 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
        >
            <motion.div variants={actionIconVariants} className="w-full flex items-center gap-2">
                <Image
                    src={imageSrc}
                    alt={text}
                    width={800}
                    height={800}
                    className="w-12 h-auto rounded-lg"
                />

                <div className={`${poppins.className} w-0 flex-1 flex flex-col justify-center gap-1`}>
                    <p className="text-sm font-semibold text-zinc-900 line-clamp-1">
                        {text}
                    </p>
                    <p className="line-clamp-1 text-zinc-500">
                        {link}
                    </p>
                </div>
            </motion.div>
        </motion.li>
    );
};

const wrapperVariants = {
    open: {
        scaleY: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    closed: {
        scaleY: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        },
    },
};

const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
};

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
        },
    },
    closed: {
        opacity: 0,
        y: -10,
        transition: {
            when: "afterChildren",
        },
    },
};

const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
};

export default StaggeredDropDown;