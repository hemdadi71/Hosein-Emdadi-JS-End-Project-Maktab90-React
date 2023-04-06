import { Login } from "@/Screens/LoginPage"
import Cookies from "js-cookie"

export function backToLogin() {
  const main = document.getElementById('main')
  main.innerHTML = ''
  main.appendChild(Login())
  history.pushState(null, null, '/login')
  Cookies.remove('token')
}
