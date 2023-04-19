import axios from 'axios'
export async function GetData(endpoint) {
  const response = await axios(`http://localhost:3000/${endpoint}`)
  return response
}
// ................................................................
export async function PutData(activeAccount, item) {
  const response = await axios.put(
    `http://localhost:3000/account/${activeAccount.id}`,
    {
      id: activeAccount.id,
      email: activeAccount.email,
      password: activeAccount.password,
      wishList: [...activeAccount.wishList, item],
      cart: activeAccount.cart,
      address: activeAccount.address,
      orders: activeAccount.orders,
      condition: activeAccount.condition,
    }
  )
  return response
}
// ..................................................................
export async function deleteData(activeAccount, item) {
  const response = await axios.put(
    `http://localhost:3000/account/${activeAccount.id}`,
    {
      id: activeAccount.id,
      email: activeAccount.email,
      password: activeAccount.password,
      wishList: item,
      cart: activeAccount.cart,
      address: activeAccount.address,
      orders: activeAccount.orders,
      condition: activeAccount.condition,
    }
  )
  return response
}
// .....................................................................
export async function PutDataCart(activeAccount, item) {
  const response = await axios.put(
    `http://localhost:3000/account/${activeAccount.id}`,
    {
      id: activeAccount.id,
      email: activeAccount.email,
      password: activeAccount.password,
      wishList: activeAccount.wishList,
      cart: [...activeAccount.cart, item],
      address: activeAccount.address,
      orders: activeAccount.orders,
      condition: activeAccount.condition,
    }
  )
  return response
}
// ..........................................................................
export async function deleteDataCart(activeAccount, item) {
  const response = await axios.put(
    `http://localhost:3000/account/${activeAccount.id}`,
    {
      id: activeAccount.id,
      email: activeAccount.email,
      password: activeAccount.password,
      wishList: activeAccount.wishList,
      cart: item,
      address: activeAccount.address,
      orders: activeAccount.orders,
      condition: activeAccount.condition,
    }
  )
  return response
}
// .........................................................................
export async function FinalUpdateCart(activeAccount, item) {
  const response = await axios.put(
    `http://localhost:3000/account/${activeAccount.id}`,
    {
      id: activeAccount.id,
      email: activeAccount.email,
      password: activeAccount.password,
      wishList: activeAccount.wishList,
      cart: item,
      address: activeAccount.address,
      orders: activeAccount.orders,
      condition: activeAccount.condition,
    }
  )
  return response
}
// ..........................................................................
export async function PutDataOrder(activeAccount, cartItem, item) {
  const response = await axios.put(
    `http://localhost:3000/account/${activeAccount.id}`,
    {
      id: activeAccount.id,
      email: activeAccount.email,
      password: activeAccount.password,
      wishList: activeAccount.wishList,
      cart: cartItem,
      address: activeAccount.address,
      orders: [...activeAccount.orders, ...item],
      condition: activeAccount.condition,
    }
  )
  return response
}
// .................................................................
export async function PutAddressData(activeAccount, item) {
  const response = await axios.put(
    `http://localhost:3000/account/${activeAccount.id}`,
    {
      id: activeAccount.id,
      email: activeAccount.email,
      password: activeAccount.password,
      wishList: activeAccount.wishList,
      cart: activeAccount.cart,
      address: [...activeAccount.address, item],
      orders: activeAccount.orders,
      condition: activeAccount.condition,
    }
  )
  return response
}
