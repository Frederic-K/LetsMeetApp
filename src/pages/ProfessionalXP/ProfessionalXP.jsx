// MUI
import { Box, Container, Paper, Typography } from '@mui/material'
// Data
import useFetch from '../../utils/api/useFetch'
// Components
import Typewriter from '../../components/Typewriter/Typewriter'
// Toaster
import toast, { Toaster } from 'react-hot-toast'
// Components
import CircularLoader from '../../components/Loader/Loader'
import ProfessionnalXPCard from '../../components/ProfessionalXPCard/ProfessionalXPCard'

export default function ProfessionalXP() {
  const { data, isLoading, error } = useFetch('../data/experiences.json')

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
          py: 12,
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
          </Box>
        )}
      </Container>
    </>
  )
}
