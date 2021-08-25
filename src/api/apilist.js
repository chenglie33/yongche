import Taro from '@tarojs/taro'
const baseUrl = 'http://15366728352.uicp.top/'
function request(option) {
  return new Promise((res,rej)=> {
    let optionDefault = {
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (data) {
        res(data)
      },
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


export function delWxUserAddressApi(params) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/homePage/delWxUserAddress`,
    method: 'GET',
    params
  })
}

export function getWxUserAddressListApi(params) {
  return request({
    url:`${baseUrl}/zhzc-api/zhzc/homePage/getWxUserAddressList`,
    method: 'GET',
    params
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











