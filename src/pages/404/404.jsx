// React
import { NavLink } from 'react-router-dom'
// Redux
import { useSelector } from 'react-redux'
import { modeThemeSelector } from '../../features/modeThemeSlice'
// MUI
import { Box, Button, Container, Typography } from '@mui/material'

export default function Error404() {
  const { modeTheme } = useSelector(modeThemeSelector)
  return (
    <Container
      className="error404"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        py: 12,
      }}
    >
      <Box
        className="error404__text text-radial-gradient-Text"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          component="span"
          sx={{
            fontSize: '150px',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          404
        </Typography>
        <Typography
          sx={{
            fontSize: '70px',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Page not found
        </Typography>
      </Box>
      <Button
        className="error404__btn"
        variant="outlined"
        sx={{
          borderRadius: '50px',
          backgroundColor: `${
            modeTheme !== 'dark' ? 'RGBA(255,255,255,0.7)' : null
          }`,
          '&:hover': {
            backgroundColor: `${
              modeTheme !== 'dark' ? 'RGBA(255,255,255,1)' : null
            }`,
            color: `${modeTheme !== 'dark' ? 'RGBA(0,0,0,1)' : null}`,
          },
        }}
      >
        <NavLink className="error404__btn--link" to="/">
          <Typography
            textAlign="center"
            sx={{
              color: `${modeTheme !== 'dark' ? '#ff9800' : 'white'}`,
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            Back to home
          </Typography>
        </NavLink>
      </Button>
    </Container>
  )
}
