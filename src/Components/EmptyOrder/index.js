/* eslint-disable quotes */
import El from '@/Library'

export const EmptyOrder = props => {
  return El({
    element: 'div',
    className: 'flex flex-col items-center w-full h-full justify-center gap-5',
    child: [
      El({
        element: 'img',
        className: 'w-[250px] h-[250px]',
        src: '../../../public/Products/noProductFound-1.png',
      }),
      El({
        element: 'p',
        className: 'text-[20px] font-bold',
        child: "You don't have an order yet",
      }),
      El({
        element: 'p',
        className: 'text-gray-700',
        child: `You don't have an ${props.condition} orders at this time`,
      }),
    ],
  })
}
