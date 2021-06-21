import NextLink from 'next/link'
import { BsEnvelope, BsQuestionCircle } from 'react-icons/bs'

import Social from './Social'

function IconLink({ icon, title, label, href }) {
  return (
    <div className="flex flex-col items-center space-y-3">
      {icon}
      <p className="font-bold uppercase">{title}</p>
      <Link href={href}>
        <a className="hover:text-gray-400">{label}</a>
      </Link>
    </div>
  )
}

function Link({ children, href }) {
  return (
    <NextLink href={href}>
      <a className="transition-colors duration-200 hover:text-gray-400">{children}</a>
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
    <footer className="py-12 bg-gray-50">
      <div className="max-w-screen-xl px-6 mx-auto space-y-10 text-center">
        <div className="flex flex-col space-y-8 text-sm text-gray-500 md:justify-around md:space-y-0 md:flex-row">
          <IconLink
            icon={<BsQuestionCircle size={38} className="text-primary" />}
            title="Have questions?"
            label="Visit Our FAQs"
            href="/faq"
          />

          <IconLink
            icon={<BsEnvelope size={38} className="text-primary" />}
            title="Contact me"
            label="thewellnessprogramme@outlook.com"
            href="mailto:thewellnessprogramme@outlook.com"
          />
        </div>

        <Social />
        <div className="flex md:justify-center">
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
