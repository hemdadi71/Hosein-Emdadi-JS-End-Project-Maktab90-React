/* eslint-disable indent */
import { GetData } from '@/API'
import { deactiveAllFooters } from '@/Components/FooterMenu/Function'
import { orderCart } from '@/Components/OrderCart'
import { CartPage } from '@/Screens/CartPage'
import { choosedAddress } from '@/Screens/ChooseAddress'
import { Products } from '@/Screens/Products'
import { calculateCartTotalPrice } from '@/Screens/Shoping/Function'
import { CheckoutPage } from '..'
import { addressCart } from '@/Components/AddressCart'
import { ChooseShippingPage } from '@/Screens/ChooseShipping'
import { ShippingCart } from '@/Components/ShippingCart'
import { Validation } from '@/Components/Validation'
import { InputPromo, Promo, PromoCart } from '@/Components/PromoCart'
import { PaymentMethods } from '@/Screens/PaymentMethods'
import { uncheckAllCircles } from '@/Screens/PaymentMethods/Functions'
// ...............................................................
export const handleBackToCartPage = () => {
  const main = document.getElementById('main')
  main.innerHTML = ''
  main.appendChild(Products())
  const bagIcon = document.querySelector('.bi-bag')
  deactiveAllFooters()
  bagIcon.classList.remove('bi-bag')
  bagIcon.classList.add('bi-bag-fill')
  const homeMain = document.getElementById('homeMain')
  homeMain.innerHTML = ''
  homeMain.append(CartPage())
  const cartBox = document.getElementById('cartBox')
  GetData('account').then(res => {
    const activeAccount = res.data.find(
      item => item.id === JSON.parse(localStorage.getItem('login')).id
    )
    orderCart(activeAccount.cart, cartBox, { quantity: 'hidden' })
    calculateCartTotalPrice()
  })
  localStorage.removeItem('selectedShipping')
  localStorage.removeItem('promo')
  history.pushState(null, null, '/cart')
}
// ............................................................
export function handleSubmitPromo(e) {
  e.preventDefault()
  const plus = document.getElementById('plus')
  const inputBox = document.getElementById('inputBox')
  const priceBox = document.getElementById('priceBox')
  const totalPriceElem = document.getElementById('totalPrice')
  const amount = localStorage.getItem('cartTotalPrice')
  const localTotalPrice = localStorage.getItem('totalPrice')
  const inputValue = e.currentTarget.discount.value.toLowerCase()
  plus.classList.add('-rotate-180')
  setTimeout(() => {
    plus.classList.remove('-rotate-180')
  }, 1000)
  if (inputValue === 'golden') {
    localStorage.setItem('promo', '50')
    PromoCart('50', inputBox)
    priceBox.append(Promo(`${0.5 * amount}`))
    totalPriceElem.innerHTML = `$ ${localTotalPrice - 0.5 * amount}`
  } else if (inputValue === 'silver') {
    localStorage.setItem('promo', '30')
    PromoCart('30', inputBox)
    priceBox.append(Promo(`${0.3 * amount}`))
    totalPriceElem.innerHTML = `$ ${localTotalPrice - 0.3 * amount}`
  } else if (inputValue === 'bronze') {
    localStorage.setItem('promo', '10')
    PromoCart('10', inputBox)
    priceBox.append(Promo(`${0.1 * amount}`))
    totalPriceElem.innerHTML = `$ ${localTotalPrice - 0.1 * amount}`
  }
}
// .............................................................
export function handlePromoValidation(e) {
  const promoForm = document.getElementById('promoForm')
  const promoValidation = document.getElementById('promoValidation')
  switch (e.currentTarget.value.toLowerCase()) {
    case 'golden':
    case 'silver':
    case 'bronze':
    case '':
      if (promoValidation) {
        promoValidation.remove()
      }
      break
    default:
      if (promoValidation) return
      promoForm.append(
        Validation({
          text: 'Invalid Promo Code',
          className: 'text-red-500',
          id: 'promoValidation',
        })
      )
      break
  }
}
// ..............................................................
export function handleChooseAddressPage(e) {
  const main = document.getElementById('main')
  const defaultAddressElemId = e.currentTarget.closest('.address').id
  GetData('account').then(res => {
    const activeAccount = res.data.find(
      item => item.id === JSON.parse(localStorage.getItem('login')).id
    )
    const defaultAddress = activeAccount.address.find(
      item => item.id === defaultAddressElemId
    )
    localStorage.setItem('defaultAdress', JSON.stringify(defaultAddress))
  })
  main.innerHTML = ''
  main.append(choosedAddress())
  const adressListBox = document.getElementById('adressListBox')
  GetData('account').then(res => {
    const activeAccount = res.data.find(
      item => item.id === JSON.parse(localStorage.getItem('login')).id
    )
    addressCart(activeAccount.address, adressListBox, {
      editClass: 'hidden',
    })
    emptyAllAdressCurcles()
  })
  history.pushState(null, null, '/choose address')
}
// ...........................................
export function handleBackToCheckoutPage(address) {
  const main = document.getElementById('main')
  main.innerHTML = ''
  main.appendChild(CheckoutPage())
  const addressBox = document.getElementById('addressBox')
  const orderListBox = document.getElementById('orderListBox')
  const inputBox = document.getElementById('inputBox')
  GetData('account').then(res => {
    const activeAccount = res.data.find(
      item => item.id === JSON.parse(localStorage.getItem('login')).id
    )
    let defoultAddress
    if (address === 'home') {
      defoultAddress = [JSON.parse(localStorage.getItem('defaultAdress'))]
    } else {
      defoultAddress = [JSON.parse(localStorage.getItem('selectedAddress'))]
    }
    addressCart(defoultAddress, addressBox, {
      radioClass: 'hidden',
    })
    orderCart(activeAccount.cart, orderListBox, {
      quantityAction: 'hidden',
      trash: 'hidden',
    })
  })
  if (localStorage.getItem('promo')) {
    PromoCart(localStorage.getItem('promo'), inputBox)
  }
  localStorage.removeItem('selectedShipping')
  history.pushState(null, null, '/checkout')
}
// ......................................................
export function emptyAllAdressCurcles() {
  const addressListBox = document.getElementById('adressListBox')
  const checks = addressListBox.querySelectorAll('.check')
  const defaults = addressListBox.querySelectorAll('.default')
  checks.forEach(elem => elem.classList.add('hidden'))
  defaults.forEach(elem => elem.classList.add('hidden'))
  const addressesArray = Array.from(addressListBox.childNodes)
  const choosedAddress = addressesArray.find(
    item => item.id === JSON.parse(localStorage.getItem('defaultAdress')).id
  )
  choosedAddress.querySelector('.check').classList.remove('hidden')
  choosedAddress.querySelector('.default').classList.remove('hidden')
}
// .......................................................
export function handleChooseAddress(e) {
  const adressListBox = document.getElementById('adressListBox')
  const checks = Array.from(adressListBox.querySelectorAll('.check'))
  const defaults = Array.from(adressListBox.querySelectorAll('.default'))
  checks.forEach(elem => elem.classList.add('hidden'))
  defaults.forEach(elem => elem.classList.add('hidden'))
  e.currentTarget.childNodes[0].classList.remove('hidden')
  e.currentTarget
    .closest('.address')
    .childNodes[1].childNodes[0].childNodes[1].classList.remove('hidden')
  const selectedId = e.currentTarget.closest('.address').id
  GetData('account').then(res => {
    const activeAccount = res.data.find(
      item => item.id === JSON.parse(localStorage.getItem('login')).id
    )
    const selectedAddress = activeAccount.address.find(
      item => item.id === selectedId
    )
    localStorage.setItem('selectedAddress', JSON.stringify(selectedAddress))
  })
}
// .................................................................
export function handleChooseShippingPage() {
  const main = document.getElementById('main')
  main.innerHTML = ''
  main.append(ChooseShippingPage())
  const shippingBox = document.getElementById('shippingBox')
  GetData('shippings').then(res => {
    ShippingCart(res.data, shippingBox, { editClass: 'hidden' })
    emptyAllShippingCurcles()
  })
  history.pushState(null, null, '/choose shipping')
}
// ........................................................................
export function emptyAllShippingCurcles() {
  const shippingBox = document.getElementById('shippingBox')
  const checksArray = Array.from(shippingBox.querySelectorAll('.check'))
  checksArray.shift()
  checksArray.forEach(elem => elem.classList.add('hidden'))
}
// ........................................................................
export function handleChooseShipping(e) {
  const shippingBox = document.getElementById('shippingBox')
  const checks = shippingBox.querySelectorAll('.check')
  const choosenShippingId = e.currentTarget.closest('.shipping').id
  checks.forEach(elem => elem.classList.add('hidden'))
  e.currentTarget.childNodes[0].classList.remove('hidden')
  GetData('shippings').then(res => {
    const selectedShipping = res.data.find(
      item => item.id === +choosenShippingId
    )
    localStorage.setItem('selectedShipping', JSON.stringify(selectedShipping))
  })
}
// .....................................................................
export function handleApplyShipping() {
  const main = document.getElementById('main')
  main.innerHTML = ''
  main.appendChild(CheckoutPage())
  const addressBox = document.getElementById('addressBox')
  const orderListBox = document.getElementById('orderListBox')
  const ChooseShippingBox = document.getElementById('ChooseShippingBox')
  const shippingPrice = document.getElementById('shippingPrice')
  const totalPrice = document.getElementById('totalPrice')
  const inputBox = document.getElementById('inputBox')
  GetData('account').then(res => {
    const activeAccount = res.data.find(
      item => item.id === JSON.parse(localStorage.getItem('login')).id
    )
    const defoultAddress = [JSON.parse(localStorage.getItem('selectedAddress'))]
    addressCart(defoultAddress, addressBox, {
      radioClass: 'hidden',
    })
    orderCart(activeAccount.cart, orderListBox, {
      quantityAction: 'hidden',
      trash: 'hidden',
    })
  })
  const selectedShipping = JSON.parse(localStorage.getItem('selectedShipping'))
  const cartTotalPrice = localStorage.getItem('cartTotalPrice')
  localStorage.setItem(
    'totalPrice',
    `${selectedShipping.price + +cartTotalPrice}`
  )
  if (selectedShipping) {
    shippingPrice.innerHTML = `$ ${selectedShipping.price}`
    totalPrice.innerHTML = `$ ${selectedShipping.price + +cartTotalPrice}`
  }
  const chosenShipping = [JSON.parse(localStorage.getItem('selectedShipping'))]
  ShippingCart(chosenShipping, ChooseShippingBox, { radioClass: 'hidden' })
  history.pushState(null, null, '/checkout')
  if (localStorage.getItem('promo')) {
    PromoCart(localStorage.getItem('promo'), inputBox)
  }
}
// ..................................................................
export function handleRemovePromo() {
  const inputBox = document.getElementById('inputBox')
  const promo = document.getElementById('promo')
  const totalPriceElem = document.getElementById('totalPrice')
  inputBox.innerHTML = ''
  inputBox.append(InputPromo())
  localStorage.removeItem('promo')
  promo.remove()
  totalPriceElem.innerHTML = `$${localStorage.getItem('totalPrice')}`
}
// ....................................................................
export function handleGoToPaymentList() {
  const selectedShipping = localStorage.getItem('selectedShipping')
  const ChooseShippingBox = document.getElementById('ChooseShippingBox')
  const shippingValidation = document.getElementById('shippingValidation')
  if (!selectedShipping) {
    if (shippingValidation) return
    ChooseShippingBox.append(
      Validation({
        text: 'Please choose shipping way',
        className: 'text-red-500 absolute left-0 top-[100%]',
        id: 'shippingValidation',
      })
    )
  } else {
    if (shippingValidation) {
      shippingValidation.remove()
    }
    const main = document.getElementById('main')
    main.innerHTML = ''
    main.append(PaymentMethods())
    uncheckAllCircles()
    const checks = document.querySelectorAll('.check')
    checks[0].classList.remove('hidden')
    history.pushState(null, null, '/payment')
  }
}
