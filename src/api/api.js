import axios from "axios"
import qs from "qs"
import { Message } from "element-ui"
import router from "../router/index"

// axios初始化配置
axios.defaults.timeout = 10000
axios.defaults.baseURL = process.env.BASE_API

// post请求
const _post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

// get请求
const _get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params })
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

export const login = params => _get("/checkLogin/checkLogin", params)
