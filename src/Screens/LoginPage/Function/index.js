/* eslint-disable no-undef */
import { GetData } from '@/API'
import { SwipperPages } from '@/Components/Swipper'
import swiperFunc from '@/Components/Swipper/Function'
import { Validation } from '@/Components/Validation'
import { Products } from '@/Screens/Products'
import { renderProduct } from '@/Screens/Products/Product'
import Routing from '@/Screens/Routing/Function'
import Cookies from 'js-cookie'
const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,4}$/
const passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}/
export function handleBack() {
  const main = document.getElementById('main')
  main.innerHTML = ''
  main.appendChild(SwipperPages())
  swiperFunc()
  history.pushState(null, null, '/onboarding ')
}
export function handleSubmitForm(e) {
  e.preventDefault()
  const emailBox = document.getElementById('emailBox')
  const passwordBox = document.getElementById('passwordBox')
  const emailEmpty = document.getElementById('emailEmpty')
  const passwordEmpty = document.getElementById('passwordEmpty')
  const notExist = document.getElementById('notExist')
  const nouserValid = document.getElementById('nouserValid')
  const SuccessLogin = document.getElementById('SuccessLogin')
  let item = {
    email: e.target.email.value,
    password: e.target.password.value,
  }

  GetData('account').then(res => {
    const currectItem = res.data.find(
      i => i.email === item.email && i.password === item.password
    )
    if (!e.target.email.value && e.target.password.value) {
      if (emailEmpty) return
      emailBox.append(
        Validation({
          text: 'Requiered',
          className: 'text-red-500',
          id: 'emailEmpty',
        })
      )
    }
    if (e.target.email.value && !e.target.password.value) {
      if (passwordEmpty) return
      passwordBox.append(
        Validation({
          text: 'Requiered',
          className: 'text-red-500',
          id: 'passwordEmpty',
        })
      )
    }
    if (!e.target.email.value && !e.target.password.value) {
      if (emailEmpty) return
      emailBox.append(
        Validation({
          text: 'Requiered',
          className: 'text-red-500',
          id: 'emailEmpty',
        })
      )
      if (passwordEmpty) return
      passwordBox.append(
        Validation({
          text: 'Requiered',
          className: 'text-red-500',
          id: 'passwordEmpty',
        })
      )
    }
    if (e.target.email.value && e.target.password.value) {
      if (
        emailPattern.test(emailBox.childNodes[0].value) &&
        passwordPattern.test(passwordBox.childNodes[0].value)
      ) {
        if (currectItem) {
          const main = document.getElementById('main')
          const checkbox = document.getElementById('checkbox')
          if (nouserValid) {
            nouserValid.remove()
          }
          if (SuccessLogin) return
          notExist.append(
            Validation({
              text: 'Success Login',
              className: 'text-green-500',
              id: 'SuccessLogin',
            })
          )
          setTimeout(() => {
            main.innerHTML = ''
            main.appendChild(Products())
            const products = document.getElementById('products')
            GetData('products').then(res => renderProduct(res.data, products))
            // console.log(currectItem.wishList)
            history.pushState(null, null, '/home')
            const Token = 'fl;jsdfljfsd;lfjf;lsfjglj;l@4kj'
            const item = {
              id: currectItem.id,
              email: currectItem.email,
              password: currectItem.password,
              wishList: currectItem.wishList,
              cart: currectItem.cart,
            }
            console.log(currectItem)
            localStorage.setItem('login', JSON.stringify(item))
            if (checkbox.checked) {
              Cookies.set('token', Token, {
                expires: 1,
              })
            }
            // Routing()
          }, 3000)
        } else {
          if (nouserValid) return
          notExist.append(
            Validation({
              text: 'There is no user with this email or password',
              className: 'text-red-500',
              id: 'nouserValid',
            })
          )
        }
      }
    }
  })
}
// ......................................................................
export function handleValidation(e) {
  if (e.target.value) {
    if (e.target === emailBox.childNodes[0]) {
      if (e.target.parentElement.childNodes[2]) {
        e.target.parentElement.childNodes[2].remove()
      }
    } else if (e.target === passwordBox.childNodes[0]) {
      if (e.target.parentElement.childNodes[3]) {
        e.target.parentElement.childNodes[3].remove()
      }
    }

    if (e.target === emailBox.childNodes[0]) {
      const invalidEmail = document.getElementById('invalidEmail')
      if (!emailPattern.test(emailBox.childNodes[0].value)) {
        if (invalidEmail) return
        emailBox.append(
          Validation({
            text: 'Please Enter Valid Email',
            className: 'text-red-500',
            id: 'invalidEmail',
          })
        )
      }
    }
    if (e.target === passwordBox.childNodes[0]) {
      const invalidPassword = document.getElementById('invalidPassword')
      if (!passwordPattern.test(passwordBox.childNodes[0].value)) {
        if (invalidPassword) return
        passwordBox.append(
          Validation({
            text: 'Please Enter Valid Password',
            className: 'text-red-500',
            id: 'invalidPassword',
          })
        )
      }
    }
  } else if (!e.target.value) {
    if (e.target === passwordBox.childNodes[0]) {
      if (e.target.parentElement.childNodes[3]) {
        e.target.parentElement.childNodes[3].remove()
      }
    } else {
      if (e.target.parentElement.childNodes[2]) {
        e.target.parentElement.childNodes[2].remove()
      }
    }
  }
}
// ...................................................................
export function handleShowPassword(e) {
  const passwordEl = e.target.parentElement.childNodes[0]
  if (passwordEl.type === 'password') {
    passwordEl.type = 'text'
  } else {
    passwordEl.type = 'password'
  }
}
