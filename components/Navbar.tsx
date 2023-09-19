'use client'
import { createContext } from 'react'
import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll/modules"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

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
    {
        label: "Home",
        page: "home",
    },
    {   label: "About",
        page: "about"
    },
    {   label: "Projects",
        page: "projects"
    }
]

const Navbar = () => {
    // initialize constant
   //const { systemTheme, theme, setTheme } = useTheme()
   // const currentTheme = theme === "system" ? systemTheme : theme   // use systemTheme if equals system or theme it was assigned if not
    const [navbar, setNavbar] = useState(false)

    // const [mounted, setMounted] = useState(false)
    // const { theme, setTheme } = useTheme()

    // useEffect(() => {
    //     setMounted(true)
    // }, [])

    // if (!mounted) {
    //     setTheme("system") 
    // }
      
    
    //const themeIcon = 

    // outer div - shifts navbar elements to right
    // shadow after white for line
    // ${theme ==='dark' ? 'bg-stone-900 border-b border-stone-600' : 'bg-white'}
    // ${theme ==='dark' ? 'text-neutral-100' : 'text-neutral-900 hover:text-neutral-500'}
    return (
        <header className={`w-full mx-auto px-10 shadow fixed top-0 z-50 bg-white`}>
            <div className = "justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3">
                        <Link to="home" className="hover:text-neutral-500">
                            <div className="md:py-5 md:block">
                                <h2 className="text-2xl font-bold"> Claire Lu</h2>
                            </div>
                        </Link>
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
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        to={item.page}
                                        className={
                                            `block lg:inline-block hover:text-neutral-500 text-neutral-900`
                                        }
                                        activeClass="active"
                                        spy={true}
                                        offset={100}
                                        duration={500}
                                        onClick={() => setNavbar(!navbar)}
                                        >{item.label}
                                    </Link>
                                )
                            })}
                            {/* {currentTheme === "dark" ? (
                                <button
                                    onClick={() => setTheme("light")}
                                    className="bg-slate-100 p-2 rounded-xl"
                                >
                                    <RiSunLine size={25} color="black"/>
                                </button>
                            ) : (
                                <button
                                    onClick={() => setTheme("dark")}
                                    className="bg-slate-200 p-2 rounded-xl"
                                >
                                    <RiMoonFill size={25} color="black"/>
                                </button>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar