"use client"
import React from 'react'
import Image from "next/image"
import { Link } from "react-scroll/modules"

const AnimationSection = () => {
    return (
        <section id="comics">

            <h1 className="mt-6 text-left font-bold text-2xl">
                Animation
            </h1>

<           div className="mt-8 flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-1/2 text:left">
                    <div className="flex item-center justify-center">
                        <video loop autoPlay muted className="h-[500px] w-auto">
                            <source src="/Animation/Bubblegum Animation Movie.mp4" />
                        </video>
                    </div>
                </div>

                <div className="md:w-1/2 text:right">
                    <div className="flex item-center justify-center">
                    <video loop autoPlay muted className="h-[500px] w-auto">
                            <source src="/Animation/bear clean.mp4" />
                        </video>
                    </div>
                </div>
            </div>
                
        </section>
    )
}

export default AnimationSection