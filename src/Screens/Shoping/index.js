import El from '@/Library'
import { svgs } from '@/svgs'
import { handleBackToHome } from '../Products/Function'
import { SwiperShoping } from './Swiper'
import {
  handleAddQuantity,
  handleAddToCart,
  handleAddWishList,
  handleMinusQuanity,
  handleViewMore,
} from './Function'

export const ShopingPage = item => {
  const main = document.getElementById('main')
  const PageBasedOnItem = El({
    element: 'div',
    className: 'w-full h-full font-Inter',
    child: [
      El({
        element: 'div',
        className: 'bg-[#F3F3F3] pl-5 pt-5 pb-3',
        onclick: handleBackToHome,
        innerHTML: svgs.leftArrow,
      }),
      El({
        element: 'div',
        className: 'w-full h-full overflow-y-auto',
        child: [
          SwiperShoping(item),
          El({
            element: 'div',
            className: 'px-5',
            child: [
              El({
                element: 'div',
                className: 'flex justify-between mt-7',
                child: [
                  El({
                    element: 'p',
                    className: 'text-[30px] font-bold',
                    child: `${item.name}`,
                  }),
                  El({
                    element: 'i',
                    id: 'heart',
                    onclick: handleAddWishList,
                    className:
                      'bi bi-heart text-[25px] transition-all ease-in-out duration-500',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'mt-2 flex items-center gap-3',
                child: [
                  El({
                    element: 'div',
                    className:
                      'px-3 py-2 bg-[#EEEFEF] w-fit font-bold rounded-md text-[10px]',
                    child: '5,371 sold',
                  }),
                  El({
                    element: 'i',
                    className: 'bi bi-star-half text-[25px] text-[#101010]',
                  }),
                  El({
                    element: 'p',
                    className: 'text-[#535354] font-bold',
                    child: '4.3 (5.389 reviews)',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'w-full h-[2.5px] bg-[#F2F3F3] mt-4',
              }),
              El({
                element: 'div',
                className: 'mt-4 w-fit flex flex-col gap-2',
                child: [
                  El({
                    element: 'p',
                    className: 'text-5 font-bold',
                    child: 'Desciption',
                  }),
                  El({
                    element: 'p',
                    child: [
                      El({
                        element: 'span',
                        className:
                          'text-[#676768] line-clamp-1 h-[50px] block overflow-y-hidden',
                        child: `${item.description}`,
                      }),
                      El({
                        element: 'span',
                        onclick: handleViewMore,
                        className: 'font-bold',
                        child: 'view more..',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex gap-3 w-full pl-5 mt-3',
            child: [
              El({
                element: 'div',
                className: 'flex flex-col gap-3 w-[40%]',
                child: [
                  El({
                    element: 'p',
                    className: 'font-bold text-[16px]',
                    child: 'Size',
                  }),
                  El({
                    element: 'div',
                    id: 'sizeBox',
                    className: 'w-full overflow-x-auto flex gap-3 no-scrollbar',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex flex-col gap-3 w-[60%]',
                child: [
                  El({
                    element: 'p',
                    className: 'font-bold text-[16px]',
                    child: 'Color',
                  }),
                  El({
                    element: 'div',
                    id: 'colorBox',
                    className:
                      'w-full overflow-x-auto  flex gap-3 no-scrollbar',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex mt-5 pl-5 gap-5 items-center font-bold',
            child: [
              El({
                element: 'p',
                className: 'text-xl',
                child: 'Quantity',
              }),
              El({
                element: 'div',
                className: 'py-3 px-1 rounded-full bg-[#F3F3F3]',
                child: [
                  El({
                    element: 'div',
                    className: 'flex items-center',
                    child: [
                      El({
                        element: 'span',
                        className: 'px-4',
                        onclick: e => handleMinusQuanity(e.currentTarget),
                        child: [
                          El({
                            element: 'i',
                            className: 'bi bi-dash-lg font-bold text-black',
                          }),
                        ],
                      }),
                      El({
                        element: 'span',
                        className: 'px-4',
                        child: 1,
                      }),
                      El({
                        element: 'span',
                        onclick: e => handleAddQuantity(e.currentTarget),
                        className: 'px-4',
                        child: [
                          El({
                            element: 'i',
                            className: 'bi bi-plus-lg text-black font-bold',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'mt-5 w-full px-5',
            child: [
              El({
                element: 'div',
                className: 'h-[3px] w-full bg-[#F2F3F3]',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'mb-20 flex justify-between px-5 mt-5 font-bold',
            child: [
              El({
                element: 'div',
                className: 'flex flex-col gap-1',
                child: [
                  El({
                    element: 'p',
                    className: 'text-[10px] text-[#999A9A]',
                    child: 'Total price',
                  }),
                  El({
                    element: 'p',
                    id: 'price',
                    className: 'text-[20px]',
                    child: `$${item.price}`,
                  }),
                ],
              }),
              El({
                element: 'button',
                onclick: handleAddToCart,
                className:
                  'flex items-center justify-center gap-4 text-white bg-[#101010] px-16 py-4 rounded-full shadow-lg shadow-gray-400',
                child: [
                  El({
                    element: 'i',
                    className: 'bi bi-bag-fill',
                  }),
                  El({
                    element: 'p',
                    className: '',
                    child: 'Add to Cart',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  })
  main.innerHTML = ''
  main.append(PageBasedOnItem)
}
