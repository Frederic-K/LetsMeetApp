import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modeTheme: localStorage.getItem('modeTheme') ?? '',
  // modeTheme: '',
}

export const modeThemeSlice = createSlice({
  name: 'modeTheme',
  initialState,
  reducers: {
    // State management from actions
    addModeTheme: (state, action) => {
      // console.log('action.payload', action.payload)
      state.modeTheme = action.payload
      // localStorage.setItem('modeTheme', state.modeTheme)
    },
    clearModeTheme: () => {
      return {
        modeTheme: '',
      }
    },
  },
})
// Actions to manage state
export const { addModeTheme, clearModeTheme } = modeThemeSlice.actions
// Grab states
export const modeThemeSelector = (state) => state.modeTheme

export default modeThemeSlice.reducer
