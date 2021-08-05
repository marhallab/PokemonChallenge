<template>
  <div class="navButton">
    <pokemonCard :pokeName="'Poke'" :pokeHeight="100" :pokeWeight="50" :imageUrl="'https://picsum.photos/600/300/?image=25'"/>
  </div>
</template>

<script>
import  pokemonCard  from "../components/PokemonCard.vue";

export default {
  name: 'navButton',
  components: {
      pokemonCard
  }
}
</script>
