import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/reset.css';
import Home from "@/components/home/Home"
import Calendar from "@/components/calendar/Calendar"
import Goods from "@/components/goods/Goods"
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(ElementUI);

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/calendar',
    component: Calendar
  },
  {
    path: '/goods',
    component: Goods
  }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')