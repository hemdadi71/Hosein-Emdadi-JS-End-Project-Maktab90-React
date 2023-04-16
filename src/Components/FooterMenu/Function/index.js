import { GetData } from '@/API'
import { EmptyOrder } from '@/Components/EmptyOrder'
import { FilterItems } from '@/Components/FilterItems'
import { orderCart } from '@/Components/OrderCart'
import { ViewOrdersCart } from '@/Components/ViewOrdersCart'
import { CartPage } from '@/Screens/CartPage'
import { HomePage } from '@/Screens/HomePage'
import { Products } from '@/Screens/Products'
import { renderProduct } from '@/Screens/Products/Product'
import { calculateCartTotalPrice } from '@/Screens/Shoping/Function'
import { ViewOrdersPage } from '@/Screens/ViewOrders'

export function deactiveAllFooters() {
  const footerItems = document.getElementById('footerMenu').childNodes
  footerItems.forEach(element => {
    const elemClass = element.childNodes[0].childNodes[0].classList
    if (elemClass.contains('bi-house-door-fill')) {
      elemClass.remove('bi-house-door-fill')
      elemClass.add('bi-house-door')
    }
    if (elemClass.contains('bi-bag-fill')) {
      elemClass.remove('bi-bag-fill')
      elemClass.add('bi-bag')
    }
    if (elemClass.contains('bi-cart-fill')) {
      elemClass.remove('bi-cart-fill')
      elemClass.add('bi-cart')
    }
    if (elemClass.contains('bi-wallet-fill')) {
      elemClass.remove('bi-wallet-fill')
      elemClass.add('bi-wallet')
    }
    if (elemClass.contains('bi-person-fill')) {
      elemClass.remove('bi-person-fill')
      elemClass.add('bi-person')
    }
  })
}

export function handleActivePage(e) {
  const selectedIcon = e.currentTarget.childNodes[0]
  const homeMain = document.getElementById('homeMain')
  const main = document.getElementById('main')
  deactiveAllFooters()
  // ...................................................................
  if (selectedIcon.classList.contains('bi-house-door')) {
    selectedIcon.classList.remove('bi-house-door')
    selectedIcon.classList.add('bi-house-door-fill')
    const homeMain = document.getElementById('homeMain')
    homeMain.innerHTML = ''
    homeMain.append(HomePage())
    history.pushState(null, null, '/home')
    const products = document.getElementById('products')
    GetData('products').then(res => renderProduct(res.data, products))
  } else if (selectedIcon.classList.contains('bi-bag')) {
    selectedIcon.classList.remove('bi-bag')
    selectedIcon.classList.add('bi-bag-fill')
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
    history.pushState(null, null, '/cart')
  } else if (selectedIcon.classList.contains('bi-cart')) {
    selectedIcon.classList.remove('bi-cart')
    selectedIcon.classList.add('bi-cart-fill')
    main.innerHTML = ''
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
        viewOrderListBox.append(EmptyOrder('acitve'))
      } else {
        ViewOrdersCart(activeOrders, viewOrderListBox, {
          title: 'Track Order',
        })
      }
    })
    history.pushState(null, null, '/view orders')
  } else if (selectedIcon.classList.contains('bi-wallet')) {
    selectedIcon.classList.remove('bi-wallet')
    selectedIcon.classList.add('bi-wallet-fill')
  } else if (selectedIcon.classList.contains('bi-person')) {
    selectedIcon.classList.remove('bi-person')
    selectedIcon.classList.add('bi-person-fill')
  }
}
