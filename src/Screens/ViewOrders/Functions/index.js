function headerClasses(left100, left0, gray, black) {
  const line = document.getElementById('line')
  const active = document.getElementById('active')
  const completed = document.getElementById('completed')
  line.classList.remove(`${left100}`)
  line.classList.add(`${left0}`)
  active.classList.remove(`${gray}`)
  active.classList.add(`${black}`)
  completed.classList.add(`${gray}`)
  completed.classList.remove(`${black}`)
}
// ....................................................................
export function handleShowActiveOrders() {
  headerClasses('left-[100%]','left-0','text-[#9E9E9D]','text-black')
}
// ....................................................................
export function handleShowCompletedOrders() {
  headerClasses('left-0','left-[100%]','text-black','text-[#9E9E9D]')
}
// ....................................................................
