import { FinalUpdateCart, GetData } from '@/API'
import { EmptyOrder } from '@/Components/EmptyOrder'
import { deactiveAllFooters } from '@/Components/FooterMenu/Function'
import { ViewOrdersCart } from '@/Components/ViewOrdersCart'
import { Products } from '@/Screens/Products'
import { renderProduct } from '@/Screens/Products/Product'
import { ViewOrdersPage } from '@/Screens/ViewOrders'

export function handleChoosePayment(e) {
  console.log('g')
  uncheckAllCircles()
  e.currentTarget.childNodes[0].classList.remove('hidden')
}
//....................................................................
export function uncheckAllCircles() {
  const paymentListBox = document.getElementById('paymentListBox')
  const checks = paymentListBox.querySelectorAll('.check')
  checks.forEach(elem => elem.classList.add('hidden'))
}
// ....................................................................
export function handleConfirmefPayment() {
  const paymentModal = document.getElementById('paymentModal')
  const paymentModalBg = document.getElementById('paymentModalBg')
  paymentModal.classList.remove('hidden')
  paymentModalBg.classList.remove('hidden')
  GetData('account').then(res => {
    const activeAccount = res.data.find(
      item => item.id === JSON.parse(localStorage.getItem('login')).id
    )
    activeAccount.cart.map(item => {
      FinalUpdateCart(activeAccount, [], item).then(res =>
        console.log(res.data)
      )
    })
  })
  localStorage.removeItem('promo')
}
// ......................................................................
export function handleGoToHomePage() {
  const main = document.getElementById('main')
  main.innerHTML = ''
  main.appendChild(Products())
  const products = document.getElementById('products')
  GetData('products').then(res => renderProduct(res.data, products))
  localStorage.removeItem('promo')
  history.pushState(null, null, '/home')
}
// .......................................................................
export function handleViewOrders() {
  const main = document.getElementById('main')
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
      viewOrderListBox.append(EmptyOrder({ condition: 'acitve' }))
    } else {
      ViewOrdersCart(activeOrders, viewOrderListBox, {
        title: 'Track Order',
      })
    }
  })
  history.pushState(null, null, '/view orders')
}
