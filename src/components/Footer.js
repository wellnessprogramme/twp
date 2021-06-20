import Logo from '@/components/Logo'
import cn from 'classnames'



// The classnames lib serves to concatenate css classes
// Define primary variant and size medium as as default
export default function Footer() {
  return (
    <footer className="bg-primary">
        <div className="container mx-auto flex flex-wrap p-5 flex-col items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 py-4">
                <Logo />
            </a>

            <span className="font-light text-white py-4">The Wellness Programme &copy; 2020</span>

        </div>
    </footer>
  )
}

