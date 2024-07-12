"use client"
import React from 'react'
import Image from "next/image"
import { Link } from "react-scroll/modules"

const AnimationSection = () => {
    return (
        <section id="animation">

            <h1 className="mt-6 text-left font-bold text-2xl">
                Animation
            </h1>

<           div className="mt-8 flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-1/2 text:left">
                    <div className="flex item-center justify-center">
                        <Image 
                            className="rounded-sm"
                            src="/Animation/bubblegum anim.gif"
                            alt="" 
                            width={450} 
                            height={450}>
                        </Image>
                    </div>
                </div>

                <div className="md:w-1/2 text:right">
                    <div className="flex item-center justify-center">
                        <Image 
                            className="rounded-sm"
                            src="/Animation/BIT-trampoline.gif"
                            alt="" 
                            width={310} 
                            height={430}>
                        </Image>
                    </div>
                </div>
            </div>
                
        </section>
    )
}

export default AnimationSection