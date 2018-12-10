import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastlick from 'fastclick'

import 'common/stylus/index.styl'

fastlick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
