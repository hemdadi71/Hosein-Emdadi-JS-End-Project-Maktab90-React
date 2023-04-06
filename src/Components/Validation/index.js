import El from '@/Library'

export const Validation = ({ text, id }) => {
  return El({
    element: 'p',
    className: 'text-red-500 text-[14px] ml-5',
    child: `${text}`,
    id,
  })
}
