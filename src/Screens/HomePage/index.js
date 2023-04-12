import El from '@/Library'
import { backToLogin, handleSearch, handleShowMostPopular, handleShowWishList } from '../Products/Function'
import { svgs } from '@/svgs'
import { debounce } from 'lodash'
import { Brands } from '@/Components/Brands'
import { FilterItems } from '@/Components/FilterItems'
import { activeItem, filter } from '@/Components/FilterItems/Item/Function'
import { Loading } from '@/Components/Loading'

export const HomePage = () => {
  return El({
    element: 'div',
    className: 'w-full h-full pb-[100px]',
    child: [
      El({
        element: 'div',
        className: 'flex justify-between relative',
        child: [
          El({
            element: 'div',
            className: 'flex items-center gap-[16px]',
            child: [
              El({
                element: 'img',
                className: 'rounded-full ml-[24px] mt-[16px] w-[48px] h-[48px]',
                src: '../../../src/Assets/img/photo_2023-04-09_20-18-35.jpg',
              }),
              El({
                element: 'div',
                child: [
                  El({
                    element: 'p',
                    className: 'text-[#757475] text-[16px] mt-[16px]',
                    child: 'Good Morning 👋',
                  }),
                  El({
                    element: 'p',
                    className: 'text-[#152536] text-[16px] font-bold mt-[5px]',
                    child: 'Hosein Emdadi',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex items-center gap-[17.5px] mr-[24px] mt-3',
            child: [
              El({
                element: 'div',
                onclick: backToLogin,
                innerHTML: svgs.out,
              }),
              El({
                element: 'img',
                src: '../../../src/Assets/img/home/Vector.png',
              }),
              El({
                element: 'img',
                onclick: handleShowWishList,
                src: '../../../src/Assets/img/home/Vector (1).png',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'w-[380px] flex items-center mx-auto relative mt-[32px]',
        child: [
          El({
            element: 'input',
            onkeyup: debounce(e => handleSearch(e.target), 1000),
            type: 'text',
            className:
              'outline-none bg-[#FAFAFA] w-full rounded-md px-2 py-[10px] text-[14px] pl-10',
            placeholder: 'Search',
          }),
          El({
            element: 'img',
            className: 'absolute left-4',
            src: '../../../src/Assets/img/home/input-prefix.png',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'mt-[22px] mx-[32px] flex justify-center',
        child: [Brands()],
      }),
      El({
        element: 'div',
        className: 'flex justify-between mx-[24px] mt-[32px]',
        child: [
          El({
            element: 'p',
            className: 'text-[#152536] text-[20px] font-bold',
            child: 'Most Popular',
          }),
          El({
            element: 'p',
            onclick: handleShowMostPopular,
            className: 'text-[#152536] text-[16px] font-bold',
            child: 'See All',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'ml-[24px] mt-[20px]',
        child: [
          FilterItems({
            onclick: e =>
              activeItem(
                e,
                filter(
                  e,
                  e.currentTarget.closest('#homeMain').childNodes[0].childNodes[6],
                  'products'
                )
              ),
            className: 'pr-[24px]',
          }),
        ],
      }),
      Loading({
        className: 'top-[550px]',
      }),
      El({
        element: 'div',
        className:
          'm-[24px] grid grid-cols-2 md:gap-x-[16px] gap-x-[35px] gap-y-[23px]',
        id: 'products',
      }),
    ],
  })
}
