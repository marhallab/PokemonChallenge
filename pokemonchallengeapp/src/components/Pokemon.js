export default class Pokemon {

  pokeName = "";
  pokeHeight = null;
  pokeWeight = null;
  imageUrl = "";

  constructor(pName, pHeight, pWeight, url) {
    this.pokeName = pName;
    this.pokeHeight = pHeight;
    this.pokeWeight = pWeight;
    this.imageUrl = url;
  }
}