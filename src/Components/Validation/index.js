import El from '@/Library'

export const Validation = ({ text, id, className }) => {
  return El({
    element: 'p',
    className: `text-[14px] ml-5 font-Inter ${className}`,
    child: `${text}`,
    id,
  })
}
