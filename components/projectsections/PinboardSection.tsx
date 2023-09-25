import Image from "next/image"

const tags = [
    { skill: "Swift"},
    { skill: "Xcode"},
]

const PinboardSection = () => {
    return (
        <section id="funfood">
            <h1 className="text-center font-bold text-3xl">
                Pinboard iOS Mobile App
            </h1>

            <div className="mt-8">
                Pinboard is a group final project for my high school Computer Science 
                Seminar class. It's a social app for high school communities where students can 
                post information about school events & clubs. 
            </div>

            <br/>
                
            <div>
                Personal contributions:
                <ul className="px-8 list-disc">
                    <li>Constructed wireframes, designed user interface & logo, and created loading screen animation </li>
                    <li>Spearheaded programming for profile page, home screen, user feed, and 'subscribed channels' page</li>
                    <li>Developed code for interacting with Firebase to store user data</li>
                </ul>
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
            </div>

            <br/>
            <h1 className="text-left font-bold text-2xl">
                Overview
            </h1>
            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-3/5 text:left">
                    <div className="mt-2"> 
                        Targeted Audience: Schools / Students
                    </div>

                    <br/>
            
                    <div>
                        Purpose:
                        <ul className="px-8 list-disc">
                            <li>Connect student community</li>
                            <li>Provide a centralized platform where students can see school events they’re interested in.</li>
                            <li>Students can create their own informal or official meetings in an easy way.  </li>
                        </ul>
                    </div>

                    <br/>

                    <div>
                        Functions
                        <ul className="px-8 list-disc">
                            <li>Post an event about a club meeting, tutor session, or more!</li>
                            <li>Save events to your calendar.</li>
                            <li>See how many people are attending events.</li>
                            <li>Subscribe to channels that interest you, like math, music, and science! </li>
                        </ul>
                    </div>

                </div>
                <div className="md:w-2/5 text-right flex item-center justify-center mt-8">
                    <Image 
                        className="rounded-xl"
                        src="/Pinboard/pinboard.png"
                        alt="" 
                        width={500} 
                        height={500}>
                    </Image>
                </div>
            </div>

            <br/>

            <h1 className="mt-8 text-left font-bold text-2xl">
                Video Demo
            </h1>

            <div className="mt-8">
                <div className="h-[500px] w-auto aspect-w-16 aspect-h-9">
                    <iframe src="https://www.youtube.com/embed/jLJlH2Lxqfo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>

            <h1 className="mt-8 text-left font-bold text-2xl">
                Screens
            </h1>

            <div className="text-center flex item-center justify-center mt-8">
                <Image 
                    className="rounded-xl"
                    src="/Pinboard/pinb1.png"
                    alt="" 
                    width={800} 
                    height={800}>
                </Image>
            </div>

            <div className="text-center flex item-center justify-center mt-8">
                <Image 
                    className="rounded-xl"
                    src="/Pinboard/pinb2.png"
                    alt="" 
                    width={800} 
                    height={800}>
                </Image>
            </div>

            <div className="text-center flex item-center justify-center mt-8">
                <Image 
                    className="rounded-xl"
                    src="/Pinboard/pinb3.png"
                    alt="" 
                    width={800} 
                    height={800}>
                </Image>
            </div>

            <div className="text-center flex item-center justify-center mt-8">
                <Image 
                    className="rounded-xl"
                    src="/Pinboard/pinb4.png"
                    alt="" 
                    width={800} 
                    height={800}>
                </Image>
            </div>

            <div className="flex justify-center items-center mt-8">
                <Image 
                    className=""
                    src="/Pinboard/pinboard.gif"
                    alt="" 
                    width={200} 
                    height={200}>
                </Image>
            </div>

        </section>
    )
}

export default PinboardSection