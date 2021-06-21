import Button from '@/components/Button'

export default function ProgrammesCard() {
  return (
    <section className="container px-8 m-auto">
      <div className="flex flex-col items-center justify-center">
        <wrapper className="flex flex-col w-full">
          <card className="relative flex mb-16 overflow-hidden bg-white rounded-lg shadow">
            <image className="w-3/6">
              <img src="https://coach-life.highseastudio.com/wp-content/uploads/2021/01/Program1-1024x738.jpg"></img>
            </image>
            <description className="absolute top-0 right-0 flex flex-col items-start justify-between w-3/6 h-full p-16">
              <div className="">
                <div className="mb-8 text-4xl font-bold tracking-wider">The Wellness Programme</div>
                <div className="text-lg leading-7 tracking-wider text-gray-600">
                  This 12 week programme combines the most powerful methods of healing, designed to
                  improve gut health, detoxify the body and cleanse from harmful organisms, with
                  1-2-1 coaching.
                </div>
              </div>

              <Button variant="ghost">View Details</Button>
            </description>
          </card>
        </wrapper>
      </div>
    </section>
  )
}
