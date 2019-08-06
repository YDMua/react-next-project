import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer, { exampleInitialState } from './reducer'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    // 开发模式打印redux信息
    // const { logger } = require('redux-logger')
    // middleware.push(logger)
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

function configureStore(initialState = exampleInitialState) {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  )
  // saga是系统的常驻进程
  // @ts-ignore
  store.runSagaTask = () => {
    // @ts-ignore
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }
  // @ts-ignore
  store.runSagaTask()
  return store
}

export default configureStore
