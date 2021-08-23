import Taro from '@tarojs/taro'
import {getOpenid, getUserInfoApi} from '@/api/apilist.js'
import store from '@/store.js'
export function checksession() {
  Taro.checkSession({
    success: function () {
      // getUserProfile()
    },
    fail: function () {
      // session_key 已经失效，需要重新执行登录流程
      console.log('err')
      //重新登录
    }
  })
}
 
export function getWxUserInfo() {
  return new Promise((res,rej)=> {
    Taro.getUserProfile({withCredentials:true,
      desc: '完善用户信息',
      success: function(data) {
        console.log(data)
        Taro.setStorageSync('userInfo', JSON.stringify(data.userInfo))
        store.commit('SET_WXUSERINFO', data.userInfo)
        res(data)
      }
    })
  })
  
}
 
export function getUserProfile() {
  return new Promise((res,rej)=> {
    var userInfo = Taro.getStorageSync('userInfo')
    if (userInfo) {
      store.commit('SET_WXUSERINFO', JSON.parse(userInfo))
      res(userInfo)
    } else {
      // 跳转到授权页面
      Taro.navigateTo({ url: '/pages/authorization/authorization' })
    }
    // Taro.getUserProfile({
    //   success: function(data) {
    //     console.log(data)
    //     store.commit('SET_WXUSERINFO', data.userInfo)
    //     res(data)
    //   }
    // })
  })
  
}


export function WXauthorize() {
  // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
  Taro.getSetting({
    withSubscriptions: true,
  success(res) {
    
  }
})
}


export function loginToGetToken() {
  Taro.login({
    success: function (res) {
      if (res.code) {
        //发起网络请求
        getUserInfoApi({code: res.code}).then(data=>{
          Taro.setStorageSync('token', JSON.stringify(data.data.data.token))
          store.commit('SET_UserInfo', data.data.data)
        
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  })
}