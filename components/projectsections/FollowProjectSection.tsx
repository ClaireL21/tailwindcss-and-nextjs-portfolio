import Image from "next/image"

const tags = [
    { skill: "Swift"},
    { skill: "Objective-C"},
    { skill: "XCode"},
    { skill: "Figma"}
]

const projects = [
    {
        image: "/FollowProj/Follow 1.png",
    },
    {
        image: "/FollowProj/Follow 2.png",
    },
    {
        image: "/FollowProj/Follow 3.png",
    },
    {
        image: "/FollowProj/Follow 4.png",
    },
]

const FollowProjectSection = () => {
    return (
        <section id="follow">
            <h1 className="text-center font-bold text-3xl">
                Follow/Following Project
            </h1>

            <br/>

            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-1/2 text:left">
                    <div className="mt-8">
                        This project was done as part of my internship at {" "}
                        <a href="https://queenly.com/how-queenly-works" className="font-semibold text-yellow-500 hover:text-yellow-600">
                            Queenly
                        </a>
                        , a marketplace
                        for formalwear dresses. Users of the Queenly app have their own closets, where 
                        they can post dress listings they wish to sell. For the iOS app, I implemented the Follow/Following feature, 
                        allowing buyers and sellers to keep track of their favorite closets.
                    </div>

                    <br/>

                    <div>
                        This involved functionality for following closets of Queenly partners, designers, or other users.
                        To do so, I retrieved and updated the user following lists using Firebase API endpoints,
                        and display user follow actions through various UI elements across the app.
                        I created a following carousel and following list page in the home feed, and 
                        added follow/unfollow buttons to user closet, partner, and designer pages.

                    </div>

                    <br/>
                    
                    <div className="mt-2"> 
                        To the right is a video demonstrating the Follow/Following functionality 
                        and below are some in-app screenshots of the feature!
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
                    
                </div>

                <div className="mt-8 md:w-1/2 text:right">
                    <div className="flex item-center justify-center">
                        <video loop autoPlay muted className="h-[600px] w-auto">
                            <source src="/FollowProj/FollowDem.mp4" />
                        </video>
                    </div>
                </div>
            </div>


            <div className="mt-8 flex items-center justify-center"> 
                <div className="md:grid md:grid-cols-4 md:grid-rows-1 md:gap-8">
                    {projects.map((project, idx) => {
                        return (
                            <div className="mt-8" key={idx}>
                                <Image 
                                    className="rounded-xl"
                                    src={project.image}
                                    alt="" 
                                    width={200} 
                                    height={200}>
                                </Image>
                            </div>
                        ) 
                    })}
                </div>
            </div>

        </section>
    )
}

export default FollowProjectSection