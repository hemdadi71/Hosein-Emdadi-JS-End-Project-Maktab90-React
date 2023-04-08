import El from '@/Library'
import { handleSelectedProduct } from '../Function'

export const renderProduct = data => {
  const products = document.getElementById('products')
  products.innerHTML = ''
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
            'w-[182px] h-[182px] bg-[#F3F3F3] rounded-[24px] p-[20px] font-Inter',
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
    products.append(product)
  })
}
