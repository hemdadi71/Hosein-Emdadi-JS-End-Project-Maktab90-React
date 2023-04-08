import { svgs } from '@/svgs'

const handleActiveItem = e => {
  const footerMenu = document.getElementById('footerMenu')
  const svg = footerMenu.querySelectorAll('svg')
  svg.forEach(elem => {
    if (
      elem.classList.contains(
        'bi-wallet-fill'
      )
    ) {
      elem.removeAttribute(
        'stroke-width'
      )
      elem.setAttribute(
        'stroke-width',
        '1'
      )
    }
    elem.removeAttribute('fill')
    elem.setAttribute('fill', 'white')
    // elem.getAttribute('fill')
  })
  if (
    e.currentTarget.childNodes[0].childNodes[0].classList.contains(
      'bi-wallet-fill'
    )
  ) {
    e.currentTarget.childNodes[0].childNodes[0].removeAttribute('stroke-width')
    e.currentTarget.childNodes[0].childNodes[0].setAttribute(
      'stroke-width',
      '.1'
    )
  }
  e.currentTarget.childNodes[0].childNodes[0].setAttribute(
    'fill',
    'currentColor'
  )
  console.log()
  //   console.log(svg)
}

export function FooterMenu() {
  const footerMenu = document.getElementById('footerMenu')
  footerMenu.childNodes.forEach(element => {
    element.addEventListener('click', handleActiveItem)
  })
}
