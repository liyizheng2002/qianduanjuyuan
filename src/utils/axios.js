import axios from 'axios'
const service = axios.create({})

service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  /* 这里写在这里是为了只要输入错误就弹出来定义在了全局了 */
  const response = error.response
  const data = response
  alert(data.data.message) /* 你输入的验证码不正确 */
  // 对响应错误做点什么
  return Promise.reject(error)
})
export default {
  ...service,
  /* 重写get方法 */
  get (url, params) {
    return service.get(url, { params }) /* 写了这一步以后传参就不用写params了 */
  }
}
