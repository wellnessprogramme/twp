import cn from 'classnames'
import Logo from '@/components/Logo'
import Button from '@/components/Button'

// The classnames lib serves to concatenate css classes
// Define primary variant and size medium as as default
export default function Navbar() {
  return (
    <header className="text-gray-600 body-font bg-primary">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Logo />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 text-white px-4 font-medium	">Programmes</a>
          <a className="mr-5 text-white px-4 font-medium	">Shop</a>
          <a className="mr-5 text-white px-4 font-medium	">About Me</a>
          <a className="mr-5 text-white px-4 font-medium	">Blog</a>
        </nav>
        <div className="inline-flex items-center border-0 focus:outline-none rounded text-base mt-4 md:mt-0">
          <Button variant="white-ghost" position="inline">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 mr-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            Sign In
          </Button>
        </div>
      </div>
    </header>
  )
}
