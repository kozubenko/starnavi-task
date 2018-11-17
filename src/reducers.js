const initialState = {
  templates: [],
  properties: [],
  error: false,
  isLoading: false
}

// ACTIONS
export const fetchInitialData = () => ({ type: 'FETCH_INITIAL_DATA' })

// REDUCER
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'PENDING_INITIAL_DATA':
      return { ...state, isLoading: true }
    case 'FULFILLED_INITIAL_DATA':
      return { ...state, ...action.payload, isLoading: false }
    case 'REJECTED_INITIAL_DATA':
      return { ...state, error: true, isLoading: false }
    default:
      return state
  }
}
