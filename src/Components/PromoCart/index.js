import El from '@/Library'
import {
  handlePromoValidation,
  handleRemovePromo,
} from '@/Screens/Checkout/Functions'

export const PromoCart = (item, elem) => {
  const cart = El({
    element: 'div',
    className:
      'text-white flex items-center gap-3 bg-black rounded-full py-2 px-6 shadow-lg shadow-gray-200',
    child: [
      El({
        element: 'p',
        className: '',
        child: `Discount ${item}% Off`,
      }),
      El({
        element: 'i',
        onclick: handleRemovePromo,
        className: 'bi bi-x text-[20px]',
      }),
    ],
  })
  elem.innerHTML = ''
  elem.append(cart)
}
export const Promo = item => {
  return El({
    element: 'div',
    id:'promo',
    className: 'flex justify-between items-center',
    child: [
      El({
        element: 'p',
        className: 'text-[14px]',
        child: 'Promo',
      }),
      El({
        element: 'p',
        className: 'font-bold',
        child: `- $${item}`,
      }),
    ],
  })
}
export const InputPromo = () => {
  return El({
    element: 'input',
    onkeyup: handlePromoValidation,
    name: 'discount',
    className:
      'w-[320px] py-4 px-2 pl-5 rounded-xl bg-[#FAFAFB] placeholder-gray-400 font-Inter outline-none border-none',
    placeholder: 'Enter Promo Code',
  })
}
