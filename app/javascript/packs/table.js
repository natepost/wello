import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'
import Table from 'components/table.vue'
import VueGoodTable from 'vue-good-table';
import TurbolinksAdapter from 'vue-turbolinks';
// import the styles
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTable);
Vue.use(TurbolinksAdapter);

document.addEventListener('turbolinks:load', () => {
   const app = new Vue({
    el: '#exp-table',
     data: {
     },
    components: { Table }
   })
 })




// import TurbolinksAdapter from 'vue-turbolinks';
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
