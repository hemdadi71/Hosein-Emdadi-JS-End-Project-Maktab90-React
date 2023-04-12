import El from '@/Library'
import {
  handleAddQuantity,
  handleMinusQuanity,
  handleRemoveOrder,
} from '@/Screens/Shoping/Function'

export const orderCart = (data, elem) => {
  elem.innerHTML = ''
  data.map(item => {
    const cart = El({
      element: 'div',
      id: `${item.id}`,
      className: 'bg-white p-4 rounded-[20px] mx-5 flex gap-4 font-Inter cart',
      child: [
        El({
          element: 'div',
          className:
            'bg-[#F3F3F3] rounded-[16px] px-2 py-2 w-[100px] h-[100px] flex items-center justify-center',
          child: [
            El({
              element: 'img',
              className: 'w-full h-full',
              src: `${item.pic}`,
            }),
          ],
        }),
        El({
          element: 'div',
          className: 'flex flex-col w-[70%] gap-3',
          child: [
            El({
              element: 'div',
              className:
                'flex justify-between items-center font-bold text-[17px]',
              child: [
                El({
                  element: 'p',
                  className: 'w-[85%] truncate text-overflow-ellipsis',
                  child: `${item.name}`,
                }),
                El({
                  element: 'img',
                  onclick: handleRemoveOrder,
                  className: 'w-[22px] h-[22px]',
                  src: '../../../src/Assets/img/trash-bin.png',
                }),
              ],
            }),
            El({
              element: 'div',
              className: 'flex items-center gap-1 text-[13px] text-[#8D8B89]',
              child: [
                El({
                  element: 'div',
                  className: 'flex items-center gap-1',
                  child: [
                    El({
                      element: 'div',
                      className: `w-[15px] h-[15px] ${item.color} rounded-full`,
                    }),
                    El({
                      element: 'div',
                      className: 'capitalize',
                      child: `${item.color}`,
                    }),
                  ],
                }),
                El({
                  element: 'div',
                  className: 'w-[2px] h-[12px] bg-[#8D8B89] mx-1',
                }),
                El({
                  element: 'div',
                  className: '',
                  child: `Size = ${item.size}`,
                }),
              ],
            }),
            El({
              element: 'div',
              className: 'flex justify-between',
              child: [
                El({
                  element: 'p',
                  className: 'font-bold text-[17px] price',
                  child: `$${item.price}`,
                }),
                El({
                  element: 'div',
                  id: 'quantityAction',
                  className:
                    'rounded-full bg-[#F3F3F3] py-[7px] px-1 font-bold',
                  child: [
                    El({
                      element: 'div',
                      className: 'flex items-center',
                      child: [
                        El({
                          element: 'span',
                          className: 'px-2',
                          onclick: e => handleMinusQuanity(e.currentTarget),
                          child: [
                            El({
                              element: 'i',
                              className: 'bi bi-dash font-bold text-black',
                            }),
                          ],
                        }),
                        El({
                          element: 'span',
                          className: 'px-2',
                          child: `${item.quantity}`,
                        }),
                        El({
                          element: 'span',
                          onclick: e => handleAddQuantity(e.currentTarget),
                          className: 'px-2',
                          child: [
                            El({
                              element: 'i',
                              className: 'bi bi-plus text-black font-bold',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
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
