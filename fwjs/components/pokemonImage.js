const pokemonImg = Vue.component(
  'PokemonImage',
  {
    props: ['imageUrl'],
    template: `
      <div>
        <img :src="imageUrl" />
      </div>
    `
  }
)

export default pokemonImg
