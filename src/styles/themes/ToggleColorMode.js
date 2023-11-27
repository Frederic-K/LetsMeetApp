// React
import { useState, useMemo, useEffect } from 'react'
// MUI theme
import { createTheme } from '@mui/material/styles'
import getDesignTokens from './getDesignTokens'
// Redux
import { useDispatch } from 'react-redux'
import { addModeTheme, clearModeTheme } from '../../features/modeThemeSlice'

export default function ToggleColorMode() {
  const dispatch = useDispatch()
  const [mode, setMode] = useState('dark')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
        localStorage.setItem('mode', mode === 'light' ? 'dark' : 'light')
      },
    }),
    [mode],
  )

  useEffect(() => {
    if (localStorage.getItem('mode')) {
      setMode(localStorage.getItem('mode'))
    }
  }, [])

  useEffect(() => {
    dispatch(clearModeTheme())
    dispatch(addModeTheme(mode))
    // eslint-disable-next-line
  }, [mode])

  // Default dark mode
  // const defaultTheme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode]
  // )

  // Theme selector
  const themeName = 'cimentDM'
  const currentTheme = useMemo(
    () => createTheme(getDesignTokens(`${themeName}`, mode)),
    [mode],
  )

  return {
    themeName,
    theme: currentTheme,
    colorMode,
    mode,
  }
}
