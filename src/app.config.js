export default {
  pages: [
    'pages/carlist/carlist',
    'pages/index/index',
    "pages/suggestion/suggestion",
    "pages/addaddress/addaddress",
    "pages/address/address",
    "pages/comment/comment",
    "pages/orderDetail/orderdeail",
    "pages/person/person",
    "pages/dingdan/dingdan",
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
