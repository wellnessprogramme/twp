import cn from 'classNames'
import Button from './Button'

// The classNames lib serves to concatenate css classNames
// Define primary variant and size medium as as default
export default function MyStoryCTA() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-10 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900 sm:text-5xl title-font">
            Hi, I&apos;m Jade!
          </h1>
          <p className="mx-auto my-5 text-base leading-relaxed lg:w-2/3">
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
