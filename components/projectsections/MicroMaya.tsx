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
                <video autoPlay controls style={{ width: '1000px', height: '500px' }}>
                    <source src="/MicroMayaDemos/Micro Maya Cow Demo.mp4" />
                </video>
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

            <h1 className="text-left font-bold text-2xl">
                Half Edge Mesh
            </h1>

            <div> The first step in creating Micro Maya was determining how to represent 3D meshes so 
                that they could be transformed and distorted easily. 

                Each mesh structure has three main parts - vertices, edges, and faces. 

                Because my goal was to create a mini version of Maya, I wanted to make 
                basic mesh editing functions availabe, such as moving vertices/edges/faces and 
                changing their colors.


            </div>

            <h1 className="text-left font-bold text-2xl">
                Catmull Clark Subdivision
            </h1>

            <h1 className="text-left font-bold text-2xl">
                Skeletons & Skinning
            </h1>
        </section>
    )
}

export default MicroMayaSection