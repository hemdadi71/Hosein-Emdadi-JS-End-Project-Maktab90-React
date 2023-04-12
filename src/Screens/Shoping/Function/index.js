import {
  GetData,
  PutData,
  PutDataCart,
  deleteData,
  deleteDataCart,
} from '@/API'
import { orderCart } from '@/Components/OrderCart'
import { CartPage } from '@/Screens/CartPage'
import { Products } from '@/Screens/Products'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
// ...............................................
export function SwiperForShoping() {
  const swiper = new Swiper('.swiper', {
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: {
      invert: true,
      sensitivity: '5',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'my-bullet-class',
      bulletActiveClass: 'my-bullet-active-class',
      renderBullet: function (index, className) {
        return `<span class=${className}></span>`
      },
    },
  })
}
// .................................................................
export function addToWishList() {
  GetData('account').then(res => {
    const activeAccount = res.data.find(
      item => item.id === JSON.parse(localStorage.getItem('login')).id
    )
    PutData(
      activeAccount,
      JSON.parse(localStorage.getItem('selectedItem'))
    ).then(res => console.log(res.data))
  })
}
// ..................................................................
export function removeFromWishList() {
  GetData('account').then(res => {
    const activeAccount = res.data.find(
      item => item.id === JSON.parse(localStorage.getItem('login')).id
    )
    const updatedWishList = activeAccount.wishList.filter(
      item => item.id !== JSON.parse(localStorage.getItem('selectedItem')).id
    )
    deleteData(activeAccount, updatedWishList).then(res =>
      console.log(res.data)
    )
  })
}
// ......................................................
function changeHeartIconColor(icon) {
  if (icon.classList.contains('bi-heart')) {
    icon.classList.remove('bi-heart')
    icon.classList.add('bi-heart-fill', 'text-red-500')
    addToWishList()
  } else {
    icon.classList.remove('bi-heart-fill', 'text-red-500')
    icon.classList.add('bi-heart')
    removeFromWishList()
  }
}
// ..........................................................
export function handleAddWishList(e) {
  changeHeartIconColor(e.currentTarget)
}
// .............................................................
export function handleViewMore(e) {
  if (e.currentTarget.innerText === 'view more..') {
    e.currentTarget.innerText = 'view less'
    e.currentTarget.parentElement.childNodes[0].classList.remove(
      'block',
      'h-[50px]'
    )
  } else {
    e.currentTarget.innerText = 'view more..'
    e.currentTarget.parentElement.childNodes[0].classList.add(
      'block',
      'h-[50px]'
    )
  }
}
// .............................................................
export function handleActiveSize(e) {
  const sizeBox = document.getElementById('sizeBox')
  sizeBox.childNodes.forEach(elem => {
    elem.classList.remove('bg-[#101010]', 'text-white')
  })
  e.currentTarget.classList.add('bg-[#101010]', 'text-white')
  localStorage.setItem('size', e.currentTarget.innerHTML)
}
// ..............................................................
export function handleAddCheckmark(e) {
  const colorBox = document.getElementById('colorBox')
  const checkmarks = colorBox.querySelectorAll('.bi-check-lg')
  checkmarks.forEach(elem => {
    elem.classList.add('text-transparent')
    elem.classList.remove('text-white')
  })
  e.currentTarget.childNodes[0].classList.remove('text-transparent')
  if (e.currentTarget.classList.contains('lighGray')) {
    e.currentTarget.childNodes[0].classList.add('text-black')
  } else {
    e.currentTarget.childNodes[0].classList.add('text-white')
  }
  const classList = e.currentTarget.classList
  localStorage.setItem('color', classList[classList.length - 1])
}
// ..................................................................
function addDataToCart() {
  const main = document.getElementById('main')
  main.innerHTML = ''
  main.appendChild(Products())
  const homeMain = document.getElementById('homeMain')
  homeMain.innerHTML = ''
  homeMain.append(CartPage())
  const orderData = {
    id: Date.now(),
    color: localStorage.getItem('color'),
    size: localStorage.getItem('size'),
    quantity: JSON.parse(localStorage.getItem('qty_price')).quantity,
    price: JSON.parse(localStorage.getItem('qty_price')).price,
    name: JSON.parse(localStorage.getItem('selectedItem')).name,
    pic: JSON.parse(localStorage.getItem('selectedItem')).image_url,
  }
  GetData('account').then(res => {
    const cartBox = document.getElementById('cartBox')
    const activeAccount = res.data.find(
      item => item.id === JSON.parse(localStorage.getItem('login')).id
    )
    PutDataCart(activeAccount, orderData).then(res => {
      GetData('account').then(res => {
        const activeAccount = res.data.find(
          item => item.id === JSON.parse(localStorage.getItem('login')).id
        )
        orderCart(activeAccount.cart, cartBox)
        calculateCartTotalPrice()
      })
    })
  })
  // setTimeout(() => {

  // }, 1000)
}
// ...................................................................
export function handleAddToCart(e) {
  e.currentTarget.childNodes[0].classList.remove('bi-bag-fill')
  e.currentTarget.childNodes[0].classList.add('bi-bag-check-fill')
  e.currentTarget.childNodes[1].innerText = 'Added To Cart'
  addDataToCart()
}
// ............................................................................
export function calculateCartTotalPrice() {
  const cartBox = document.getElementById('cartBox')
  const itemPrices = cartBox.querySelectorAll('.price')
  const totalPriceText = document.getElementById('totalPrice')
  let prices = []
  itemPrices.forEach(item => {
    const array = item.innerHTML.split('')
    array.shift()
    prices.push(+array.join(''))
  })
  const totalPrice = prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )
  totalPriceText.innerHTML = `$${totalPrice}`
}
// ....................................................................
function handleCartPrices(elem, quantity) {
  const orderName =
    elem.closest('.cart').childNodes[1].childNodes[0].childNodes[0].innerHTML
  GetData('products').then(res => {
    const targetOrder = res.data.find(item => item.name === orderName)
    elem.closest('#quantityAction').previousElementSibling.innerHTML = `$${
      targetOrder.price * quantity
    }`
    calculateCartTotalPrice()
  })
}
// ......................................................................
export function handleMinusQuanity(elem) {
  const price = document.getElementById('price')
  const selectedItem = JSON.parse(localStorage.getItem('selectedItem'))
  let quantity = +elem.nextElementSibling.innerText
  quantity > 1 ? quantity-- : 1
  elem.nextElementSibling.innerText = quantity
  selectedItem.price = selectedItem.price * quantity
  if (price) {
    price.innerHTML = `$${selectedItem.price}`
  }
  const qty_price = {
    quantity: quantity,
    price: selectedItem.price,
  }
  localStorage.setItem('qty_price', JSON.stringify(qty_price))
  handleCartPrices(elem, quantity)
}
// ........................................................................
export function handleAddQuantity(elem) {
  const price = document.getElementById('price')
  const selectedItem = JSON.parse(localStorage.getItem('selectedItem'))
  let quantity = +elem.previousElementSibling.innerText
  quantity < selectedItem.inventory ? quantity++ : selectedItem.inventory
  elem.previousElementSibling.innerText = quantity
  selectedItem.price = selectedItem.price * quantity
  if (price) {
    price.innerHTML = `$${selectedItem.price}`
  }
  const qty_price = {
    quantity: quantity,
    price: selectedItem.price,
  }
  localStorage.setItem('qty_price', JSON.stringify(qty_price))
  handleCartPrices(elem, quantity)
}
// .........................................................................
export function handleRemoveOrder(e) {
  const cartBox = document.getElementById('cartBox')
  const cartId = +e.currentTarget.closest('.cart').id
  GetData('account').then(res => {
    const activeAccount = res.data.find(
      item => item.id === JSON.parse(localStorage.getItem('login')).id
    )
    console.log(activeAccount)
    const filteredItem = activeAccount.cart.filter(item => item.id !== cartId)
    deleteDataCart(activeAccount, filteredItem)
    orderCart(filteredItem, cartBox)
    calculateCartTotalPrice()
  })
}
