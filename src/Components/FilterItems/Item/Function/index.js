import { GetData } from '@/API'
import { renderProduct } from '@/Screens/Products/Product'

const filter = e => {
  GetData('products').then(res => {
    if (e.target.innerText !== 'All') {
      const filteredItems = res.data.filter(
        item => item.brand === e.target.innerText
      )
      renderProduct(filteredItems)
    } else {
      renderProduct(res.data)
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
  filter(e)
}
