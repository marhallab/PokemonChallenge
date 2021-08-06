<template>
  <div class="navPages">
    <div v-for="pok of allPokemons" :key="pok.pokeName">
      <pokemonCard
        :pokeName="pok.pokeName"
        :pokeHeight="pok.pokeHeight"
        :pokeWeight="pok.pokeWeight"
        :imageUrl="pok.imageUrl"
      />
    </div>
  </div>
</template>

<style scoped>
.navPages {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}

.navPages div {
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
    };
  },
  components: {
    pokemonCard,
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
      console.log("HERE 2");
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
