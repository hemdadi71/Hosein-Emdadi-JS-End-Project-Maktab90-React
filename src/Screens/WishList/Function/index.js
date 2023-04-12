import { GetData } from '@/API'
import { activeItem } from '@/Components/FilterItems/Item/Function'
import {
  addLoading,
  removeLoading,
  renderWishList,
} from '@/Screens/Products/Function'
import { renderProduct } from '@/Screens/Products/Product'
import { renderWishListProduct } from '@/Screens/Products/WishListProduct'

export const FilterWishList = e => {
  addLoading()
  const text = e.currentTarget.innerHTML
  activeItem(e)
  if (e.currentTarget.innerHTML === 'All') {
    renderWishList()
    removeLoading()
  } else {
    const WishListProducts = document.getElementById('WishListProducts')
    const activeAccount = JSON.parse(localStorage.getItem('login'))
    GetData('account').then(res => {
      const currentAccount = res.data.find(item => item.id === activeAccount.id)
      const filteredItems = currentAccount.wishList.filter(
        item => item.brand.toLowerCase() === text.toLowerCase()
      )
      renderWishListProduct(filteredItems, WishListProducts)
      removeLoading()
    })
  }
}
