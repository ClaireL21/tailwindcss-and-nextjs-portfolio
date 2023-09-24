import Image from "next/image"

const tags = [
    { skill: "Maya"},
]

const DinerSection = () => {
    return (
        <section id="funfood">
            <h1 className="text-center font-bold text-3xl">
                Underwater Retro Diner Environment
            </h1>

            <div className="text-center flex item-center justify-center mt-8">
                <Image 
                    className="rounded-lg"
                    src="/3dArt/DinerFinalRender1.jpg"
                    alt="" 
                    width={1000} 
                    height={1000}>
                </Image>
            </div>

            <div className="text-center flex item-center justify-center mt-8">
                <Image 
                    className="rounded-lg"
                    src="/3dArt/DinerFinalRender2.jpg"
                    alt="" 
                    width={1000} 
                    height={1000}>
                </Image>
            </div>

            <div className="mt-8">
                This was a 3D model of a spooky, retro, underwater diner environment. If you look
                behind the counter, you'll be able to see the semi-hidden octopus!

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

            <h1 className="text-left font-bold text-2xl">
                Process
            </h1>
                
            <div className="mt-2">
                For this project, I really wanted to create an underwater retro diner, and I 
                decided on including the octopus to both give it a horror feel and to push
                the idea of being underwater. I also wanted 
                it to look like the diner had been abandoned (possibly because it 
                had been overtaken by the octopus?). To do this, I
                arranged the tables and chairs in disarray, modeled sea grass growing out from 
                the crevices of the room, laid a cloth draped over the 
                main counter, and placed piles of dirty dishes on the tables.
            </div>

            <br/>
                
            <div>
                The napkins throughout the scene and the large table cloth draped over the counter 
                were done using cloth simulations. This was a new technique for me, and I found it very
                fun to play around with, especially experimenting with different attributes like 
                cloth stickiness and friction values.
            </div>

            <br/>
                
            <div>
                To strengthen the horror/abandoned diner feel, I decided on limiting the number of light 
                sources in the restaurant. I imagined the middle light source over 
                the back counter as a flickering light, giving the restaurant dim lighting and a spooky ambiance.  
            </div>

            <div>
                I used noise functions 
                (mostly fractal brownian noise)
                to simulate water patterns on the walls and modeled tiny distorted spheres for bubbles.
                If you look outside the window on the right of the first rendered image, you can see 
                a tentacle passing by, and the silhouette of some mysterious ocean object (a submarine, maybe?). 
                I added these elements to enhance the underwater feel, which the seaweed and greenish color
                of the scene definitely help with too.
            </div>

            <br/>

            <div>
                This was my first 3D modeling environment project and I'm really happy with the overall look of the diner! I think the checkerboard pattern throughout
                really helps to create a retro look, as well as the red fabric of the seats. The red cups also 
                work to tie the colors together and I think makes the scene feel more cohesive.
            </div>

            <br/>

            <div>
                Below are two early screenshots of my process, with some of the basic models 
                placed in, and some simple materials applied.
            </div>

            <br/>

            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-1/2 md:text:left">
                    <Image 
                        className="rounded-sm"
                        src="/3dArt/diner2.png"
                        alt="" 
                        width={1000} 
                        height={1000}>
                    </Image>
                </div>
                <div className="md:w-1/2 md:text:right">
                    <Image 
                        className="rounded-sm"
                        src="/3dArt/diner3.jpg"
                        alt="" 
                        width={1000} 
                        height={1000}>
                    </Image>
                </div>
            </div>
            

        </section>
    )
}

export default DinerSection