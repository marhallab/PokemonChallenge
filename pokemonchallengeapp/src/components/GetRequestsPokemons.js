import axios from "axios";
import pokemon from "../components/Pokemon";

var allPokemonsUrls;
var allPokemons;

export default {
    getListPokemons() {
        allPokemonsUrls = [];
        allPokemons = [];
        axios
            .request("https://pokeapi.co/api/v2/pokemon/?limit=150")
            .then((response) => {
                response.data.results.forEach((pokemonUrl) => {
                    allPokemonsUrls.push(pokemonUrl.url);         
                });
                this.getPokemonsFromUrl();
            })
            .catch((error) => {
                console.log(error.response);
            });

        return allPokemons;
    },

    getPokemonsFromUrl() {
        allPokemonsUrls.forEach((pokemonUrl) => {
            axios
                .request(pokemonUrl)
                .then((response) => {
                    var pok = new pokemon(
                        response.data.name,
                        response.data.height,
                        response.data.weight,
                        response.data.sprites.front_default
                    );

                    allPokemons.push(pok);
                })
                .catch((error) => {
                    console.log(error.response);
                });
        });

    }
}