import El from '@/Library'
import { Item } from './Item'

export const FilterItems = () => {
  return El({
    element: 'div',
    className: 'flex gap-[12px] h-[45px] overflow-auto no-scrollbar',
    child: [
      Item({
        text: 'All',
        className:'bg-[#343A40] text-white'
      }),
      Item({
        text: 'Nike',
      }),
      Item({
        text: 'Adidas',
      }),
      Item({
        text: 'Puma',
      }),
      Item({
        text: 'Asics',
      }),
      Item({
        text: 'Reebok',
      }),
      Item({
        text: 'New Balance',
      }),
      Item({
        text: 'Converse',
      }),
    ],
  })
}
