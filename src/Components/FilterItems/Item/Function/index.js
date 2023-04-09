import { GetData } from '@/API'
import { addLoading, removeLoading } from '@/Screens/Products/Function'
import { renderProduct } from '@/Screens/Products/Product'

export const filter = (e, element, endpoint) => {
  addLoading()
  GetData(endpoint).then(res => {
    if (e.target.innerText !== 'All') {
      const filteredItems = res.data.filter(
        item => item.brand === e.target.innerText
      )
      renderProduct(filteredItems, element)
      removeLoading()
    } else {
      renderProduct(res.data, element)
      removeLoading()
    }
  })
}

export const activeItem = e => {
  const items = e.target.parentElement.childNodes
  items.forEach(element => {
    element.classList.remove('bg-[#343A40]', 'text-white')
    element.classList.add('bg-white', 'text-[#343A40]')
  })
  e.target.classList.add('bg-[#343A40]', 'text-white')
  e.target.classList.remove('text-[#343A40]', 'bg-white')
}
