import { GetData } from '@/API'
import { FooterMenu } from '@/Components/FooterMenu/Function'
import { SwipperPages } from '@/Components/Swipper'
import swiperFunc from '@/Components/Swipper/Function'
import { firstPage } from '@/Screens/FirstPage'
import { Login } from '@/Screens/LoginPage'
import { Products } from '@/Screens/Products'
import { renderProduct } from '@/Screens/Products/Product'
import Routing from '@/Screens/Routing/Function'
import { Swipper } from '@/Screens/Swipper'
import { wellcome } from '@/Screens/Wellcome'
import Cookies from 'js-cookie'

function WindowLoad() {
  const ShowFirstPage = () => {
    const main = document.getElementById('main')
    main.innerHTML = ''
    const token = Cookies.get('token')
    if (token) {
      main.append(Products())
      GetData('products').then(res => renderProduct(res.data))
      FooterMenu()
      history.pushState(null, null, '/home')
      // Routing()
    } else {
      main.appendChild(firstPage())
      history.pushState(null, null, '/')
      swiperFunc()
      setTimeout(() => {
        history.pushState(null, null, '/onboarding ')
        Routing()
      }, 3000)
      setTimeout(() => {
        main.innerHTML = ''
        main.appendChild(SwipperPages())
        swiperFunc()
      }, 7000)
    }
  }
  window.addEventListener('load', ShowFirstPage)
}
export default WindowLoad
