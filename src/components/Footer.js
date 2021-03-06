import NextLink from 'next/link'
import { BsEnvelope, BsQuestionCircle } from 'react-icons/bs'

import Social from './Social'

function IconLink({ icon, title, label, href }) {
  return (
    <div className="flex flex-col items-center space-y-3">
      {icon}
      <p className="font-bold uppercase">{title}</p>
      <NextLink href={href}>
        <a className="transition duration-300 hover:text-gray-400">{label}</a>
      </NextLink>
    </div>
  )
}

function Link({ children, href }) {
  return (
    <NextLink href={href}>
      <a className="transition-colors duration-300 hover:text-gray-400">{children}</a>
    </NextLink>
  )
}

function LinksGroup({ children }) {
  return (
    <div className="flex flex-col w-1/2 space-y-8 text-sm font-medium text-left text-gray-500 uppercase md:flex-row md:space-y-0 md:w-auto md:space-x-12">
      {children}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-screen-xl px-6 mx-auto space-y-10 text-center">

        <Social />
        <div className="flex md:space-x-12 md:justify-center">
          <LinksGroup>
            <Link href="/">Home</Link>
            <Link href="/programmes">Programmes</Link>
            <Link href="/shop">Shop</Link>
          </LinksGroup>
          <LinksGroup>
            <Link href="/my-story">My Story</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </LinksGroup>
        </div>
        <div className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} The Wellness Programme. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
