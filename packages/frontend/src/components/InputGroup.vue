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

<style scopped>
form {
  position: relative;
}

input {
  border: 4px var(--var-yellow-color) solid;
  border-radius: 5px 0 0 5px;
  width: 70%;
  height: 26px;
  padding: 8px;
  outline: none;
}

button {
  border: 4px var(--var-yellow-color) solid;
  border-radius: 0 5px 5px 0;
  background-color: var(--var-yellow-color);
  color: var(--var-black-color);
  height: 50px;
  width: 20%;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}

button:hover {
  color: white;
}
</style>
