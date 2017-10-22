const Path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')

const template = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>vue-ssr-example</title>
  </head>
  <body>
    <!--vue-ssr-outlet-->
    <script src="http://localhost:${process.env.BUNDLE_PORT || 3001}/main.bundle.js"></script>
  </body>
</html>`

let bundleRenderer = createBundleRenderer(
  require(Path.resolve(process.cwd(), './dist/vue-ssr-server-bundle.json')),
  { template },
)

export default (request) => {
  if (process.env.NODE_ENV === 'production') {
    return new Promise((resolve) => {
      bundleRenderer.renderToString({ url: request.path }, (err, result) => {
        resolve(err || result)
      })
    })
  }

  delete require.cache[Path.resolve(process.cwd(), './dist/vue-ssr-server-bundle.json')]
  bundleRenderer = createBundleRenderer(
    Path.resolve(process.cwd(), './dist/vue-ssr-server-bundle.json'),
    { template },
  )
  return new Promise((resolve) => {
    bundleRenderer.renderToString({ url: request.path }, (err, result) => {
      resolve(err || result)
    })
  })
}
