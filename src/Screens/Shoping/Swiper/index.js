import El from '@/Library'

export const SwiperShoping = item => {
  return El({
    element: 'div',
    className: 'h-[53.5%] bg-[#F3F3F3]',
    child: [
      El({
        element: 'div',
        className: 'swiper w-full h-full',
        child: [
          El({
            element: 'div',
            className: 'swiper-wrapper w-full',
            child: [
              El({
                element: 'div',
                className: 'swiper-slide',
                child: [
                  El({
                    element: 'img',
                    className: '',
                    src: `${item.image_url}`,
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'swiper-slide',
                child: [
                  El({
                    element: 'img',
                    className: '',
                    src: `${item.image_url}`,
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'swiper-slide',
                child: [
                  El({
                    element: 'img',
                    className: 'bg-[#F3F3F3]',
                    src: `${item.image_url}`,
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'swiper-pagination mb-3',
          }),
        ],
      }),
    ],
  })
}
