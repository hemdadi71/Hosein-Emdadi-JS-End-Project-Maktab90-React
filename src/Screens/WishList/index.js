import El from '@/Library'
import { handleBackToHome } from '../Products/Function'
import { svgs } from '@/svgs'
import { FilterItems } from '@/Components/FilterItems'
import { activeItem, filter } from '@/Components/FilterItems/Item/Function'
import { Loading } from '@/Components/Loading'
import { Products } from '../Products'
import { FilterWishList, handleWishListSearch } from './Function'

export const WishList = () => {
  return El({
    element: 'div',
    id: 'WishList',
    className: 'w-full h-full font-Inter pb-28',
    child: [
      El({
        element: 'div',
        className: 'flex items-center justify-between pr-6',
        child: [
          El({
            element: 'div',
            className:
              'flex items-center gap-[20px] text-[#152536] font-bold text-[20px] mt-[16px] pl-[32px] mb-[25px]',
            child: [
              El({
                element: 'div',
                onclick: handleBackToHome,
                innerHTML: svgs.leftArrow,
              }),
              El({
                element: 'p',
                child: 'My Wishlist',
              }),
            ],
          }),
          El({
            element: 'img',
            onclick: handleWishListSearch,
            src: '../../../src/Assets/img/magnifying-glass.png',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'w-full h-full overflow-y-auto no-scrollbar',
        child: [
          El({
            element: 'div',
            className: 'pl-[24px] pr-[4px]',
            child: [
              FilterItems({
                onclick: FilterWishList,
                className: 'pr-[20px]',
              }),
            ],
          }),
          Loading({
            className: 'top-[200px]',
          }),
          El({
            element: 'div',
            id: 'WishListProducts',
            className:
              'px-[24px] pb-[150px] pt-[24px] grid grid-cols-2 gap-x-[16px] gap-y-[23px] w-full h-full',
          }),
        ],
      }),
    ],
  })
}
