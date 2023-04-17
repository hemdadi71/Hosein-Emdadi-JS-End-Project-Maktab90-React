import El from '@/Library'
import { handleBackToWishListPage, handleSearchWishList } from './Functions'
import { debounce } from 'lodash'
import { Loading } from '@/Components/Loading'

export const SearchPage = () => {
  return El({
    element: 'div',
    className:
      'max-w-[428px] relative h-full font-Inter relative overflow-y-hidden bg-white px-6',
    child: [
      El({
        element: 'div',
        child: [
          El({
            element: 'div',
            className: 'flex justify-between gap-5 items-center py-6 relative',
            child: [
              El({
                element: 'img',
                onclick:handleBackToWishListPage,
                src: '../../../src/Assets/img/Vector.png',
              }),
              El({
                element: 'div',
                className: 'flex items-center relative w-full',
                child: [
                  El({
                    element: 'input',
                    onkeyup: debounce(
                      e => handleSearchWishList(e.target),
                      1000
                    ),
                    id: 'searchInput',
                    className:
                      'w-full bg-[#F5F5F5] outline-none rounded-xl px-10 py-3 focus:border border-gray-800 font-Inter',
                    placeholder: 'Search',
                  }),
                  El({
                    element: 'i',
                    className: 'bi bi-sliders text-[18px] absolute right-4',
                  }),
                  El({
                    element: 'i',
                    className: 'bi bi-search text-[18px] absolute left-3',
                  }),
                ],
              }),
              El({
                element: 'ul',
                id: 'history',
                className: 'absolute bg-white w-full top-[80%] z-30 hidden',
                child: [
                  El({
                    element: 'li',
                    className:
                      'flex items-center justify-between font-bold py-5',
                    child: [
                      El({
                        element: 'p',
                        child: 'Recent',
                      }),
                      El({
                        element: 'p',
                        id: 'removeHistory',
                        child: 'Clear All',
                      }),
                    ],
                  }),
                  El({
                    element: 'li',
                    className: 'w-full h-[1px] bg-gray-200 mb-4',
                  }),
                  El({
                    element: 'ul',
                    id: 'inputUL',
                    className:
                      'flex flex-col gap-6 pb-5 overflow-y-auto h-[820px]',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex justify-between font-bold text-[17px]',
            child: [
              El({
                element: 'p',
                id:'resultName',
                className: 'capitalize',
                child: 'Results for "Wishlists"',
              }),
              El({
                element: 'p',
                id:'resultCount',
                child: '0 founds',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        id: 'resultBox',
        className:
          'pb-[150px] pt-[24px] grid grid-cols-2 gap-x-[16px] w-full h-full relative',
      }),
      Loading({
        className: 'top-36',
      }),
    ],
  })
}
