import { Loading } from '@/Components/Loading'
import El from '@/Library'

export const firstPage = () => {
  return El({
    element: 'div',
    className:
      'flex flex-col items-center mt-[392px] w-full h-full',
    child: [
      El({
        element: 'div',
        className: 'flex gap-2 items-center justify-center',
        child: [
          El({
            element: 'div',
            className:
              'w-[59px] h-[59px] bg-black rounded-full flex items-center justify-center',
            child: [
              El({
                element: 'img',
                src: '../../../src/Assets/img/Vector 1.png',
              }),
            ],
          }),
          El({
            element: 'p',
            className: 'text-[52px] text-[#152536] font-extrabold font-Inter',
            child: 'Shoes',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'absolute bottom-[117px]',
        child: [Loading()],
      }),
    ],
  })
}
