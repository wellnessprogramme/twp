import cn from 'classnames'
import Button from "@/components/Button"

// The classnames lib serves to concatenate css classes
// Define primary variant and size medium as as default
export default function ProgrammesGrid() {
  return (
    <section>
        <div class="container px-5 py-24 mx-auto lg:w-2/3">

        <div class="flex flex-wrap">

                <div class="w-6/12 pr-2">
                <div class="bg-cover pb-full rounded" style={{backgroundImage: 'url("https://coach-life.highseastudio.com/wp-content/uploads/2021/01/Program1-1024x738.jpg")'}}>
                        <div class="flex flex-col  p-5 h-full w-full t-0 l-0 items-start">
                            <h4 class="text-white font-bold text-4xl">The Wellness Programme</h4>
                            <Button variant="white-ghost">Learn More</Button>

                        </div>
                    </div>

                </div>

                <div class="w-6/12 pl-2 flex flex-col">
                    <div class="bg-cover mb-6 pb-50-calc rounded" style={{backgroundImage: 'url("https://coach-life.highseastudio.com/wp-content/uploads/2021/01/Program2-1024x738.jpg")'}}>
                        <div class="flex flex-col  p-5 h-full w-full t-0 l-0 items-start">
                            <h4 class="text-white font-bold text-4xl">Group Parasite Cleanse</h4>
                            <Button variant="white-ghost">Learn More</Button>

                        </div>
                    </div>
                    <div class="bg-cover mb-4 pb-50-calc rounded" style={{backgroundImage: 'url("https://coach-life.highseastudio.com/wp-content/uploads/2021/01/Program2-1024x738.jpg")'}}>
                        <div class="flex flex-col  p-5 h-full w-full t-0 l-0 items-start">
                            <h4 class="text-white font-bold text-4xl">The Detox Academy</h4>
                            <Button variant="white-ghost">Learn More</Button>

                        </div>
                    </div>
                </div>

                <div class="flex justify-center content-center w-full">
                    <a href="/programmes" class="font-bold text-center flex mx-auto border-b-2 border-black pb-1">View All Programmes</a>
                </div>

            </div>

            
        </div>
    </section>
  )
}