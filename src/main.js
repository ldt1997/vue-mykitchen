import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/reset.css';
import "../mock/index";
import Home from "@/components/home/Home"
import Calendar from "@/components/calendar/Calendar"
import Goods from "@/components/goods/Goods"
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI);

const store = new Vuex.Store({
  state: {
    cartMap: {}
  },
  getters: {
    counts: state => {
      return Object.keys(state.cartMap).reduce((preVal, cur) => {
        preVal += state.cartMap[cur].count;
        return preVal;
      }, 0)
    },
    totalPrice: state => {
      return Object.keys(state.cartMap).reduce((preVal, cur) => {
        preVal += state.cartMap[cur].count * state.cartMap[cur].price;
        return preVal;
      }, 0)
    }
  },
  mutations: {
    setCart(state, payload) {
      state.cartMap = payload.cartMap
    }
  }
})

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
  store,
  render: h => h(App),
}).$mount('#app')