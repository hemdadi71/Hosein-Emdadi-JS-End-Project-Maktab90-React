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
    }
  )
  return response
}
