import El from '@/Library'

export const FOF = () => {
  return El({
    element: 'div',
    className: 'text-3xl text-center text-red-500 w-full h-full flex items-center font-bold',
    child: [
      El({
        element: 'img',
        src: '../../../src/Assets/img/243512-P3UB87-565.jpg',
      }),
    ],
  })
}
