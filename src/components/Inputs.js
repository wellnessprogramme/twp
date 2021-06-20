import cn from 'classnames'
import Label from './Label'


export function Input({ id, label, ...props }) {
    return (
      <div>
        <Label label={label} id={id} />
        <input id={id} name={id} {...props} className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
    )
  }
  
  export function Textarea({ id, label, ...props }) {
    return (
      <div>
        <Label label={label} id={id} />
        <textarea id={id} name={id} {...props} className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
    )
  }