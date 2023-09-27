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

const combinedProjects = [
    {
        name: "Mini Minecraft: Pandora's Blocks",
        description: 
            "An Avatar inspired mini version of minecraft! A group final project for CIS 4600/5600.", 
        image: "/Minecraft/mcthumbnail.jpg",
        github: "",
        link: "/projects/miniMinecraft",
        tags: [
            { skill: "C++"},
            { skill: "GLSL"},
            { skill: "Qt"},
        ]
    },
    {
        name: "High Resolution 3D Models of Formal Dresses",
        description: 
            "Used LIDAR & Photogrammetry as methods of 3D scanning " +
            "and integrated dress renders into the Queenly iOS app.",
        image: "/HighResDress/Cover.png",
        github: "",
        link: "/projects/highResDress",
        tags: [
            { skill: "Swift"},
            { skill: "Objective-C"},
            { skill: "Xcode"},
        ]
    },
    {
        name: "Micro Maya",
        description: 
            "A mini version of the 3D modeling software Maya. " + 
            "Uses a half edge data structure and implements basic 3D mesh operations, like deforming meshes and splitting faces" + 
            ". Supports smoothing using Catmull-Clark subdivision and skinning so that a skeleton can be used to modify meshes.",
        image: "/MicroMayaDemos/Cow Thumb.png",
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "/projects/microMaya",
        tags: [
            { skill: "C++"},
            { skill: "GLSL"},
            { skill: "Qt"},
        ]
    },
    {
        name: "Follow/Following Project",
        description: 
            "A Queenly internship project involving implementing the Follow/Following" +
            " feature for the iOS app.",
        image: "/FollowProj/Projects.png",
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "/projects/followProject",
        tags: [
            { skill: "Swift"},
            { skill: "Objective-C"},
            { skill: "Xcode"},
        ]
    },
    {
        name: "Flicker 2D Platform Game",
        description: 
            "A spooky 2D platform game, created in a 24-hr Game Jam.",
        image: "/Flicker/thumb.jpg",
        github: "",
        link: "/projects/flickerProject",
        tags: [
            { skill: "Unity"},
            { skill: "C#"},
            { skill: "Clip Studio Paint"},
            { skill: "Procreate"},
        ]
    },
    {
        name: "Procedural Flame Character",
        description: 
            "A procedurally generated flame character, made in CIS 5660.",
        image: "/FlameImages/thumb2.png",
        github: "",
        link: "/projects/procedFlame",
        tags: [
            { skill: "Typescript"},
            { skill: "GLSL"},
        ]
    },
    {
        name: "Fun Food Finder",
        description: 
            "A web-scraping food app that locates recipes based on user-entered filters",
        image: "/FunFood/thumbfff.png",
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "/projects/funFood",
        tags: [
            { skill: "Java"},
            { skill: "Web scraping"},
            { skill: "Jsoup"},
        ]
    },
    {
        name: "Shader Fun",
        description: 
            "A collection of surface and post-processing shaders applied on a 3D mesh of Mario.",
        image: "/ShaderFunMario/mario4.png",
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "/projects/shaderFun",
        tags: [
            { skill: "C++"},
            { skill: "GLSL"},
            { skill: "Qt"},
        ]
    },
    {
        name: "Pinboard iOS Mobile App",
        description: 
            "Pinboard is a social app for high school communities where students can post information about school events & clubs",
        image: "/Pinboard/square.png",
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "/projects/pinboardProject",
        tags: [
            { skill: "Swift"},
            { skill: "Xcode"},
        ]
    },
]

const graphicsProjects = [
    {
        name: "Mini Minecraft: Pandora's Blocks",
        description: 
            "An Avatar inspired mini version of minecraft! A group final project for CIS 4600/5600.", 
        image: "/Minecraft/mcthumbnail.jpg",
        github: "",
        link: "/projects/miniMinecraft",
        tags: [
            { skill: "C++"},
            { skill: "GLSL"},
            { skill: "Qt"},
        ]
    },
    {
        name: "Micro Maya",
        description: 
            "A mini version of the 3D modeling software Maya. " + 
            "Uses a half edge data structure and implements basic 3D mesh operations, like deforming meshes and splitting faces" + 
            ". Supports smoothing using Catmull-Clark subdivision and skinning so that a skeleton can be used to modify meshes.",
        image: "/MicroMayaDemos/Cow Thumb.png",
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "/projects/microMaya",
        tags: [
            { skill: "C++"},
            { skill: "GLSL"},
            { skill: "Qt"},
        ]
    },
    {
        name: "Procedural Flame Character",
        description: 
            "A procedurally generated flame character, made in CIS 5660.",
        image: "/FlameImages/thumb2.png",
        github: "",
        link: "/projects/procedFlame",
        tags: [
            { skill: "Typescript"},
            { skill: "GLSL"},
        ]
    },
    {
        name: "Shader Fun",
        description: 
            "A collection of surface and post-processing shaders applied on a 3D mesh of Mario.",
        image: "/ShaderFunMario/mario4.png",
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "/projects/shaderFun",
        tags: [
            { skill: "C++"},
            { skill: "GLSL"},
            { skill: "Qt"},
        ]
    },
]

