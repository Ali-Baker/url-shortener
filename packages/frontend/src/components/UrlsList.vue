<template>
  <table>
    <tr>
      <th>Url</th>
      <th>Short Url</th>
      <th>Actions</th>
  </tr>
    <tr v-for="url in getFullUrls" :key="url._id">
      <td class="url-td">
        {{url.full}}
      </td>
      <td>
        {{url.short}}
      </td>
    </tr>
  </table>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

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
    ...mapGetters(['getFullUrls']),
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

table {
  width: 100%;
  border: 2px var(--var-yellow-color) solid;
  border-radius: 10px;
  padding: 20px 10px;
}

.url-td {
  max-width: 200px;
  background-color: antiquewhite;
}
</style>
