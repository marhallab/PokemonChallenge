<template>
  <div class="navButton">
    <h1><b>This is the navigation with the button</b></h1>
    <br />
    <h2>
      Please click on the button "show more" at the BOTTOM of the page to add
      more pokemons.
    </h2>
    <br />
    <p>
      <b>If the button doesn't show, that means that you have reach the limit of
        the pokemons available (150 pokemons max).</b>
    </p>
    <div class="pokemons-container">
      <div v-for="pok in listsPokemons" :key="pok.pokeName">
        <pokemonCard
          :pokeName="pok.pokeName"
          :pokeHeight="pok.pokeHeight"
          :pokeWeight="pok.pokeWeight"
          :imageUrl="pok.imageUrl"
        />
      </div>
    </div>
    <h2>
      Current number of pokemons displayed: {{ currentNumberDisplay }} pokemons.
    </h2>
    <br />
    <b-button v-show="btnIsOn" v-on:click="updateListPokemons"
      >Show More</b-button
    >
  </div>
</template>

<style scoped>
.navButton {
  margin-bottom: 10%;
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
    },

    // this methos is called when the button is clicked to add 15 more pokemons and to disable the button
    // when all pokemons in the list are displayed
    updateListPokemons() {
      var lengthListDisplay = this.allPokemons.slice(0, this.currentNumberDisplay).length;
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

  computed: {
    listsPokemons() {
      return this.allPokemons.slice(0, this.currentNumberDisplay);
    },
  },
  created: function () {
    this.getListPokemon();
  },
};
</script>
