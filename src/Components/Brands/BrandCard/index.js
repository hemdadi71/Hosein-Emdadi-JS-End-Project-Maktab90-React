import El from '@/Library'
import { handleShowBrand } from '@/Screens/Products/Function'

export const BrandCard = ({ text, pic }) => {
  return El({
    element: 'div',
    className: 'flex flex-col items-center justify-center gap-2 w-fit h-fit',
    child: [
      El({
        element: 'div',
        onclick: handleShowBrand,
        className:
          'w-[60px] h-[60px] bg-[#ECECEC] flex items-center justify-center rounded-full',
        child: [
          El({
            element: 'img',
            className: '',
            src: `../../../src/Assets/img/home/brands/${pic}.png`,
          }),
        ],
      }),
      El({
        element: 'p',
        className:
          'text-[#152536] text-center text-[14px] font-bold w-[70px] truncate text-overflow-ellipsis',
        child: `${text}`,
      }),
    ],
  })
}
