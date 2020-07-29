import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./components/home/Home"
import App from './App.vue'

Vue.use(VueRouter);

const Bar = {
  template: '<div>bar</div>'
}

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/bar',
    component: Bar
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