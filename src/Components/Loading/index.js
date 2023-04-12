import El from '@/Library'

export const Loading = ({ className }) => {
  return El({
    element: 'div',
    id: 'loading',
    className: `absolute z-50 left-1/2 -translate-x-1/2 hidden ${className}`,
    child: [
      El({
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
      }),
    ],
  })
}
