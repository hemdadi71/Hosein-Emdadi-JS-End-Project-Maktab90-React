import El from '@/Library'

export const Swipper = () => {
  return El({
    element: 'div',
    className: 'swiper-wrapper',
    child: [
      El({
        element: 'div',
        className: 'swiper-slide text-5xl',
        id: 'firstSlide',
        child: [
          El({
            element: 'img',
            src: '../../../src/Assets/img/WallpaperDog-20534536 1.png',
          }),
          El({
            element: 'div',
            className: 'p-6 flex flex-col gap-20',
            child: [
              El({
                element: 'p',
                className:
                  'text-[32px] font-semibold text-center leading-[2.7rem]',
                child: 'We provide high quality products just for you',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'swiper-slide text-5xl',
        id: 'secondSlide',
        child: [
          El({
            element: 'img',
            src: '../../../src/Assets/img/WallpaperDog-20397673 1.png',
          }),
          El({
            element: 'div',
            className: 'p-6 flex flex-col gap-20',
            child: [
              El({
                element: 'p',
                className:
                  'text-[32px] font-semibold text-center leading-[2.7rem]',
                child: 'Your satisfaction is our number one periority',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'swiper-slide text-5xl',
        id: 'lastSlide',
        child: [
          El({
            element: 'img',
            src: '../../../src/Assets/img/WallpaperDog-20534715 1.png',
          }),
          El({
            element: 'div',
            className: 'p-6 flex flex-col gap-20',
            child: [
              El({
                element: 'p',
                className:
                  'text-[32px] font-semibold text-center leading-[2.7rem]',
                child: 'Let’s fulfill your fashion needs with shoearight now!',
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
