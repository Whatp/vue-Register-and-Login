import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false
import request from './utils/request'//����

// ����֮�󣬶���һ��ȫ�ֱ�����ȫ�ְ�֮�������this��ʽȥ����
Vue.prototype.request=request // ����

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')