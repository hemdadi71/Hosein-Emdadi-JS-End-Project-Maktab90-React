/* eslint-disable no-case-declarations */
/* eslint-disable indent */
/* eslint-disable no-unreachable */
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
import {
  emptyAllAdressCurcles,
  emptyAllShippingCurcles,
} from '@/Screens/Checkout/Functions'
import { choosedAddress } from '@/Screens/ChooseAddress'
import { ChooseShippingPage } from '@/Screens/ChooseShipping'
import { FOF } from '@/Screens/FOF'
import { firstPage } from '@/Screens/FirstPage'
import { HomePage1 } from '@/Screens/HomePage-1'
import { Login } from '@/Screens/LoginPage'
import { MostPopularPage } from '@/Screens/MostPopular'
import { PaymentMethods } from '@/Screens/PaymentMethods'
import { uncheckAllCircles } from '@/Screens/PaymentMethods/Functions'
import { Products } from '@/Screens/Products'
import { isWishList, renderWishList } from '@/Screens/Products/Function'
import { renderProduct } from '@/Screens/Products/Product'
import { SearchPage } from '@/Screens/SearchPage'
import { InputFocusOut } from '@/Screens/SearchPage/Functions'
import { ShopingPage } from '@/Screens/Shoping'
import { Color } from '@/Screens/Shoping/Colors'
import {
  SwiperForShoping,
  calculateCartTotalPrice,
} from '@/Screens/Shoping/Function'
import { Size } from '@/Screens/Shoping/Size'
import { ViewOrdersPage } from '@/Screens/ViewOrders'
import { wellcome } from '@/Screens/Wellcome'
import { WishList } from '@/Screens/WishList'

function Routing() {
  const pathName = location.pathname
  const main = document.getElementById('main')
  const brand = JSON.parse(localStorage.getItem('brandPath'))
  const selectedItem = JSON.parse(localStorage.getItem('selectedItem'))
  main.innerHTML = ''
  switch (pathName) {
    case '/':
      main.appendChild(firstPage())
      return true
    case '/onboarding':
      main.appendChild(wellcome())
      return true
    case '/home':
      main.appendChild(Products())
      return true
    case '/home/wishlist/search':
      main.append(SearchPage())
      InputFocusOut()
      return true
    case '/payment':
      main.append(PaymentMethods())
      uncheckAllCircles()
      const checks = document.querySelectorAll('.check')
      checks[0].classList.remove('hidden')
      return true
    case '/view%20orders':
      main.appendChild(Products())
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
      return true
    case '/checkout':
      main.appendChild(CheckoutPage())
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
        const defoultAddress = [
          JSON.parse(localStorage.getItem('selectedAddress')),
        ]
        addressCart(defoultAddress, addressBox, {
          radioClass: 'hidden',
        })
        orderCart(activeAccount.cart, orderListBox, {
          quantityAction: 'hidden',
          trash: 'hidden',
        })
      })
      const chosenShipping = [
        JSON.parse(localStorage.getItem('selectedShipping')),
      ]
      const selectedShipping = JSON.parse(
        localStorage.getItem('selectedShipping')
      )
      const cartTotalPrice = localStorage.getItem('cartTotalPrice')
      const promoPercent = localStorage.getItem('promo')
      if (selectedShipping) {
        ShippingCart(chosenShipping, ChooseShippingBox, {
          radioClass: 'hidden',
        })
        shippingPrice.innerHTML = `$${
          JSON.parse(localStorage.getItem('selectedShipping')).price
        }`
        totalPriceElem.innerHTML = `$${
          selectedShipping.price + +cartTotalPrice
        }`
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

      return true
    case '/cart':
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
      return true
    case '/choose%20address':
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
      return true
    case '/choose%20shipping':
      main.append(ChooseShippingPage())
      const shippingBox = document.getElementById('shippingBox')
      GetData('shippings').then(res => {
        ShippingCart(res.data, shippingBox, { editClass: 'hidden' })
        emptyAllShippingCurcles()
      })
      return true
    case '/home/most%20popular':
      main.appendChild(MostPopularPage())
      const mostPopularProducts = document.getElementById('mostPopularProducts')
      GetData('mostPopular').then(res =>
        renderProduct(res.data, mostPopularProducts)
      )
      return true
    case '/home/most%20popular/shoping':
    case '/home/wishlist/shoping':
    case '/home/shoping':
      ShopingPage(selectedItem)
      Size(selectedItem.size)
      Color(selectedItem.color)
      isWishList(selectedItem.id)
      SwiperForShoping()
      return true
    case '/home/wishlist':
      const currentAccount = JSON.parse(localStorage.getItem('login'))
      if (currentAccount) {
        main.appendChild(WishList())
        renderWishList()
      } else {
        main.appendChild(Login())
      }
      return true

    case '/login':
      main.appendChild(Login())
      return true
    case `${brand.brandPath}/shoping`:
      ShopingPage(selectedItem)
      Size(selectedItem.size)
      Color(selectedItem.color)
      isWishList(selectedItem.id)
      SwiperForShoping()
      return true
    case brand.brandPath:
      main.appendChild(
        HomePage1({
          brand: `${brand.brandName}`,
        })
      )
      GetData('products').then(res => {
        const filteredBrands = res.data.filter(
          item => item.brand.toLowerCase() === brand.brandName.toLowerCase()
        )
        const brandBox = document.getElementById('brandBox')
        renderProduct(filteredBrands, brandBox)
      })
      return true
    default:
      main.appendChild(FOF())
      return false
  }
}
export default Routing
// ...........................................................
export function routingBack() {
  const main = document.getElementById('main')
  const brand = JSON.parse(localStorage.getItem('brandPath'))
  main.innerHTML = ''
  switch (location.pathname) {
    case '/home/wishlist':
    case '/home/most%20popular':
    case '/home/shoping':
      main.appendChild(Products())
      const products = document.getElementById('products')
      GetData('products').then(res => renderProduct(res.data, products))
      history.pushState(null, null, '/home')
      break
    case '/home/wishlist/shoping':
      main.appendChild(WishList())
      renderWishList()
      history.pushState(null, null, '/home/wishlist')
      break
    case '/home/most%20popular/shoping':
      main.appendChild(MostPopularPage())
      const mostPopularProducts = document.getElementById('mostPopularProducts')
      GetData('mostPopular').then(res =>
        renderProduct(res.data, mostPopularProducts)
      )
      history.pushState(null, null, '/home/most%20popular')
      break
    case '/view%20orders/shop':
      main.appendChild(Products())
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
      break
    case `${brand.brandPath}/shoping`:
      main.append(
        HomePage1({
          brand: `${brand.brandName}`,
        })
      )
      GetData('products').then(res => {
        const filteredBrands = res.data.filter(
          item => item.brand.toLowerCase() === brand.brandName.toLowerCase()
        )
        const brandBox = document.getElementById('brandBox')
        renderProduct(filteredBrands, brandBox)
      })
      history.pushState(null, null, `${brand.brandPath}`)
      break
    case brand.brandPath:
      main.appendChild(Products())
      const product = document.getElementById('products')
      GetData('products').then(res => renderProduct(res.data, product))
      history.pushState(null, null, '/home')
      break
  }
}
