import Logo from '@/components/Logo'
import cn from 'classNames'

// The classNames lib serves to concatenate css classNamees
// Define primary variant and size medium as as default
export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto">
        <a className="flex items-center py-4 mb-4 font-medium text-gray-900 title-font md:mb-0">
          <Logo />
        </a>

        <span className="py-4 font-light text-white">The Wellness Programme &copy; 2020</span>
      </div>
    </footer>
  )
}
