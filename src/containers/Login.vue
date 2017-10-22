<template>
  <div class="container mt-5 mb-5" style="width: 400px;">
    <h3 class="mb-4">
      <strong>Login</strong><br>
    </h3>
    <form method="post" action="" v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <input type="text" name="email" v-model="email" class="form-control" placeholder="email">
      </div>
      <div class="form-group">
        <input type="password" name="password" v-model="password" class="form-control" placeholder="password">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      this.email = ''
      this.password = ''
    },
  },
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
