import Image from 'next/image'

import image from '../assets/food.jpg'
import Input from './Input'
import Textarea from './Textarea'

export default function ContactForm() {
  return (
    <div className="relative md:py-16">
      <Image src={image} placeholder="blur" objectFit="cover" layout="fill" alt="" />

      <div className="relative flex justify-end max-w-screen-xl mx-auto md:px-6">
        <form className="flex flex-col w-full gap-6 px-6 py-10 bg-gray-100 md:max-w-md md:rounded lef-0">
          <div className="space-y-6 text-center">
            <h2 className="text-lg font-black md:text-2xl">Write me a message</h2>
            <p className="leading-7 text-gray-700">
              Fill out the form below and I will respond as soon as possible
            </p>
          </div>
          <Input type="text" placeholder="Name" id="name" required />
          <Input type="email" placeholder="Email" id="email" required />
          <Input type="text" placeholder="How did you hear about me (optional)" id="about" />
          <Textarea id="message" placeholder="What can I help you?" required />
          <button className="w-full py-2.5 px-8 font-medium uppercase transition duration-300 border-2 rounded text-primary border-primary hover:bg-white">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
