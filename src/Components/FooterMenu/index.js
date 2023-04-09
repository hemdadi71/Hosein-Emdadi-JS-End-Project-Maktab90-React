import El from '@/Library'
import { handleActivePage } from './Function'

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
            className: 'flex flex-col items-center justify-center',
            child: [
              El({
                element: 'div',
                onclick: handleActivePage,
                child: [
                  El({
                    element: 'i',
                    className: 'bi bi-house-door-fill text-[24px] transition-all ease-in-out duration-300',
                  }),
                ],
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
            className: 'flex flex-col items-center',
            child: [
              El({
                element: 'div',
                onclick: handleActivePage,
                child: [
                  El({
                    element: 'i',
                    className: 'bi bi-bag text-[24px] transition-all ease-in-out duration-300',
                  }),
                ],
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
            className: 'flex flex-col items-center',
            child: [
              El({
                element: 'div',
                onclick: handleActivePage,
                child: [
                  El({
                    element: 'i',
                    className: 'bi bi-cart text-[24px] transition-all ease-in-out duration-300',
                  }),
                ],
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
            className: 'flex flex-col items-center',
            child: [
              El({
                element: 'div',
                onclick: handleActivePage,
                child: [
                  El({
                    element: 'i',
                    className: 'bi bi-wallet text-[24px] transition-all ease-in-out duration-300',
                  }),
                ],
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
            className: 'flex flex-col items-center',
            child: [
              El({
                element: 'div',
                onclick: handleActivePage,
                child: [
                  El({
                    element: 'i',
                    className: 'bi bi-person text-[24px] transition-all ease-in-out duration-300',
                  }),
                ],
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
