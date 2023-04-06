import El from '@/Library'
import { backToLogin } from './Function'

export const Products = () => {
  return El({
    element: 'div',
    onclick: backToLogin,
    className: 'text-2xl text-white font-bold text-center bg-red-500',
    child: 'Sign Out',
  })
}
