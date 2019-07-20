// 故意分开写的
import {
  Button, Icon, Field,
  Lazyload, Dialog,
  Cell, CellGroup,
  Tabbar, TabbarItem
} from 'vant';

// import 'vant/lib/button/style/less';
import 'vant/lib/index.less';

const Vant: any = {};

// 该文件为Vant组件的引用文件
Vant.install = (Vue: any) => {
  Vue.use(Button);
  Vue.use(Icon);
  Vue.use(Field);
  Vue.use(Lazyload);
  Vue.use(Cell).use(CellGroup);
  Vue.use(Tabbar).use(TabbarItem);

  // 弹窗组件
  Vue.prototype.Dialog = Dialog;
};

export default Vant;
