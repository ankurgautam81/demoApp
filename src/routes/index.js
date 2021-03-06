import React from 'react'
import App from '../containers/AppContainer'
function errorLoading(error) {
  throw new Error(`Dynamic page loading failed: ${error}`)
}

function loadRoute(cb) {
  return module => cb(null, module.default)
}

export default {
  path: '/',
  component: App,
  indexRoute: {
    getComponent(location, cb) {
      import('../pages/Home').then(loadRoute(cb)).catch(errorLoading)
    }
  },
  childRoutes: [
    {
      path: 'login',
      getComponent(location, cb) {
        import('../pages/Login').then(loadRoute(cb)).catch(errorLoading)
      }
    },
    {
      path: 'user/:id',
      getComponent(location, cb) {
        import('../pages/Users').then(loadRoute(cb)).catch(errorLoading)
      }
    },
    {
      path: 'add-edit-user',
      getComponent(location, cb) {
        import('../pages/AddEditUser').then(loadRoute(cb)).catch(errorLoading)
      }
    },
    {
      path: '*',
      getComponent(location, cb) {
        import('../pages/Home').then(loadRoute(cb)).catch(errorLoading)
      }
    }

  ]
}
