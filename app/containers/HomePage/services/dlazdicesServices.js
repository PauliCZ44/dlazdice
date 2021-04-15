import axios from 'axios'
const baseUrl = '/dlazdice'


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async (dlazdiceToBeSaved) => {
  const response = await axios.post(baseUrl, dlazdiceToBeSaved)
  console.log(response.data)
  return response.data
}

const deleteDlazdice = async (dlazdiceToBeDeleted) => {
  let url = baseUrl+'/'+dlazdiceToBeDeleted.id
  const response = await axios.delete(url)
  return response.data
}

const put = async (dlazdiceToBePutted) => {
  let url = baseUrl+'/'+dlazdiceToBePutted.id
  console.log(url)
  const response = await axios.put(url, dlazdiceToBePutted)
  console.log('Put METHDOD, data:', response.data)
  return response.data
}

const getOne = async (dlazdicegToBeFound) => {
  let url = baseUrl+'/'+dlazdicegToBeFound.id
  const response = await axios.get(url)
  console.log(response.data)
  return response.data
}

export default { getAll, create, put , deleteDlazdice, getOne }