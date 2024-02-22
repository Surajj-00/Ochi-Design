import { motion } from 'framer-motion';
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

function LandingPage() {
    return (
        <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1 '>
            <div className='textstructure mt-48 px-14'>
                {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
                    return (
                        <div className='masker'>
                            <div className="w-fit flex items-end">
                                {index === 1 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "9vw" }}
                                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                        className="mr-[1vw] w-[9vw] h-[5vw] -top-[.3vw] relative">
                                        <img className='rounded-md'
                                        src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                                    </motion.div>
                                )}
                                <h1 className="uppercase text-[6.5vw] leading-[6vw] tracking-tighter font-['Founders_Grotesk_X-Cond_SmBd, Roboto, sans-serif'] font-semibold"> {item} </h1>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="border-t-[1px] border-zinc-800 mt-28 flex justify-between items-center py-5 px-20">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p className="text-md font-light tracking-tight leading-none">{item}</p>
                ))}

                <div className="start flex items-center gap-2">
                    <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-sm rounded-full">
                        START THE PROJECT
                    </div>
                    <div className="px-2 py-2 border-[1px] border-zinc-500  font-light text-sm flex items-center rounded-full">
                        <FiArrowUpRight />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LandingPage;
