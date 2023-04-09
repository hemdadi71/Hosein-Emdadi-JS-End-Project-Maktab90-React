import El from '@/Library'
import { handleSelectedProduct } from '../Function'

export const renderProduct = (data, element) => {
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
            'md:w-[182px] md:h-[182px] w-[155px] h-[155px] bg-[#F3F3F3] rounded-[24px] p-[20px] font-Inter',
          child: [
            El({
              element: 'img',
              className: 'w-full h-full',
              src: `${item.image_url}`,
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
          element: 'p',
          className: 'mt-[8px] text-[16px] font-bold ml-[1px]',
          child: `$ ${item.price}`,
        }),
      ],
    })
    element.append(product)
  })
}
