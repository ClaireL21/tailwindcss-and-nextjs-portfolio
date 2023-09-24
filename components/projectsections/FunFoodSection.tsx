import Image from "next/image"

const tags = [
    { skill: "Java"},
    { skill: "Web scraping"},
    { skill: "Jsoup"},
]

const FunFoodSection = () => {
    return (
        <section id="funfood">
            <h1 className="text-center font-bold text-3xl">
                Fun Food Finder
            </h1>

            <div className="mt-8">
                This project was a final project for NETS 1500, where
                I worked in a group of three to create a web-scraping app for 
                locating recipes based on user entered filters. 
                It uses Java’s Jsoup library to webscrape HTML and locate specific recipes.

            </div>

            <br/>
                
            <div>
                Personal contributions:
                <ul className="px-8 list-disc">
                    <li>Responsible for writing program to establish website connection and access & parse relevant data, </li>
                    <li>Designed and implemented UI & UX for displaying recipes on Java GUI app based on user filters</li>
                </ul>
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
            <h1 className="text-left font-bold text-2xl">
                Overview
            </h1>


                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-3/5 text:left">
                    <div className="mt-2"> 
                    Users can:

                    <ul className="px-8 list-disc">
                        <li>Enter their individual allergies</li>
                        <li>Check off common dietary restrictions</li>
                        <li>Filter recipes based on meal types (i.e. lunch or dinner)</li>
                    </ul>

                </div>

                <br/>
                
                <div>
                    Once recipes are located on the web:
                    <ul className="px-8 list-disc">
                        <li>Recipes can be sorted based on star ratings or cook time</li>
                        <li>Check off common dietary restrictions</li>
                        <li>Recipe instructions are scraped and displayed in the app itself. </li>
                    </ul>
                </div>

                <br/>

                <div>
                    Lastly, as a fun, extra feature, we implemented a random meal plan option. 
                    A random breakfast, lunch, dinner, snack, and dessert recipe is displayed 
                    for the user as their meal plan for the day.
                </div>

                </div>
                <div className="md:w-2/5 text-right flex item-center justify-center mt-8">
                    <Image 
                        className="rounded-xl"
                        src="/FunFood/FFF.png"
                        alt="" 
                        width={500} 
                        height={500}>
                    </Image>
                </div>
            </div>

            <br/>

            <h1 className="mt-8 text-left font-bold text-2xl">
                How it works
            </h1>

            <div className="mt-2">
            Fun Food Finder is a web scraping application that, at a high level, 
            connects to a recipe webpage, parses the page for relevant information, 
            and then uses that data to filter out which recipes it displays to the user.

            </div>

            <br/>

            <div>
                First, the user inputs ‘filter’ information, such as allergies, dietary restrictions, 
                and ingredients they have on hand. Once they press ‘search,’ the program will connect to 
                a recipe webpage, in this case, the AllRecipes home page. The web scraping functionality 
                is accomplished with jsoup, which allows the program to fetch URLs to connect to web pages, 
                and then extract information from these pages. Next, the program will use the filters 
                inputted by the user to determine which branching web pages it needs to follow from the 
                AllRecipes home page.
            </div>

            <br/>

            <div>
                Once all relevant recipes are found, the app will sort and subsequently display the recipes 
                based on user preference (star rating, cook time, or calories). If the user decides to edit 
                their filters, all they need to do is press search again!
            </div>

            <br/>

            <div>
                Below is a screenshot of our Java GUI app!
            </div>

            <div className="text-center flex item-center justify-center mt-8">
                <Image 
                    className="rounded-xl"
                    src="/FunFood/fff2.png"
                    alt="" 
                    width={800} 
                    height={800}>
                </Image>
            </div>


            

        </section>
    )
}

export default FunFoodSection