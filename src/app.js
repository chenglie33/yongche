import store from './store'
import Vue from 'vue'
import {loginToGetToken} from './utils/index'
import './app.scss'
import VirtualList from '@tarojs/components/virtual-list'
Vue.use(VirtualList)
// Vue.config.productionTip = false

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
