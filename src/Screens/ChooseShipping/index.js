import El from '@/Library'
import { svgs } from '@/svgs'
import {
  handleApplyShipping,
  handleBackToCheckoutPage,
} from '../Checkout/Functions'

export const ChooseShippingPage = () => {
  return El({
    element: 'div',
    className: 'w-full font-Inter px-5 bg-gray-100 h-full',
    child: [
      El({
        element: 'div',
        className: 'flex items-center pt-5 pb-3',
        child: [
          El({
            element: 'div',
            className: 'flex items-center gap-2',
            child: [
              El({
                element: 'div',
                onclick: handleBackToCheckoutPage,
                innerHTML: svgs.leftArrow,
              }),
              El({
                element: 'p',
                className: 'font-bold text-[18px]',
                child: 'Choose Shipping',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'mt-5',
        child: [
          El({
            element: 'div',
            id: 'shippingBox',
            className: 'flex flex-col gap-6',
          }),
        ],
      }),
      El({
        element: 'div',
        className:
          'bg-[#fff] border-t rounded-t-[28px] px-5 py-7 w-full fixed bottom-0 left-0',
        child: [
          El({
            element: 'button',
            onclick: handleApplyShipping,
            className:
              'gap-3 bg-[#0F0F0F] w-full py-3 text-white rounded-full shadow-lg shadow-gray-400 flex items-center justify-center',
            child: [
              El({
                element: 'p',
                className: 'font-bold font-Inter',
                child: 'Apply',
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
