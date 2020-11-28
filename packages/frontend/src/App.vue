<template>
  <div>
    <Hero />
    <InputGroup />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hero from './components/Hero.vue';
import InputGroup from './components/InputGroup.vue';

export default defineComponent({
  name: 'App',
  components: {
    Hero,
    InputGroup,
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
