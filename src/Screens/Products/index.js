import El from '@/Library'
import {
  backToLogin,
  handleSearch,
  handleShowMostPopular,
  handleShowWishList,
} from './Function'
import { svgs } from '@/svgs'
import { Brands } from '@/Components/Brands'
import { FilterItems } from '@/Components/FilterItems'
import { FooterMenu } from '@/Components/FooterMenu'
import { debounce } from 'lodash'
import { Loading } from '@/Components/Loading'
import { activeItem, filter } from '@/Components/FilterItems/Item/Function'
import { HomePage } from '../HomePage'

export const Products = () => {
  return El({
    element: 'div',
    className: 'max-w-[428px] relative h-full font-Inter',
    child: [
      El({
        element: 'div',
        id: 'homeMain',
        className: 'overflow-y-auto no-scrollbar w-full h-full pb-[100px]',
        child: [HomePage()],
      }),
      FooterMenu(),
    ],
  })
}
