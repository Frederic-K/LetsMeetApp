// MUI
import { Box, Container, Paper, Typography } from '@mui/material'
// Data
import useFetch from '../../utils/api/useFetch'
// Components
import Typewriter from '../../components/Typewriter/Typewriter'
// Toaster
import toast, { Toaster } from 'react-hot-toast'
// import Error404 from '../404/404'
// Components
import CircularLoader from '../../components/Loader/Loader'
import ProfessionnalXPCard from '../../components/ProfessionalXPCard/ProfessionalXPCard'

export default function ProfessionalXP() {
  const { data, isLoading, error } = useFetch('../data/experiences.json')
  // console.log('data', data)

  if (error) {
    toast.error('Oups... une erreur est survenue')
  }

  return (
    <>
      <Toaster />
      <Container
        component="main"
        sx={{
          minHeight: '100vh',
          // height: '100vh',
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
          py: 12,
          // mt: 2,
          // overflow: 'auto',
        }}
      >
        {isLoading ? (
          <CircularLoader />
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              // overflow: 'auto',
            }}
          >
            <Paper
              elevation={6}
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <Typography
                className="text-radial-gradient-Text"
                variant="h4"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 900,
                  letterSpacing: '.2rem',
                  textAlign: 'center',
                  border: '1px solid black',
                  borderRadius: '5px',
                  p: 1,
                }}
              >
                <Typewriter text="Expériences Professionnelles" delay={60} />
              </Typography>
            </Paper>
            <Paper
              elevation={6}
              sx={{
                display: { xs: 'flex', md: 'none' },
                // mt: 2,
              }}
            >
              <Typography
                className="text-radial-gradient-Text"
                variant="h6"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 900,
                  letterSpacing: '.2rem',
                  textAlign: 'center',
                  border: '1px solid black',
                  borderRadius: '5px',
                  p: 1,
                }}
              >
                <Typewriter text="Expériences Professionnelles" delay={60} />
              </Typography>
            </Paper>
            {data.map((el, idx) => (
              <ProfessionnalXPCard data={el} key={`xp-${idx}`} />
            ))}
            {/* <ProfessionnalXPCard data={data} /> */}
          </Box>
        )}
      </Container>
    </>
  )
}
