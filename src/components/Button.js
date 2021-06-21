import cn from 'classnames'

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  position = 'position'
}) {
  return (
    <button
      className={cn(
        'p-3 text-md font-bold rounded items-center transition duration-200 ease-in-out',
        {
          'bg-primary text-white': variant === 'primary',
          'bg-blue-400 text-blue-900': variant === 'secondary',
          'bg-transparent text-primary border-2 border-primary uppercase hover:bg-primary hover:text-white':
            variant === 'ghost',
          'bg-transparent text-white border-2 border-white uppercase hover:bg-white hover:text-black':
            variant === 'white-ghost',
          'flex mx-auto': position === 'center',
          'inline-flex': position === 'inline',
          'px-6': size === 'medium'
        }
      )}
    >
      {children}
    </button>
  )
}
