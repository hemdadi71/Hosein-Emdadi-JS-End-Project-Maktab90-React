import El from '@/Library'

export const BrandCard = ({ text, pic }) => {
  return El({
    element: 'div',
    className: 'flex flex-col items-center justify-center gap-2 w-fit h-fit',
    child: [
      El({
        element: 'div',
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
        className: 'text-[#152536] text-[14px] font-bold',
        child: `${text}`,
      }),
    ],
  })
}
