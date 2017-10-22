# hapi-vue-boilerplate

hapijs-based vue application starter with SSR.

# making note

Nuxt is a great project to start a new Vue application. Nuxt, however, has too much of an abstraction to compose an application before it even understands the principles. I wanted to provide a guideline that would be more hackable and being able to reorganize the whole thing. Also, because I mainly use hapijs in the many services I operate, I wanted to start this as a hapijs-based project. 

This project is aimed at a standard vue application consisting of webpack, vue, vue-router, vuex and etc; without any additional hooks or abstractions, constructing a well crafted project that can be used in production as well as studying vue settings in webpack environment from scratch.

# components in development environment

- a hapi based webpack bundle packager
- a webpack ssr assets generator (making vue-ssr-server-bundle.json)
- a hapijs server application for ssr
- empty babel config

```yarn dev``` would execute all of three components concurrently

# get started

```
git clone https://github.com/eseom/hapi-vue-boilerplate
cd hapi-vue-boilerplate
yarn
yarn dev
open localhost:3000
```

# prerequisite

- node 8.6.0
