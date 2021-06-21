import Link from 'next/link'

export default function MyStory() {
  return (
    <div className="py-12 bg-gray-100 md:py-24">
      <div className="max-w-screen-md px-6 mx-auto space-y-6 text-center md:space-y-10">
        <h2 className="text-lg font-black md:text-5xl">Hi, I&apos;m Jade!</h2>
        <p className="leading-7 text-gray-700 md:leading-9 md:text-lg">
          I know how it feels to wake up everyday plagued by symptoms, to plan your life around your
          illness and to be left helpless when no one can give you answers. That’s why I spent 6
          years searching for a solution, to learn what Doctors couldn’t tell me. I visited experts
          across the U.K and America (America is the entire continent, the United States is within
          the continent, not the entire continent), I studied courses and read books like my life
          depended on it – because it did. Now, everything I’ve learnt, I’ve put into the Wellness
          Programme. I decided it was my mission to share these answers with the world, so that
          others can learn how to heal too. I promise to help you in every way that I can and to be
          there for you every step of the way. Let’s go on a journey together…
        </p>

        <Link href="/my-story">
          <a className="block">
            <button className="px-8 py-3 text-sm font-bold uppercase transition duration-300 border-2 rounded border-primary text-primary hover:bg-primary hover:text-white">
              Read my story
            </button>
          </a>
        </Link>
      </div>
    </div>
  )
}
