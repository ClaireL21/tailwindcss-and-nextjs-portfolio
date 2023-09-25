"use client"
import React from 'react'
import Image from "next/image"
import { Link } from "react-scroll/modules"

const ResumeSection = () => {
    return (
        <section id="resume">
            <h1 className="text-center font-bold text-3xl">
                Resume
            </h1>

            <div className="items-center justify-center flex mt-8 ">
                <Image 
                    className="rounded-sm"
                    src={"/resume2.png"}
                    alt="" 
                    width={700} 
                    height={700}>
                </Image>
            </div>
        </section>
    )
}

export default ResumeSection