import { put, all, call, takeLatest } from 'redux-saga/effects'
import fetchApi from './helpers/fetchApi'

export function * fetchInitialData () {
  try {
    const properties = yield call(fetchApi, '/properties')
    const templates = yield call(fetchApi, '/templates')

    yield put({ type: 'SET_INITIAL_DATA', payload: { properties: properties.data, templates: templates } })
  } catch (error) {
    yield put({ type: 'SET_ERROR' })
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
