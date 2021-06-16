import cn from 'classnames'
import Button from './Button'

// The classnames lib serves to concatenate css classes
// Define primary variant and size medium as as default
export default function MyStoryCTA() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-5xl text-5xl font-bold title-font mb-4 text-gray-900">
            Hi, I'm Jade!
          </h1>
          <p className="lg:w-2/3 my-5 mx-auto leading-relaxed text-base">
            I know how it feels to wake up everyday plagued by symptoms, to plan your life around
            your illness and to be left helpless when no one can give you answers. That’s why I
            spent 6 years searching for a solution, to learn what Doctors couldn’t tell me. I
            visited experts across the U.K and America, I studied courses and read books like my
            life depended on it – because it did. Now, everything I’ve learnt, I’ve put into the
            Wellness Programme. I decided it was my mission to share these answers with the world,
            so that others can learn how to heal too. I promise to help you in every way that I can
            and to be there for you every step of the way. Let’s go on a journey together…
          </p>
        </div>

        <Button variant="ghost" position="center">
          Read My Story
        </Button>
      </div>
    </section>
  )
}
