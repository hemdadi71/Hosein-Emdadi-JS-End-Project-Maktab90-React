import El from '@/Library'
import { svgs } from '@/svgs'

export const FooterMenu = () => {
  return El({
    element: 'div',
    className:
      'bg-white w-full justify-center flex z-40 items-center  fixed bottom-0  pb-[31.5px] pt-[10px]',
    child: [
      El({
        element: 'div',
        id: 'footerMenu',
        className: 'flex gap-[52.75px]',
        child: [
          El({
            element: 'div',
            className: 'flex flex-col items-center justify-center gap-[3.5px]',
            child: [
              El({
                element: 'div',
                innerHTML: svgs.home,
              }),
              El({
                element: 'p',
                className: 'text-[#152536] text-[10px] font-bold',
                child: 'Home',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex flex-col items-center gap-[3.5px]',
            child: [
              El({
                element: 'div',
                innerHTML: svgs.cart,
              }),
              El({
                element: 'p',
                className: 'text-[#152536] text-[10px] font-bold',
                child: 'Cart',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex flex-col items-center gap-[3.5px]',
            child: [
              El({
                element: 'div',
                innerHTML: svgs.orders,
                className: 'mt-[2px]',
              }),
              El({
                element: 'p',
                className: 'text-[#152536] text-[10px] font-bold',
                child: 'Orders',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex flex-col items-center gap-[3.5px]',
            child: [
              El({
                element: 'div',
                innerHTML: svgs.walet,
              }),
              El({
                element: 'p',
                className: 'text-[#152536] text-[10px] font-bold',
                child: 'Wallet',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex flex-col items-center gap-[3.5px]',
            child: [
              El({
                element: 'div',
                innerHTML: svgs.profile,
              }),
              El({
                element: 'p',
                className: 'text-[#152536] text-[10px] font-bold',
                child: 'Profile',
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
