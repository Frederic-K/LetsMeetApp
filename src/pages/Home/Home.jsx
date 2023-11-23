// React
import { useState } from 'react'
// Redux
import { useSelector } from 'react-redux'
import { modeThemeSelector } from '../../features/modeThemeSlice'
// Components
import Typewriter from '../../components/Typewriter/Typewriter'
import CircularCarousel from '../../components/CircularCarousel/CircularCarousel'
import Form from '../../components/Form/Form'
// MUI
import {
  Container,
  Box,
  Typography,
  Avatar,
  Button,
  Tooltip,
} from '@mui/material'
// Asset
import LogoFKWhite from '../../assets/FKLogo/LogoFK-waterpx-wht-100px.png'
import LogoFKBlack from '../../assets/FKLogo/LogoFK-waterpx-black-100px.png'

export default function Home() {
  const { modeTheme } = useSelector(modeThemeSelector)
  const [isFormShown, setIsFormShow] = useState(false)

  return (
    <Container
      component="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        py: 12,
      }}
    >
      {isFormShown ? (
        <Form setIsFormShow={setIsFormShow} />
      ) : (
        <>
          {/* {modeTheme !== 'dark' ? (
            <>
              <Box
                className="home__lightTheme--carouselBG"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  position: 'absolute',
                  width: '500px',
                  height: '500px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                }}
              />
              <Box
                className="home__lightTheme--carouselBG"
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  position: 'absolute',
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                }}
              />
            </>
          ) : null} */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '25px',
              zIndex: 5,
            }}
          >
            <Box
              className="home__myName text-radial-gradient-Text"
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              <Typography
                variant="h4"
                noWrap
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  textAlign: 'center',
                }}
              >
                <Typewriter text="Frédéric KREUDER" delay={100} />
              </Typography>
            </Box>
            <Box
              className="home__myName text-radial-gradient-Text"
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <Typography
                variant="h5"
                noWrap
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  textAlign: 'center',
                }}
              >
                <Typewriter text="Frédéric KREUDER" delay={100} />
              </Typography>
            </Box>
            <Box
              className="home__bar"
              sx={{
                width: { xs: '180px', md: '300px' },
              }}
            >
              <Box
                className="home__bar--progress "
                sx={{
                  padding: '2px',
                  backgroundColor: `${
                    modeTheme !== 'dark' ? 'black' : 'white'
                  }`,
                }}
              ></Box>
            </Box>
            <Box
              className="home__jobTitle"
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                position: 'relative',
              }}
            >
              <Typography
                className="home__jobTitle--loading text-radial-gradient-Title"
                variant="h4"
                noWrap
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 900,
                  position: 'absolute',
                }}
              >
                <span>&lt;</span>
                <span>/&gt;</span>
              </Typography>
              <Typography
                className="home__jobTitle--name text-radial-gradient-Title"
                variant="h4"
                noWrap
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 'bold',
                }}
              >
                FrontEndDevelopment
              </Typography>
            </Box>
            <Box
              className="home__jobTitle"
              sx={{
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                position: 'relative',
              }}
            >
              <Typography
                className="home__jobTitle--loading text-radial-gradient-Title"
                variant="h5"
                noWrap
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 900,
                  position: 'absolute',
                }}
              >
                <span>&lt;</span>
                <span>/&gt;</span>
              </Typography>
              <Typography
                className="home__jobTitle--name text-radial-gradient-Title"
                variant="h5"
                noWrap
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 'bold',
                }}
              >
                FrontEndDevelopment
              </Typography>
            </Box>
            <Box className="home__logo">
              {modeTheme !== 'dark' ? (
                <Tooltip title="Testez !">
                  <Button
                    sx={{ borderRadius: '35%' }}
                    onClick={() => setIsFormShow(true)}
                  >
                    <Avatar src={LogoFKBlack} />
                  </Button>
                </Tooltip>
              ) : (
                <Tooltip title="Testez !">
                  <Button
                    sx={{ borderRadius: '35%' }}
                    onClick={() => setIsFormShow(true)}
                  >
                    <Avatar src={LogoFKWhite} />
                  </Button>
                </Tooltip>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              width: '326px',
              height: '326px',
              borderRadius: '50%',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: { xs: 'flex', md: 'none' },
              overflow: 'hidden',
            }}
          >
            <CircularCarousel />
          </Box>
          <Box
            sx={{
              width: '517px',
              height: '517px',
              borderRadius: '50%',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: { xs: 'none', md: 'flex' },
              overflow: 'hidden',
            }}
          >
            <CircularCarousel />
          </Box>
        </>
      )}
    </Container>
  )
}
