/* eslint-disable no-case-declarations */
/* eslint-disable indent */
/* eslint-disable no-unreachable */
import { GetData } from '@/API'
import { deactiveAllFooters } from '@/Components/FooterMenu/Function'
import { orderCart } from '@/Components/OrderCart'
import { CartPage } from '@/Screens/CartPage'
import { FOF } from '@/Screens/FOF'
import { firstPage } from '@/Screens/FirstPage'
import { HomePage1 } from '@/Screens/HomePage-1'
import { Login } from '@/Screens/LoginPage'
import { MostPopularPage } from '@/Screens/MostPopular'
import { Products } from '@/Screens/Products'
import { isWishList, renderWishList } from '@/Screens/Products/Function'
import { renderProduct } from '@/Screens/Products/Product'
import { ShopingPage } from '@/Screens/Shoping'
import { Color } from '@/Screens/Shoping/Colors'
import {
  SwiperForShoping,
  calculateCartTotalPrice,
} from '@/Screens/Shoping/Function'
import { Size } from '@/Screens/Shoping/Size'
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
        orderCart(activeAccount.cart, cartBox)
        calculateCartTotalPrice()
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
  const selectedItem = JSON.parse(localStorage.getItem('selectedItem'))
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
