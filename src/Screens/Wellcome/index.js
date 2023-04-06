import El from '@/Library'

export const wellcome = () => {
  return El({
    element: 'div',
    className: 'text-2xl w-full w-full relative',
    child: [
      El({
        element: 'img',
        className: '',
        src: '../../../src/Assets/img/1.png',
      }),
      El({
        element: 'div',
        id: 'welcome',
        className:
          'absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000d0] z-10',
      }),
      El({
        element: 'div',
        className: 'text-white absolute z-20 bottom-[75px] left-[32px] flex flex-col gap-12',
        child: [
          El({
            element: 'p',
            className: 'text-[40px] font-semibold',
            child:'Welcome to 👋'
          }),
          El({
            element: 'p',
            className: 'text-[72px] font-bold',
            child:'Shoes'
          }),
          El({
            element: 'p',
            className: 'text-[16px]',
            child:'The best sneakers & shoes e-commerse app of the century for your fashion needs!'
          }),
        ],
      }),
    ],
  })
}
