export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'
export const GET_RESULTS = 'GET_RESULTS'

export const addToFavoutiteAction = (data) => {
  return {
    type: 'ADD_TO_FAVOURITE',
    payload: data.company_name,
  }
}

export const removeFromFavoutiteAction = (data) => {
  return {
    type: 'REMOVE_FROM_FAVOURITE',
    payload: data.company_name,
  }
}

export const getResultsAction = (query) => {
  return async (dispatch) => {
    const baseEndpoint =
      'https://strive-benchmark.herokuapp.com/api/jobs?search='
    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        dispatch({
          type: 'GET_RESULTS',
          payload: data,
        })
      } else {
        throw new Error('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }
}
