import Vue from 'vue'
import App from './App'
import router from './router'
//解决浏览器兼容问题
import 'styles/reset.css'
// 1像素边框既然决方案
import 'styles/border.css'
//解决300ms 点击延迟
import fastClick from 'fastclick'
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
