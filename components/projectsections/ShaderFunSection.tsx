import Image from "next/image"

const tags = [
    { skill: "C++"},
    { skill: "GLSL"},
    { skill: "Qt"},
]

const images = [
    { image: "/ShaderFunMario/mario4.png"},
    { image: "/ShaderFunMario/mario2.png"},
    
    { image: "/ShaderFunMario/mario1.png"},
    { image: "/ShaderFunMario/mario3.png"},
]

const ShaderFunSection = () => {
    return (
        <section id="funfood">
            <h1 className="text-center font-bold text-3xl">
                Shader Fun
            </h1>
            <div className="min-h-screen flex items-center justify-center"> 
                <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8">
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
                This project was a task from CIS 4600/5600 involving writing shaders to 
                be applied on some object - in this case, Mario! 
                I experimented with different kinds of shaders, including ones that involved
                vertex deformations and fragment shader operations. I also learned how to write 
                post-processing shaders. The images above feature just a few of the fun end 
                results that I obtained from combining different shaders.
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
                Surface Shaders
            </h1>

            <div className="mt-4">
                Surface shaders are programs that will take in vertex data and translate 
                them into colors on the screen through the GPU. In my custom vertex deformation 
                shader (the one where a bulge seems to move through Mario), I modified the positions
                for each vertex, and for the other shaders, I updated the pixel colors through the
                fragment shader, taking vertex positions as input.
            </div>

            <br/>

            <div>
                Below is a demo of these surface shaders in action!
            </div>

            <div className="mt-8">
                <div className="h-[500px] w-auto aspect-w-16 aspect-h-9">
                    <iframe src="https://www.youtube.com/embed/snBHZ33sL60" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>

            <br/>

            <h1 className="mt-4 text-left font-bold text-2xl">
                Post-Processing Shaders
            </h1>

            <div className="mt-4">
                These shaders create effects across the entire screen, rather than 
                just the character model of Mario. For these, I treated the scene as a rectangle, i.e. 
                just a simple 2D image rather than a 3D scene with information about vertex positions, 
                normals, colors, etc.
            </div>

            <br/>

            <div>
                By doing so, I could achieve effects like the greyscale and gaussian blur, which
                used neighboring pixel data to determine the color of the current pixel. My favorite
                of these was the Sobel effect, which created a cool, high contrast outline look of Mario! 
            </div>

            <div>
                Below is a demo of these post-processing shaders in action!
            </div>

            <div className="mt-8">

                <div className="h-[500px] w-auto aspect-w-16 aspect-h-9">
                    <iframe src="https://www.youtube.com/embed/_xx0KmR1Yuo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>

            
        </section>
    )
}

export default ShaderFunSection