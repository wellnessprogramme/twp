import cn from 'classnames'

export default function Header({
    image,
    title,
    subtitle,}) {
    return (
        <header className="bg-cover mb-20 rounded h-300px" style={{backgroundImage: 'url("{https://coach-life.highseastudio.com/wp-content/uploads/2021/02/Programs_Hero-scaled-2.jpg}")'}}>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <div className="title-font sm:text-5xl text-5xl mb-4 font-medium text-gray-900">{title}</div>
                <p className="mb-8 leading-relaxed">
                    {subtitle}
                </p>
                </div>
            </div>
        </header>
        

    )
}