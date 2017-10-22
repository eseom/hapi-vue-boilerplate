require('./main.boot')

if (module.hot) {
  module.hot.accept(() => {
    require('./main.boot')
  })
}
