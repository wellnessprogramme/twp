import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { imageParse } from '@/lib/imageParse'

import Input from './Input'

export default function FreeProgrammes({ programmes }) {
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatusMessage('')

    const fname = e.currentTarget.firstName.value
    const sname = e.currentTarget.surName.value
    const email = e.currentTarget.email.value

    const body = {
      fname,
      sname,
      email
    }

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if (res.status === 201) {
      setStatusMessage("You're in! Please check you inbox.")
      e.target.reset()
    } else {
      setStatusMessage('You have already signed up. Check Your email inbox or spam folder.')
    }

    setLoading(false)
  }

  return (
    <div className="py-12 bg-gray-100 md:py-24">
      <div className="max-w-screen-md px-6 mx-auto space-y-6 text-center md:space-y-10">
        <h2 className="text-lg font-black md:text-5xl">Try one of my Free Programmes</h2>
        <p className="leading-7 text-gray-700 md:leading-9 md:text-lg">
          Learn how to reset your gut, cleanse from parasites and enhance your wellness, with one of
          my free programmes.
        </p>
      </div>
      <div className="grid mt-12 md:grid-cols-3">
        {programmes.map(item => (
          <div className="relative h-80" key={item.id}>
            <Image
              src={imageParse(item.featured_image)}
              alt={item.title}
              layout="fill"
              className="z-0"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30">
              <div className="flex flex-col items-center justify-center h-full p-4 space-y-4 text-center">
                <Link href={`/programmes/${item.slug}`}>
                  <a>
                    <h3 className="text-xl font-bold text-white md:text-3xl">{item.title}</h3>
                  </a>
                </Link>

                <Link href={`/programmes/${item.slug}`}>
                  <a className="block">
                    <button className="w-full px-3 py-1 text-xs font-medium text-white uppercase transition duration-300 border-2 border-white rounded md:w-auto hover:text-black hover:bg-white">
                      Learn more
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-screen-md px-6 mx-auto mt-16 space-y-6 text-center md:space-y-10">
        <h3 className="text-lg font-black md:text-3xl">
          Get exclusive content sent directly by me
        </h3>
        <p className="text-gray-700 md:leading-9 md:text-lg">
          Please enter your details below and all 3 programmes will be sent direct to your email
          address. Please don&apos;t forget to check your junk folder.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:flex-row">
          <Input
            placeholder="Fist name"
            aria-label="Fist name"
            type="text"
            required
            id="firstName"
          />
          <Input placeholder="Surname" aria-label="Surname" type="text" required id="surName" />
          <Input placeholder="Email" aria-label="" type="email" required id="email" />

          <button
            type="submit"
            disabled={loading}
            className={cn(
              'w-full py-2.5 px-8 font-medium uppercase transition duration-300 border-2 rounded text-primary border-primary hover:bg-white',
              { 'cursor-not-allowed': loading }
            )}
          >
            Join
          </button>

          <span
            className={cn('text-center opacity-0 transition duration-300', {
              'opacity-100': statusMessage
            })}
          >
            {statusMessage}
          </span>
        </form>
      </div>
    </div>
  )
}
