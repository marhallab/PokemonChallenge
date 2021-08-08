<template>
  <div class="navButton">

    <h1> Please click on the button "show more" at the bottom of the page to add more pokemons</h1>
    <br>
    <div class="pokemons-container">
      <div
        v-for="pok in allPokemons.slice(0, this.currentNumberDisplay)"
        :key="pok.pokeName"
      >
        <pokemonCard
          :pokeName="pok.pokeName"
          :pokeHeight="pok.pokeHeight"
          :pokeWeight="pok.pokeWeight"
          :imageUrl="pok.imageUrl"
        />
      </div>
    </div>
    <h2> Current number of pokemons displayed: {{currentNumberDisplay}}</h2>
    <br>
    <b-button v-show="btnIsOn" v-on:click="updateListPokemons">Show More</b-button>
  </div>
</template>

<style scoped>

.navButton {
  margin-bottom: 10% ;
}
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
      currentNumberDisplay: 50,
    };
  },
  components: {
    pokemonCard,
  },

  methods: {
    getListPokemon() {
      this.allPokemons = getRequestPokemons.getListPokemons();
      //this.firstLoad();
    },

    firstLoad() {
      /* for (var i = 0; i < 50; i++) {
        console.log(this.allPokemons);
        console.log(this.allPokemons.pop());
        this.allPokemonsDisplay.push(this.allPokemons.pop());
      }*/

      this.allPokemonsDisplay = this.allPokemons.slice(
        (0, this.currentNumberDisplay)
      );
    },

    updateListPokemons() {
      var lengthListDisplay = this.allPokemons.slice(
        0,
        this.currentNumberDisplay
      ).length;
      var lengthList = this.allPokemons.length;

      if (lengthListDisplay != 150) {
        if (lengthList - lengthListDisplay >= 15) {
          this.currentNumberDisplay = this.currentNumberDisplay + 15;
        } else if (lengthList - lengthListDisplay < 14) {
          this.currentNumberDisplay =
            this.currentNumberDisplay + (lengthList - lengthListDisplay);
            this.btnIsOn = false;
        }
      } 
    },
  },

  created: function () {
    this.getListPokemon();
  },
};
</script>
