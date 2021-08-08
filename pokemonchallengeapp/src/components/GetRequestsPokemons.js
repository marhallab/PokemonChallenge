import axios from "axios";
import pokemon from "../components/Pokemon";

var allPokemonsUrls;
var allPokemons;

export default {
    // this methods calls the api to get all the pokemons URLs that we call with the method getPokemonsFromUrl 
    // and returns the list with all the 150 pokemons objects
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


    // This methods gets each pokemon URL and calls the api to create a new pokemon object with the informations
    // of the pokemon and adds it to the list 
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