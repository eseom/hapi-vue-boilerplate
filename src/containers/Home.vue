<template>
  <div>
    <div class="titles">
      <h3 class="main">
        <strong> hapi-vue-boilerplate</strong><br>
      </h3>
      <h4 class="sub">
        (list, link, message, vuex, ssr)
      </h4>
      <h4 class="images"> <img src="https://hapijs.com/public/img/logo.svg"> <img src="../assets/logo.png"> </h4>
    </div>

    <div class="col-lg-12 information">
      <p class="mb-0">hapi vue bolierpalte with rendering server and hapi echosystem</p>
      <p class="mb-0">
        <a href="https://github.com/eseom/hapi-vue-boilerplate.git" rel="noopener noreferrer" target="_blank">
          <i class="fa fa-github" data-reactid="43"></i>
          View on Github
        </a>
      </p>
      <p class="mt-3">
        <button @click="testClickEvent" class="btn btn-outline-primary">button test</button>
        <div v-show="showMessage">toggled a message!</div>
      </p>
    </div>

    <h3>Features</h3>
    <ul>
      <li>hapijs based</li>
      <li>Vue + Vue-Router + Vuex</li>
      <li>SSR (server side rendering)</li>
      <li>no local proxy for development and production</li>
      <li>Webpack3 + hot reload</li>
      <li>BabelJs</li>
      <li>Linting with eslint with airbnb javascript</li>
      <li>session based authentication</li>
      <li>vue-nes (websocket)</li>
      <li>sass loader, node sass</li>
    </ul>

    <div class="headline right-quote">
      <h3 class="quote">
        <i class="fa fa-quote-left"></i>&nbsp;&nbsp; Think like a man of action and<br>act like man of thought.</h3>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    testClickEvent() {
      this.showMessage = !this.showMessage
    },
  },
  data() {
    return {
      showMessage: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.titles {
  line-height: 130%;
  margin-top: 50px;
  text-align: center;
  .main {
    font-size: 2.0rem;
    color: #8A629C;
  }
  .images {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
    img {
      width: 130px;
    }
  }
}

.information {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
}

.right-quote {
  text-align: right;
  .quote {
    line-height: 130%;
    margin-top: 70px;
    margin-bottom: 80px;
  }
}
</style>
