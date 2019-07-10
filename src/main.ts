import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import vant from './config/vant/index';
import './assets/style/index.less';
// 使用有赞UI组件库
Vue.use(vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
