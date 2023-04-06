import El from '@/Library'

export const Loading = () => {
  return El({
    element: 'div',
    className: 'lds-ring',
    child: [
      El({
        element: 'div',
      }),
      El({
        element: 'div',
      }),
      El({
        element: 'div',
      }),
      El({
        element: 'div',
      }),
    ],
  })
}
