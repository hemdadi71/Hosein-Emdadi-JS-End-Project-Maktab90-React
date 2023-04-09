import El from '@/Library'
// import { activeItem } from './Function'

export const Item = ({ text, className, onclick }) => {
  return El({
    element: 'div',
    onclick: onclick,
    className: `ml-1 transition-all ease-in-out duration-300 border-[3px] border-[#343A40] px-[20px] pb-[3px] rounded-full text-[16px] font-bold flex items-center whitespace-nowrap ${className}`,
    child: `${text}`,
  })
}
