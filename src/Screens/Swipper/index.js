import El from '@/Library'

export const Swipper = () => {
  return El({
    element: 'div',
    className: 'swiper-wrapper h-full',
    child: [
      El({
        element: 'div',
        className: 'swiper-slide h-full',
        id: 'firstSlide',
        child: [
          El({
            element: 'img',
            src: '../../../src/Assets/img/WallpaperDog-20534536 1.png',
          }),
          El({
            element: 'div',
            className: 'px-[24px] pt-[10px] md:pt-[32px]',
            child: [
              El({
                element: 'p',
                className:
                  'md:text-[32px] text-[20px] font-semibold text-center',
                child: 'We provide high quality products just for you',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'swiper-slide h-full',
        id: 'secondSlide',
        child: [
          El({
            element: 'img',
            src: '../../../src/Assets/img/WallpaperDog-20397673 1.png',
          }),
          El({
            element: 'div',
            className: 'px-[24px] pt-[10px] md:pt-[32px]',
            child: [
              El({
                element: 'p',
                className:
                  'md:text-[32px] text-[20px] font-semibold text-center',
                child: 'Your satisfaction is our number one periority',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'swiper-slide h-full',
        id: 'lastSlide',
        child: [
          El({
            element: 'img',
            src: '../../../src/Assets/img/WallpaperDog-20534715 1.png',
          }),
          El({
            element: 'div',
            className: 'px-[24px] text-[20px] pt-[10px] md:pt-[32px]',
            child: [
              El({
                element: 'p',
                className: 'md:text-[32px] font-semibold text-center',
                child: 'Let’s fulfill your fashion needs with shoearight now!',
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
