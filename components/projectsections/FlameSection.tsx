//https://clairel21.github.io/hw01-fireball/

// https://github.com/ClaireL21/hw01-fireball

"use client"
import React from 'react'
import Image from "next/image"
//import { Link } from "react-scroll/modules"
import { BsGithub, BsArrowUpRightSquare, BsArrowRightSquare } from "react-icons/bs"
import Link from "next/link"


const tags = [
    { skill: "Typescript"},
    { skill: "GLSL"},
]

const images = [
    { image: "/FlameImages/flame var 1.png"},
    { image: "/FlameImages/flame var 6.png"},
    { image: "/FlameImages/flame var 3.png"},
    { image: "/FlameImages/flame var 2.png"},
    { image: "/FlameImages/flame var 4.png"},
    { image: "/FlameImages/flame var 5.png"},
]

const FlameSection = () => {
    return (
        <section id="flame">
            <h1 className="text-center font-bold text-3xl">
                Procedural Flame Character
            </h1>

            <div className="items-center justify-center flex mt-8">
                <Image 
                    className=""
                    src="/FlameImages/flame loop.gif"
                    alt="" 
                    width={500} 
                    height={500}>
                </Image>
            </div>

            <h1 className="mt-8 text-left font-bold text-2xl">
                Overview
            </h1>

            <div className="mt-2">
                This {" "}
                <span>
                    <a href="https://clairel21.github.io/hw01-fireball/" rel="noreferrer" target="_blank"
                        className="font-semibold text-yellow-500 hover:text-yellow-600">
                        project
                    </a>
                </span>
                {" "} was a task in CIS 5660, where we were assigned to procedurally deform a sphere
                to create some sort of fireball. I chose to create a 
                fireball character, with a flickering flame for a head.
            </div>

            <br/>

            <div>
                I used fbm and worley noise to create the shape of the flame, and 
                stretched the flame upwards by scaling the y position of the vertex positions. 
                I also used a sawtooth noise function to make the flames flicker more drastically 
                and used an ease in function to smooth out the motion of the flames. 
            </div>

            <br/>

            <div>
                To emphasize the flickering at the tail, I used a bias function so 
                more flickering would happen higher up on the mesh, and then to vary the flickering, 
                I used a power curve function so the motion of the flickering would appear more flame-like.
            </div>


            <div className="mt-4 flex flex-row align-bottom space-x-4">
                {tags.map((item, idx) => {
                    return (
                        <p key={idx}
                            className="bg-yellow-200 px-4 py-1 mt-2 text-neutral-900 rounded-lg font-semibold"
                            >
                            {item.skill}
                        </p>
                    )
                })}
                <Link href={"https://github.com/ClaireL21/hw01-fireball"} target="_blank">
                    <BsGithub
                        size={30}
                        className="mt-2 hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                </Link>
            </div>

            <br/>

            <div>
                Feel free to check out the{" "}
                <span>
                    <a href="https://clairel21.github.io/hw01-fireball/" rel="noreferrer" target="_blank"
                        className="font-semibold text-yellow-500 hover:text-yellow-600">
                        live demo
                    </a>
                </span>
                {" "}
                - you can change the color, speed, and tesselations of the fireball character!

                And below are some screenshots of what the different tesselations look like, as well as some variations
                of the fireball characters.
            </div>

            <div className="min-h-screen flex items-center justify-center"> 
                <div className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-8">
                    {images.map((item, idx) => {
                        return (
                        <div key={idx}>
                            <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-col md:space-x-4">
                                <div className="mt-8 ">
                                    <Image 
                                        className="rounded-sm"
                                        src={item.image}
                                        alt="" 
                                        width={1000} 
                                        height={1000}>
                                    </Image>
                                </div>
                            </div>
                        </div>
                        ) 
                    })}
                </div>
            </div>
        </section>
    )
}

export default FlameSection