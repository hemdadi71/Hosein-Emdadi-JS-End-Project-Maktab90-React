import axios from 'axios'
export async function GetData() {
  const response = await axios('http://localhost:3000/account')
  return response
}
