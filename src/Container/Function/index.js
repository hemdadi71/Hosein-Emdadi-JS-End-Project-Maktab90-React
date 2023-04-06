import { SwipperPages } from '@/Components/Swipper'
import swiperFunc from '@/Components/Swipper/Function'
import { firstPage } from '@/Screens/FirstPage'
import { Login } from '@/Screens/LoginPage'
import { Products } from '@/Screens/Products'
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
      history.pushState(null, null, '/home/page/1')
    } else {
      main.appendChild(Login())
      history.pushState(null, null, '/')
      swiperFunc()
      // setTimeout(() => {
      //   main.innerHTML = ''
      //   main.appendChild(wellcome())
      //   history.pushState(null,null,'/onboarding ')
      // }, 3000)
      // setTimeout(() => {
      //   main.innerHTML = ''
      //   main.appendChild(SwipperPages())

      //   swiperFunc()
      // }, 7000);
    }
  }
  window.addEventListener('load', ShowFirstPage)
}
export default WindowLoad
