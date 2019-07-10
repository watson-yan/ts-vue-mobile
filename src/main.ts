import Vue from 'vue';
// import { Lazyload } from 'vant';
// import { Dialog } from 'vant';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import vant from './config/vant/index';
Vue.config.productionTip = false;

// 使用有赞UI组件库
Vue.use(vant);
// Vue.use(Lazyload);

// Vue.prototype.Dialog = Dialog;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
