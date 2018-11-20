import React from 'react'
import ReactDOM from 'react-dom'

// redux
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers/rootReducer'
import rootSaga from './sagas'

// components
import App from 'containers/App'

// styles
import './index.css'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root')
)
