"use strict";

import Qs from 'qs'
import axios from "axios";
import { Toast } from 'vant';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL:  "/api",
  timeout: 60 * 1000, // Timeout
  // headers: {
  //   'Accept': 'application/json',
  //   'Accept-Encoding': 'gzip, deflate',
  //   'Content-Type': 'application/x-www-form-urlencoded',
  //   'X-Requested-With': 'XMLHttpRequest',
  // },
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data;
  }],
  withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

// 请求拦截
_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    config.headers['token'] = sessionStorage.getItem('token') || ''
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 响应拦截
// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    const res = response.data
    // Do something with response data
    if (res.code !== 200) {
      console.log('接口错误信息：', res)
      Toast.fail({
        message: res.message || res.msg || '接口报错',
        forbidClick: true,
        loadingType: 'spinner',
      })

      // // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014 || res.code === 401) {
      //   // to re-login
      //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
      //     confirmButtonText: 'Re-Login',
      //     cancelButtonText: 'Cancel',
      //     type: 'warning'
      //   }).then(() => {
      //     store.dispatch('user/resetToken').then(() => {
      //       location.reload()
      //     })
      //   })
      // }
      return Promise.reject(new Error(res.message || res.msg || 'Error'))
    } else {
      return res
    }
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);


export default _axios;
