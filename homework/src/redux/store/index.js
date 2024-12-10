import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favouritesReducer from '../reducers/favourites'
import resultsReducer from '../reducers/results'

const mainReducer = combineReducers({
  favourites: favouritesReducer,
  results: resultsReducer,
})

const store = configureStore({
  reducer: mainReducer,
})

export default store
