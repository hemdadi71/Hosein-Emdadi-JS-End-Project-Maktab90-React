import El from '@/Library'
import { Swipper } from '@/Screens/Swipper'
export * from './Function'
export const SwipperPages = () => {
  return El({
    element: 'div',
    className: 'h-full flex flex-col items-center',
    child: [
      El({
        element: 'div',
        className: 'swiper w-full h-fit relative',
        child: [Swipper()],
      }),
      El({
        element: 'div',
        className: 'fixed z-30 bottom-[32px] flex flex-col items-center gap-[30px] md:gap-[50px]',
        child: [
          El({
            element: 'div',
            id: 'scrollbar',
            className: 'flex gap-2',
            child: [
              El({
                element: 'div',
                id: 'firstLine',
                className: 'w-[30px] h-[2px] bg-black line',
              }),
              El({
                element: 'div',
                id: 'secondLine',
                className: 'w-[30px] h-[2px] bg-gray-300 line',
              }),
              El({
                element: 'div',
                id: 'thirdLine',
                className: 'w-[30px] h-[2px] bg-gray-300 line',
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'text-[14px] text-white bg-[#212529] w-[380px] h-[48px] flex items-center justify-center rounded-full next',
            child: 'Next',
          }),
        ],
      }),
    ],
  })
}
