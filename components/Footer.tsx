import React from 'react'
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineFacebook,
} from "react-icons/ai"

const Footer = () => {
    return (
        <footer className="mx-auto max-w-3xl mt-10 px-4 sm:px-6 md:max-w-5xl mb-6">
            {/* <hr className="w-full h-0.5 mx-auto mt-9=8 bg-neutral-200 border-0"></hr>  md:flex-row md:justify-between*/}
            <div className="mx-auto p-4 flex flex-col text-center text-neutral-900">
                <div className="flex flex-row items-center justify-center space-x-10 mb-4">
                    <a href="https://github.com/ClaireL21" rel="noreferrer" target="_blank">
                        <AiOutlineGithub 
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-yellow-500" 
                            size={30}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/claire-lu-470419235/" rel="noreferrer" target="_blank">
                        <AiOutlineLinkedin
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-yellow-500" 
                            size={30}
                        />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100070013525903" rel="noreferrer" target="_blank">
                        <AiOutlineFacebook
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-yellow-500" 
                            size={30}
                        />
                    </a>
                </div>
                <div className="font-semibold text-yellow-500">
                    © 2023 Claire Lu
                </div>
            </div>
        </footer>
    )
}

export default Footer