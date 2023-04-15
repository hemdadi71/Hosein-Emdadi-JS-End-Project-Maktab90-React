import El from '@/Library'
import { handleChoosePayment } from '@/Screens/PaymentMethods/Functions'

export const PaymentCart = ({ name, src, inventory }) => {
  return El({
    element: 'div',
    className:
      'flex items-center gap-4 bg-[#ffff] px-5 py-7 rounded-[24px] relative font-Inter',
    child: [
      El({
        element: 'div',
        className: 'flex gap-3 items-center',
        child: [
          El({
            element: 'img',
            className: 'w-[32px] h-[32px]',
            src,
          }),
          El({
            element: 'p',
            className: 'font-bold text-[17px]',
            child: `${name}`,
          }),
        ],
      }),
      El({
        element: 'div',
        className:
          'absolute top-0 right-6 top-1/2 -translate-y-1/2 flex gap-2 items-center font-bold',
        child: [
          El({
            element: 'p',
            className: `${inventory}`,
            child: '$9.379',
          }),
          El({
            element: 'div',
            onclick: handleChoosePayment,
            className:
              'w-[20px] h-[20px] rounded-full border-2 border-black flex items-center justify-center',
            child: [
              El({
                element: 'div',
                className: 'w-[12px] h-[12px] rounded-full bg-black check',
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
