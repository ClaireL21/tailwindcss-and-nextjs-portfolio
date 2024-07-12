import Image from "next/image"

const tags = [
    { skill: "Figma"},
]

const wireframes = [
    { image: "/PathAtPenn/Path_wf_1.png"},
    { image: "/PathAtPenn/Path_wf_2.png"},
    { image: "/PathAtPenn/Path_wf_3.png"},
    { image: "/PathAtPenn/Path_wf_4.png"},
    { image: "/PathAtPenn/Path_wf_5.png"},
    { image: "/PathAtPenn/Path_wf_6.png"},
]

const PathAtPennSection = () => {
    return (
        <section id="pathAtPennRedesign">
            <h1 className="text-center font-bold text-3xl">
                Path@Penn Redesign
            </h1>

            <div className="mt-8">
                <div className="flex item-center justify-center">
                    <Image 
                        className=""
                        src={"/PathAtPenn/Path_Cover Image.png"}
                        alt="" 
                        width={1000} 
                        height={1000}>
                    </Image>
                </div>
            </div>
            <div className="mt-8">
                Redesign for Path@Penn
            </div>

            <div className="mt-2 flex flex-row align-bottom space-x-4">
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

            {/* <h1 className="mt-6 text-left font-bold text-2xl">
                Research Synthesis & Insights
            </h1>

            <div>
                paragraph
            </div> */}

            <h1 className="mt-6 text-left font-bold text-2xl">
                Sketches & Wireframes
            </h1>

            {/* <div>
                paragraph
            </div> */}

            <div className="flex items-center justify-center"> 
                <div className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-8">
                    {wireframes.map((item, idx) => {
                        return (
                        <div key={idx}>
                            <div className="flex flex-col md:flex-col md:space-x-2">
                                <div className="mt-8">
                                    <Image 
                                        className="rounded-sm"
                                        src={item.image}
                                        alt="" 
                                        width={500} 
                                        height={500}>
                                    </Image>
                                </div>
                            </div>
                        </div>
                        ) 
                    })}
                </div>
            </div>
{/* 
            <div>
                paragraph
            </div>

            <h1 className="mt-6 text-left font-bold text-2xl">
                Final UI Solution
            </h1>

            <div>
                paragraph
            </div> */}

            
        </section>
    )
}

export default PathAtPennSection