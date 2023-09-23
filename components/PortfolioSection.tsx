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
        image: "/2DArt/orange.png",
    },
    {
        image: "/2DArt/Maiden Big 2.png",
    },
    {
        image: "/2DArt/Summer Stars.png",
    },
]

const PortfolioSection = () => {
    return (
        <section id="portfolio">
             <h1 className="text-center font-bold text-3xl">
                Portfolio
            </h1>

            <h1 className="mt-6 text-left font-bold text-2xl">
                2D Art
            </h1>

            <div className=""> 
                <div className="md:grid md:grid-cols-2 md:grid-rows-3 md:gap-8">
                    {projects.map((project, idx) => {
                        return (
                            <div key={idx}>
                                <div className="flex flex-col mt-8 animate-slideUpCubiBezier animation-delay-2 md:flex-col md:space-x-4">
                                    <div>
                                        <Image 
                                            className=""
                                            src={project.image}
                                            alt="" 
                                            width={500} 
                                            height={500}>
                                        </Image>
                                    </div>
                                </div>
                        </div>
                        ) 
                    })}
                </div>
            </div>

            <div>hello </div>

                
        </section>
    )
}

export default PortfolioSection