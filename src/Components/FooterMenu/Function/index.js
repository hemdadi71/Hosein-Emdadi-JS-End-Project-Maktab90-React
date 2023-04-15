import { GetData } from '@/API'
import { FilterItems } from '@/Components/FilterItems'
import { orderCart } from '@/Components/OrderCart'
import { CartPage } from '@/Screens/CartPage'
import { HomePage } from '@/Screens/HomePage'
import { renderProduct } from '@/Screens/Products/Product'
import { calculateCartTotalPrice } from '@/Screens/Shoping/Function'

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
    const homeMain = document.getElementById('homeMain')
    homeMain.innerHTML = ''
    homeMain.append(CartPage())
    const cartBox = document.getElementById('cartBox')
    // const orderListBox = document.getElementById('orderListBox')
    GetData('account').then(res => {
      const activeAccount = res.data.find(
        item => item.id === JSON.parse(localStorage.getItem('login')).id
      )
      orderCart(activeAccount.cart, cartBox,{ quantity: 'hidden' })
      calculateCartTotalPrice()
    })
    history.pushState(null, null, '/cart')
  } else if (selectedIcon.classList.contains('bi-cart')) {
    selectedIcon.classList.remove('bi-cart')
    selectedIcon.classList.add('bi-cart-fill')
  } else if (selectedIcon.classList.contains('bi-wallet')) {
    selectedIcon.classList.remove('bi-wallet')
    selectedIcon.classList.add('bi-wallet-fill')
  } else if (selectedIcon.classList.contains('bi-person')) {
    selectedIcon.classList.remove('bi-person')
    selectedIcon.classList.add('bi-person-fill')
  }
}
