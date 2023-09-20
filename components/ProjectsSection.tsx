import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare, BsArrowRightSquare } from "react-icons/bs"
import SlideUp from './SlideUp'

// Need a Demo Reel

// Swe
// Queenly stuff - ask Kathy if it's okay to post these things 
    // follow project
    // High res. 3d models (include link to medium blog)
    // general survey component
// FunFoodFinder
// GameJam game

// Graphics
// Mini minecraft
// mini maya
// shader projects
// fireball
const projects = [
    {
        name: "High Resolution 3D Models of Formal Dresses",
        description: 
            "High Resolution 3D Models of Formal Dresses using LIDAR and Photogrammetry",
        image: "/headshot.png",
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "https://53claire.wixsite.com/claire-lu",
    },
    {
        name: "Follow/Following Project",
        description: 
            "Project 1 is an awesome project. you should be jealous of my awesome project",
        image: "/headshot.png",
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "https://53claire.wixsite.com/claire-lu",
    },
    {
        name: "Fun Food Finder",
        description: 
            "Project 1 is an awesome project. you should be jealous of my awesome project",
        image: "/headshot.png",
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "https://53claire.wixsite.com/claire-lu",
    },
    {
        name: "Pinboard iOS Mobile App",
        description: 
            "Project 1 is an awesome project. you should be jealous of my awesome project",
        image: "/headshot.png",
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "https://53claire.wixsite.com/claire-lu",
    },
]

const graphicsProjects = [
    {
        name: "Mini Minecraft: Pandora's Blocks",
        description: 
            "Mini Minecraft: Pandora's Blocks is a final project for CIS 4600/5600",
        image: "/headshot.png",
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "https://53claire.wixsite.com/claire-lu",
    },
    {
        name: "Procedural Flame",
        description: 
            "Project 1 is an awesome project. you should be jealous of my awesome project",
        image: "/headshot.png",
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "https://53claire.wixsite.com/claire-lu",
    },
    {
        name: "Mini Maya",
        description: 
            "Project 1 is an awesome project. you should be jealous of my awesome project",
        image: "/headshot.png",
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "https://53claire.wixsite.com/claire-lu",
    },
    {
        name: "Shader Fun",
        description: 
            "Project 1 is an awesome project. you should be jealous of my awesome project",
        image: "/headshot.png",
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "https://53claire.wixsite.com/claire-lu",
    },
]

const ProjectsSection = () => {
    return (
        <section id="projects">
            <h1 className="text-center font-bold text-3xl">
                Projects
            </h1>

            <h1 className="text-left font-bold text-2xl">
                Graphics Projects
            </h1>
            <div className="min-h-screen flex items-center justify-center"> 
                <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8">
                    {projects.map((project, idx) => {
                        return (
                            <div key={idx}>
                            <SlideUp offset="-100px 0px -100px 0px">
                                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-col md:space-x-4">
                                    <div className="mt-8 ">
                                        <Link href={project.link} target="_blank">
                                            <Image 
                                                className="rounded-xl hover:opacity-70"
                                                src={project.image}
                                                alt="" 
                                                width={1000} 
                                                height={1000}>
                                            </Image>
                                        </Link>
                                    </div>
                                    <div className="mt-8">
                                        <h1 className="text-xl font-bold mb-2">{project.name}</h1>
                                        <p className="leading-7 mb-4 text-neutral-900"> 
                                            {project.description}
                                        </p>
                                        <div className="flex flex-row align-bottom space-x-4">
                                            <Link href={project.github} target="_blank">
                                                <BsGithub
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                            <Link href={project.link} target="_blank">
                                                <BsArrowUpRightSquare
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                        ) 
                    })}
                </div>
            </div>

            <h1 className="mt-10 text-left font-bold text-2xl">
                Tech Projects
            </h1>
            <div className="min-h-screen flex items-center justify-center"> 
                <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8">
                    {projects.map((project, idx) => {
                        return (
                            <div key={idx}>
                            <SlideUp offset="-100px 0px -100px 0px">
                                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-col md:space-x-4">
                                    <div className="mt-8 ">
                                        <Link href={project.link} target="_blank">
                                            <Image 
                                                className="rounded-xl hover:opacity-70"
                                                src={project.image}
                                                alt="" 
                                                width={1000} 
                                                height={1000}>
                                            </Image>
                                        </Link>
                                    </div>
                                    <div className="mt-8">
                                        <h1 className="text-xl font-bold mb-2">{project.name}</h1>
                                        <p className="leading-7 mb-4 text-neutral-900"> 
                                            {project.description}
                                        </p>
                                        <div className="flex flex-row align-bottom space-x-4">
                                            <Link href={project.github} target="_blank">
                                                <BsGithub
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                            <Link href={project.link} target="_blank">
                                                <BsArrowUpRightSquare
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
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

    // return (
    //     <section id="projects">
    //         <h1 className="text-center font-bold text-3xl">
    //             Projects
    //         </h1>
    //         <div className="flex flex-col space-y-28"> 
    //             {projects.map((project, idx) => {
    //                 return (
    //                     <div key={idx}>
    //                         <SlideUp offset="-100px 0px -100px 0px">
    //                             <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
    //                                 <div className="mt-8 md:w-1/2">
    //                                     <Link href={project.link} target="_blank">
    //                                         <Image 
    //                                             className="rounded-xl shadow-xl hover:opacity-70"
    //                                             src={project.image}
    //                                             alt="" 
    //                                             width={1000} 
    //                                             height={1000}>
    //                                         </Image>
    //                                     </Link>
                                        
    //                                 </div>
    //                                 <div className="mt-12 md:w-1/2">
    //                                     <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
    //                                     <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400"> 
    //                                         {project.description}
    //                                     </p>
    //                                     <div className="flex flex-row align-bottom space-x-4">
    //                                         <Link href={project.github} target="_blank">
    //                                             <BsGithub
    //                                                 size={30}
    //                                                 className="hover:-translate-y-1 transition-transform cursor-pointer"
    //                                             />
    //                                         </Link>
    //                                         <Link href={project.link} target="_blank">
    //                                             <BsArrowUpRightSquare
    //                                                 size={30}
    //                                                 className="hover:-translate-y-1 transition-transform cursor-pointer"
    //                                             />
    //                                         </Link>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </SlideUp>
    //                     </div>
    //                 ) 
    //             })}
    //         </div>
    //     </section>
    // )
}

export default ProjectsSection