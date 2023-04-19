import { GetData } from '@/API'
import { Li } from '@/Components/InputHistoryLi'
import { Notfound } from '@/Components/NotFound'
import { removeLoading, renderWishList } from '@/Screens/Products/Function'
import { addLoading } from '@/Screens/Products/Function'
import { renderWishListProduct } from '@/Screens/Products/WishListProduct'
import { WishList } from '@/Screens/WishList'

let data = []
let result
export function handleSearchWishList(input) {
  const resultBox = document.getElementById('resultBox')
  const history = document.getElementById('history')
  const resultName = document.getElementById('resultName')
  const resultCount = document.getElementById('resultCount')
  if (input.value) {
    data.push(input.value)
    result = [...new Set(data.slice(-20))]
    localStorage.setItem('item', JSON.stringify(result))
    addLoading()
    GetData('account').then(res => {
      const activeAccount = res.data.find(
        item => item.id === JSON.parse(localStorage.getItem('login')).id
      )
      const filteredItems = activeAccount.wishList.filter(
        item =>
          item.name.toLowerCase().startsWith(input.value.toLowerCase()) ||
          item.brand.toLowerCase().startsWith(input.value.toLowerCase())
      )
      if (filteredItems.length === 0) {
        resultBox.innerHTML = ''
        resultBox.append(
          Notfound({
            top: 'top-[100px]',
            width: 'w-[220px]',
            padding: 'px-5',
          })
        )
      } else {
        renderWishListProduct(filteredItems, resultBox)
      }
      resultName.innerHTML = `Results for "${input.value}"`
      resultCount.innerHTML = `${filteredItems.length} founds`
      history.classList.add('hidden')
      removeLoading()
    })
  }
}
// .......................................................
export function InputFocusIn() {
  const inputUL = document.getElementById('inputUL')
  const history = document.getElementById('history')
  let data = JSON.parse(localStorage.getItem('item'))
  if (data) {
    history.classList.remove('hidden')
    inputUL.innerHTML = ''
    data.map(item => {
      inputUL.prepend(Li({ child: item }))
    })
  }
}
// ...........................................................
export function InputFocusOut() {
  const searchInput = document.getElementById('searchInput')
  const removeHistory = document.getElementById('removeHistory')
  document.addEventListener('click', e => {
    const history = document.getElementById('history')
    if (e.target === removeHistory) {
      localStorage.removeItem('item')
      data = []
      history.classList.add('hidden')
    } else if (e.target === searchInput) {
      InputFocusIn()
    } else {
      history.classList.add('hidden')
    }
  })
}
// ..............................................................
export function handleSelectedHistory(e) {
  const resultBox = document.getElementById('resultBox')
  const history = document.getElementById('history')
  const resultName = document.getElementById('resultName')
  const resultCount = document.getElementById('resultCount')
  const selectedHistory = e.currentTarget.innerHTML
  addLoading()
  GetData('account').then(res => {
    const activeAccount = res.data.find(
      item => item.id === JSON.parse(localStorage.getItem('login')).id
    )
    const filteredItems = activeAccount.wishList.filter(
      item =>
        item.name.toLowerCase().startsWith(selectedHistory.toLowerCase()) ||
        item.brand.toLowerCase().startsWith(selectedHistory.toLowerCase())
    )
    if (filteredItems.length === 0) {
      resultBox.innerHTML = ''
      resultBox.append(
        Notfound({
          top: 'top-[100px]',
          width: 'w-[220px]',
          padding: 'px-5',
        })
      )
    } else {
      renderWishListProduct(filteredItems, resultBox)
    }
    resultName.innerHTML = `Results for "${selectedHistory}"`
    resultCount.innerHTML = `${filteredItems.length} founds`
    history.classList.add('hidden')
    removeLoading()
  })
}
// .............................................................
export function handleRemoveHistory(e) {
  const selectedHistory = e.currentTarget.previousElementSibling.innerHTML
  const historyItems = JSON.parse(localStorage.getItem('item'))
  const filteredHistoryItems = historyItems.filter(
    item => item !== selectedHistory
  )
  localStorage.setItem('item', JSON.stringify(filteredHistoryItems))
}
// .............................................................
export function handleBackToWishListPage() {
  const main = document.getElementById('main')
  main.innerHTML = ''
  main.appendChild(WishList())
  renderWishList()
  history.pushState(null, null, '/home/wishlist')
}
