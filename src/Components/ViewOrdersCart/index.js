import El from '@/Library'
import { handleGoToItemPage } from '@/Screens/ViewOrders/Functions'

export const ViewOrdersCart = (data, elem, props) => {
  elem.innerHTML = ''
  data.map(item => {
    const cart = El({
      element: 'div',
      id: `${item.id}`,
      className: 'bg-white p-4 rounded-[20px] flex gap-4 font-Inter cart',
      child: [
        El({
          element: 'div',
          className:
            'bg-[#F3F3F3] rounded-[16px] px-2 py-2 w-[130px] h-[130px] flex items-center justify-center',
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
                      element: 'p',
                      className: 'capitalize',
                      child: `${item.color}`,
                    }),
                    El({
                      element: 'div',
                      className: 'w-[2px] h-[12px] bg-[#8D8B89] mx-1',
                    }),
                  ],
                }),
                El({
                  element: 'div',
                  child: `Size = ${item.size}`,
                }),
                El({
                  element: 'div',
                  className: 'w-[2px] h-[12px] bg-[#8D8B89] mx-1',
                }),
                El({
                  element: 'p',
                  className: 'capitalize',
                  child: `Qty=${item.quantity}`,
                }),
              ],
            }),
            El({
              element: 'div',
              className:
                'w-fit py-[2px] text-[12px] px-3 bg-[#EDECEC] rounded-md flex items-center',
              child: [
                El({
                  element: 'p',
                  className: 'capitalize font-bold',
                  child: `${item.condition}`,
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
                  onclick: handleGoToItemPage,
                  className:
                    'bg-black text-white text-[13px] py-[3px] px-[15px] rounded-full',
                  child: [
                    El({
                      element: 'p',
                      className: 'capitalize',
                      child: `${props.title}`,
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
