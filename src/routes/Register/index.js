import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'join',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const RegisterContainer = require('./containers/RegisterContainer').default
      const reducer = require('./modules/register').default

      injectReducer(store, { key: 'register', reducer })

      cb(null, RegisterContainer)
    })
  }
})
