import axios from 'axios'

let token = ''

const config = {
  baseURL: 'http://localhost:9091'
}

const instance = axios.create(config)

instance.interceptors.request.use(config => {
  token = localStorage.getItem('token')
  config.headers.token = token === null ? '' : token
  return config
})

instance.interceptors.response.use(res => res.data)

export default instance
