import axios from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '/framework';

axios.interceptors.response.use(response => response, (err) => {
  let errMsg = '系统错误';
  if (err.response.data && err.response.data.message) {
    errMsg = err.response.data.message;
  } else if (err && err.response) {
    switch (err.response.status) {
      case 400:
        errMsg = '请求错误';
        break;
      case 401:
        errMsg = '未授权，请登录';
        // TODO
        break;
      case 403:
        errMsg = '拒绝访问';
        break;
      case 404:
        errMsg = `请求地址出错: ${err.response.config.url}`;
        break;
      case 408:
        errMsg = '请求超时';
        break;
      case 500:
        errMsg = '服务器内部错误';
        break;
      case 501:
        errMsg = '服务未实现';
        break;
      case 502:
        errMsg = '网关错误';
        break;
      case 503:
        errMsg = '服务不可用';
        break;
      case 504:
        errMsg = '网关超时';
        break;
      case 505:
        errMsg = 'HTTP版本不受支持';
        break;
      default:
    }
  }
  return Promise.reject(errMsg);
});

export default axios;
