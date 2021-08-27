import store from './store'
import Vue from 'vue'
import {loginToGetToken} from './utils/index'
import './app.scss'
import VirtualList from '@tarojs/components/virtual-list'
import Taro, { Events } from '@tarojs/taro'
import {getRegionTreeApi} from '@/api/apilist'
getRegionTreeApi().then(data=>{
  console.log(data.data.data)
  Taro.setStorageSync('region',JSON.stringify(data.data.data))
})
const events = new Events()
Vue.use(VirtualList)
// Vue.config.productionTip = false
Vue.prototype.$bus = new Events()
const App = {
  store,
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}
loginToGetToken();
export default App
