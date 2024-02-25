import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false
import request from './utils/request'//添加

// 导入之后，定义一个全局变量，全局绑定之后可以用this方式去请求
Vue.prototype.request=request // 添加

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')