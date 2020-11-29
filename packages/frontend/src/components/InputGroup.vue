<template>
  <form @submit.prevent="shorten">
    <input type="text" name="shortenUrlInput" v-model="inputValue" />
    <button type="submit">Shorten</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    ...mapActions(['postNewUrl']),

    shorten(sumbitEvent) {
      const fullUrl = sumbitEvent.target.elements.shortenUrlInput.value;
      this.postNewUrl(fullUrl).then(() => {
        this.inputValue = '';
      });
    },
  },
};
</script>

<style>
</style>
