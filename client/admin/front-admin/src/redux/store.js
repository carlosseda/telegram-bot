import { configureStore } from '@reduxjs/toolkit'
import crudReducer from './crud-slice'
import filesReducer from './files-slice'
import imagesReducer from './images-slice'

export const store = configureStore({
  reducer: {
    crud: crudReducer,
    files: filesReducer,
    images: imagesReducer
  }
})

export default store
