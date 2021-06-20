import { Layout } from '@/components/Layout'
import Header from '@/components/Header'
import { Input } from '@/components/Inputs'
import { Textarea } from '@/components/Inputs'
import Button from '@/components/Button'

export default function Contact() {
  return (
    <Layout title="Contact">
      <Header
        title="Contact"
        subtitle="All programs have been created with you in mind. Choose one that is perfectly yours."
        image="https://coach-life.highseastudio.com/wp-content/uploads/2021/02/Programs_Hero-scaled-2.jpg"
      />

      <div className="mx-auto mb-20 lg:w-1/2 md:w-2/3">
        <div className="flex flex-wrap -m-2">
          <div className="w-1/2 p-2">
            <div className="relative">
              <Input id="name" label="Name" required />
            </div>
          </div>
          <div className="w-1/2 p-2">
            <div className="relative">
              <Input id="email" label="Email" required />
            </div>
          </div>
          <div className="w-full p-2">
            <div className="relative">
              <Textarea id="message" label="Message" required />
            </div>
          </div>
          <div className="w-full p-2">
            <Button variant="ghost">Submit</Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
