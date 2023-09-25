import Image from "next/image"

const tags = [
    { skill: "C++"},
    { skill: "GLSL"},
    { skill: "Qt"},
]

const MicroMayaSection = () => {
    return (
        <section id="microMaya">
            <h1 className="text-center font-bold text-3xl">
                Micro Maya
            </h1>

            <div className="mt-8">
                <div className="h-[500px] w-auto aspect-w-16 aspect-h-9">
                    <iframe src="https://www.youtube.com/embed/zqHE7DNjLBM" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>

            <div className="mt-8">
                This project was 3-4 week task assigned in CIS 4600/5600, where
                I created a mini version of the 3D modeling software Maya.
                There were three main challenges to this project: creating the 
                data structure used to represent 3D meshes, performing subdivisions to 
                an arbitrary mesh structure, and applying a skeleton to a mesh 
                to allow transformations to the mesh.
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
                Half Edge Mesh
            </h1>
            <div className="mt-2"> The first step in creating Micro Maya was determining how to represent 3D meshes so 
                that they could be transformed and distorted easily. 

                Each mesh structure has three main parts - vertices, edges, and faces. 

                Because my goal was to create a mini version of Maya, I wanted to make 
                basic mesh editing functions availabe, such as moving vertices/edges/faces and 
                changing their colors.

            </div>

             <br/>

            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-3/5 text:left">
                    <div>
                        To do this, I chose to represent meshes using a half edge data structure.
                        Half edges are directed edges that frame a face. Each half edge stores
                        a pointer to the face directly left of it, the next half edge in the ring of 
                        edges, its symmetric half edge, and the vertex between itself and the next 
                        half edge. This information allows for more convenient traversal
                        around the data structure, making operations like edge splitting
                        and subdivision easier.

                        I took advantage of this half edge data structure to implement triangulation.
                    </div>

                    <br/>

                    <div>
                        To the right is an example showing the process of triangulation on the face of a dodecahedron.
                    </div>
                </div>
                <div className="md:w-2/5 text-right mt-8">
                    <Image 
                        className=""
                        src="/MicroMayaDemos/Triangulation.gif"
                        alt="" 
                        width={400} 
                        height={400}>
                    </Image>
                </div>
            </div>

            <br/>

            <div>
                In the demo, I first select the front face of the dodecahedron. 
                (The color of the face transitions from green to yellow to illustrate its shape before triangulation).
                Then, after triangulation, the pentagon becomes split so that the face is now composed of triangles.
                This is done by creating two new faces (for a total of three triangular faces) and four new half
                edges. Because our half edge data structure allows for easy traversal, we can fix the pointers
                of our half edges easily and successfully split the face into three.
            </div>

            <h1 className="mt-8 text-left font-bold text-2xl">
                Catmull-Clark Subdivision
            </h1>

            <div className="mt-2">
                Another nice operation of Micro Maya is Catmull-Clark Subdivision, a method 
                of smoothing a mesh. Catmull-Clark works by taking the centroid of each face, 
                computing the midpoint of each edge in the mesh, and then using these values 
                to smooth the original vertices. Each face in the initial mesh gets split into
                a number of quadrangle faces equal to the original number of vertices.
            </div>

            <br/>

            <div>
                Below is a demonstration of a series of three Catmull-Clark subdivisions,
                each one bringing the initial cube closer to a sphere.
            </div>

            <div className="flex items-center justify-center"> 
                <div className="mt-8 md:grid md:grid-cols-2 md:grid-rows-1 md:gap-8">
                    <Image 
                        className=""
                        src="/MicroMayaDemos/Subdivision.gif"
                        alt="" 
                        width={300} 
                        height={300}>
                    </Image>

                    <div className="mt-8 flex items-center justify-center"> 
                        <div className="grid grid-cols-3 grid-rows-1 gap-8">
                            <Image 
                                className="rounded-xl"
                                src="/MicroMayaDemos/Subdivision 3.png"
                                alt="" 
                                width={100} 
                                height={100}>
                            </Image>

                            <Image 
                                className="rounded-xl"
                                src="/MicroMayaDemos/Subdivision 2.png"
                                alt="" 
                                width={100} 
                                height={100}>
                            </Image>

                            <Image 
                                className="rounded-xl"
                                src="/MicroMayaDemos/Subdivision 1.png"
                                alt="" 
                                width={100} 
                                height={100}>
                            </Image>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="mt-10 text-left font-bold text-2xl">
                Skeletons & Skinning
            </h1>

            <div className="mt-2">
                My favorite part about this project was attaching a skeleton to a 3D mesh and using it 
                transform the mesh. Each skeleton is composed of a hierarchy of joints. When loaded in,
                a skeleton can be moved around without affecting the mesh. However, the skeleton can be 
                attached to the object by clicking the 'Skinning' button, and then any transformations
                applied to the joints will be applied to the mesh as well.
            </div>
            
            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-3/5 text:left">
                    <Image 
                        className="rounded-xl"
                        src="/MicroMayaDemos/gui screen.png"
                        alt="" 
                        width={600} 
                        height={600}>
                    </Image>
                </div>

                <div className="md:w-2/5 text:right">
                    <div className="flex item-center justify-center">
                        
                        <Image 
                            className=""
                            src="/MicroMayaDemos/Cow.gif"
                            alt="" 
                            width={300} 
                            height={300}>
                        </Image>
                        {/* <video loop autoPlay muted className="h-[200px] w-auto">
                            <source src="/MicroMayaDemos/Cow Demo Cropped.mp4" />
                        </video> */}
                    </div>
                </div>
            </div>
            

        </section>
    )
}

export default MicroMayaSection