import El from '@/Library'
import { svgs } from '@/svgs'
import {
  handleBackToCartPage,
  handleChooseShippingPage,
  handleGoToPaymentList,
  handleSubmitPromo,
} from './Functions'
import { InputPromo } from '@/Components/PromoCart'

export const CheckoutPage = () => {
  return El({
    element: 'div',
    className: 'w-full font-Inter px-5 bg-gray-100 h-full',
    child: [
      El({
        element: 'div',
        className: 'flex justify-between items-center pt-5 pb-3',
        child: [
          El({
            element: 'div',
            className: 'flex items-center gap-2',
            child: [
              El({
                element: 'div',
                onclick: handleBackToCartPage,
                innerHTML: svgs.leftArrow,
              }),
              El({
                element: 'p',
                className: 'font-bold text-[18px]',
                child: 'Checkout',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'border-2 border-gray-700 rounded-full py-[1px] px-[5px]',
            child: [
              El({
                element: 'i',
                className:
                  'bi bi-three-dots text-[15px] rounded-full bg-white',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'w-full h-full overflow-y-auto pb-52 no-scrollbar',
        child: [
          El({
            element: 'div',
            className: 'mt-3 flex flex-col gap-5 mt-7',
            child: [
              El({
                element: 'p',
                className: 'font-bold text-[16px] pl-1',
                child: 'Shipping Address',
              }),
              El({
                element: 'div',
                id: 'addressBox',
                className: 'flex flex-col gap-1',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'w-full h-[1px] bg-gray-200 mt-6 mb-5',
          }),
          El({
            element: 'div',
            child: [
              El({
                element: 'p',
                className: 'font-bold text-[16px]',
                child: 'Order List',
              }),
              El({
                element: 'div',
                id: 'orderListBox',
                className: 'flex flex-col gap-6 w-full pt-5 pl-1',
              }),
              El({
                element: 'div',
                className: 'w-full h-[1px] bg-gray-200 mt-6 mb-5',
              }),
            ],
          }),
          El({
            element: 'div',
            className: '',
            child: [
              El({
                element: 'p',
                className: 'font-bold text-[16px]',
                child: 'Choose Shipping',
              }),
              El({
                element: 'div',
                onclick: handleChooseShippingPage,
                id: 'ChooseShippingBox',
                className: 'mt-5',
                child: [
                  El({
                    element: 'div',
                    className:
                      'flex items-center gap-4 bg-[#ffff] px-5 py-6 rounded-[24px] relative',
                    child: [
                      El({
                        element: 'img',
                        className: '',
                        src: '../../../src/Assets/img/cargo-truck.png',
                      }),
                      El({
                        element: 'p',
                        className: 'font-bold text-[16px]',
                        child: 'Choose Shipping Type',
                      }),
                      El({
                        element: 'i',
                        className: 'bi bi-chevron-right absolute right-5',
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'w-full h-[1px] bg-gray-200 mt-6 mb-5',
              }),
              El({
                element: 'div',
                id: 'promoCodeBox',
                className: 'flex flex-col gap-4',
                child: [
                  El({
                    element: 'p',
                    className: 'font-bold text-[16px]',
                    child: 'Promo Code',
                  }),
                  El({
                    element: 'form',
                    onsubmit: handleSubmitPromo,
                    id: 'promoForm',
                    className: 'flex flex-col gap-1',
                    child: [
                      El({
                        element: 'div',
                        className: 'flex items-center gap-5',
                        child: [
                          El({
                            element: 'div',
                            className: '',
                            id: 'inputBox',
                            child: [InputPromo()],
                          }),
                          El({
                            element: 'button',
                            type: 'submit',
                            className:
                              'flex items-center justify-center rounded-full w-[20px] h-[20px] p-6 bg-black shadow-lg shadow-gray-400',
                            child: [
                              El({
                                element: 'i',
                                id: 'plus',
                                className:
                                  'bi bi-plus-lg text-white transition-all ease-in-out duration-1000',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: 'div',
                className:
                  'p-5 rounded-[24px] flex flex-col gap-4 bg-[#ffff] mt-5 text-[#858482]',
                child: [
                  El({
                    element: 'div',
                    className: 'flex flex-col gap-4',
                    id: 'priceBox',
                    child: [
                      El({
                        element: 'div',
                        className: 'flex justify-between items-center',
                        child: [
                          El({
                            element: 'p',
                            className: 'text-[14px]',
                            child: 'Amount',
                          }),
                          El({
                            element: 'p',
                            className: 'font-bold',
                            child: `$${localStorage.getItem('cartTotalPrice')}`,
                          }),
                        ],
                      }),
                      El({
                        element: 'div',
                        className: 'flex justify-between items-center',
                        child: [
                          El({
                            element: 'p',
                            className: 'text-[14px]',
                            child: 'Shipping',
                          }),
                          El({
                            element: 'p',
                            id: 'shippingPrice',
                            className: 'font-bold',
                            child: '-',
                          }),
                        ],
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    className: 'w-full h-[1px] bg-gray-200 mt-1 mb-1',
                  }),
                  El({
                    element: 'div',
                    className: 'flex justify-between items-center',
                    child: [
                      El({
                        element: 'p',
                        className: 'text-[14px]',
                        child: 'Total',
                      }),
                      El({
                        element: 'p',
                        id: 'totalPrice',
                        className: 'font-bold',
                        child: '-',
                      }),
                    ],
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
                onclick: handleGoToPaymentList,
                className:
                  'gap-3 bg-[#0F0F0F] w-full py-3 text-white rounded-full shadow-lg shadow-gray-400 flex items-center justify-center',
                child: [
                  El({
                    element: 'p',
                    className: 'font-bold font-Inter',
                    child: 'Continue to Paypent',
                  }),
                  El({
                    element: 'i',
                    className: 'bi bi-arrow-right-short text-[24px] mt-[2px]',
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
