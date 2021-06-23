import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'

import logo from '@/assets/logo.svg'

export default function Nav() {
  return (
    <div className="h-16 text-white bg-primary">
      <div className="flex items-center justify-between max-w-screen-xl px-6 py-2 mx-auto">
        <Image src={logo} alt="" />
        <div className="lg:hidden">
          <AiOutlineMenu size={22} />
        </div>
      </div>
    </div>
  )
}
