import Image from "next/image"

const tags = [
    { skill: "Swift"},
    { skill: "Objective-C"},
    { skill: "XCode"},
]

const HighResDressSection = () => {
    return (
        <section id="follow">
            <h1 className="items-center text-center font-bold text-3xl">
                High Resolution 3D Models of Formal Dresses
            </h1>

            <div className="mt-8">
                <Image 
                    className="rounded-xl"
                    src="/HighResDress/Cover 2.png"
                    alt="" 
                    width={900} 
                    height={300}>
                </Image>
            </div>

            <div className="mt-8">
                This was a  {" "}
                <a href="https://medium.com/queenly-engineering/high-resolution-3d-models-of-formal-dresses-using-lidar-and-photogrammetry-efe559041041" 
                className="font-semibold text-yellow-500 hover:text-yellow-600">
                    final project
                </a> for my internship at Queenly, 
                a marketplace dedicated toward formalwear and pageant dresses. 
                My goal was to create 3D renders 
                of a collection of the dresses listed on the Queenly site 
                and determine how to integrate them smoothly into the app.
                Because it’s difficult to fully capture all the various embellishments 
                on many of these dresses, displaying 3D renders along with the dress listings
                allows buyers to have as much visual information as possible to make an informed decision.
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

            <div className="flex flex-col space-y-10 justify-center align-top md:space-x-4 md:space-y-0 md:p-4 md:flex-row">
                <div className="md:w-3/5 text:left">
                    <div>
                        The first challenge was to determine the best way of scanning dresses. 
                        I researched two different methods for creating models: LiDAR and photogrammetry.

                        Lidar works by sending laser pulses at items in a space and then senses 
                        the reflected pulses to measure the distances between points. It uses a cloud 
                        of points with direct measurements to features to recreate a 3D scene.

                        However, the models generated were blurry and low resolution – much of the embroidery 
                        and detailing work on the dresses were lost on the lidar scans.
                    </div>

                    <br/>

                    <div>
                        To the right is a visualization of the LiDAR point cloud and below are the 
                        results of 3D scanning using LiDAR.
                    </div>
                </div>
                <div className="md:w-2/5 text-right mt-8"> 
                {/* //flex item-center justify-center */}
                    <Image 
                        className="rounded-xl"
                        src="/HighResDress/Frame 10.png"
                        alt="" 
                        width={500} 
                        height={300}>
                    </Image>
                </div>
            </div>

            <br/>

            <div className="flex flex-col mt-8">
                <Image 
                    className="rounded-xl"
                    src="/HighResDress/Frame 9.png"
                    alt="" 
                    width={900} 
                    height={300}>
                </Image>
            </div>

            <div className="mt-8">
                Using photogrammetry, on the other hand, allowed for higher resolution 3D scans.
                Photogrammetry is a method of using overlapping photos to reconstruct a 3D model of an object. 
                Essentially, a series of high resolution photos taken from different heights and angles 
                are processed to generate a 3D map with elevation, shape, texture, and color information. 
                Using this data, a 3D model can be reconstructed. 
            </div>

            <div className="mt-8">
                My first attempt at photogrammetry was through Apple’s sample Photogrammetry Command-Line App. The app took a series of 
                photos as input and would output a 3D model reconstructed from the photos. 
                In order to obtain the best results, we shot the model against a solid background 
                in a well-lit room, and turned it to have at least a 70% overlap between shots. 
                These steps are key to making sure the program can recognize landmarks between photos 
                and ultimately reconstruct the model.
            </div>

            <br/>

            <div>
                Howevever, as we can see below, the models generated often had holes or extraneous parts in their mesh.
            </div>

            <div className="flex flex-col items-center justify-center text-center mt-8">
                <Image 
                    className="rounded-xl"
                    src="/HighResDress/Dress 2.png"
                    alt="" 
                    width={700} 
                    height={300}>
                </Image>
            </div>

            <br/>

            <div className="flex flex-col mt-8">
                My next attempt at photogrammetry involved using Polycam, 
                a popular 3D scanning app that can also reconstruct models through photogrammetry.
                The models generated by Polycam were noticeably more polished than those of Apple’s 
                Command-Line App. The results were consistently high resolution and detailed. 
                Whether scanning opaque, transparent, sequined, or patterned fabrics, 
                Polycam yielded accurate 3D models, and seemed better equipped to handle the 
                photogrammetry process in general.
            </div>

            <div className="flex flex-col items-center justify-center text-center mt-8">
                <Image 
                    className="rounded-xl"
                    src="/HighResDress/Frame 4.png"
                    alt="" 
                    width={700} 
                    height={300}>
                </Image>

                <Image 
                    className="mt-4 rounded-xl"
                    src="/HighResDress/highRes.png"
                    alt="" 
                    width={700} 
                    height={300}>
                </Image>
            </div>

            <div className="flex flex-col mt-8">
                I ended up creating 3D scans for about 10 dresses, featured below.

                <Image 
                    className="text-center rounded-xl"
                    src="/HighResDress/Models.png"
                    alt="" 
                    width={1000} 
                    height={600}>
                </Image>
            </div>

            <br/>


            <div className="justify-center items-center flex flex-col space-y-10 justify-center align-top md:space-x-4 md:space-y-0 md:p-4 md:flex-row">
                <div className="md:w-1/2 text:left items-center">
                    <br/>
                    <div>
                        The next step was integrating the renders into the app.
                        To render a 3D model in iOS, I used Apple’s 3D graphics framework, Scenekit.
                        I created a displayable 3D scene using the SCNScene class, which is essentially 
                        a hierarchy of nodes that contain different attributes to represent 3D visuals. 
                    </div>

                    <br/>
                    <div>
                        I then created an SCNView object and set its scene property to the scene just created, and 
                        then made it visible by adding a light source. 
                        Since SCNScenes are composed of nodes, I did so by creating an SCNNode and setting its light property,
                        and then adding the newly created node as a child node of our scene’s root node.
                    </div>

                    <br/>
                    <div>
                        Lastly, in order to allow the user to control the camera of the scene, I configured the camera control 
                        properties of the SCNView object.
                    </div>

                    <br/>
                    <div>
                        Feel free to check out this {" "}
                        <a href="https://medium.com/queenly-engineering/high-resolution-3d-models-of-formal-dresses-using-lidar-and-photogrammetry-efe559041041" 
                        className="font-semibold text-yellow-500 hover:text-yellow-600">
                            Medium post
                        </a> I made on high resolution 3D scans for more information! 
                    </div>
                </div>
                <div className="md:w-1/2 text-right mt-8"> 
                {/* //flex item-center justify-center */}
                    <video loop autoPlay muted className="h-[800px] w-auto">
                        <source src="/HighResDress/3d model demo 2.mp4" />
                    </video>
                </div>
            </div>

           
        </section>
    )
}

export default HighResDressSection