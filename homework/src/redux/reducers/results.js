import { GET_RESULTS } from '../actions'

const initialState = {
  allResults: [],
}

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESULTS:
      return {
        ...state,
        allResults: action.payload,
      }

    default:
      return state
  }
}

export default resultsReducer
