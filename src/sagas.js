import { put, all, call, takeLatest } from 'redux-saga/effects'
import fetchApi from './helpers/fetchApi'

// constants
import { FETCH_INITIAL_DATA } from './reducers/constants'

// action creators
import { rejectInitialData, fulfilledInitialData } from './reducers/rootReducer'

export function * fetchInitialData () {
  try {
    const properties = yield call(fetchApi, '/properties')
    const templates = yield call(fetchApi, '/templates')

    yield put(fulfilledInitialData({ properties: properties.data, templates: templates }))
  } catch (error) {
    yield put(rejectInitialData())
  }
}

function * watchAsyncCall () {
  yield takeLatest(FETCH_INITIAL_DATA, fetchInitialData)
}

export default function * rootSaga () {
  yield all([
    watchAsyncCall()
  ])
}
