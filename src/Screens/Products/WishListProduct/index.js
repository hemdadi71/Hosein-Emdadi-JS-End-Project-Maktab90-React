import El from '@/Library'
import { handleSelectedProduct } from '../Function'

export const renderWishListProduct = (data, element) => {
  element.innerHTML = ''
  data.map(item => {
    const product = El({
      element: 'div',
      id: item.id,
      className: 'font-Inter',
      child: [
        El({
          element: 'div',
          onclick: handleSelectedProduct,
          className:
            'md:w-[182px] md:h-[182px] w-[155px] h-[155px] bg-[#F3F3F3] rounded-[24px] p-[20px] font-Inter relative',
          child: [
            El({
              element: 'img',
              className: 'w-full h-full',
              src: `${item.image_url}`,
            }),
            El({
              element: 'div',
              className:
                'w-[30px] h-[30px] rounded-full bg-[#181717] flex items-center justify-center absolute top-4 right-4 pt-[2px]',
              child: [
                El({
                  element: 'i',
                  className: 'bi bi-heart-fill text-white text-[15px]',
                }),
              ],
            }),
          ],
        }),
        El({
          element: 'p',
          className:
            'mt-[12px] text-[20px] font-bold ml-[1px] w-full truncate text-overflow-ellipsis',
          child: `${item.name}`,
        }),
        El({
          element: 'div',
          className: 'flex items-center gap-2 font-bold mt-1',
          child: [
            El({
              element: 'i',
              className: 'bi bi-star-half',
            }),
            El({
              element: 'p',
              className: ' text-gray-500  text-[15px]',
              child: '4.6',
            }),
            El({
              element: 'div',
              className: 'w-[2px] h-[14px] bg-gray-400',
            }),
            El({
              element: 'div',
              className: 'px-3 py-1 bg-[#ECECEC] rounded-md text-gray-500 text-[10px]',
              child: '6.641 sold',
            }),
          ],
        }),
        El({
          element: 'p',
          className: 'mt-1 text-[16px] font-bold ml-[1px]',
          child: `$ ${item.price}`,
        }),
      ],
    })
    element.append(product)
  })
}
