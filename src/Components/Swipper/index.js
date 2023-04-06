import El from '@/Library'
import { Swipper } from '@/Screens/Swipper'
export * from './Function'
export const SwipperPages = () => {
  return El({
    element: 'div',
    className: 'swiper w-full h-full flex flex-col items-center relative',
    child: [
      Swipper(),
      El({
        element: 'div',
        id: 'scrollbar',
        className: 'absolute z-30 bottom-[129px] flex gap-2',
        child: [
          El({
            element: 'div',
            id: 'firstLine',
            className: 'w-[30px] h-[2px]  bg-red-600 line',
          }),
          El({
            element: 'div',
            id: 'secondLine',
            className: 'w-[30px] h-[2px] bg-black line',
          }),
          El({
            element: 'div',
            id: 'thirdLine',
            className: 'w-[30px] h-[2px] bg-black line',
          }),
        ],
      }),
      El({
        element: 'div',
        className:
          'absolute bottom-[32px] z-30 text-[14px] text-white bg-[#212529] w-[380px] h-[48px] flex items-center justify-center rounded-full next',
        child: 'Next',
      }),
    ],
  })
}
