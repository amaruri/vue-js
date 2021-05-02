const moves = Vue.component(
  'PokemonMoves',
  {
    props: ['moves'],
    template: `
      <div id="moves">
        <h2>Movimientos del pokemon</h2>
        <ul>
          <li
            v-for="(move, index) in moves"
            :key="index"
          >
            {{ move.move.name }}
          </li>
        </ul>
      </div>
    `
  }
)

export default moves