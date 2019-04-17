import Vue from 'vue'
import App from './App'
import store from './store'
import './style/main.scss'
Vue.prototype.$store = store
import ajax from './modules/ajax.js'
Vue.prototype.$http = ajax

Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
app.$mount()
