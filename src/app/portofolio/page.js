
"use client";

import { motion } from "framer-motion";
import "../globals.css"
import Image from "next/image";

export default function Portofolio() {

    const footballImages = [
        { src: "/16.jpeg", width: "w-[100%]", aspect: "aspect-video", mt: "mt-90" },
        { src: "/6.jpeg", width: "w-[80%]", aspect: "aspect-video", mt: "mt-0" },
        { src: "/14.jpeg", width: "w-[50%]", aspect: "aspect-[4/5]", mt: "mt-0" },
        { src: "/17.jpeg", width: "w-[70%]", aspect: "aspect-video", mt: "mt-0" },
        { src: "/13.jpeg", width: "w-[65%]", aspect: "aspect-square", mt: "mt-0" },
        { src: "/15.jpeg", width: "w-[90%]", aspect: "aspect-video", mt: "mt-0" },
        { src: "/5.jpeg", width: "w-[65%]", aspect: "aspect-video", mt: "mt-0" },
        { src: "/3.jpeg", width: "w-[55%]", aspect: "aspect-square", mt: "mt-0" },
    ];

    const natureImages = [
        { src: "/11.jpeg", width: "w-[100%]", aspect: "aspect-video", mt: "mt-90" },
        { src: "/12.jpeg", width: "w-[80%]", aspect: "aspect-video", mt: "mt-0" },
        { src: "/9.jpeg", width: "w-[70%]", aspect: "aspect-video", mt: "mt-0" },
        { src: "/8.jpeg", width: "w-[50%]", aspect: "aspect-[4/5]", mt: "mt-0" },
        { src: "/7.jpeg", width: "w-[65%]", aspect: "aspect-square", mt: "mt-0" },
        { src: "/10.jpeg", width: "w-[90%]", aspect: "aspect-video", mt: "mt-0" },
    ];

    return (
        <main>
            {/* Section 1 */}
            <section className="relative min-h-screen">

                {/* Content */}
                <div className="absolute flex flex-col justify-center items-center inset-0 top-1/6">
                    {/* Watermark */}
                    <div className="-mb-15">
                        <p className="font-medium text-[300px]">VENZZY</p>
                    </div>

                    <div className="flex flex-row justify-between px-20 min-w-screen items-start">
                        {/* Text content */}
                        <div className="flex flex-col gap-3 justify-center items-start max-w-96 text-start">
                            <p className="font-medium text-[20px]">Personal Galery</p>
                            <p className="font-normal font-geist text-wrap text-base/7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>

                        {/* Image content */}
                        <div className="aspect-video w-150 bg-[url('/13.jpeg')] bg-center bg-cover"></div>
                    </div>
                </div>

                {/* Bottom content */}
                <div className="absolute inset-0 flex items-end justify-center pb-8">
                    <div className="flex flex-row justify-between w-full px-15 items-end">
                        <div className="flex flex-row gap-5">
                            <div className="scale-200 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 20l6-6m-6 6l-6-6m6 6V9.5M12 4v2.5" />
                                </svg>
                            </div>

                            <p className="text-[20px] font-normal">Scroll to Explore</p>
                        </div>
                    </div>
                </div>

            </section>


            {/* Section 2 */}
            <section className="relative flex min-h-screen">
                {/* Left image */}
                <div className="w-1/2">
                    <div className="space-y-15 p-10">

                        {footballImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className={`${image.width} ${image.aspect} ${image.mt} mx-auto z-50 relative`}
                                initial={{
                                opacity: 0,
                                y: 80,
                                scale: 0.9,
                                }}
                                whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                }}
                                transition={{
                                duration: 0.3,
                                delay: index * 0.04,
                                }}
                                viewport={{
                                once: false,
                                amount: 0.2,
                                }}
                            >
                                <img
                                src={image.src}
                                alt=""
                                className="w-full h-full object-cover"
                                />
                            </motion.div>
                        ))}

                    </div>
                </div>

                {/* Right text */}
                <div className="w-1/2 relative">
                    <div className="sticky top-0 h-screen flex items-center p-10 pt-96">
                        <div className="flex flex-col gap-3 justify-center items-start text-start">
                            <p className="font-medium text-[20px]">Waanal Brother Football Club</p>
                            <p className="font-normal font-geist text-wrap text-base/7 max-w-96">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <div className=" flex flex-row gap-10 text-nowrap">
                                <div className="flex flex-col">
                                    <p className="font-normal font-geist text-wrap text-base/8 text-[15px] tracking-wide"><span className="opacity-45 mr-3">Client </span>Waanal Brother Football Club</p>
                                    <p className="font-normal font-geist text-wrap text-base/8 text-[15px] tracking-wide"><span className="opacity-45 mr-3">Photography </span>Gabriel Bintang Rahmadani</p>
                                </div>
                                <p className="font-normal font-geist text-wrap text-base/8 text-[15px] tracking-wide"><span className="opacity-45 mr-3">Year</span>2025-2026</p>
                            </div>
                        </div>

                        {/* Watermark */}
                        <div className="absolute top-30 right-10">
                            <p className="font-medium text-[300px] z-0">VENZZY</p>
                        </div>
                    </div>
                </div>

            </section>


            {/* Section 3 */}
            <section className="relative flex min-h-screen">
                {/* Left image */}
                <div className="w-1/2">
                    <div className="space-y-15 p-10">

                        {natureImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className={`${image.width} ${image.aspect} ${image.mt} mx-auto z-50 relative`}
                                initial={{
                                opacity: 0,
                                y: 80,
                                scale: 0.9,
                                }}
                                whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                }}
                                transition={{
                                duration: 0.3,
                                delay: index * 0.04,
                                }}
                                viewport={{
                                once: false,
                                amount: 0.2,
                                }}
                            >
                                <img
                                src={image.src}
                                alt=""
                                className="w-full h-full object-cover"
                                />
                            </motion.div>
                        ))}

                    </div>
                </div>

                {/* Right text */}
                <div className="w-1/2 relative">
                    <div className="sticky top-0 h-screen flex items-center p-10 pt-96">
                        <div className="flex flex-col gap-3 justify-center items-start text-start">
                            <p className="font-medium text-[20px]">Nature Collection</p>
                            <p className="font-normal font-geist text-wrap text-base/7 max-w-96">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>

                        {/* Watermark */}
                        <div className="absolute top-30 right-10">
                            <p className="font-medium text-[300px] z-0">VENZZY</p>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}