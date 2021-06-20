import cn from 'classnames'
import Button from "./Button"

export default function Hero() {
    return (
        <hero className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-5xl text-5xl mb-4 font-medium text-gray-900">Feel Great Again</h1>
                <p className="mb-8 leading-relaxed">
                    Do you struggle with bloating, gas and digestive issues?
                    Or perhaps you have persistent skin issues, fatigue or chronic pain?
                    I created the Wellness Programme to help find a solution to these problems.
                </p>
                <div className="flex justify-center">
                    <Button variant="primary">Learn More</Button>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
            </div>
        </hero>
        
        
    )
}
