<template>
  <ul>
    <li v-for="url in urls" :key="url._id">
        {{url.short}}
      </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'UrlsList',
  data() {
    return {
      loading: false,
      errorMessage: '',
    };
  },
  computed: {
    ...mapState(['urls']),
  },
  methods: {
    ...mapActions(['getAllUrls']),
  },
  created() {
    this.loading = true;
    this.getAllUrls();
  },
};
</script>

<style>

</style>
