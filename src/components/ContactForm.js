import cn from 'classnames'
import Image from 'next/image'
import { useState } from 'react'

import image from '../assets/food.jpg'
import Input from './Input'
import Textarea from './Textarea'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatusMessage('')

    const name = e.currentTarget.name.value
    const email = e.currentTarget.email.value
    const message = e.currentTarget.message.value

    const body = {
      name,
      email,
      message
    }

    const res = await fetch('/api/mailer', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if (res.status === 200) {
      setStatusMessage('Message sent successfully')
      e.target.reset()
    } else {
      setStatusMessage('We had an internal error, please try again')
    }

    setLoading(false)
  }

  return (
    <div className="relative md:py-16">
      <Image src={image} placeholder="blur" objectFit="cover" layout="fill" alt="" />

      <div className="relative flex justify-end max-w-screen-xl mx-auto md:px-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-6 px-6 py-10 bg-gray-100 md:max-w-md md:rounded lef-0"
        >
          <div className="space-y-6 text-center">
            <h2 className="text-lg font-black md:text-2xl">Write me a message</h2>
            <p className="leading-7 text-gray-700">
              Fill out the form below and I will respond as soon as possible
            </p>
          </div>
          <Input type="text" placeholder="Name" id="name" required />
          <Input type="email" placeholder="Email" id="email" required />
          <Textarea id="message" placeholder="What can I help you?" required />
          <button
            disabled={loading}
            className={cn(
              'w-full py-2.5 px-8 font-medium uppercase transition duration-300 border-2 rounded text-primary border-primary hover:bg-white',
              { 'cursor-not-allowed': loading }
            )}
          >
            {loading ? 'Sending...' : 'Send'}
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
