export default {
  pages: [
    'pages/index/index',
    "pages/person/person",
    "pages/suggestion/suggestion",
    "pages/dingdan/dingdan",
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
        text: "首页"
      },
      {
        pagePath: "pages/person/person",
        iconPath: "./assets/wode_g@2x.png",
        selectedIconPath: "./assets/wode_b@2x.png",
        text: "我的"
      }]
  }
}
