import El from '@/Library'
import { BrandCard } from './BrandCard'

export const Brands = () => {
  return El({
    element: 'div',
    className: 'grid grid-cols-4 gap-x-[41px] gap-y-[29px]',
    child: [
      BrandCard({
        text: 'Nike',
        pic:'image 1'
      }),
      BrandCard({
        text: 'Adidas',
        pic:'image 1 (1)'
      }),
      BrandCard({
        text: 'Puma',
        pic:'image 1 (2)'
      }),
      BrandCard({
        text: 'Asics',
        pic:'image 1 (3)'
      }),
      BrandCard({
        text: 'Reebok',
        pic:'image 1 (4)'
      }),
      BrandCard({
        text: 'New Ba..',
        pic:'image 1 (5)'
      }),
      BrandCard({
        text: 'Converse',
        pic:'image 1 (6)'
      }),
      BrandCard({
        text: 'More ..',
        pic:'image 1 (7)'
      }),
    ],
  })
}
