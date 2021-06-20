import cn from 'classNames'
import Button from '@/components/Button'

// The classNames lib serves to concatenate css classNamees
// Define primary variant and size medium as as default
export default function ProgrammesGrid() {
  return (
    <section>
      <div className="container px-5 py-24 mx-auto lg:w-2/3">
        <div className="flex flex-wrap">
          <div className="w-6/12 pr-2">
            <div
              className="relative duration-300 transform bg-cover rounded pb-full hover:-translate-y-2"
              style={{
                backgroundImage:
                  'url("https://coach-life.highseastudio.com/wp-content/uploads/2021/01/Program1-1024x738.jpg")'
              }}
            >
              <div className="absolute flex flex-col items-start w-full h-full p-10 t-0 l-0">
                <h4 className="mb-6 text-4xl font-bold text-white">The Wellness Programme</h4>
                <Button variant="white-ghost">Learn More</Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-6/12 pl-2">
            <div
              className="relative mb-6 duration-300 transform bg-cover rounded pb-50-calc hover:-translate-y-2"
              style={{
                backgroundImage:
                  'url("https://coach-life.highseastudio.com/wp-content/uploads/2021/01/Program2-1024x738.jpg")'
              }}
            >
              <div className="absolute flex flex-col items-start w-full h-full p-5 t-0 l-0">
                <h4 className="mb-6 text-4xl font-bold text-white">Group Parasite Cleanse</h4>
                <Button variant="white-ghost">Learn More</Button>
              </div>
            </div>
            <div
              className="relative mb-4 duration-300 transform bg-cover rounded pb-50-calc hover:-translate-y-2"
              style={{
                backgroundImage:
                  'url("https://coach-life.highseastudio.com/wp-content/uploads/2021/01/Program2-1024x738.jpg")'
              }}
            >
              <div className="absolute flex flex-col items-start w-full h-full p-5 t-0 l-0">
                <h4 className="mb-6 text-4xl font-bold text-white">The Detox Academy</h4>
                <Button variant="white-ghost">Learn More</Button>
              </div>
            </div>
          </div>

          <div className="flex content-center justify-center w-full mt-6">
            <a
              href="/programmes"
              className="flex pb-1 mx-auto font-bold text-center border-b-2 border-black"
            >
              View All Programmes
            </a>
          </div>

          <div className="flex flex-col w-6/12 pl-2">
            <div
              className="mb-6 bg-cover rounded pb-50-calc"
              style={{
                backgroundImage:
                  'url("https://coach-life.highseastudio.com/wp-content/uploads/2021/01/Program2-1024x738.jpg")'
              }}
            >
              <div className="flex flex-col items-start w-full h-full p-5 t-0 l-0">
                <h4 className="text-4xl font-bold text-white">Group Parasite Cleanse</h4>
                <Button variant="white-ghost">Learn More</Button>
              </div>
            </div>
            <div
              className="mb-4 bg-cover rounded pb-50-calc"
              style={{
                backgroundImage:
                  'url("https://coach-life.highseastudio.com/wp-content/uploads/2021/01/Program2-1024x738.jpg")'
              }}
            >
              <div className="flex flex-col items-start w-full h-full p-5 t-0 l-0">
                <h4 className="text-4xl font-bold text-white">The Detox Academy</h4>
                <Button variant="white-ghost">Learn More</Button>
              </div>
            </div>
          </div>

          <div className="flex content-center justify-center w-full">
            <a
              href="/programmes"
              className="flex pb-1 mx-auto font-bold text-center border-b-2 border-black"
            >
              View All Programmes
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
