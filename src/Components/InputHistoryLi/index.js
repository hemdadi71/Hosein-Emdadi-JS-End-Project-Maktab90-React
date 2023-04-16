import El from '@/Library'
import {
  handleRemoveHistory,
  handleSelectedHistory,
} from '@/Screens/SearchPage/Functions'

export const Li = ({ child }) => {
  return El({
    element: 'li',
    className:
      'w-full cursor-pointer flex justify-between items-center inputLi',
    child: [
      El({
        element: 'p',
        onclick: handleSelectedHistory,
        className: 'text-[18px] text-gray-600',
        child: child,
      }),
      El({
        element: 'div',
        onclick: handleRemoveHistory,
        className:
          'border border-gray-700 overflow-hidden w-fit rounded-full px-[4px] pt-[1px]',
        child: [
          El({
            element: 'p',
            className: 'bi bi-x bg-white text-[15px]',
          }),
        ],
      }),
    ],
  })
}
