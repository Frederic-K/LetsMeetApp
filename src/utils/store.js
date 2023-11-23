// Redux
import { configureStore } from '@reduxjs/toolkit'
import modeThemeReducer from '../features/modeThemeSlice'

export default configureStore({
  reducer: {
    modeTheme: modeThemeReducer,
  },
})
