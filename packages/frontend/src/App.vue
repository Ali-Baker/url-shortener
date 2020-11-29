<template>
  <div>
    <Hero />
    <InputGroup />
    <UrlsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hero from './components/Hero.vue';
import UrlsList from './components/UrlsList.vue';
import InputGroup from './components/InputGroup.vue';

export default defineComponent({
  name: 'App',
  components: {
    Hero,
    InputGroup,
    UrlsList,
  },
});
</script>

<style>
:root {
  --var-yellow-color: #FFBC42;
  --var-black-color: black;
}

body {
  width: 100wh;
  display: flex;
  justify-content: center;
}
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 50px;
  max-width: 1200px;
  width: 100%;
}
</style>
