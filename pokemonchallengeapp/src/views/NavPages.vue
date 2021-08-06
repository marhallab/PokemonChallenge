<template>
  <div class="navPages">
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

.pokemons-container{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}

.pokemons-container div {
  width: 200px;
  height: 400px;
}
</style>

<script>
import pokemonCard from "../components/PokemonCard.vue";
import axios from "axios";
import pokemon from "../components/Pokemon";

export default {
  name: "navPages",
  data: function () {
    return {
      allPokemonsUrls: [],
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
    listsPokemons() {
      return this.allPokemons.slice(
        (this.currentPage - 1) * this.pokemonsPerPage,
        this.currentPage * this.pokemonsPerPage
      );
    },
  },
  methods: {
    setAllPokemonsUrls() {
      axios
        .request("https://pokeapi.co/api/v2/pokemon/?limit=150")
        .then((response) => {
          response.data.results.forEach((pokemonUrl) => {
            this.allPokemonsUrls.push(pokemonUrl.url);
          });
          this.setAllPokemons();
        })
        .catch((error) => {
          console.log(error.response);
        });
    },

    setAllPokemons() {
      this.allPokemonsUrls.forEach((pokemonUrl) => {
        axios
          .request(pokemonUrl)
          .then((response) => {
            var pok = new pokemon(
              response.data.name,
              response.data.height,
              response.data.weight,
              response.data.sprites.front_default
            );

            this.allPokemons.push(pok);
          })
          .catch((error) => {
            console.log(error.response);
          });
      });
    },
  },

  created: function () {
    this.setAllPokemonsUrls();
  },
};
</script>
