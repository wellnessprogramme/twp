import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'

import logo from '@/assets/logo.svg'

export default function Nav() {
  return (
    <>
      <div className="z-50 h-16 text-white bg-primary">
        <div className="flex items-center justify-between max-w-screen-xl px-6 py-2 mx-auto">
          <Image src={logo} alt="" />
          <div className="lg:hidden">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>

      {/* <nav className="absolute z-40 w-2/3 min-h-screen p-6 bg-white bg-opacity-95">
        <ul>
          <li>a</li>
          <li>a</li>
          <li>c</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
      </nav> */}
    </>
  )
}
