import Image from "next/image"

const tags = [
    { skill: "Maya"},
    { skill: "ZBrush"},
]

const images = [
    { image: "/3dArt/ns2.jpg"},
    { image: "/3dArt/ns52.jpg"},
    { image: "/3dArt/ns4jpg.jpg"},
    { image: "/3dArt/ns6.jpg"},
    { image: "/3dArt/ns1.jpg"},
    { image: "/3dArt/ns3.jpg"},
]

const images2 = [
    { image: "/3dArt/noodlec.jpg"},
    { image: "/3dArt/noodlee.jpg"},
    { image: "/3dArt/noodleg.jpg"},
    { image: "/3dArt/noodlef.jpg"},
]

const NoodleSection = () => {
    return (
        <section id="funfood">
            <h1 className="text-center font-bold text-3xl">
                Noodle
            </h1>
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

            <div className="mt-4">
                This is a character model I made in my Advanced 3D Modeling class, based on 
                the character Noodle from the{" "}
                <span>
                    <a href="https://www.gorillaz.com/" rel="noreferrer" target="_blank"
                        className="font-semibold text-yellow-500 hover:text-yellow-600">
                        Gorillaz
                    </a>
                </span>
                {" "}band!
            </div>

            <br/>

            <div>
                My main goal with this project was to experiment with techniques for modeling
                character faces. This was my first time with the ZBrush to Maya workflow, as 
                well as retopologizing! I'm especially proud of how the face turned out - one 
                of the primary challenges I faced was trying to build a 3D version of the 2D 
                Gorillaz art of Noode. Despite not having 3D references, I think the facial structure
                of the end model mimics Noodle's face quite well, which I was very happy about.
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

            <h1 className="mt-2 text-left font-bold text-2xl">
                Process
            </h1>

            <div className="mt-4">
                I created Noodle by first sculpting her head in ZBrush so I could build up the 
                features on her face. This allowed me to mold shapes so I could work and rework
                more difficult features like the eyes, nose, and mouth.
            </div>

            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-3/5 text:left">
                    <div>
                        I then imported the ZBrush model into Maya and began retopologizing the face.
                        Using Quad Draw to form a cast on the surface of the face, I created a low poly version of the head.
                        This gives a cleaner and more stylized, cartoon look, which is how she's drawn in Gorillaz art. 
                    </div>

                    <br/>

                    <div>
                        To the right 
                        is a screenshot of this part of my process. The model on the right is the original ZBrush head, and the model
                        on the left is a duplicate, with half of the cast created. I mirrored the cast so that the face would 
                        be perfectly symmetrical, which helped to achieve the cartoon look of Noodle!
                    </div>

                    <br/>

                    <div>
                        After, I modeled a basic body and extruded faces on the body to mimic clothing.
                        Then, through a series of mesh transformations, I shaped the mesh to look like 
                        the dress that Noodle wears. The legs and shoes were also made similarly, with all of 
                        this done in Maya.
                    </div>

                    <br/>

                    <div>
                        Below are some screenshots of the process and the resulting retopologized head.
                    </div>
                </div>
                <div className="md:w-2/5 text-right item-center justify-center mt-8">
                    <Image 
                        className="rounded-sm"
                        src="/3dArt/noodlea.jpg"
                        alt="" 
                        width={500} 
                        height={500}>
                    </Image>
                </div>
            </div>
            
            <div className="mt-8 flex items-center justify-center"> 
                <div className="md:grid md:grid-cols-4 md:grid-rows-1 md:gap-8">
                    {images2.map((item, idx) => {
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

export default NoodleSection