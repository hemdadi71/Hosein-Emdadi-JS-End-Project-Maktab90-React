
import { FOF } from '@/Screens/FOF'
import { firstPage } from '@/Screens/FirstPage'
import { Login } from '@/Screens/LoginPage'
import { Products } from '@/Screens/Products'
import { wellcome } from '@/Screens/Wellcome'

function Routing() {
  const pathName = location.pathname
  const main = document.getElementById('main')
  switch (pathName) {
    case '/':
      main.innerHTML = ''
      main.appendChild(firstPage())
      return true
      break
    case '/onboarding':
      main.innerHTML = ''
      main.appendChild(wellcome())
      return true
      break
    case '/home':
      main.innerHTML = ''
      main.appendChild(Products())
      return true
      break
    case '/login':
      main.innerHTML = ''
      main.appendChild(Login())
      return true
      break
    default:
      main.innerHTML = ''
      main.appendChild(FOF())
      return false
  }
}
export default Routing
