import Image from "next/image"

const tags = [
    { skill: "Maya"},
]

const GertrudeSection = () => {
    return (
        <section id="funfood">
            <h1 className="text-center font-bold text-3xl">
            Gertrude
            </h1>

            <div className="text-center flex item-center justify-center mt-8">
                <Image 
                    className="rounded-sm"
                    src="/3dArt/gertrude.jpg"
                    alt="" 
                    width={500} 
                    height={500}>
                </Image>
            </div>

            <div className="mt-8">
                This is a character model of Gertrude, from Skottie Young's I Hate Fairyland. 
                This was my first time modeling a character! 
                My main goal was to develop a procedure for modeling characters, and for the 
                resulting model to look stylized and cartoon-like.
            </div>

            <br/>

            <h1 className="font-bold text-2xl">
                Process
            </h1>
                
            {/* <div>
                The most challenging part was figuring out how to model Gertrude's hair.
                Her hair is composed of coils and they feel very bouncy and springy.
                After a series of hair iterations, I ended up deciding on a Quad drawing process:
                First, I created a basic cylinder mesh and inserted edges to mimic the 
                overall shape of her coils.

                Then, I made the cylinder a live surface so I could model directly on it.
                I used Quad Draw to draw rectangles around the surface of the cylinder,
                gradually spiraling upwards from the base. After this step, the Mesh
                resembled a spiral staircase, with blue rectangles traveling upwards
                along the cylinder.

                With the flat spiral shape now available to me, I extruded it to make it 3D, 
                and worked on the mesh until it looked more hair like. From there, it was 
                simply rinse and repeat for the rest of the coils!

                I'm especially proud of the stylized look of the end result. The face was 
                challenging to make, especially going off of the 2D reference art I 
                gathered of Gertrude. I like the level of detail on the model overall,
                because it's form is complex enough to communicate Gertrude's look without
                overcomplicating it and still retaining the cartoon-ish feel of 2D Gertrude.

            </div> */}


            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-3/5 text:left">
                    
                    <div>
                        The most challenging part was figuring out how to model Gertrude's hair.
                        Her hair is composed of coils and they feel very bouncy and springy.
                        After a series of hair iterations, I ended up deciding on a Quad drawing process:
                        First, I created a basic cylinder mesh and inserted edges to mimic the 
                        overall shape of her coils.
                    </div>

                    <br/>

                    <div>
                        Then, I made the cylinder a live surface so I could model directly on it.
                        I used Quad Draw to draw rectangles around the surface of the cylinder,
                        gradually spiraling upwards from the base. After this step, the Mesh
                        resembled a spiral staircase, with blue rectangles traveling upwards
                        along the cylinder.
                    </div>

                    <br/>

                    <div>
                        With the flat spiral shape now available to me, I extruded it to make it 3D, 
                        and worked on the mesh until it looked more hair like. From there, it was 
                        simply rinse and repeat for the rest of the coils!
                    </div>

                    <br/>
                    
                    <div>
                        I'm especially proud of the stylized look of the end result. The face was 
                        challenging to make, especially going off of the 2D reference art I 
                        gathered of Gertrude. I like the level of detail on the model overall,
                        because it's form is complex enough to communicate Gertrude's look without
                        overcomplicating it and still retaining the cartoon-ish feel of 2D Gertrude.
                    </div>

                    <br/>

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

                </div>

                
                <div className="md:w-2/5 text-right item-center justify-center mt-8">
                    <Image 
                        className="rounded-sm mb-4"
                        src="/3dArt/gertrude2.jpg"
                        alt="" 
                        width={500} 
                        height={500}>
                    </Image>

                    <Image 
                        className="rounded-sm"
                        src="/3dArt/gertrude3.jpg"
                        alt="" 
                        width={500} 
                        height={500}>
                    </Image>
                </div>
            </div>

        </section>
    )
}

export default GertrudeSection