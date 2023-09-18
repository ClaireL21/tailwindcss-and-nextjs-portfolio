'use client'
import { createContext } from 'react'
import React, { useState } from 'react'
import { Link } from "react-scroll/modules"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
    label: string
    page: string
}

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
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme == "system" ? systemTheme : theme   // use systemTheme if equals system or theme it was assigned if not
    const [navbar, setNavbar] = useState(false)

    // outer div - shifts navbar elements to right
    // shadow after white for line
    return (
        <header className={`w-full mx-auto px-10 bg-white shadow fixed top-0 z-50 ${theme ==='dark' ? 'bg-stone-900 border-b border-stone-600' : ''}`}>
            <div className = "justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3">
                        <div className="md:py-5 md:block">
                            <h2 className="text-2xl font-bold"> Claire Lu </h2>
                        </div>
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
                                            `block lg:inline-block ${theme ==='dark' ? 'text-neutral-100' : 'text-neutral-900 hover:text-neutral-500'}`
                                        }
                                        activeClass="active"
                                        spy={true}
                                        offset={100}
                                        duration={500}
                                        onClick={() => setNavbar(!navbar)}
                                        >{item.label}</Link>
                                )
                            })}
                            {currentTheme === "dark" ? (
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
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar