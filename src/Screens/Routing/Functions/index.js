import { GetData } from '@/API'
import { addressCart } from '@/Components/AddressCart'
import { EmptyOrder } from '@/Components/EmptyOrder'
import { deactiveAllFooters } from '@/Components/FooterMenu/Function'
import { orderCart } from '@/Components/OrderCart'
import { Promo, PromoCart } from '@/Components/PromoCart'
import { ShippingCart } from '@/Components/ShippingCart'
import { ViewOrdersCart } from '@/Components/ViewOrdersCart'
import { CartPage } from '@/Screens/CartPage'
import { CheckoutPage } from '@/Screens/Checkout'
import { emptyAllAdressCurcles } from '@/Screens/Checkout/Functions'
import { choosedAddress } from '@/Screens/ChooseAddress'
import { Products } from '@/Screens/Products'
import { calculateCartTotalPrice } from '@/Screens/Shoping/Function'
import { ViewOrdersPage } from '@/Screens/ViewOrders'
// ..............................................................
export function renderViewOrderPage(elem) {
  elem.appendChild(Products())
  const ordersIcon = document.querySelector('.bi-cart')
  deactiveAllFooters()
  ordersIcon.classList.remove('bi-cart')
  ordersIcon.classList.add('bi-cart-fill')
  const homeMains = document.getElementById('homeMain')
  homeMains.innerHTML = ''
  homeMains.append(ViewOrdersPage())
  const viewOrderListBox = document.getElementById('viewOrderListBox')
  GetData('account').then(res => {
    const activeAccount = res.data.find(
      item => item.id === JSON.parse(localStorage.getItem('login')).id
    )
    const activeOrders = activeAccount.orders.filter(
      item => item.condition === 'in delivery'
    )
    if (activeOrders.length === 0) {
      viewOrderListBox.innerHTML = ''
      viewOrderListBox.append(EmptyOrder({ condition: 'acitve' }))
    } else {
      ViewOrdersCart(activeOrders, viewOrderListBox, {
        title: 'Track Order',
      })
    }
  })
}
// ..................................................................
export function renderCheckoutPage(elem) {
  elem.appendChild(CheckoutPage())
  const addressBox = document.getElementById('addressBox')
  const orderListBox = document.getElementById('orderListBox')
  const ChooseShippingBox = document.getElementById('ChooseShippingBox')
  const shippingPrice = document.getElementById('shippingPrice')
  const inputBox = document.getElementById('inputBox')
  const totalPriceElem = document.getElementById('totalPrice')
  const priceBox = document.getElementById('priceBox')
  const amount = localStorage.getItem('cartTotalPrice')
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
  const chosenShipping = [JSON.parse(localStorage.getItem('selectedShipping'))]
  const selectedShipping = JSON.parse(localStorage.getItem('selectedShipping'))
  const cartTotalPrice = localStorage.getItem('cartTotalPrice')
  const promoPercent = localStorage.getItem('promo')
  if (selectedShipping) {
    ShippingCart(chosenShipping, ChooseShippingBox, {
      radioClass: 'hidden',
    })
    shippingPrice.innerHTML = `$${
      JSON.parse(localStorage.getItem('selectedShipping')).price
    }`
    totalPriceElem.innerHTML = `$${selectedShipping.price + +cartTotalPrice}`
  }
  if (promoPercent) {
    PromoCart(localStorage.getItem('promo'), inputBox)
    priceBox.append(Promo((localStorage.getItem('promo') / 100) * amount))
    console.log((localStorage.getItem('promo') / 100) * amount)
    const totalPrice = localStorage.getItem('totalPrice')
    totalPriceElem.innerHTML = `$${
      totalPrice - (localStorage.getItem('promo') / 100) * amount
    }`
  }
}
// ......................................................................
export function renderCartPage(elem) {
  elem.appendChild(Products())
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
}
// ..........................................................................
export function renderChooseAddressPage(elem) {
  elem.append(choosedAddress())
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
}
// ..........................................................................
export function renderShoppingPage(elem) {
  elem.appendChild(Products())
  const ordersIcon = document.querySelector('.bi-cart')
  deactiveAllFooters()
  ordersIcon.classList.remove('bi-cart')
  ordersIcon.classList.add('bi-cart-fill')
  const homeMains = document.getElementById('homeMain')
  homeMains.innerHTML = ''
  homeMains.append(ViewOrdersPage())
  const viewOrderListBox = document.getElementById('viewOrderListBox')
  GetData('account').then(res => {
    const activeAccount = res.data.find(
      item => item.id === JSON.parse(localStorage.getItem('login')).id
    )
    const activeOrders = activeAccount.orders.filter(
      item => item.condition === 'in delivery'
    )
    if (activeOrders.length === 0) {
      viewOrderListBox.innerHTML = ''
      viewOrderListBox.append(EmptyOrder({ condition: 'acitve' }))
    } else {
      ViewOrdersCart(activeOrders, viewOrderListBox, {
        title: 'Track Order',
      })
    }
  })
  history.pushState(null, null, '/view%20orders')
}
