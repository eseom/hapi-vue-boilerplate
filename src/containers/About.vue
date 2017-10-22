<template>
  <div class="container mt-5 mb-5">
    <h3>
      <strong> About</strong><br>
    </h3>

    <h4 class="mt-4"> hapi-vue-boilerplate</h4>

    <p>
      hapijs-based vue application starter with SSR like Nuxt.
    </p>

    <h4>making note</h4>

    <p>
      Nuxt is a great project to start a new Vue application. Nuxt, however, has too much of an abstraction to compose an application before it even understands the principles. I wanted to provide a guideline that would be more hackable and being able to reorganize the whole thing. Also, because I mainly use hapijs in the many services I operate, I wanted to start this as a hapijs-based project.
    </p>

    <p>
      This project is aimed at a standard vue application consisting of webpack, vue, vue-router, vuex and etc; without any additional hooks or abstractions, constructing a well crafted project that can be used in production as well as studying vue settings in webpack environment from scratch.
    </p>

    <h4>components in development environment</h4>

    <ul>
      <li>a hapi based webpack bundle packager</li>
      <li>a webpack ssr assets generator (making vue-ssr-server-bundle.json)</li>
      <li>a hapijs server application for ssr</li>
      <li>empty babel config</li>
    </ul>

    <p>
      <code>yarn dev</code> would execute all of three components concurrently
    </p>

    <h4>get started</h4>

    <pre><code>git clone https://github.com/eseom/hapi-vue-boilerplate
cd hapi-vue-boilerplate
yarn
yarn dev
open localhost:3000</code></pre>

    <h4>prerequisite</h4>

    <p>
      - node 8.6.0
    </p>

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
