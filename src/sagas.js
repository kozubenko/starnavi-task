import { put, all, call, takeLatest } from 'redux-saga/effects'
import fetchApi from './helpers/fetchApi'

export function * fetchInitialData () {
  try {
    yield put({ type: 'PENDING_INITIAL_DATA' })

    const properties = yield call(fetchApi, '/properties')
    const templates = yield call(fetchApi, '/templates')

    yield put({
      type: 'FULFILLED_INITIAL_DATA',
      payload: { properties: properties.data, templates: templates }
    })
  } catch (error) {
    yield put({ type: 'REJECTED_INITIAL_DATA' })
  }
}

function * watchAsyncCall () {
  yield takeLatest('FETCH_INITIAL_DATA', fetchInitialData)
}

export default function * rootSaga () {
  yield all([
    watchAsyncCall()
  ])
}
