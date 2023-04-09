import axios from 'axios'
export async function GetData(endpoint) {
  const response = await axios(`http://192.168.1.50:8080/${endpoint}`)
  return response
}
