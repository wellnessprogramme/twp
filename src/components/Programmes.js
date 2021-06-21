import Image from 'next/image'
import Link from 'next/link'

import { imageParse } from '@/lib/imageParse'

export default function Programmes({ programmes }) {
  return (
    <div className="grid max-w-screen-xl gap-8 px-6 mx-auto my-16 md:my-24 md:grid-cols-2">
      {programmes?.map(item => (
        <div
          className="overflow-hidden transition duration-300 transform rounded-lg md:first:row-span-2 hover:shadow-xl hover:-translate-y-1"
          key={item.id}
        >
          <div className="relative min-h-[16rem] md:h-full">
            <Image
              src={imageParse(item.featured_image)}
              layout="fill"
              objectFit="cover"
              className="z-0"
              alt={item.title}
            />
            <div className="absolute inset-0 md:bg-black opacity-20" />
          </div>
          <div className="p-6 space-y-4 bg-gray-100 md:space-y-8 md:bg-transparent md:absolute md:top-4">
            <Link href={`/programmes/${item.slug}`}>
              <a className="block">
                <h3 className="text-lg font-black md:text-white md:text-3xl">{item.title}</h3>
              </a>
            </Link>

            <p className="md:hidden">{item.description}</p>
            <Link href={`/programmes/${item.slug}`}>
              <a className="block">
                <button className="w-full md:w-auto px-5 font-medium py-1.5 text-sm uppercase border-2 rounded border-primary text-primary md:border-white md:hover:text-black transition duration-300 md:hover:bg-white md:text-white">
                  Learn more
                </button>
              </a>
            </Link>
          </div>
        </div>
      ))}

      <div className="mx-auto md:mt-6 md:col-span-2">
        <Link href="/programmes">
          <a className="pb-2 text-sm font-black text-center uppercase transition duration-300 border-b-2 border-primary text-primary hover:opacity-70">
            View all programmes
          </a>
        </Link>
      </div>
    </div>
  )
}
