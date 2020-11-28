<template>
  <div>
    <input type="text" />
    <button @click.prevent="shorten">Shorten</button>
  </div>
</template>

<script>
export default {
  methods: {
    shorten() {
      console.log('hello');
    },
  },
};
</script>

<style>
</style>
