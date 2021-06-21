import Logo from '@/components/Logo'
import Button from '@/components/Button'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 text-gray-600 body-font bg-primary">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          <Logo />
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <a className="px-4 mr-5 font-medium text-white ">Programmes</a>
          <a className="px-4 mr-5 font-medium text-white ">Shop</a>
          <a className="px-4 mr-5 font-medium text-white ">About Me</a>
          <a className="px-4 mr-5 font-medium text-white ">Blog</a>
          <a className="px-4 mr-5 font-medium text-white ">Contact</a>
        </nav>
        <div className="inline-flex items-center mt-4 text-base border-0 rounded focus:outline-none md:mt-0">
          <Button variant="white-ghost" position="inline">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              className="w-5 h-5 mr-1"
              viewBox="0 0 24 24"
            >
              <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
            </svg>
            Sign In
          </Button>
        </div>
      </div>
    </header>
  )
}
