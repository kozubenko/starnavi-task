// constants
import {
  FETCH_INITIAL_DATA,
  FULFILLED_INITIAL_DATA,
  REJECT_INITIAL_DATA
} from './constants'

const initialState = {
  templates: [],
  properties: [],
  error: false,
  isLoading: false
}

// ACTION CREATORS
export const fetchInitialData = () => ({ type: FETCH_INITIAL_DATA })
export const rejectInitialData = () => ({ type: REJECT_INITIAL_DATA })
export const fulfilledInitialData = (payload) => ({ type: FULFILLED_INITIAL_DATA, payload })

// REDUCER
export default function rootReducer (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case FETCH_INITIAL_DATA:
      return { ...state, isLoading: true }
    case FULFILLED_INITIAL_DATA:
      return { ...state, ...payload, isLoading: false }
    case REJECT_INITIAL_DATA:
      return { ...state, error: true, isLoading: false }
    default:
      return state
  }
}
