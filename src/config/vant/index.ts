// 故意分开写的
import {
  Button, Icon, Field,
} from 'vant';

import { Lazyload } from 'vant'; // 辅助性组件

import { Dialog } from 'vant';  // 插件

// import 'vant/lib/button/style/less';
import 'vant/lib/index.less';

const Vant: any = {};

// 该文件为Vant组件的引用文件
Vant.install = (Vue: any, options: any) => {
  Vue.use(Button);
  Vue.use(Icon);
  Vue.use(Field);
  Vue.use(Lazyload);

  // 弹窗组件
  Vue.prototype.Dialog = Dialog;
};

export default Vant;

