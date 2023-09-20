"use client"
import React from 'react'
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
    return (
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center my-10 px-10 sm:py-10 md:flex-row md:space-x-4 md:text-left md:py-42">
                <div className="md:w-1/2 md:mt-2">
                    <h1 className="font-bold text-3xl mt-6 md:text-5xl md:mt-0">Hi, I'm Claire!</h1>
                    <p className="text-lg mt-4 mb-6 mb-6 md:text-1xl">
                        I'm a junior studying{" "}
                        <a href="http://cg.cis.upenn.edu/dmd.html" className="font-semibold text-yellow-500 hover:text-yellow-600">
                            Digital Media Design (DMD)
                        </a>
                        , an interdisciplinary program between computer 
                        science and visual arts, at the University of Pennsylvania. I'm passionate about 
                        software engineering and computer graphics. {" "}
                        {/* http://cg.cis.upenn.edu/dmd.html */}
                       
                    </p>
                </div>
                <div className="mt-10 md:w-2/5">
                    <Image className="rounded-full" src="/headshot.png" alt="" width={400} height={400}/>
                </div>
            </div>

            <div className="flex flex-row justify-center">
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <HiArrowDown size={35} className="animate-bounce"/>
                </Link>
            </div>
        </section>
    )
}

export default HeroSection