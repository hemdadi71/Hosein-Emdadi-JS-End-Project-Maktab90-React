import El from '@/Library'
import {
  handleChooseShipping,
  handleChooseShippingPage,
} from '@/Screens/Checkout/Functions'

export const ShippingCart = (data, elem, { editClass, radioClass }) => {
  elem.innerHTML = ''
  data.map(item => {
    const cart = El({
      element: 'div',
      id: `${item.id}`,
      className:
        'flex items-center gap-4 bg-[#ffff] p-5 rounded-[24px] relative shipping',
      child: [
        El({
          element: 'div',
          className:
            'w-[20px] h-[20px] rounded-full bg-black flex items-center justify-center p-5 relative',
          child: [
            El({
              element: 'img',
              className: 'absolute w-5',
              src: `${item.icon}`,
            }),
          ],
        }),
        El({
          element: 'div',
          className: 'flex flex-col gap-1 justify-center',
          child: [
            El({
              element: 'div',
              className: 'flex gap-3 items-center',
              child: [
                El({
                  element: 'p',
                  className: 'font-bold',
                  child: `${item.name}`,
                }),
              ],
            }),
            El({
              element: 'p',
              className:
                'w-full truncate text-overflow-ellipsis text-[14px] text-gray-500',
              child: `${item.description}`,
            }),
          ],
        }),
        El({
          element: 'div',
          className: 'ml-5',
          child: [
            El({
              element: 'p',
              className: 'font-bold',
              child: `$${item.price}`,
            }),
          ],
        }),
        El({
          element: 'div',
          className: 'absolute top-0 right-6 top-1/2 -translate-y-1/2',
          child: [
            El({
              element: 'i',
              onclick: handleChooseShippingPage,
              className: `bi bi-pencil-square text-[20px] ${editClass}`,
            }),
            El({
              element: 'div',
              onclick: handleChooseShipping,
              className: `w-[20px] h-[20px] rounded-full border-2 border-black flex items-center justify-center ${radioClass}`,
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
    elem.append(cart)
  })
}
