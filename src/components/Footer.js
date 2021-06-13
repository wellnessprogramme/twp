import Logo from '@/components/Logo'


// The classnames lib serves to concatenate css classes
// Define primary variant and size medium as as default
export default function Footer() {
  return (
    <footer class="bg-primary">
        <div class="container mx-auto flex flex-wrap p-5 flex-col items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 py-4">
                <Logo />
            </a>

            <span class="font-light text-white py-4">The Wellness Programme &copy; 2020</span>

        </div>
    </footer>
  )
}

