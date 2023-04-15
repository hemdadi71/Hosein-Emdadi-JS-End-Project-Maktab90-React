import { FinalUpdateCart, GetData } from '@/API'
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
  main.append(ViewOrdersPage())
  history.pushState(null,null,'/view orders')
}
