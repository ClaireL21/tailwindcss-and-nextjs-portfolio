import Image from "next/image"

const tags = [
    { skill: "Maya"},
]

const ChiliLightsSection = () => {
    return (
        <section id="funfood">
            <h1 className="text-center font-bold text-3xl">
                Chili Lights Restaurant
            </h1>

            <div className="text-center flex item-center justify-center mt-8">
                <Image 
                    className="rounded-lg"
                    src="/3dArt/rest1.jpg"
                    alt="" 
                    width={1000} 
                    height={1000}>
                </Image>
            </div>

            <div className="text-center flex item-center justify-center mt-8">
                <Image 
                    className="rounded-lg"
                    src="/3dArt/rest2.jpg"
                    alt="" 
                    width={1000} 
                    height={1000}>
                </Image>
            </div>

            <br/>

            <h1 className="text-left font-bold text-2xl">
                Overview
            </h1>

            <div className="">
                This was a model of a restaurant environment. I was inspired by this one
                restaurant scene in the Daredevil TV show - the episode features a restaurant 
                (Panna II Garden Indian Restaurant, in East Village of New York!) with hundreds of lights hanging from 
                the ceiling. Most of the lights are chili pepper shaped, but there is a conglomeration 
                of christmas lights, pepper lights, vivid ornaments, and intricate paper decorations. 
            </div>

            <div className="mt-4">
                I went to the actual restaurant before making this project and the memory
                of being inside, surrounded by all the lights and decorations, was hugely
                inspiring!
            </div>

            <div className="mt-4">
                I wanted to replicate this feeling with my environment. Actually modeling so many 
                lights was a difficult rendering challenge, though, and caused my renders to be
                decently slow. To help combat this, I used emissive surfaces for the lights 
                in the back and focused on higher detail for only the lights in the front. I also put
                light sources in the front chili peppers, but linked them only to the chili 
                pepper mesh.
            </div>

            <div className="mt-4">
                By default, any light sources will hit all objects in the scene. However, with
                many objects, this can overload the renderer because it will have to calculate
                the light hitting all these surfaces. So, to speed up render time and help prevent
                crashes, I linked the light sources for the pepper lights only to the pepper meshes themselves,
                so ultimately the other objects like the tables, dishes, cups, and napkins, wouldn't 
                have these lights linked to them.
            </div>

            <div className="mt-4">
                Check out some of the photos I snapped of the restaurant decorations below!
            </div>

            <div className="flex flex-row align-bottom space-x-4">
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

            <div className="mt-8">
                <Image 
                    className="rounded-sm"
                    src="/3dArt/rest long.jpg"
                    alt="" 
                    width={1000} 
                    height={1000}>
                </Image>
            </div>

            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-1/2 md:text:left">
                    <Image 
                        className="rounded-sm"
                        src="/3dArt/rest tall1.jpg"
                        alt="" 
                        width={800} 
                        height={1000}>
                    </Image>
                </div>
                <div className="md:w-1/2 md:text:right">
                    <Image 
                        className="rounded-sm"
                        src="/3dArt/rest tall 2.jpg"
                        alt="" 
                        width={800} 
                        height={1000}>
                    </Image>
                </div>
            </div>

            <div className="mt-8">
                    <Image 
                        className="rounded-sm"
                        src="/3dArt/rest mid.jpg"
                        alt="" 
                        width={1000} 
                        height={1000}>
                    </Image>
                </div>
            

        </section>
    )
}

export default ChiliLightsSection