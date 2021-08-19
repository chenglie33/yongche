import Taro from '@tarojs/taro'
export function checksession() {
  Taro.checkSession({
    success: function () {
      console.log('success')
      //session_key 未过期，并且在本生命周期一直有效
    },
    fail: function () {
      // session_key 已经失效，需要重新执行登录流程
      console.log('err')
      Taro.login({
        success: function (res) {
          console.log(res)
          // if (res.code) {
          //   //发起网络请求
          //   Taro.request({
          //     url: 'https://test.com/onLogin',
          //     data: {
          //       code: res.code
          //     }
          //   })
          // } else {
          //   console.log('登录失败！' + res.errMsg)
          // }
        }
      }) //重新登录
    }
  })
}