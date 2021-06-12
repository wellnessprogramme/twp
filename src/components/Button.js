import cn from 'classnames'
// The classnames lib serves to concatenate css classes
// Define primary variant and size medium as as default
export default function Button({ children, variant = 'primary', size = 'medium' }) {
  return (
    <button
      // Default styles at the beginning
      className={cn('p-4 text-sm', {
        // if the variant is equal to 'primary', apply the styles on the left
        'bg-green-400 text-green-900': variant === 'primary',
        'bg-blue-400 text-blue-900': variant === 'secondary',
        'px-6': size === 'medium'
      })}
    >
      {children}
    </button>
  )
}
