import El from '@/Library'
import { Item } from './Item'

export const FilterItems = ({ onclick, className }) => {
  return El({
    element: 'div',
    id: 'filterItems',
    className: `flex gap-[12px] h-[45px] overflow-auto no-scrollbar ${className}`,
    child: [
      Item({
        text: 'All',
        className: 'bg-[#343A40] text-white',
        onclick,
      }),
      Item({
        text: 'Nike',
        onclick,
      }),
      Item({
        text: 'Adidas',
        onclick,
      }),
      Item({
        text: 'Puma',
        onclick,
      }),
      Item({
        text: 'Asics',
        onclick,
      }),
      Item({
        text: 'Reebok',
        onclick,
      }),
      Item({
        text: 'New Balance',
        onclick,
      }),
      Item({
        text: 'Converse',
        onclick,
      }),
    ],
  })
}