const artProjects = [
    {
        name: "Underwater Retro Diner Environment",
        description: 
            "An environment.", 
        image: "/3dArt/dinerthumb.jpg",
        github: "",
        link: "/projects/dinerArt",
        tags: [
            { skill: "Maya"},
            { skill: "Photoshop"},
        ]
    },
    {
        name: "Gertrude",
        description: 
            "A character model of Gertrude, from Skottie Young's I Hate Fairyland",
        image: "/3dArt/gertrude.jpg",
        github:"",
        link: "/projects/gertrudeArt",
        tags: [
            { skill: "Maya"},
        ]
    },
    {
        name: "Noodle",
        description: 
            "A character model based on the 2D art of Noodle from the Gorillaz band.", 
        image: "/3dArt/nsthumb.jpg",
        github: "",
        link: "/projects/noodleArt",
        tags: [
            { skill: "Maya"},
            { skill: "ZBrush"},
        ]
    },
    {
        name: "Chili Lights Restaurant",
        description: 
            "A mini version of the 3D modeling software Maya. ",
        image: "/3dArt/restthumb.jpg",
        github: "",
        link: "/projects/chiliArt",
        tags: [
            { skill: "Maya"},
        ]
    },
]

const projects = [
    {
        name: "High Resolution 3D Models of Formal Dresses",
        description: 
            "Used LIDAR & Photogrammetry as methods of 3D scanning " +
            "and integrated dress renders into the Queenly iOS app.",
        image: "/HighResDress/Cover.png",
        github: "",
        link: "/projects/highResDress",
        tags: [
            { skill: "Swift"},
            { skill: "Objective-C"},
            { skill: "Xcode"},
        ]
    },
    {
        name: "Follow/Following Project",
        description: 
            "A Queenly internship project involving implementing the Follow/Following" +
            " feature for the iOS app.",
        image: "/FollowProj/Projects.png",
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "/projects/followProject",
        tags: [
            { skill: "Swift"},
            { skill: "Objective-C"},
            { skill: "Xcode"},
        ]
    },
    {
        name: "Pinboard iOS Mobile App",
        description: 
            "Pinboard is a social app for high school communities where students can post information about school events & clubs",
        image: "/Pinboard/square.png",
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "/projects/pinboardProject",
        tags: [
            { skill: "Swift"},
            { skill: "Xcode"},
        ]
    },
    {
        name: "Fun Food Finder",
        description: 
            "A web-scraping food app that locates recipes based on user-entered filters",
        image: "/FunFood/thumbfff.png",
        github: "https://github.com/ClaireL21/tailwindcss-and-nextjs-portfolio/tree/starter",
        link: "/projects/funFood",
        tags: [
            { skill: "Java"},
            { skill: "Web scraping"},
            { skill: "Jsoup"},
        ]
    },
    {
        name: "Flicker 2D Platform Game",
        description: 
            "A spooky 2D platform game, created in a 24-hr Game Jam.",
        image: "/Flicker/thumb.jpg",
        github: "",
        link: "/projects/flickerProject",
        tags: [
            { skill: "Unity"},
            { skill: "C#"},
            { skill: "Clip Studio Paint"},
            { skill: "Procreate"},
        ]
    },
]

const ProjectsSection = () => {
    const mergeProjs = true

    if (mergeProjs) {
        return (
            <section id="projects">
                <h1 className="text-center font-bold text-3xl">
                    Projects
                </h1>
    
                <h1 className="text-left font-bold text-2xl">
                    Tech / Graphics Projects
                </h1>
                <div className="min-h-screen flex items-center justify-center"> 
                    <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8">
                        {combinedProjects.map((project, idx) => {
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
    
                <br/>
    
                <h1 className="mt-8 text-left font-bold text-2xl">
                    3D Art Projects
                </h1>
    
                <div className="min-h-screen flex items-center justify-center"> 
                    <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8">
                        {artProjects.map((project, idx) => {
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
                                                            className="bg-yellow-200 text-neutral-900 px-4 py-1 mt-2 rounded-lg font-semibold"
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
    } else {
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
                        {graphicsProjects.map((project, idx) => {
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
                                                {/* <Link href={project.github} target="_blank">
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
                                                </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </SlideUp>
                            </div>
                            ) 
                        })}
                    </div>
                </div>
    
                <br/>
                <h1 className="mt-4 text-left font-bold text-2xl">
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
                                        <div className="mt-8 ">
                                            <h1 className="text-xl font-bold mb-2 underline hover:text-yellow-600">
                                                <Link href={project.link} target="_blank">
                                                    {project.name}
                                                </Link></h1>
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
    
                <br/>
    
                <h1 className="mt-8 text-left font-bold text-2xl">
                    3D Art Projects
                </h1>
    
                <div className="min-h-screen flex items-center justify-center"> 
                    <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8">
                        {artProjects.map((project, idx) => {
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
                                                            className="bg-yellow-200 text-neutral-900 px-4 py-1 mt-2 rounded-lg font-semibold"
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
    
}

export default ProjectsSection