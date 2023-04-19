import { GetData, PutAddressData } from '@/API'
import { addressCart } from '@/Components/AddressCart'
import { Validation } from '@/Components/Validation'
import { emptyAllAdressCurcles } from '@/Screens/Checkout/Functions'

export const handleAddNewAddress = () => {
  const addAddressBox = document.getElementById('addAddressBox')
  addAddressBox.classList.remove('h-0')
  addAddressBox.classList.add('h-[360px]')
}
export function handleCloseAddAddress() {
  const addAddressBox = document.getElementById('addAddressBox')
  const form = document.getElementById('form')
  addAddressBox.classList.add('h-0')
  addAddressBox.classList.remove('h-[360px]')
  form.reset()
}
export function handleSubmitAddress(e) {
  e.preventDefault()
  const adressListBox = document.getElementById('adressListBox')
  const nameBox = document.getElementById('nameBox')
  const desBox = document.getElementById('desBox')
  const titleValidation = document.getElementById('titleValidation')
  const desValidation = document.getElementById('desValidation')
  const titleValue = e.currentTarget.title.value
  const desValue = e.currentTarget.description.value
  GetData('account').then(res => {
    const activeAccount = res.data.find(
      item => item.id === JSON.parse(localStorage.getItem('login')).id
    )
    let countId = activeAccount.address.length
    if (titleValue && desValue) {
      countId = countId + 1
      const item = {
        id: `${countId++}`,
        name: titleValue,
        address: desValue,
      }
      PutAddressData(activeAccount, item).then(res => {
        addressCart(res.data.address, adressListBox, {
          editClass: 'hidden',
        })
        emptyAllAdressCurcles()
        handleCloseAddAddress()
      })
    }
  })
  if (!titleValue) {
    if (titleValidation) return
    nameBox.append(
      Validation({
        text: 'Required',
        className: 'text-red-500 absolute bottom-[-25px]',
        id: 'titleValidation',
      })
    )
  } else {
    if (titleValidation) {
      titleValidation.remove()
    }
  }
  if (!desValue) {
    if (desValidation) return
    desBox.append(
      Validation({
        text: 'Required',
        className: 'text-red-500 absolute bottom-[-25px]',
        id: 'desValidation',
      })
    )
  } else {
    if (desValidation) {
      desValidation.remove()
    }
  }
}
