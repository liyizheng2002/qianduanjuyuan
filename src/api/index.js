import axios from '@/utils/axios'
const api = {
  home: {
    label: () => axios.get('/api/wen/da') /* 获取所有的数据所有问题列表 */
  },
  question: {
    list: (params) => axios.get('/api/question/list', params), /* 18个标题 */
    detail: (id) => axios.get(`/api/question/${id}`), /* 每一个问题详情 */
    create: (params) => axios.post('/api/question', params), /* 创建问题 */
    answer: (id, params) => axios.post('/api/answer/' + `${id}`, params) /* 回答某一个问题 */
  }
}
export default api
