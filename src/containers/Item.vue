<template>
  <div class="container mt-5 mb-5">
    <h3 class="mb-4">
      <strong> Item</strong><br>
    </h3>

    <p>
      data from <a href="https://distrowatch.com/packages.php">https://distrowatch.com/packages.php</a>
    </p>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th> id </th>
          <th> name </th>
          <th> version </th>
          <th> note </th>
        </tr>
      </thead>
      <tbody>
      <tr :key="item.id" v-for="item in items">
        <td>
          {{item.id}}
        </td>
        <td>
          {{item.name && item.name.text}}
        </td>
        <td>
          <a :href="item.version && item.version.link">{{item.version && item.version.text}}</a>
        </td>
        <td>
          {{item.note}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from "../store";

export default {
  async beforeRouteEnter(to, from, next) {
    if (!store.state.item.loaded) {
      await store.dispatch("FETCH_ITEM");
    }
    next();
  },
  computed: {
    items() {
      return this.$store.state.item.items;
    }
  },
  methods: {
    testClickEvent() {
      this.showMessage = !this.showMessage;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
