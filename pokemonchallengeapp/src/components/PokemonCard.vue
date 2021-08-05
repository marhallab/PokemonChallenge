<template>
  <div class="pokemonCard">
    <b-card
      :title="pokeName"
      :img-src="imageUrl"
      img-alt="Image"
      style="max-width: 20rem"
    >
      <b-card-text> <b>Weight:</b> {{ pokeWeight }} </b-card-text>

      <b-card-text> <b>Height:</b> {{ pokeHeight }} </b-card-text>
    </b-card>
  </div>
</template>

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
