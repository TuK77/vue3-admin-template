import axios, { AxiosInstance } from 'axios';
import qs from 'qs';
import { ElMessage, ElMessageBox } from 'element-plus';
import { getToken, removeToken } from './auth';

const service: AxiosInstance = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.VITE_API_PREFIX,
  // 超时
  timeout: 30000
});

// 请求拦截
service.interceptors.request.use(config => {
  // 是否需要设置 token
  const isToken = (config.headers || {}).isToken === false
  if (getToken() && !isToken) {
    config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  // get请求映射params参数
  if (config.method === 'get' && config.params) {
    let url = config.url + '?' + qs(config.params, { allowDots: true });
    config.params = {};
    config.url = url;
  }
  return config
}, error => {
  Promise.reject(error)
});

// 响应拦截
service.interceptors.response.use(response => {
  // 对响应数据做点什么
  const res = response.data;
  if (res.code && res.code !== 0) {
    if (res.code === 401) {
      removeToken(); // 清除cookie中的token
      window.location.href = '/'; // 跳转首页，走路由守卫钩子，在跳转到登录页
      ElMessageBox.alert('你已被登出，请重新登录', '提示', {})
        .then(() => {})
        .catch(() => {});
    }
    return Promise.reject(service.interceptors.response);
  } else {
    return res;
  }
},
  error => {
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    ElMessage({ message: message, grouping: true, type: 'error', duration: 5 * 1000 })
    return Promise.reject(error)
  }
)