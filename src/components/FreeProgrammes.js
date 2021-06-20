import cn from 'classnames'
import Button from './Button'
import { Input } from './Inputs'



export default function FreeProgrammes() {
  return (
  <section className="text-gray-600 body-font" id="freeprogrammes">
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-100 rounded overflow-hidden sm:mr-10 p-10 flex flex-col ">
        <div className="flex flex-wrap w-full mb-12 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Try One Of My Free Programmes</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Learn how to reset your gut, cleanse from parasites and enhance your wellness, with one of my free programmes.</p>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-1">
            <div className="p-6">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
              <h2 className="text-lg text-center text-gray-900 font-medium title-font mb-4">7 Steps To Wellness</h2>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-1">
            <div className="p-6">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
              <h2 className="text-lg text-center text-gray-900 font-medium title-font mb-4">3 Day Parasite Cleanse</h2>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-1">
            <div className="p-6">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
              <h2 className="text-lg text-center text-gray-900 font-medium title-font mb-4">7 Day Gut Reset</h2>
            </div>
          </div>
        </div>
        
      </div>

      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded">
        <h2 className="text-gray-900 text-xl mb-1 font-medium title-font text-center">Enter Your Details</h2>
        <p className="leading-relaxed mb-5 text-gray-600 text-center">Please enter your details below and all 3 programmes will be sent direct to your email address. </p>
        <div className="relative mb-4">
          <Input id="fname" label="First Name" required />
        </div>
        <div className="relative mb-4">
          <Input id="sname" label="Surname" required />
        </div>
        <div className="relative mb-6">
          <Input id="email" label="Email Address" required />
        </div>
        <Button 
          variant="ghost" 
          children="Submit"
          />
        <p className="text-xs text-gray-500 mt-3">*Don't forget to check your spam or junk folder.</p>
      </div>
    </div>
  </section>
  )
}