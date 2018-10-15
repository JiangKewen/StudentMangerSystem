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
      .post(url, json2Form(params))
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
      .get(url, {params:params})
      .then(
        response => {
          console.log(params,'params_get')
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

//参数封装
function json2Form(json){
  var str = []
  for(var p in json){
    str.push(encodeURIComponent(p) + '=' + encodeURIComponent(json[p]))
}
  return str.join("&")
}

export const login = params => _post("/admin/login", params) //用户登录

export const navs_tree = params => _get("/navs/tree", params) //侧边栏获取

export const navs_page = params => _get("/navs/page", params) //模块分页

export const navs_detail = params => _get("/navs/detail", params) //模块详情

export const navs_save = params => _post("/navs/save", params) //模块添加或修改

export const navs_delete = params => _post("/navs/delete", params) //模块删除
