export default {
  pages: [
    'pages/test/test',
    'pages/index/index',
    "pages/dingdan/dingdan",
    
    'pages/kaipiao/kaipiao',
    'pages/persondetail/persondetail',
    'pages/SelectCar/SelectCar',
    
    
    "pages/driver/driver",
    "pages/driverReg/driverReg",
    "pages/driverDetail/driverDetail",
    
    "pages/person/person",
    "pages/suggestion/suggestion",
   
    "pages/comment/comment",
    "pages/orderDetail/orderdeail",

    
    'pages/orderstatus/orderstatus',
    'pages/addressSearch/addressSearch',
    "pages/addaddress/addaddress",
    'pages/carlist/carlist',
    

  
    "pages/address/address",
    
    
    
    'pages/authorization/authorization',
    
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#cdcdcd",
    selectedColor: "#666",
    backgroundColor: "#fafafa",
    borderStyle: 'black',
    list:[
      {
        pagePath: "pages/index/index",
        iconPath: "./assets/shouye_g@2x.png",
        selectedIconPath: "./assets/shouye_b@2x.png",
        text: "้ฆ้กต"
      },
      {
        pagePath: "pages/person/person",
        iconPath: "./assets/wode_g@2x.png",
        selectedIconPath: "./assets/wode_b@2x.png",
        text: "ๆ็"
      }]
  }
}
