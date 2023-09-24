"use client"
import React from 'react'
import Image from "next/image"
import { Link } from "react-scroll/modules"

const projects = [
    {
        image: "/2DArt/Blink Digital Work.jpg",
    },
    {
        image: "/2DArt/Bittersweet.png",
    },
    {
        image: "/2DArt/Fairies.png",
    },
    {
        image: "/2DArt/Fairies.png",
    },
    {
        image: "/2DArt/Maiden Big 2.png",
    },
    {
        image: "/2DArt/Summer Stars.png",
    },
]

const gridProj = [
    {
        first: "/2DArt/Summer Begins.png",
        sec: "/2DArt/clouds 2.png"
    },
    {
        first: "/2DArt/Maiden Big 2.png",
        sec: "/2DArt/Summer Stars.png"
    },
    {
        first: "/2DArt/Blink Digital Work.jpg",
        sec: "/2DArt/Bittersweet.png"
    },

]

const TwoDArtSection = () => {
    return (
        <section id="2dart">
            <h1 className="mt-6 text-left font-bold text-2xl">
                2D Art
            </h1>

            <div className="mt-8">
                <div className="flex item-center justify-center">
                    <Image 
                        className=""
                        src={"/2DArt/dreamland copy 2.1.png"}
                        alt="" 
                        width={1000} 
                        height={1000}>
                    </Image>
                </div>
            </div>

            {gridProj.map((project, idx) => {
                return (
                    <div key={idx}>
                        <div className="flex flex-col mt-8 animate-slideUpCubiBezier animation-delay-2 md:flex-col md:space-x-4">
                            <div>
                            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                                <div className="md:w-1/2 text:left">
                                    <div className="flex item-center justify-center">
                                        <Image 
                                            className=""
                                            src={project.first}
                                            alt="" 
                                            width={500} 
                                            height={500}>
                                        </Image>
                                    </div>
                                </div>

                                <div className="md:w-1/2 text:right">
                                    <div className="flex item-center justify-center">
                                        <Image 
                                            className=""
                                            src={project.sec}
                                            alt="" 
                                            width={500} 
                                            height={500}>
                                        </Image>
                                        {/* <video loop autoPlay muted className="h-[300px] w-auto">
                                            <source src="/Minecraft/MC multithreading 2.mp4" />
                                        </video> */}
                                    </div>
                                </div>
                            </div>
                                
                            </div>
                        </div>
                </div>
                ) 
            })}

            <div className="mt-8">
                <div className="flex item-center justify-center">
                    <Image 
                        className=""
                        src={"/2DArt/Bare.png"}
                        alt="" 
                        width={1000} 
                        height={1000}>
                    </Image>
                </div>
            </div>

            <div className="mt-8 flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-1/2 text:left">
                    <div className="flex item-center justify-center">
                        <Image 
                            className=""
                            src={"/2DArt/Fairies.png"}
                            alt="" 
                            width={500} 
                            height={500}>
                        </Image>
                    </div>
                </div>

                <div className="md:w-1/2 text:right">
                    <div className="flex item-center justify-center">
                        <Image 
                            className=""
                            src={"/2DArt/Oblivious.jpg"}
                            alt="" 
                            width={500} 
                            height={500}>
                        </Image>
                        {/* <video loop autoPlay muted className="h-[300px] w-auto">
                            <source src="/Minecraft/MC multithreading 2.mp4" />
                        </video> */}
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <div className="flex item-center justify-center">
                    <Image 
                        className=""
                        src={"/2DArt/old town.png"}
                        alt="" 
                        width={1000} 
                        height={1000}>
                    </Image>
                </div>
            </div>

            <div className="mt-8 flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-1/2 text:left">
                    <div className="flex item-center justify-center">
                        <Image 
                            className=""
                            src={"/2DArt/Two Drawing.png"}
                            alt="" 
                            width={500} 
                            height={500}>
                        </Image>
                    </div>
                </div>

                <div className="md:w-1/2 text:right">
                    <div className="flex item-center justify-center">
                        <Image 
                            className=""
                            src={"/2DArt/selfp.jpg"}
                            alt="" 
                            width={500} 
                            height={500}>
                        </Image>
                        {/* <video loop autoPlay muted className="h-[300px] w-auto">
                            <source src="/Minecraft/MC multithreading 2.mp4" />
                        </video> */}
                    </div>
                </div>
            </div>


            

                
        </section>
    )
}

export default TwoDArtSection