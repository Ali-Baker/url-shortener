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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
