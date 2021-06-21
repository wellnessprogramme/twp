import Link from 'next/link'
import { FaFacebookF as Facebook, FaInstagram as Instagram } from 'react-icons/fa'

const Links = [
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/Thewellnessprogramme/'
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/thewellnessprogramme/'
  }
]

const Icons = {
  Facebook,
  Instagram
}

export default function Social() {
  return (
    <ul className="inline-flex space-x-4">
      {Links.map(({ label, url }) => {
        const Icon = Icons[label]
        return (
          <li
            className="p-2 text-black transition duration-200 border-2 border-gray-300 rounded-full hover:text-primary"
            key={url}
          >
            <Link href={url}>
              <a target="_blank">
                <Icon />
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
