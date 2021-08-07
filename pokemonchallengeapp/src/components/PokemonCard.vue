<template>
  <div class="pokemonCard">
    <b-card
      :title="pokeName"
      :img-src="imageUrl"
      img-alt="Image"
      style="max-width: 20rem"
    >
      <b-card-text> <b>Weight:</b> {{ pokeWeight/10 }} kg.</b-card-text>
      <b-card-text> <b>Height:</b> {{ pokeHeight/10 }} m.</b-card-text>
    </b-card>
  </div>
</template>

<style scoped>
.pokemonCard{
  width: 200px;
  height: 400px;
}
</style>

<script>
export default {
  name: "pokemonCard",
  props: {
    pokeName: String,
    pokeWeight: Number,
    pokeHeight: Number,
    imageUrl: String,
  },
  components: {},
};
</script>
