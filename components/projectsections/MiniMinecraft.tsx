import Image from "next/image"

const tags = [
    { skill: "C++"},
    { skill: "GLSL"},
    { skill: "Qt"},
]

const MiniMinecraftSection = () => {
    return (
        <section id="miniMinecraft">
            <h1 className="text-center font-bold text-3xl">
                Mini Minecraft: Pandora's Blocks
            </h1>

            <div className="mt-8">                
                <div className="h-[500px] w-auto aspect-w-16 aspect-h-9">
                    <iframe src="https://www.youtube.com/embed/XnAmGhJppd0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>

            <div className="mt-8">
                Mini Minecraft: Pandora's Blocks is a group final project for CIS 4600/5600: Introduction to Computer Graphics.
                Our theme was based on Avatar 2: The Way of Water! The main challenges I focused on 
                was implementing player physics, multithreading, and creating some additional biomes for our 
                minecraft environment.
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

            <h1 className="mt-8 text-left font-bold text-2xl">
                Player Physics
            </h1>
          
            <div className="flex flex-col space-y-2 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-2/5 text:left">
                    <div>
                        For the player physics, I implemented player movement, including flight mode and ground mode, 
                        as well as building and breaking blocks. 

                        The biggest challenge with player physics was implementing collision detection. 
                        For collision detection, I used grid marching to detect whether there was an object
                        in front of the player, within a certain threshold. The player also slides against walls
                        and small objects when colliding with them at an angle, to ensure for smoother gameplay. 

                        For building and removing blocks, I used grid marching to cast a ray and see if it intersects
                        any blocks within 3 units. If the player is trying to build and grid maching detects a collision, then it will
                        return the block before the intersection (i.e. the adjacent block).
                    </div>
                </div>
                <div className="md:w-3/5 text-right flex item-center justify-center mt-8">
                    <video loop autoPlay muted className="h-[300px] w-auto">
                        <source src="/Minecraft/player physics.mp4" />
                    </video>
                </div>
            </div>

            <h1 className="mt-6 text-left font-bold text-2xl">
                Multithreading
            </h1>

            <div className="mt-2">
                Because multithreading performs threads of execution in parallel,
                it allows for the chunks of terrain in minecraft to be loaded in 
                quickly. This step was very important in making sure our minecraft 
                ran smoothly and terrain was generated fast enough to catch up with 
                player movements.
            </div>

            <br/>

            <div>
                I implemented multithreading by spawning in block data worker threads
                and vertex buffer object (vbo) worker threads. I used mutexes to 
                lock and unlock threads so that if a thread tries to make changes 
                to a locked thread, it must wait for it to finish execution. This 
                allows us to successfully build terrain zones even if certain 
                actions, such as loading blocks in and giving them block type data, depend
                on each other.
            </div>

            <br/>

            <div className="flex item center items-stretch justify-center">
                <video loop autoPlay muted className="h-[300px] w-auto">
                    <source src="/Minecraft/MC multithreading Birds Eye2.mp4" />
                </video>
            </div>

            <br/>

            <div>
                The above is a demo of what multithreading looked like during an early
                version of our game. In minecraft, terrains are loaded in using 16x16x16 
                chunks of blocks that surround the player.
            </div>

            <br/>

            <div>
                We can see how the blocks get loaded in on the edges as we move. 
            </div>

            <br/>

            <div>
                In the final version of our minecraft, we have a larger block generation 
                radius around the player so tbe section of the terrain that a player 
                might go to will already be loaded in and available. We also use distance fog 
                to help mask the process of terrain loading, in case there are any lags 
                in the generation process.
            </div>

            <br/>

            <div>
                The demos below show multithreading in action, in our final version!
            </div>

            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-1/2 text:left">
                    <div className="flex item-center justify-center">
                        <video loop autoPlay muted className="h-[300px] w-auto">
                            <source src="/Minecraft/MC multithreading 1.mp4" />
                        </video>
                    </div>
                </div>

                <div className="md:w-1/2 text:right">
                    <div className="flex item-center justify-center">
                        <video loop autoPlay muted className="h-[300px] w-auto">
                            <source src="/Minecraft/MC multithreading 2.mp4" />
                        </video>
                    </div>
                </div>
            </div>

            <h1 className="text-left font-bold text-2xl">
                Additional Biomes
            </h1>

            <div>
                The other portion I worked on for our minecraft was biomes! 
                I created the 'Blue Alps' and 'Coastal Ridges' biome and 
                implemented biome mixing. I used noise functions like 
                Fractal Brownian Noise and Perlin noise to generate the 
                mountains. The generated "random" values helped determine the 
                shape and height of the terrain, to ultimately create different 
                looking biomes.
            </div>

            <br/>

            <div>
                Blue Alps: Steep blue mountains with white snow caps
            </div>
            <div className="mt-8 flex items-center justify-center"> 
                <div className="grid grid-cols-3 grid-rows-1 gap-8">
                    <Image 
                        className=""
                        src="/Minecraft/Blue Alps 1.png"
                        alt="" 
                        width={300} 
                        height={300}>
                    </Image>

                    <Image 
                        className=""
                        src="/Minecraft/Blue Alps 2.png"
                        alt="" 
                        width={300} 
                        height={300}>
                    </Image>

                    <Image 
                        className="rounded"
                        src="/Minecraft/Blue Alps 3.png"
                        alt="" 
                        width={300} 
                        height={300}>
                    </Image>
                </div>
            </div>
            <br/>
            <div>
                Coastal Ridges: Large bodies of water and hills that are submerged in water
            </div>
            <div className="mt-8 flex items-center justify-center"> 
                <div className="grid grid-cols-3 grid-rows-1 gap-8">
                    <Image 
                        className=""
                        src="/Minecraft/Coastal Ridges.png"
                        alt="" 
                        width={300} 
                        height={300}>
                    </Image>

                    <Image 
                        className=""
                        src="/Minecraft/Coastal Ridges 2.png"
                        alt="" 
                        width={300} 
                        height={300}>
                    </Image>

                    <Image 
                        className="rounded"
                        src="/minecraftThumb.png"
                        alt="" 
                        width={300} 
                        height={300}>
                    </Image>
                </div>
            </div>

            <br/>
            <div>
                To implement biome mixing, I placed all six of our biomes on a grid. 
                I generated values for temperature and moisture levels for 
                each biome using two different noise functions. Both were 
                based on FBM and Perlin noise. I made them different by 
                distorting the noise by creating offset values and then changing 
                the input based on this. 
            </div>
            <br/>
            <div>
                For temperature and moisture, 
                I created threshold values so that if the temperature and moisture level 
                of the player's position falls within the threshold values, I would 
                interpolate the heights among the appropriate surrounding biomes. 
                Otherwise, I would use 100% of the current biome height. Lastly, I used 
                smoothstep to calculate the weights of each biome when interpolating among biomes.
            </div>

            <div className="mt-8 flex items-center justify-center"> 
                <div className="grid grid-cols-3 grid-rows-1 gap-8">
                    <Image 
                        className=""
                        src="/Minecraft/Biome Blending 4.png"
                        alt="" 
                        width={300} 
                        height={300}>
                    </Image>

                    <Image 
                        className=""
                        src="/Minecraft/Biome Blending 5.png"
                        alt="" 
                        width={300} 
                        height={300}>
                    </Image>

                    <Image 
                        className="rounded"
                        src="/Minecraft/Biome Blending 6.png"
                        alt="" 
                        width={300} 
                        height={300}>
                    </Image>
                </div>
            </div>

            <div className="mt-8 flex item center items-stretch justify-center">
                <video loop autoPlay muted className="h-[300px] w-auto">
                    <source src="/Minecraft/MC biome blending.mp4" />
                </video>
            </div>

            
        </section>
    )
}

export default MiniMinecraftSection