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
export async function FinalUpdateCart(activeAccount, item, orderItem) {
  const response = await axios.put(
    `http://localhost:3000/account/${activeAccount.id}`,
    {
      id: activeAccount.id,
      email: activeAccount.email,
      password: activeAccount.password,
      wishList: activeAccount.wishList,
      cart: item,
      address: activeAccount.address,
      orders: orderItem
        ? [...activeAccount.orders, orderItem]
        : activeAccount.orders,
      condition: activeAccount.condition,
    }
  )
  return response
}
// ..........................................................................
