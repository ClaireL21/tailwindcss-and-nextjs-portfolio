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
                <video autoPlay controls style={{ width: '1000px', height: '500px' }}>
                    <source src="/mc.mov" />
                </video>
            </div>

            <div className="mt-8">
                Mini Minecraft: Pandora's Blocks is a group final project for CIS 4600/5600: Introduction to Computer Graphics.
                
                Personal Contributions: Player physics, Multithreading, Additional Biomes
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
                Player Physics
            </h1>

            <h1 className="text-left font-bold text-2xl">
                Multithreading
            </h1>

            <h1 className="text-left font-bold text-2xl">
                Additional Biomes
            </h1>

        </section>
    )
}

export default MiniMinecraftSection