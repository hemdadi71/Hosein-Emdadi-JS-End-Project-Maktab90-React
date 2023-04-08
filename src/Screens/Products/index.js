import El from '@/Library'
import { backToLogin } from './Function'
import { svgs } from '@/svgs'
import { Brands } from '@/Components/Brands'
import { FilterItems } from '@/Components/FilterItems'
import { FooterMenu } from '@/Components/FooterMenu'

export const Products = () => {
  return El({
    element: 'div',
    className: 'max-w-[428px] relative h-full font-Inter',
    child: [
      El({
        element: 'div',
        className: 'overflow-y-auto w-full h-full pb-[100px]',
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
                    className: 'rounded-full ml-[24px] mt-[16px]',
                    src: '../../../src/Assets/img/home/image-placeholder _- Change image here.png',
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
                        className:
                          'text-[#152536] text-[16px] font-bold mt-[5px]',
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
                    className: '',
                    src: '../../../src/Assets/img/home/Vector.png',
                  }),
                  El({
                    element: 'img',
                    className: '',
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
                className: 'text-[#152536] text-[16px] font-bold',
                child: 'See All',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'ml-[24px] mt-[20px]',
            child: [FilterItems()],
          }),
          El({
            element: 'div',
            className: 'm-[24px] grid grid-cols-2 gap-x-[16px] gap-y-[23px]',
            id: 'products',
          }),
        ],
      }),
      FooterMenu(),
    ],
  })
}
