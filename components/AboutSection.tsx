import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Link as ScrollLink } from "react-scroll/modules"

const skills = [
    { skill: "Swift"},
    { skill: "Objective-C"},
    { skill: "Xcode"},
    { skill: "Java"},
    { skill: "C++"},
    { skill: "Python"},
    { skill: "React"},
    { skill: "Next.js"},
    { skill: "Tailwind CSS"},
    { skill: "Git"},
    { skill: "Github"},
]

const cloudTechnologies = [
    { skill: "Firebase"},
    { skill: "MongoDB"},
]

const versionControl = [
    { skill: "Github"},
]

// relevant courses section ?? 

const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-20">
                <h1 className="md:text-left p-4 text-center font-bold text-3xl">
                    Demo Reel
                </h1>
                <div className="mt-8">
                    <div className="h-[500px] w-auto aspect-w-16 aspect-h-9">
                        <iframe src="https://www.youtube.com/embed/Ica-MqUs8B4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </div>

                <br/>

                <h1 className="mt-8 md:text-left p-4 text-center font-bold text-3xl">
                    About Me
                </h1>

                <div className="space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-10 md:space-x-10">
                    <div> 
                        <p>
                            As a DMD major, I've been exploring{" "}
                            <span className="font-bold">{"graphics programming"}</span>,
                            and I'm currently learning about{" "} 
                            <span className="font-bold">{"proceduralism"}</span>{" "}
                            and{" "} 
                            <span className="font-bold">{"computer animation"}</span>
                            {" "}techniques.
                            I also really enjoy experimenting with the art side of graphics,
                            like modeling 3D environments and playing around with VR. At Penn, I'm a teaching assistant for CIS 1600 and a writing tutor for 
                            the Marks Family Writing Center.
                        </p>
                        <br />
                        <p>
                            I'm also interested in software engineering. Over the summer, I worked as an 
                            iOS Software Engineer at Queenly, a marketplace for formalwear dresses. 
                            I built A/B features and implemented redesigns. For my final project, I produced 3D dress renders 
                            using photogrammetry, integrated them throughout the app, and experimented with loading in dresses in AR scenes. 

                            {/* I managed the end-to-end project scope for my final project, full iOS end-user experience
                            Learned how to load models against a user’s body as a basis for an augmented reality try-on feature */}
                        </p>
                        <br />
                        <p>
                            In my free time, I enjoy figure skating, swing dancing, drawing on my tablet, making comics, 
                            and having fun with friends!
                        </p>
                        {/* <br />
                        <p>
                            Feel free to reach out to me at : 
                            
                        </p> */}
                    </div>
                    <div className='items-stretch justify-center flex flex-row space-x-4 md:space-x-40'>
                        <Link
                            href="projects"
                            className="text-neutral-900 font-semibold px-3 py-3 hover:-translate-y-2 hover:text-yellow-600"
                            >
                                Projects
                                <hr className="w-8 h-1 mx-auto my-2 bg-yellow-500 border-0 rounded"></hr>
                        </Link>

                        <Link
                            href="/resume"
                            className="text-neutral-900 font-semibold px-3 py-3 hover:-translate-y-2 hover:text-yellow-600"
                            >
                                Resume
                                <hr className="w-8 h-1 mx-auto my-2 bg-yellow-500 border-0 rounded"></hr>
                        </Link>

                        {/* <Link
                            href="projects"
                            className="text-neutral-900 font-semibold px-3 py-3 hover:-translate-y-2 hover:text-yellow-600"
                            >
                                Demo Reel
                                <hr className="w-8 h-1 mx-auto my-2 bg-yellow-500 border-0 rounded"></hr>
                        </Link> */}
                    </div>
                    {/* <div className="md:w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            My Skills
                        </h1>
                        <div className="flex flex-wrap flex-row justify-center md:justify-start"> 
                            {skills.map((item, idx) => {
                                return <p key={idx}
                                className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                >
                                    {item.skill}
                                </p>
                            })}
                        </div>
                        <Image 
                            className="hidden md:block md:relative md:top-4 md:bottom-4 md:left-32 md:z-0"
                            src="/headshot.png" 
                            alt="" 
                            width={300} 
                            height={300}>
                        </Image>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default AboutSection