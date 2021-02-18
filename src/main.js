import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
