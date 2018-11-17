const initialState = {
  templates: [],
  properties: [],
  error: false,
  loaded: false
}

// ACTIONS
export const fetchInitialData = () => ({ type: 'FETCH_INITIAL_DATA' })

// REDUCER
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_INITIAL_DATA':
      return { ...state, ...action.payload, loaded: true }
    case 'SET_ERROR':
      return { ...state, error: true, loaded: true }
    default:
      return state
  }
}
