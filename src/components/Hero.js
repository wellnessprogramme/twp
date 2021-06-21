import Button from './Button'

export default function Hero() {
  return (
    <hero className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-5xl font-medium text-gray-900 title-font sm:text-5xl">
            Feel Great Again
          </h1>
          <p className="mb-8 leading-relaxed">
            Do you struggle with bloating, gas and digestive issues? Or perhaps you have persistent
            skin issues, fatigue or chronic pain? I created the Wellness Programme to help find a
            solution to these problems.
          </p>
          <div className="flex justify-center">
            <Button variant="primary">Learn More</Button>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </hero>
  )
}
