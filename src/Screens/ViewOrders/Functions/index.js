import { GetData } from '@/API'
import { EmptyOrder } from '@/Components/EmptyOrder'
import { ViewOrdersCart } from '@/Components/ViewOrdersCart'
import { isWishList } from '@/Screens/Products/Function'
import { ShopingPage } from '@/Screens/Shoping'
import { Color } from '@/Screens/Shoping/Colors'
import { SwiperForShoping } from '@/Screens/Shoping/Function'
import { Size } from '@/Screens/Shoping/Size'

function headerClasses(left100, left0, gray, black) {
  const line = document.getElementById('line')
  const active = document.getElementById('active')
  const completed = document.getElementById('completed')
  line.classList.remove(`${left100}`)
  line.classList.add(`${left0}`)
  active.classList.remove(`${gray}`)
  active.classList.add(`${black}`)
  completed.classList.add(`${gray}`)
  completed.classList.remove(`${black}`)
}
// ....................................................................
export function handleShowActiveOrders() {
  headerClasses('left-[100%]', 'left-0', 'text-[#9E9E9D]', 'text-black')
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
// ....................................................................
export function handleShowCompletedOrders() {
  headerClasses('left-0', 'left-[100%]', 'text-black', 'text-[#9E9E9D]')
  const viewOrderListBox = document.getElementById('viewOrderListBox')
  GetData('account').then(res => {
    const activeAccount = res.data.find(
      item => item.id === JSON.parse(localStorage.getItem('login')).id
    )
    const CompletedOrders = activeAccount.orders.filter(
      item => item.condition === 'completed'
    )
    if (CompletedOrders.length === 0) {
      viewOrderListBox.innerHTML = ''
      viewOrderListBox.append(EmptyOrder({ condition: 'completed' }))
    } else {
      ViewOrdersCart(CompletedOrders, viewOrderListBox, {
        title: 'Buy Again',
      })
    }
  })
}
// ....................................................................
export function handleGoToItemPage(e) {
  const selectedProductName = e.currentTarget.closest('.cart').childNodes[1].childNodes[0].childNodes[0].innerHTML
  if (e.currentTarget.childNodes[0].innerHTML.toLowerCase() === 'buy again') {
    GetData('products').then(res => {
      const selectedProduct = res.data.find(item => item.name.toLowerCase() === selectedProductName.toLowerCase())
      localStorage.setItem('selectedItem',JSON.stringify(selectedProduct))
      ShopingPage(selectedProduct)
      Size(selectedProduct.size)
      Color(selectedProduct.color)
      isWishList(selectedProduct.id)
      SwiperForShoping()
    })
  }
  history.pushState(null,null,'/view orders/shoping')
}
