import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
// ...............................................
export function SwiperForShoping() {
  const swiper = new Swiper('.swiper', {
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: {
      invert: true,
      sensitivity: '5',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'my-bullet-class',
      bulletActiveClass: 'my-bullet-active-class',
      renderBullet: function (index, className) {
        return `<span class=${className}></span>`
      },
    },
  })
}
// ......................................................
function changeHeartIconColor(icon) {
  if (icon.classList.contains('bi-heart')) {
    icon.classList.remove('bi-heart')
    icon.classList.add('bi-heart-fill', 'text-red-500')
  } else {
    icon.classList.remove('bi-heart-fill', 'text-red-500')
    icon.classList.add('bi-heart')
  }
}
// ..........................................................
export function handleAddWishList(e) {
  changeHeartIconColor(e.currentTarget)
}
export function handleViewMore(e) {
  if (e.currentTarget.innerText === 'view more..') {
    e.currentTarget.innerText = 'view less'
    e.currentTarget.parentElement.childNodes[0].classList.remove(
      'block',
      'h-[50px]'
    )
  } else {
    e.currentTarget.innerText = 'view more..'
    e.currentTarget.parentElement.childNodes[0].classList.add(
      'block',
      'h-[50px]'
    )
  }
}
export function handleActiveSize(e) {
  const sizeBox = document.getElementById('sizeBox')
  sizeBox.childNodes.forEach(elem => {
    elem.classList.remove('bg-[#101010]', 'text-white')
  })
  e.currentTarget.classList.add('bg-[#101010]', 'text-white')
}
export function handleAddCheckmark(e) {
  const colorBox = document.getElementById('colorBox')
  const checkmarks = colorBox.querySelectorAll('.bi-check-lg')
  checkmarks.forEach(elem => {
    elem.classList.add('text-transparent')
    elem.classList.remove('text-white')
  })
  e.currentTarget.childNodes[0].classList.remove('text-transparent')
  if (e.currentTarget.classList.contains('lighGray')) {
    e.currentTarget.childNodes[0].classList.add('text-black')
  } else {
    e.currentTarget.childNodes[0].classList.add('text-white')
  }
}
export function handleAddToCart(e) {
  e.currentTarget.childNodes[0].classList.remove('bi-bag-fill')
  e.currentTarget.childNodes[0].classList.add('bi-bag-check-fill')
  e.currentTarget.childNodes[1].innerText = 'Added To Cart'
}
