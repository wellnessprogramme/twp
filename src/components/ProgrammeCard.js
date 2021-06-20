import cn from 'classnames'
import Button from "@/components/Button"

// The classNamenames lib serves to concatenate css classNamees
// Define primary variant and size medium as as default
export default function ProgrammesCard() {
  return (
    <section className="container m-auto px-8">
        <div className="flex flex-col items-center justify-center">

            <wrapper className="flex flex-col w-full">
                <card className="flex rounded-lg mb-16 overflow-hidden relative bg-white shadow">
                    <image className="w-3/6">
                        <img src="https://coach-life.highseastudio.com/wp-content/uploads/2021/01/Program1-1024x738.jpg">
                        
                        </img>
                    </image>
                    <description className="w-3/6 p-16 flex flex-col absolute top-0 right-0 items-start	justify-between h-full">
                        <div className="">
                            <div className="text-4xl tracking-wider	font-bold mb-8">The Wellness Programme</div>
                            <div className="text-lg leading-7 text-gray-600 tracking-wider">This 12 week programme combines the most powerful methods of healing, designed to improve gut health, detoxify the body and cleanse from harmful organisms, with 1-2-1 coaching.</div>
                        </div>

                        <Button variant="ghost">View Details</Button>

                    </description>
                    
                </card>
                
            </wrapper>

        </div>
    </section>
  )
}