
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LottieVuePlayer from '@lottiefiles/vue-lottie-player'
import VueAnalytics from 'vue-analytics';

Vue.use(LottieVuePlayer)
Vue.config.productionTip = false

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'G-W9PXHDNQMF',
  router
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')