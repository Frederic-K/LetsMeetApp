import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { Container } from '@mui/material'

export default function CircularLoader() {
  return (
    <Container
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 12,
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <CircularProgress color="inherit" />
      </Box>
    </Container>
  )
}
