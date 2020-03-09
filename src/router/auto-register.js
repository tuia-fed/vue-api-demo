const glob = require('glob')
const fs = require('fs')

glob('src/views/**/*.vue', (err, files) => {
  if (err) throw err
  const routes = getRoutes(files)
  output(createRouters(routes))
})

function createRouters (routes) {
  let r = ''
  routes.forEach((route, index) => {
    r += '  {\n'
    r += `    path: '${route.route}',\n`
    r += `    name: '${route.name}',\n`
    r += `    component: ${route.component}\n`
    if (index === routes.length - 1) {
      // 最后一项不用换行和逗号
      r += '  }'
    } else {
      r += '  },\n'
    }
  })
  return r
}

function getRoutes (files) {
  const routes = []
  files.forEach(file => {
    if (file.indexOf('Home') !== -1) return
    file = file.replace('src', '..')
    const router = {}
    const route = /..\/views\/(.*).vue/.exec(file)[1]
    router.route = '/' + route.toLowerCase()
    const name = route.replace('/', '_')
    router.name = name
    router.component = `() => import(/* webpackChunkName: "${name}" */ '${file}')`
    routes.push(router)
  })
  return routes
}

function output (routers) {
  const template = `import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
${routers}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
`
  fs.writeFileSync('src/router/index.js', template)
}
