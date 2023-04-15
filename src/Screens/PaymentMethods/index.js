import { PaymentCart } from '@/Components/PaymentCart'
import El from '@/Library'
import { svgs } from '@/svgs'
import { handleBackToCheckoutPage } from '../Checkout/Functions'
import {
  handleConfirmefPayment,
  handleGoToHomePage,
  handleViewOrders,
} from './Functions'

export const PaymentMethods = () => {
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
            className: 'flex items-center gap-4',
            child: [
              El({
                element: 'div',
                onclick: handleBackToCheckoutPage,
                innerHTML: svgs.leftArrow,
              }),
              El({
                element: 'p',
                className: 'font-bold text-[20px]',
                child: 'Payment Methods',
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
            element: 'p',
            className: 'text-gray-600 mb-7 text-[16px]',
            child: 'Select the payment method you want to use.',
          }),
          El({
            element: 'div',
            id: 'paymentListBox',
            className: 'flex flex-col gap-6',
            child: [
              PaymentCart({
                name: 'My Wallet',
                src: '../../../src/Assets/img/wallet.png',
                inventory: 'block',
              }),
              PaymentCart({
                name: 'PayPal',
                src: '../../../src/Assets/img/paypal.png',
                inventory: 'hidden',
              }),
              PaymentCart({
                name: 'Google Pay',
                src: '../../../src/Assets/img/search.png',
                inventory: 'hidden',
              }),
              PaymentCart({
                name: 'Apple Pay',
                src: '../../../src/Assets/img/apple.png',
                inventory: 'hidden',
              }),
              PaymentCart({
                name: 'Apple Pay',
                src: '../../../src/Assets/img/mastercard-2.svg',
                inventory: 'hidden',
              }),
            ],
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
            onclick: handleConfirmefPayment,
            className:
              'gap-3 bg-[#0F0F0F] w-full py-3 text-white rounded-full shadow-lg shadow-gray-400 flex items-center justify-center',
            child: [
              El({
                element: 'p',
                className: 'font-bold font-Inter',
                child: 'Confirm Payment',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        id: 'paymentModal',
        className:
          'fixed w-[80%] flex flex-col items-center gap-3 text-center z-20 px-6 py-9 bg-white rounded-[40px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 hidden',
        child: [
          El({
            element: 'img',
            src: '../../../src/Assets/img/Payment.JPG',
            className: 'w-[70%]',
          }),
          El({
            element: 'div',
            className: 'flex flex-col gap-4',
            child: [
              El({
                element: 'p',
                className: 'text-[24px] font-bold',
                child: 'Order Successful!',
              }),
              El({
                element: 'p',
                child: 'You have successfully made order',
              }),
              El({
                element: 'button',
                onclick: handleViewOrders,
                className:
                  'gap-3 bg-[#0F0F0F] w-full py-4 text-white rounded-full shadow-lg shadow-gray-400 flex items-center justify-center font-bold font-Inter',
                child: 'View Order',
              }),
              El({
                element: 'button',
                onclick: handleGoToHomePage,
                className:
                  'gap-3 bg-[#E7E7E7] w-full py-4 text-black rounded-full flex items-center justify-center font-bold font-Inter',
                child: 'Buy again',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        id: 'paymentModalBg',
        className:
          'absolute z-10 w-full h-full bg-gray-600 bg-opacity-70 left-0 top-0 hidden',
      }),
    ],
  })
}
