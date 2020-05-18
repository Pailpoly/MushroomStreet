import axios from 'axios'


//最终方法：

export function request(config) {
    const axios1 = axios.create({
      // baseURL:"static/data/homeData",
      timeout:5000
    })
    axios1.interceptors.response.use(res=>{
      return res.data
    })
    return axios1(config)
}


//拦截器使用
