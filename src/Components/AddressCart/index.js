import El from '@/Library'
import {
  handleChooseAddress,
  handleChooseAddressPage,
} from '@/Screens/Checkout/Functions'

export const addressCart = (data, elem, { editClass, radioClass }) => {
  elem.innerHTML = ''
  data.map(item => {
    const cart = El({
      element: 'div',
      id: `${item.id}`,
      className:
        'flex items-center gap-4 bg-[#ffff] p-5 rounded-[24px] relative address',
      child: [
        El({
          element: 'div',
          className:
            'w-[45px] h-[45px] rounded-full bg-[#DFDFDF] flex items-center justify-center px-[10px]',
          child: [
            El({
              element: 'div',
              className:
                'w-[20px] h-[20px] rounded-full bg-black flex items-center justify-center p-4 mb-[.08px]',
              child: [
                El({
                  element: 'i',
                  className: 'bi bi-geo-alt-fill text-white',
                }),
              ],
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
                El({
                  element: 'div',
                  className: `py-[3px] px-[7px] bg-[#ECECEC] rounded-md text-[12px] flex items-center justify-center mt-[3px] default ${radioClass}`,
                  child: 'Default',
                }),
              ],
            }),
            El({
              element: 'p',
              className:
                'w-[50%] truncate text-overflow-ellipsis text-[14px] text-gray-500',
              child: `${item.address}`,
            }),
          ],
        }),
        El({
          element: 'div',
          className: 'absolute top-0 right-6 top-1/2 -translate-y-1/2',
          child: [
            El({
              element: 'i',
              onclick: handleChooseAddressPage,
              className: `bi bi-pencil-square text-[24px] ${editClass}`,
            }),
            El({
              element: 'div',
              onclick: handleChooseAddress,
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
