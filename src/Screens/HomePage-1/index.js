import El from '@/Library'
import { svgs } from '@/svgs'
import { handleBackToHome } from '../Products/Function'

export const HomePage1 = ({ brand }) => {
  return El({
    element: 'div',
    className: 'w-full h-full font-Inter',
    child: [
      El({
        element: 'div',
        className:
          'flex items-center gap-[20px] text-[#152536] font-bold text-[20px] mt-[16px] pl-[32px] mb-[32px]',
        child: [
          El({
            element: 'div',
            onclick: handleBackToHome,
            innerHTML: svgs.leftArrow,
          }),
          El({
            element: 'p',
            className: '',
            child: `${brand}`,
          }),
        ],
      }),
      El({
        element: 'div',
        id: 'brandBox',
        className:
          'px-[24px] pb-[110px] pt-[10px] grid grid-cols-2 gap-x-[16px] gap-y-[23px] w-full h-full overflow-y-auto',
      }),
    ],
  })
}
