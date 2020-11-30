<template>
  <h1>Urls List</h1>
  <table v-if="getFormattedAndSortedUrls.length > 0">
    <tr>
      <th class="wide">Url</th>
      <th>Short Url</th>
      <th>Actions</th>
  </tr>
    <tr v-for="url in getFormattedAndSortedUrls" :key="url._id">
      <td class="url-td wide">
        <a :href="url.full" target="_blank">{{url.full}}</a>
      </td>
      <td class="url-td narrow">
        <a :href="url.short" target="_blank" :ref="url._id">{{url.short}}</a>
      </td>
      <td class="action">
        <button class="copy" @click.prevent="copyLink(url._id)">
          copy
        </button>
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
    ...mapGetters(['getFormattedAndSortedUrls']),
  },
  methods: {
    ...mapActions(['getAllUrls']),
    copyLink(id) {
      this.selectText(this.$refs[id]);
      document.execCommand('copy');
    },
    selectText(element) {
      let range;
      if (document.selection) {
        // IE
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      }
    },
  },
  created() {
    this.loading = true;
    this.getAllUrls();
  },
};
</script>

<style scoped>

@media only screen and (max-width: 930px) {
  a {
    padding: 0 !important;
  }

  .wide a {
    max-width: 100px;
  }
}

@media only screen and (max-width: 600px) {
  .wide a,
  .wide {
    display: none !important;
  }
}

h1 {
  text-align: left;
}

table {
  width: 100%;
  max-width: 100vw;
  border: 3px var(--var-yellow-color) solid;
  border-radius: 10px;
  padding: 20px 10px;
  text-align: left;
}

.url-td a {
  padding-right: 20px;
  display: block;
  word-wrap: break-word;
}

.copy {
  padding: 10px 15px;
  margin: 10px;
  font-weight: bold;
  background-color: var(--var-blue-color);
  color: var(--var-white-color);
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 16px;

}

.copy:hover {
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.15);;
}
</style>
