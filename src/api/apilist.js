import Taro from '@tarojs/taro'
const baseUrl = 'http://192.168.31.107:8881' 
import {toregister} from '@/utils/lib'
// 192.168.31.107:8881
// http://15366728352.uicp.top/
function request(option) {
  return new Promise((res,rej)=> {
    let token = Taro.getStorageSync('token')
    let optionDefault = {
      header: {
        'content-type': 'application/json', // 默认值
        'token': token.slice(1,token.length-1),
        // 'Authorization': 'Bearer '+ token.slice(1,token.length-1)
      },
      success: function (data) {
        if (data.data.code==401) {
          Taro.showToast({
            icon:'none',
            title: '未注册',
            duration: 2000, 	  
          })
          toregister()
        } 
         else if (data.data.code!=200&& data.data.code!=401) {
          Taro.showToast({
            icon:'none',
            title: data.data.message,
            duration: 2000, 	  
          })
        } else  {
          res(data)
        }
        
      },
      fail: function () {
        Taro.showToast({
          icon:'none',
        title: '操作异常',
        duration:2000, 	  
        })
      }
    }
    let config  = Object.assign(optionDefault, option)
    if(config.method==='GET') {
      let queryStr = ''
     
      for (let i in config.params) {
        
        queryStr+=`${i}=${config.params[i]}&`
      }
      config.url = `${config.url}?${queryStr.slice(0,queryStr.length-1)}`
      
    }
    try {
      Taro.request(config)
    } catch(err) {
      rej(err)
    }
    
  })
}
export function getOpenid(params) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/wx`,
    method: 'GET',
    params
  })
}

export function getUserInfoApi(params) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/base/getUserInfo`,
    method: 'GET',
    params
  })
}

export function getCarInfoListApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/homePage/getCarInfoPageList`,
    method: 'POST',
    data
  })
}


export function delWxUserAddressApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/homePage/delWxUserAddress`,
    method: 'POST',
    data
  })
}

export function getWxUserAddressListApi(params) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/homePage/getWxUserAddressList`,
    method: 'GET',
    params
  })
}

export function addWxUserAddressApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/homePage/addWxUserAddress`,
    method: 'POST',
    data
  })
}

export function updateWxUserAddressApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/homePage/updateWxUserAddress`,
    method: 'POST',
    data
  })
}



export function registerWxUserApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/base/registerWxUser`,
    method: 'post',
    data
  })
}

export function getRegionTreeApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/common/getRegionTree`,
    method: 'get',
    data
  })
}


export function getAddressBookListApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/homePage/getAddressBookList`,
    method: 'post',
    data
  })
}

export function confirmOrderApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/pay/confirmOrder`,
    method: 'post',
    data
  })
}

export function getUserOrderPageListApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/myPage/getUserOrderPageList`,
    method: 'post',
    data
  })
}

export function getUserOrderDetailsApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/myPage/getUserOrderDetails`,
    method: 'post',
    data
  })
}

export function pjOrderApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/myPage/pjOrder`,
    method: 'post',
    data
  })
}

export function addUserFeedbackApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/myPage/addUserFeedback`,
    method: 'post',
    data
  })
}

export function getDriverOrderListApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/driver/getDriverOrderList`,
    method: 'post',
    data
  })
}

export function getCompanyListApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/common/getCompanyList`,
    method: 'get',
    data
  })
}

export function driverOrderReceivingApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/driver/driverOrderReceiving`,
    method: 'post',
    data
  })
}

export function driverExecuteOrderApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/driver/driverExecuteOrder`,
    method: 'post',
    data
  })
}

export function driverRefuseOrderReceivingApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/driver/driverRefuseOrderReceiving`,
    method: 'post',
    data
  })
}

export function getXcxPicApi(data) {
  return request({
    url:`${baseUrl}/ht-api/config/getXcxPic`,
    method: 'get',
    data
  })
}

export function getCostApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/homePage/getCost`,
    method: 'post',
    data
  })
}

export function analysisPhoneApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/base/analysisPhone`,
    method: 'post',
    data
  })
}




export function updateUserDetailsApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/myPage/updateUserDetails`,
    method: 'post',
    data
  })
}

export function driverCompleteOrderApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/driver/driverCompleteOrder`,
    method: 'post',
    data
  })
}

export function invoicingApi(data) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/myPage/invoicing`,
    method: 'post',
    data
  })
}
























