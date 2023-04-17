import { GetData } from '@/API'
import { Login } from '@/Screens/LoginPage'
import Routing, { routingBack } from '@/Screens/Routing/Function'
import Cookies from 'js-cookie'
import { renderProduct } from '../Product'
import { Notfound } from '@/Components/NotFound'
import { HomePage1 } from '@/Screens/HomePage-1'
import { Products } from '..'
import { MostPopularPage } from '@/Screens/MostPopular'
import { WishList } from '@/Screens/WishList'
import { ShopingPage } from '@/Screens/Shoping'
import { SwiperForShoping } from '@/Screens/Shoping/Function'
import { Size } from '@/Screens/Shoping/Size'
import { Color } from '@/Screens/Shoping/Colors'
import { renderWishListProduct } from '../WishListProduct'
// .....................................................
export function backToLogin() {
  const main = document.getElementById('main')
  main.innerHTML = ''
  main.appendChild(Login())
  history.pushState(null, null, '/login')
  Cookies.remove('token')
  localStorage.removeItem('selectedShipping')
  Routing()
}
// .....................................................
export function isWishList(id) {
  const activeAccount = JSON.parse(localStorage.getItem('login'))
  GetData('account').then(res => {
    const account = res.data.find(item => item.id === activeAccount.id)
    const isWishList = account.wishList.find(item => item.id === +id)
    const heart = document.getElementById('heart')
    if (isWishList) {
      heart.classList.remove('bi-heart')
      heart.classList.add('bi-heart-fill', 'text-red-500')
    } else {
      heart.classList.add('bi-heart')
      heart.classList.remove('bi-heart-fill', 'text-red-500')
    }
  })
}
// .................................................................
export function handleSelectedProduct(e) {
  const selectedId = e.currentTarget.parentElement.id
  GetData('products').then(res => {
    const selectedItem = res.data.find(item => item.id === +selectedId)
    localStorage.setItem('selectedItem', JSON.stringify(selectedItem))
    const item = { quantity: 1, price: selectedItem.price }
    localStorage.setItem('qty_price', JSON.stringify(item))
    ShopingPage(selectedItem)
    Size(selectedItem.size)
    Color(selectedItem.color)
    isWishList(selectedId)
    SwiperForShoping()
  })
  const brand = JSON.parse(localStorage.getItem('brandPath'))
  if (location.pathname === '/home/wishlist') {
    history.pushState(null, null, '/home/wishlist/shoping')
  } else if (location.pathname === '/home/most%20popular') {
    history.pushState(null, null, '/home/most%20popular/shoping')
  } else if (location.pathname === '/home') {
    history.pushState(null, null, '/home/shoping')
  } else if (location.pathname === brand.brandPath) {
    history.pushState(null, null, `${brand.brandPath}/shoping`)
  }
}
// ......................................................................
export function handleSearch(input) {
  const products = document.getElementById('products')
  const filterItems = document.getElementById('filterItems')
  filterItems.childNodes.forEach(element => {
    element.classList.remove('bg-[#343A40]', 'text-white')
    element.classList.add('bg-white', 'text-[#343A40]')
  })
  addLoading()
  GetData('products').then(res => {
    if (!input.value) {
      renderProduct(res.data, products)
      removeLoading()
    } else {
      const filteredItems = res.data.filter(
        item =>
          item.name.toLowerCase().startsWith(input.value.toLowerCase()) ||
          item.brand.toLowerCase().startsWith(input.value.toLowerCase())
      )
      renderProduct(filteredItems, products)
      removeLoading()
      input.value = ''
      if (filteredItems.length === 0) {
        products.append(
          Notfound({
            top: 'top-[510px]',
            width: 'w-[120px]',
            padding: 'px-0',
          })
        )
        input.value = ''
      }
    }
  })
}
// ........................................................................
export function addLoading() {
  const loading = document.getElementById('loading')
  loading.classList.remove('hidden')
}
// ........................................................................
export function removeLoading() {
  const loading = document.getElementById('loading')
  loading.classList.add('hidden')
}
// ........................................................................
export function handleShowBrand(e) {
  const main = document.getElementById('main')
  const text = e.currentTarget.parentElement.childNodes[1].innerHTML
  GetData('products').then(res => {
    if (text === 'More Brands') {
      return
    } else {
      const filteredBrands = res.data.filter(
        item => item.brand.toLowerCase() === text.toLowerCase()
      )
      main.innerHTML = ''
      main.append(
        HomePage1({
          brand: `${text}`,
        })
      )
      const brandBox = document.getElementById('brandBox')
      renderProduct(filteredBrands, brandBox)
      history.pushState(null, null, `home/${text.toLowerCase()}`)
      const brand = {
        brandPath: location.pathname,
        brandName: `${text.toLowerCase()}`,
      }
      localStorage.setItem('brandPath', JSON.stringify(brand))
    }
  })
}
// ........................................................................
export function handleBackToHome() {
  routingBack()
}
// ........................................................................
export function handleShowMostPopular() {
  addLoading()
  const main = document.getElementById('main')
  main.innerHTML = ''
  main.append(MostPopularPage())
  const mostPopularProducts = document.getElementById('mostPopularProducts')
  GetData('mostPopular').then(res => {
    renderProduct(res.data, mostPopularProducts)
    removeLoading()
  })
  history.pushState(null, null, 'home/most popular')
}
// .....................................................................
export function renderWishList() {
  const WishListProducts = document.getElementById('WishListProducts')
  const activeAccount = JSON.parse(localStorage.getItem('login'))
  GetData('account').then(res => {
    const currentAccount = res.data.find(item => item.id === activeAccount.id)
    renderWishListProduct(currentAccount.wishList, WishListProducts)
    removeLoading()
  })
}
// ........................................................................
export function handleShowWishList() {
  addLoading()
  const main = document.getElementById('main')
  main.innerHTML = ''
  main.append(WishList())
  renderWishList()
  history.pushState(null, null, 'home/wishlist')
}
