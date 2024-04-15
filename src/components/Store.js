import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/Reducer'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})