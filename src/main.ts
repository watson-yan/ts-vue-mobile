import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import Vant from './config/vant/index';
import './assets/style/index.less';

Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
