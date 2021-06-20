import { Layout } from '@/components/Layout'
import Header from '@/components/Header'
import { Input } from '@/components/Inputs'
import { Textarea } from '@/components/Inputs'
import Button from '@/components/Button'

export default function Contact() {
  return (
    <Layout
      title="Contact"
    >

    <Header 
      title="Contact"
      subtitle="All programs have been created with you in mind. Choose one that is perfectly yours."
      image="https://coach-life.highseastudio.com/wp-content/uploads/2021/02/Programs_Hero-scaled-2.jpg"
        />
    
    <div class="lg:w-1/2 md:w-2/3 mx-auto mb-20">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <Input id="name" label="Name" required />
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <Input id="email" label="Email" required />
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <Textarea id="message" label="Message" required />
          </div>
        </div>
        <div class="p-2 w-full">
          <Button 
            variant="ghost" 
            children="Submit"
            />
        </div>
      </div>
    </div>


    </Layout>
  )
}