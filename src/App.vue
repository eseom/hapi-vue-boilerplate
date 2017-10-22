<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" :to="{name: 'home'}">hapi-vue-boilerplate</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'home'}" exact>Home
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'about'}">About
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'item'}">Item
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'login'}">Login
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
        </ul>
        <span class="navbar-text">
          right buttons, icons or menu
        </span>
      </div>
    </nav>

    <div class="container">
      <router-view></router-view>
    </div>

    <footer>
      <div class="container-fluid">
        footer
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>

<style src="./assets/css/app.scss" lang="scss">

</style>

<style lang="scss" scoped>
.container {
  max-width: 1010px;
}
</style>
