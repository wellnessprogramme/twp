import cn from 'classnames'
import Button from "@/components/Button"

// The classnames lib serves to concatenate css classes
// Define primary variant and size medium as as default
export default function ProgrammesGrid() {
  return (
    <section>
        <div className="container px-5 py-24 mx-auto lg:w-2/3">

        <div className="flex flex-wrap">

                <div className="w-6/12 pr-2">
                    <div className="bg-cover pb-full rounded relative transform hover:-translate-y-2 duration-300" style={{backgroundImage: 'url("https://coach-life.highseastudio.com/wp-content/uploads/2021/01/Program1-1024x738.jpg")'}}>
                            <div className="flex flex-col absolute p-10 h-full w-full t-0 l-0 items-start">
                                <h4 className="text-white font-bold text-4xl mb-6">The Wellness Programme</h4>
                                <Button variant="white-ghost">Learn More</Button>

                            </div>
                        </div>

                </div>

                <div className="w-6/12 pl-2 flex flex-col">
                    <div className="bg-cover mb-6 pb-50-calc rounded relative transform hover:-translate-y-2 duration-300" style={{backgroundImage: 'url("https://coach-life.highseastudio.com/wp-content/uploads/2021/01/Program2-1024x738.jpg")'}}>
                        <div className="flex flex-col absolute p-5 h-full w-full t-0 l-0 items-start">
                            <h4 className="text-white font-bold text-4xl mb-6">Group Parasite Cleanse</h4>
                            <Button variant="white-ghost">Learn More</Button>

                        </div>
                    </div>
                    <div className="bg-cover mb-4 pb-50-calc rounded relative transform hover:-translate-y-2 duration-300" style={{backgroundImage: 'url("https://coach-life.highseastudio.com/wp-content/uploads/2021/01/Program2-1024x738.jpg")'}}>
                        <div className="flex flex-col absolute p-5 h-full w-full t-0 l-0 items-start">
                            <h4 className="text-white font-bold text-4xl mb-6">The Detox Academy</h4>
                            <Button variant="white-ghost">Learn More</Button>

                        </div>
                    </div>
                </div>

                <div className="flex justify-center content-center w-full mt-6">
                    <a href="/programmes" className="font-bold text-center flex mx-auto border-b-2 border-black pb-1">View All Programmes</a>
                </div>

            </div>

            
        </div>
    </section>
  )
}