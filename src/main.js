import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入重置css
import setcss from './assets/css/reset.css'
import jquery from './assets/js/jquery-3.2.1.min'
Vue.config.productionTip = false
//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Axios } from 'axios'
Vue.use(ElementUI);
//跨域
Vue.prototype.$axios =Axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
