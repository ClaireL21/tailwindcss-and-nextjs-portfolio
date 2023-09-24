"use client"
import React from 'react'
import Image from "next/image"
import { Link } from "react-scroll/modules"

const gridProj = [
    {
        first: "/Comics/Oofy-Hamster Wheel-1.png",
        sec: "/Comics/Oofy-Hamster Wheel-2.png"
    },
    {
        first: "/Comics/Oofy-Hamster Wheel-3.png",
        sec: "/Comics/Oofy-Hamster Wheel-4.png"
    },
    {
        first: "/Comics/Oofy-Hamster Wheel-5.png",
        sec: "/Comics/Oofy-Hamster Wheel-6.png"
    },

]

const ComicsSection = () => {
    return (
        <section id="comics">

            <h1 className="mt-6 text-left font-bold text-2xl">
                Comics
            </h1>

            <div className="mt-8">
                <div className="flex item-center justify-center">
                    <Image 
                        className=""
                        src={"/Comics/Oofy-Reference Drawings.jpg"}
                        alt="" 
                        width={1000} 
                        height={1000}>
                    </Image>
                </div>
            </div>

            {gridProj.map((project, idx) => {
                return (
                    <div key={idx}>
                        <div className="flex flex-col mt-4 animate-slideUpCubiBezier animation-delay-2 md:flex-col md:space-x-2">
                            <div>
                            <div className="flex flex-col space-y-8 items-stretch justify-center align-top md:space-x-4 md:space-y-0 md:p-4 md:flex-row md:text-left">
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

<div className="mt-8 flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-1/2 text:left">
                    <div className="flex item-center justify-center">
                        <Image 
                            className=""
                            src={"/Comics/One of You Series thumbnail.png"}
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
                            src={"/Comics/Caffeine Design 2.png"}
                            alt="" 
                            width={500} 
                            height={500}>
                        </Image>
                    </div>
                </div>
            </div>

            

            <div className="mt-8 flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-1/2 text:left">
                    <div className="flex item-center justify-center">
                        <Image 
                            className=""
                            src={"/Comics/Webcomic Character Poses.jpg"}
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
                            src={"/Comics/CHOMP for Kevin 2.png"}
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

export default ComicsSection