import cn from 'classNames'
import Label from './Label'

export function Input({ id, label, ...props }) {
  return (
    <div>
      <Label label={label} id={id} />
      <input
        id={id}
        name={id}
        {...props}
        className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
      />
    </div>
  )
}

export function Textarea({ id, label, ...props }) {
  return (
    <div>
      <Label label={label} id={id} />
      <textarea
        id={id}
        name={id}
        {...props}
        className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
      />
    </div>
  )
}
