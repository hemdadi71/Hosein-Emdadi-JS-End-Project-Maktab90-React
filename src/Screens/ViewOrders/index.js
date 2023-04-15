import El from '@/Library'
import { handleShowActiveOrders, handleShowCompletedOrders } from './Functions'

export const ViewOrdersPage = () => {
  return El({
    element: 'div',
    className:
      'max-w-[428px] relative h-full font-Inter overflow-y-hidden no-scrollbar',
    child: [
      El({
        element: 'div',
        className: 'flex items-center justify-between px-6 py-6',
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
                className: 'font-bold text-[20px]',
                child: 'My Orders',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex items-center gap-3',
            child: [
              El({
                element: 'img',
                className: 'w-[32px]',
                src: '../../../src/Assets/img/magnifying-glass.png',
              }),
              El({
                element: 'div',
                className:
                  'border-2 border-gray-700 rounded-full py-[1px] px-[5px]',
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
        ],
      }),
      El({
        element: 'div',
        className: 'w-full flex items-center px-6',
        child: [
          El({
            element: 'div',
            onclick: handleShowActiveOrders,
            className:
              'flex items-center py-3 justify-center w-[50%] border-b-2 relative',
            child: [
              El({
                element: 'p',
                id: 'active',
                className: 'text-center text-[17px] font-bold text-black',
                child: 'Active',
              }),
              El({
                element: 'div',
                id: 'line',
                className:
                  'w-full h-[5px]  top-12 rounded-full absolute left-0 transition-all ease-in-out duration-500 bg-black',
              }),
            ],
          }),
          El({
            element: 'div',
            onclick: handleShowCompletedOrders,
            className:
              'flex items-center py-3 justify-center w-[50%] border-b-4',
            child: [
              El({
                element: 'p',
                id: 'completed',
                className: 'text-center font-bold text-[#9E9E9D]',
                child: 'Completed',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        id: 'orderListBox',
        className: 'px-6',
        child:'orderListBox'
      }),
    ],
  })
}
