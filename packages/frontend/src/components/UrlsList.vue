<template>
  <ul>
    <li v-for="url in urls" :key="url._id">
        {{url.short}}
      </li>
  </ul>
</template>

<script>
import { all } from '../api';

export default {
  name: 'UrlsList',
  data() {
    return {
      urls: [],
      loading: false,
      errorMessage: '',
    };
  },
  created() {
    this.loading = true;
    all().then((responce) => {
      this.loading = false;
      this.urls = responce.data;
    }).catch((error) => {
      this.loading = false;
      this.errorMessage = error.message;
    });
  },
};
</script>

<style>

</style>
