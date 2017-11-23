import Vue from 'vue'
import App from '@/App.vue'
import VueInfiniteScroll from 'vue-infinite-scroll'
import VueProgressBar from 'vue-progressbar'
import router from '@/router'

Vue.use(VueInfiniteScroll)
Vue.use(VueProgressBar, {
  color: 'rgb(74, 139, 250)',
  failedColor: 'rgb(205, 33, 13)',
  height: '3px'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
