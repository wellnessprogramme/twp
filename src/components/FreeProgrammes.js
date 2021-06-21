import Button from './Button'
import { Input } from './Inputs'

export default function FreeProgrammes() {
  return (
    <section className="text-gray-600 body-font" id="freeprogrammes">
      <div className="container flex flex-wrap px-5 py-24 mx-auto sm:flex-nowrap">
        <div className="flex flex-col p-10 overflow-hidden bg-gray-100 rounded lg:w-2/3 md:w-1/2 sm:mr-10 ">
          <div className="flex flex-col flex-wrap items-center w-full mb-12 text-center">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
              Try One Of My Free Programmes
            </h1>
            <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
              Learn how to reset your gut, cleanse from parasites and enhance your wellness, with
              one of my free programmes.
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="p-1 xl:w-1/3 md:w-1/2">
              <div className="p-6">
                <img
                  className="object-cover object-center w-full h-40 mb-6 rounded"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h2 className="mb-4 text-lg font-medium text-center text-gray-900 title-font">
                  7 Steps To Wellness
                </h2>
              </div>
            </div>
            <div className="p-1 xl:w-1/3 md:w-1/2">
              <div className="p-6">
                <img
                  className="object-cover object-center w-full h-40 mb-6 rounded"
                  src="https://dummyimage.com/721x401"
                  alt="content"
                />
                <h2 className="mb-4 text-lg font-medium text-center text-gray-900 title-font">
                  3 Day Parasite Cleanse
                </h2>
              </div>
            </div>
            <div className="p-1 xl:w-1/3 md:w-1/2">
              <div className="p-6">
                <img
                  className="object-cover object-center w-full h-40 mb-6 rounded"
                  src="https://dummyimage.com/722x402"
                  alt="content"
                />
                <h2 className="mb-4 text-lg font-medium text-center text-gray-900 title-font">
                  7 Day Gut Reset
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mt-8 bg-white rounded lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
          <h2 className="mb-1 text-xl font-medium text-center text-gray-900 title-font">
            Enter Your Details
          </h2>
          <p className="mb-5 leading-relaxed text-center text-gray-600">
            Please enter your details below and all 3 programmes will be sent direct to your email
            address.{' '}
          </p>
          <div className="relative mb-4">
            <Input id="fname" label="First Name" required />
          </div>
          <div className="relative mb-4">
            <Input id="sname" label="Surname" required />
          </div>
          <div className="relative mb-6">
            <Input id="email" label="Email Address" required />
          </div>
          <Button variant="ghost">Submit</Button>
          <p className="mt-3 text-xs text-gray-500">
            *Don&apos;t forget to check your spam or junk folder.
          </p>
        </div>
      </div>
    </section>
  )
}
