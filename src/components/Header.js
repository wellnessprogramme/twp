export default function Header({ image, title, subtitle }) {
  return (
    <header
      className="mb-20 bg-cover rounded h-300px"
      style={{
        backgroundImage:
          'url("{https://coach-life.highseastudio.com/wp-content/uploads/2021/02/Programs_Hero-scaled-2.jpg}")'
      }}
    >
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <div className="mb-4 text-5xl font-medium text-gray-900 title-font sm:text-5xl">
            {title}
          </div>
          <p className="mb-8 leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </header>
  )
}
