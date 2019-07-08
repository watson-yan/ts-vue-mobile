import Vue from 'vue';
import Vant from 'vant';
import { Lazyload } from 'vant';
import { Dialog } from 'vant';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import 'vant/lib/index.less';
import '../static/style/youzan/style.less';

Vue.config.productionTip = false;

// 使用有赞UI组件库
Vue.use(Vant);
Vue.use(Lazyload);

Vue.prototype.Dialog = Dialog;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
