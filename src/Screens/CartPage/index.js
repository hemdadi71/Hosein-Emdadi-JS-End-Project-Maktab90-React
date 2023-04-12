import { FooterMenu } from '@/Components/FooterMenu'
import El from '@/Library'
import { svgs } from '@/svgs'

export const CartPage = () => {
  return El({
    element: 'div',
    className: 'max-w-[428px] relative h-full font-Inter',
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
            className: 'absolute z-50 bottom-0 bg-[#ffff] rounded-t-[30px] w-full flex items-center justify-between py-5 px-5',
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
                    id:'totalPrice',
                    className: 'text-[20px] font-bold',
                  }),
                ],
              }),
              El({
                element: 'button',
                className: 'flex items-center gap-3 bg-[#0F0F0F] rounded-full px-[80px] py-[10px] text-white font-Inter shadow-lg shadow-gray-400',
                child: [
                  El({
                    element: 'p',
                    className: '',
                    child: 'Checkout',
                  }),
                  El({
                    element: 'i',
                    className:'bi bi-arrow-right-short text-[24px] mt-1'
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
