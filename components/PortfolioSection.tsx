"use client"
import React from 'react'
import Image from "next/image"
import { Link } from "react-scroll/modules"
import ComicsSection from "@/components/ComicsSection"
import TwoDArtSection from './TwoDArtSection'
import AnimationSection from './AnimationSection'

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
        image: "/2DArt/Fairies.png",
    },
    {
        image: "/2DArt/Maiden Big 2.png",
    },
    {
        image: "/2DArt/Summer Stars.png",
    },
]

const gridProj = [
    {
        first: "/2DArt/Summer Begins.png",
        sec: "/2DArt/clouds 2.png"
    },
    {
        first: "/2DArt/Maiden Big 2.png",
        sec: "/2DArt/Summer Stars.png"
    },
    {
        first: "/2DArt/Blink Digital Work.jpg",
        sec: "/2DArt/Bittersweet.png"
    },

]

const PortfolioSection = () => {
    return (
        <section id="portfolio">
             <h1 className="text-center font-bold text-3xl">
                Portfolio
            </h1>
            <TwoDArtSection/>
            <ComicsSection/>
            <AnimationSection/>
        </section>
    )
}

export default PortfolioSection