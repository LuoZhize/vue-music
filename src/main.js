import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastlick from 'fastclick'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'

fastlick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
