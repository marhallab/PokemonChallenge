<template>
  <div class="navPages">
    <h1><b>This is the navigation with the pagination</b></h1>
    <br>
    <h3>30 pokemons per page.</h3>
    <br>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="pokemonsPerPage"
      aria-controls="pokList"
      align="center"
    ></b-pagination>

    <div class="pokemons-container">
      <div id="pokList" v-for="pok of listsPokemons" :key="pok.pokeName">
        <pokemonCard
          :pokeName="pok.pokeName"
          :pokeHeight="pok.pokeHeight"
          :pokeWeight="pok.pokeWeight"
          :imageUrl="pok.imageUrl"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokemons-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
</style>

<script>
import pokemonCard from "../components/PokemonCard.vue";
import getRequestPokemons from "../components/GetRequestsPokemons";

export default {
  name: "navPages",
  data: function () {
    return {
      allPokemons: [],
      currentPage: 1,
      pokemonsPerPage: 30,
    };
  },
  components: {
    pokemonCard,
  },
  computed: {
    rows() {
      return this.allPokemons.length;
    },
    // return the next 30 pokemons every slice per page  
    listsPokemons() {
      return this.allPokemons.slice(
        (this.currentPage - 1) * this.pokemonsPerPage,
        this.currentPage * this.pokemonsPerPage
      );
    },
  },
  methods: {
    getListPokemons() {
      this.allPokemons = getRequestPokemons.getListPokemons();
    },
  },

  created: function () {
    this.getListPokemons();
  },
};
</script>
