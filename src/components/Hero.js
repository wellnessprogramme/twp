import Image from 'next/image'
import Link from 'next/link'

import hero from '@/assets/01.png'

export default function Hero() {
  return (
    <div className="relative h-[500px] lg:h-[800px] xl:h-screen">
      <Image
        src={hero}
        alt="Jade"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        quality="100"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30">
        <div className="flex flex-col items-center justify-center h-full p-16 space-y-8 md:space-y-10">
          <h1 className="text-4xl font-black text-white md:text-5xl lg:text-6xl xl:text-7xl">
            Feel Great Again
          </h1>

          <p className="text-lg text-center text-white md:text-xl">
            If you are not willing to risk the usual, you will have to settle for the ordinary. I’m
            here to help and share my story.
          </p>
          <Link href="/">
            <a className="block">
              <button className="px-8 py-3 text-sm font-bold text-white uppercase transition duration-300 border-2 border-white rounded hover:bg-white hover:text-primary">
                Learn more
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
