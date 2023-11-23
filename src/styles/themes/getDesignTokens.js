// https://zenoo.github.io/mui-theme-creator/

export default function getDesignTokens(theme, mode) {
  switch (theme) {
    case 'defaultDM':
      return {
        palette: {
          mode,
        },
      }
    case 'cimentDM':
      return {
        palette: {
          // let mode to de able to call default dark mode if needed
          mode,
          primary: {
            main: '#ff9800',
          },
          secondary: {
            main: '#f50057',
          },
        },
      }

    default:
      return console.log('no available theme selected')
  }
}
