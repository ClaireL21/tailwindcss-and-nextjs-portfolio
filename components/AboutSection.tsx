import React from 'react'
import Image from 'next/image'

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
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="md:text-left p-4 text-center font-bold text-3xl">
                    About Me
                    {/* <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr> flex-col */}
                </h1>
                <div className=" space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
                    <div> {/*className="md:w-4/5"*/}
                        {/* <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            Get to know me!
                        </h1> */}
                        <p> 
                            {" "}
                            Hi, my name is Hosna and I am a{" "}
                            <span className="font-bold">{"highly ambitions"}</span>,
                            <span className="font-bold">{" self motivated"}</span>, and
                            <span className="font-bold">{" driven"}</span>, software engineer
                            based in Los Angeles, CA.
                        </p>
                        <br />
                        <p>
                            I have a wide range of hobbies and passions that keep me busy.
                            I have a wide range of hobbies and passions that keep me busy.
                            I have a wide range of hobbies and passions that keep me busy.
                            I have a wide range of hobbies and passions that keep me busy.
                        </p>
                        <br />
                        <p>
                            I have a wide range of hobbies and passions that keep me busy.
                            I have a wide range of hobbies and passions that keep me busy.
                            I have a wide range of hobbies and passions that keep me busy.
                            I have a wide range of hobbies and passions that keep me busy.
                        </p>
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