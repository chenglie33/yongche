import store from './store'
import {checksession} from './utils/index'
import './app.scss'

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
checksession();
export default App
