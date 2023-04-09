import El from '@/Library'

export const Notfound = () => {
  return El({
    element: 'div',
    className:
      'text-2xl font-bold text-red-500 w-full absolute left-0 top-[510px] flex items-center justify-center',
    child: [
      El({
        element: 'img',
        src:'../../../public/Products/noProductFound.png'
      }),
    ],
  })
}
