'use client'
import React, { useState, useEffect } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useTheme } from "next-themes"

interface NavItem {
    label: string
    page: string
}

// About - about, demo reel, featured projects
// Projects - Tech Projects, Graphics projects, 3D art projects
// Porfolio - 2D Illustrations, then 2D animations
// For fun / Hobbies? - ice skating? crochet link, comic strip art, comic strips
// home page - about me, all projects, or just featured?
// replace icon in head.tsx with an actual icon

const NAV_ITEMS: Array<NavItem> = [
    {   label: "About",
        page: "/"
    },
    {   label: "Projects",
        page: "/projects"
    },
    {   label: "UI/UX",
        page: "/design"
    },
    {   label: "2D Art",
        page: "/portfolio"
    },
    {   label: "Resume",
        page: "/resume"
    },
    // {   label: "For Fun",
    //     page: "/forfun"
    // },
]

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "systemTheme" ? systemTheme : theme
    //const router = useRouter()

    // bg-white in top header

    return (
        <header className={`w-full mx-auto px-10 fixed top-0 z-50 ${systemTheme === "dark" ? "bg-neutral-950" : "bg-white"}`}>
            <div className = "justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3">
                        {/* <button type="button" onClick={() => router.push('/post/abc')}>
                            Click me
                        </button> */}
                        <Link href="/" className="hover:text-yellow-600">
                            <div className="md:py-5 md:block">
                                <h2 className="text-2xl font-bold"> Claire Lu</h2>
                            </div>
                        </Link>
                        {/* <ScrollLink to="home" className="hover:text-neutral-500">
                            <div className="md:py-5 md:block">
                                <h2 className="text-2xl font-bold"> Claire Lu</h2>
                            </div>
                        </ScrollLink> */}
                        <div className="md:hidden">
                            <button onClick={()=>setNavbar(!navbar)}>
                                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                            </button>
                        </div>
                    </div>
                </div>
        
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-10 md:space-y-0">
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        href={item.page}
                                        className={
                                            `block lg:inline-block font-semibold hover:text-yellow-600`
                                        }
                                        onClick={() => setNavbar(!navbar)}
                                        >{item.label}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar