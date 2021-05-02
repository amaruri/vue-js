import pokedex from './components/App.js'
axios.defaults.baseURL = 'https://pokeapi.co/api/v2/'

const app = Vue.component('App', { template: '<pokedex></pokedex>', components: { pokedex } })

new Vue({render: (h) => h(app)}).$mount('#app')
