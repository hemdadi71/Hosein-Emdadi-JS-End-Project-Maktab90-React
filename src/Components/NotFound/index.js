import El from '@/Library'

export const Notfound = () => {
  return El({
    element: 'div',
    className:
      'text-2xl w-full absolute left-0 top-[510px] flex flex-col text-center items-center justify-center font-Inter',
    child: [
      El({
        element: 'img',
        className: 'w-[120px]',
        src: '../../../public/Products/noProductFound.JPG',
      }),
      El({
        element: 'p',
        className: 'font-bold text-[20px]',
        child: 'Not Found',
      }),
      El({
        element: 'p',
        className: 'text-[16px]',
        child:
          'Sorry,the keyword you entered cannot be found,pleas check again or search with another keyword.',
      }),
    ],
  })
}
