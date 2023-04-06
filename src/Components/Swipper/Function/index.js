import { Login } from '@/Screens/LoginPage'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
// ..............................
function swiperFunc() {
  const button = document.querySelector('.next')
  const firstLine = document.querySelector('#firstLine')
  const secondLine = document.querySelector('#secondLine')
  const thirdLine = document.querySelector('#thirdLine')
  const swiper = new Swiper('.swiper', {
    loop: false,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.next',
    },
    mousewheel: {
      invert: true,
      sensitivity: '5',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  })
  swiper.on('slideChange', function () {
    if (swiper.activeIndex === 2) {
      changeLineColor(thirdLine, 'Get Start')
    } else if (swiper.activeIndex === 1) {
      changeLineColor(secondLine, 'Next')
      button.removeEventListener('click', goToLogin)
    } else {
      changeLineColor(firstLine, 'Next')
      button.removeEventListener('click', goToLogin)
    }
  })
}
export default swiperFunc
// ..................................................
function goToLogin() {
  const main = document.querySelector('#main')
  main.innerHTML = ''
  main.appendChild(Login())
  history.pushState(null,null,'/login')
}
// .................................................
function changeLineColor(el, txt) {
  const scrollbar = document.querySelectorAll('.line')
  const button = document.querySelector('.next')
  button.addEventListener('click', goToLogin)
  button.innerHTML = `${txt}`
  scrollbar.forEach(elem => {
    elem.classList.remove('bg-black')
    elem.classList.remove('bg-red-600')
    elem.classList.add('bg-black')
  })
  el.classList.remove('bg-black')
  el.classList.add('bg-red-600')
}
