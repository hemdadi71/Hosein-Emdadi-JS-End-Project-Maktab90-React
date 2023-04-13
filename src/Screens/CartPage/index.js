import { FooterMenu } from '@/Components/FooterMenu'
import El from '@/Library'
import { svgs } from '@/svgs'
import { handleCheckout, handleRemoveModal, handleRemoveOrder } from '../Shoping/Function'

export const CartPage = () => {
  return El({
    element: 'div',
    className: 'max-w-[428px] relative h-full font-Inter overflow-y-hidden',
    child: [
      El({
        element: 'div',
        id: 'cartMain relative',
        className: 'w-full h-full overflow-y-auto bg-gray-100 pb-28',
        child: [
          El({
            element: 'div',
            className:
              'flex justify-between items-center py-5 mx-[20px] font-extrabold text-[20px]',
            child: [
              El({
                element: 'div',
                className: 'flex items-center gap-5',
                child: [
                  El({
                    element: 'img',
                    className: 'w-[15px] h-[20px]',
                    src: '../../../src/Assets/img/Vector 2.png',
                  }),
                  El({
                    element: 'p',
                    child: 'My Cart',
                  }),
                ],
              }),
              El({
                element: 'img',
                className: 'w-[32px]',
                src: '../../../src/Assets/img/magnifying-glass.png',
              }),
            ],
          }),
          El({
            element: 'div',
            id: 'cartBox',
            className: 'flex flex-col gap-6',
          }),
          El({
            element: 'div',
            className:
              'absolute z-10 bottom-0 bg-[#ffff] rounded-t-[30px] w-full flex items-center justify-between py-5 px-5',
            child: [
              El({
                element: 'div',
                className: 'flex flex-col gap-1 justify-center',
                child: [
                  El({
                    element: 'p',
                    className: 'text-gray-600 text-[12px]',
                    child: 'Total price',
                  }),
                  El({
                    element: 'p',
                    id: 'totalPrice',
                    className: 'text-[20px] font-bold',
                  }),
                ],
              }),
              El({
                element: 'button',
                onclick:handleCheckout,
                className:
                  'flex items-center gap-3 bg-[#0F0F0F] rounded-full px-[80px] py-[10px] text-white font-Inter shadow-lg shadow-gray-400',
                child: [
                  El({
                    element: 'p',
                    child: 'Checkout',
                  }),
                  El({
                    element: 'i',
                    className: 'bi bi-arrow-right-short text-[24px] mt-1',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        id: 'modal',
        className:
          'w-full h-0 fixed bottom-0 z-30 rounded-t-[35px] bg-gray-100 transition-all ease-in-out duration-500',
        child: [
          El({
            element: 'div',
            className:
              'flex items-center w-full relative h-[24%] flex-col font-bold text-[20px]',
            child: [
              El({
                element: 'div',
                className:
                  'w-[33px] h-[2px] bg-[#DFDFE0] rounded-full absolute left-1/2 -translate-x-1/2 top-2',
              }),
              El({
                element: 'p',
                className: 'mt-[33px]',
                child: 'Remove From Cart?',
              }),
              El({
                element: 'div',
                className:
                  'w-[85%] h-[1px] bg-[#DFDFE0] rounded-full absolute bottom-0',
              }),
            ],
          }),
          El({
            element: 'div',
            id: 'removeCart',
            className: 'pt-5',
          }),
          El({
            element: 'div',
            className: 'w-[85%] h-[1px] bg-[#DFDFE0] rounded-full mx-auto mt-7',
          }),
          El({
            element: 'div',
            className: 'w-[85%] flex justify-between mx-auto mt-5',
            child: [
              El({
                element: 'button',
                onclick: handleRemoveModal,
                className: 'px-[60px] py-[15px] bg-[#E7E7E7] rounded-full',
                child: 'Cancel',
              }),
              El({
                element: 'button',
                onclick: handleRemoveOrder,
                className:
                  'px-[42px] py-[15px] bg-[#0F0F10] text-white rounded-full shadow-lg shadow-gray-400',
                child: 'Yes,Remove',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        onclick: handleRemoveModal,
        id: 'modalBg',
        className:
          'w-full h-full hidden bg-gray-600 absolute z-20 top-0 left-0 bg-opacity-60 transition-all ease-in-out duration-500',
      }),
    ],
  })
}
