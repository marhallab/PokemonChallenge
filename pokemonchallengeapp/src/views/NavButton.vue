<template>
  <div class="navButton">
    <div class="pokemons-container">
      <div v-for="pok of allPokemonsDisplay" :key="pok.pokeName">
        <pokemonCard
          :pokeName="pok.pokeName"
          :pokeHeight="pok.pokeHeight"
          :pokeWeight="pok.pokeWeight"
          :imageUrl="pok.imageUrl"
        />
      </div>
    </div>
    <b-button v-show="btnIsOn" v-on:click="updateListPokemons"
      >Show More</b-button
    >
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
  name: "navButton",
  data: function () {
    return {
      allPokemons: [],
      allPokemonsDisplay: [],
      btnIsOn: true,
    };
  },
  components: {
    pokemonCard,
  },

  methods: {
    getListPokemon() {
      this.allPokemons = getRequestPokemons.getListPokemons();
      this.firstLoad();
    },

    firstLoad() {
      for (var i = 0; i < 50; i++) {
        console.log(this.allPokemons);
        console.log(this.allPokemons.pop());
        this.allPokemonsDisplay.push(this.allPokemons.pop());
      }
    },

    updateListPokemons() {
      if (this.allPokemons.length != 0) {
        if (this.allPokemons.length >= 15) {
          for (var i = 0; i < 15; i++) {
            this.allPokemonsDisplay.push(this.allPokemons.pop());
          }
        } else if (this.allPokemons.length < 14) {
          for (var j = 0; j < 15; j++) {
            this.allPokemonsDisplay.push(this.allPokemons.pop());
          }
        }
      } else {
        this.btnIsOn = false;
      }
    },
  },

  created: function () {
    this.getListPokemon();
   
  },
};
</script>
