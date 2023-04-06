/* eslint-disable no-undef */
import { GetData } from '@/API'
import { SwipperPages } from '@/Components/Swipper'
import swiperFunc from '@/Components/Swipper/Function'
import { Validation } from '@/Components/Validation'
import { Products } from '@/Screens/Products'
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
  let item = {
    email: e.target.email.value,
    password: e.target.password.value,
  }

  GetData().then(res => {
    const currectItem = res.data.find(
      i => i.email === item.email && i.password === item.password
    )
    if (!e.target.email.value && e.target.password.value) {
      if (emailEmpty) return
      emailBox.append(
        Validation({
          text: 'Requiered',
          id: 'emailEmpty',
        })
      )
    }
    if (e.target.email.value && !e.target.password.value) {
      if (passwordEmpty) return
      passwordBox.append(
        Validation({
          text: 'Requiered',
          id: 'passwordEmpty',
        })
      )
    }
    if (!e.target.email.value && !e.target.password.value) {
      if (emailEmpty) return
      emailBox.append(
        Validation({
          text: 'Requiered',
          id: 'emailEmpty',
        })
      )
      if (passwordEmpty) return
      passwordBox.append(
        Validation({
          text: 'Requiered',
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
          main.innerHTML = ''
          main.appendChild(Products())
          history.pushState(null, null, '/home/page/1')
          const Token = 'f;lskdfjsfdlsk;fjsklfjFds'
          if (checkbox.checked) {
            Cookies.set('token', Token, {
              expires: 1,
            })
          }
        } else {
          const notExist = document.getElementById('notExist')
          const nouserValid = document.getElementById('nouserValid')
          if (nouserValid) return
          notExist.append(
            Validation({
              text: 'There is no user with this email or password',
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
    if (e.target.parentElement.childNodes[2]) {
      e.target.parentElement.childNodes[2].remove()
    }
    if (e.target === emailBox.childNodes[0]) {
      const invalidEmail = document.getElementById('invalidEmail')
      if (!emailPattern.test(emailBox.childNodes[0].value)) {
        if (invalidEmail) return
        emailBox.append(
          Validation({
            text: 'Please Enter Valid Email',
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
            id: 'invalidPassword',
          })
        )
      }
    }
  } else if (!e.target.value) {
    if (e.target.parentElement.childNodes[2]) {
      e.target.parentElement.childNodes[2].remove()
    }
  }
}
