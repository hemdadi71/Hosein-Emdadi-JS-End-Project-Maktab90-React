import El from '@/Library'
import { svgs } from '@/svgs'
import { handleBackToCheckoutPage } from '../Checkout/Functions'
import {
  handleAddNewAddress,
  handleCloseAddAddress,
  handleSubmitAddress,
} from './functions'

export const choosedAddress = () => {
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
                onclick: () => handleBackToCheckoutPage('home'),
                innerHTML: svgs.leftArrow,
              }),
              El({
                element: 'p',
                className: 'font-bold text-[18px]',
                child: 'Shipping Address',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'w-full h-full overflow-y-auto no-scrollbar pb-[300px]',
        child: [
          El({
            element: 'div',
            className: 'mt-5',
            child: [
              El({
                element: 'div',
                id: 'adressListBox',
                className: 'flex flex-col gap-6',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'w-full mt-6',
            child: [
              El({
                element: 'button',
                onclick: handleAddNewAddress,
                className:
                  'w-full flex items-center justify-center bg-[#E7E7E7] py-4 font-Inter text-gray-600 rounded-full font-bold',
                child: 'Add New Address',
              }),
            ],
          }),
          El({
            element: 'div',
            id: 'addAddressBox',
            className:
              'w-full mt-6 h-0 overflow-y-hidden transition-all ease-in-out duration-500',
            child: [
              El({
                element: 'div',
                className: 'w-full px-5 py-6 bg-white rounded-[24px] relative',
                child: [
                  El({
                    element: 'form',
                    onsubmit: handleSubmitAddress,
                    className: 'flex flex-col gap-8',
                    id: 'form',
                    child: [
                      El({
                        element: 'div',
                        id: 'nameBox',
                        className: 'flex flex-col gap-2 relative',
                        child: [
                          El({
                            element: 'label',
                            className: 'font-bold',
                            child: 'Address Title:',
                          }),
                          El({
                            element: 'input',
                            type: 'text',
                            className:
                              'bg-[#F5F5F5] outline-none rounded-md px-4 py-1',
                            name: 'title',
                          }),
                        ],
                      }),
                      El({
                        element: 'div',
                        id: 'desBox',
                        className: 'flex flex-col gap-2 relative',
                        child: [
                          El({
                            element: 'label',
                            className: 'font-bold',
                            child: 'Complete Address:',
                          }),
                          El({
                            element: 'textarea',
                            className:
                              'bg-[#F5F5F5] outline-none rounded-md px-4 py-1 h-[100px]',
                            name: 'description',
                          }),
                        ],
                      }),
                      El({
                        element: 'input',
                        type: 'submit',
                        value: 'Add Address',
                        className: 'px-5 py-3 rounded-full bg-[#F5F5F5] mt-1',
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    className: 'absolute top-2 right-5 px-[6px] py-[2px] rounded-full border-2 border-gray-400',
                    onclick: handleCloseAddAddress,
                    child: [
                      El({
                        element: 'i',
                        className: 'bi bi-x-lg',
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
                onclick: () => handleBackToCheckoutPage('choosen'),
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
      }),
    ],
  })
}
