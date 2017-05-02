import { combineReducers } from 'redux'

import books from './books-reducer'
import activeBook from './active-book-reducer'

const rootReducer = combineReducers({
  books,
  activeBook
})

export default rootReducer
