// "use client"
// import React from 'react'
// import Image from "next/image"
// import { Link } from "react-scroll/modules"

// const ForFunSection = () => {
//     return (
//         <section id="forfun">
//             <div className="">
//                 For Fun - This is for fun
//             </div>
//         </section>
//     )
// }
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import SlideUp from './SlideUp'

const designProjs = [
    {
        name: "Path@Penn Redesign",
        description: 
            "Redesigning the Path@Penn website project for the class DSGN 2570: UX/UI", 
        image: "/PathAtPenn/Path_thumb.png",
        github: "",
        link: "/design/pathAtPenn",
        tags: [
            { skill: "Figma"},
        ]
    },
    {
        name: "3D Model Feature Design",
        description: 
            "Designed the 3D model feature for the iOS mobile formalwear app Queenly.",
        image: "/HighResDress/Cover.png",
        github: "",
        link: "/projects/highResDress",
        tags: [
            { skill: "Figma"},
        ]
    },
]

const ForFunSection = () => {
    return (
        <section id="design">

            <h1 className="mt-6 text-center font-bold text-3xl">
                ForFun
            </h1>

            <h1 className="text-left font-bold text-2xl">
                UI/UX
            </h1>
            <div className="min-h-screen flex items-center justify-center"> 
                <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:gap-8">
                    {designProjs.map((project, idx) => {
                        return (
                            <div key={idx}>
                            <SlideUp offset="-100px 0px -100px 0px">
                                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-col md:space-x-4">
                                    <div className="mt-10">
                                        <Link href={project.link} target="_blank">
                                            <Image 
                                                className="rounded-xl hover:opacity-70"
                                                src={project.image}
                                                alt="" 
                                                width={1000} 
                                                height={100}>
                                            </Image>
                                        </Link>
                                    </div>
                                    <div className="mt-8">
                                        <h1 className="text-xl underline hover:text-yellow-600 font-bold mb-2">
                                            <Link href={project.link} target="_blank">
                                                {project.name}
                                            </Link>
                                        </h1>

                                        <p className="leading-7 mb-4"> 
                                            {project.description}
                                        </p>
                                        <div className="flex flex-row align-bottom space-x-4">
                                            {project.tags.map((item, idx) => {
                                                return (
                                                    <p key={idx}
                                                        className="bg-yellow-200 px-4 py-1 mt-2 text-neutral-900 rounded-lg font-semibold"
                                                        >
                                                        {item.skill}
                                                    </p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                        ) 
                    })}
                </div>
            </div>
        </section>
    )
}

// export default DesignSection
export default ForFunSection