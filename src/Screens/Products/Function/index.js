import { GetData } from '@/API'
import { Login } from '@/Screens/LoginPage'
import Routing from '@/Screens/Routing/Function'
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

export function backToLogin() {
  const main = document.getElementById('main')
  main.innerHTML = ''
  main.appendChild(Login())
  history.pushState(null, null, '/login')
  Cookies.remove('token')
  Routing()
}
export function handleSelectedProduct(e) {
  const selectedId = e.currentTarget.parentElement.id
  // const loginedAccount = JSON.parse(localStorage.getItem('login'))
  // console.log(loginedAccount)
  // GetData('account').then(res => {
  //   const correntAccount = res.data.find(item => item.email === loginedAccount)
  //   console.log(correntAccount)
  // })
  GetData('products').then(res => {
    const selectedItem = res.data.find(item => item.id === +selectedId)
    ShopingPage(selectedItem)
    Size(selectedItem.size)
    Color(selectedItem.color)
    SwiperForShoping()
  })
}
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
        products.append(Notfound())
        input.value = ''
      }
    }
  })
}
export function addLoading() {
  const loading = document.getElementById('loading')
  loading.classList.remove('hidden')
}
export function removeLoading() {
  const loading = document.getElementById('loading')
  loading.classList.add('hidden')
}
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
    }
  })
}
export function handleBackToHome() {
  const main = document.getElementById('main')
  main.innerHTML = ''
  main.append(Products())
  const products = document.getElementById('products')
  GetData('products').then(res => {
    renderProduct(res.data, products)
  })
  history.pushState(null, null, '/home')
}
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
export function handleShowWishList() {
  addLoading()
  const main = document.getElementById('main')
  main.innerHTML = ''
  main.append(WishList())
  const WishListProducts = document.getElementById('WishListProducts')
  GetData('myWishList').then(res => {
    renderProduct(res.data, WishListProducts)
    removeLoading()
  })
  history.pushState(null, null, 'home/wishlist')
}
