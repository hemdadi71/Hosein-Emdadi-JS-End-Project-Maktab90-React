import axios from 'axios'
export async function GetData(endpoint) {
  const response = await axios(`http://localhost:3000/${endpoint}`)
  return response
}
