import { GetData } from '@/API'
import { Login } from '@/Screens/LoginPage'
import Routing from '@/Screens/Routing/Function'
import Cookies from 'js-cookie'

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
  GetData('products').then(res => {
    const selectedItem = res.data.find(item => item.id === +selectedId)
    console.log(selectedItem)
  })
}
