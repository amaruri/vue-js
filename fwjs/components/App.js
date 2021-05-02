import pokemonImg from './pokemonImage.js'
import moves from './pokemonMoves.js'

const pokedex = Vue.component(
  'Pokedex',
  {
  components: {
    moves,
    pokemonImg
  },
  template: `
    <div id="pokedex">
      <h2>
        {{ test }}
      </h2>
      <input v-model="search" />
      <button @click="testo">
        Ejecutar testo
      </button>

      <PokemonImage :imageUrl="(pokemon.sprites || {}).front_default"></PokemonImage>

      <PokemonMoves :moves="pokemon.moves"></PokemonMoves>

    </div>
  `,
  data: function () {
    return {
      search: '',
      pokemon: {}
    }
  },
  methods: {
    async testo () {
      const { data } = await axios.get(`/pokemon/${this.search}`)
      this.pokemon = data
    }
  },
  computed: {
    test () {
      return `${(this.pokemon.name || 'Selecciona un pokemon')}`
    }
  }
})

export default pokedex