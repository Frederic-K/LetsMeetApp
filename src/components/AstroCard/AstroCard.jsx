// MUI
import { Box, Container, Paper, Typography, Button } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

export default function AstroCard(data) {
  const userData = data?.userData
  const astroData = data?.astroData
  const setIsAstroCardShown = data.setIsAstroCardShown
  const setIsFormShow = data.setIsFormShow

  // Filter
  const astroCardContent = astroData.filter((el) => {
    return el.name === userData.signAstro
  })

  return (
    <Paper>
      <Container
        component="article"
        className="border-radial-gradient"
        sx={{
          width: '320px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Button
          sx={{
            p: 0,
            position: 'absolute',
            top: 5,
            right: -6,
          }}
          onClick={() => {
            setIsAstroCardShown(false)
            setIsFormShow(false)
          }}
        >
          <HighlightOffIcon
            sx={{
              fontSize: '35px',
            }}
          />
        </Button>
        {astroCardContent.map((el, idx) => (
          <Box
            key={`${el.name}-${idx}`}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <Typography sx={{ fontSize: '20px' }}>
              Bonjour{' '}
              <span className="text-linear-gradient-Text bold">
                {userData.firstName} {userData.lastName}
              </span>{' '}
              !
            </Typography>
            <Typography>
              Votre signe astrologique :{' '}
              <Typography
                component="div"
                className="text-radial-gradient-Title"
                sx={{
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  fontSize: '18px',
                }}
              >
                "{el.name}"
              </Typography>{' '}
              se caractérise par :{' '}
              <Typography
                component="div"
                className="text-radial-gradient-Title"
                sx={{
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  fontSize: '18px',
                }}
              >
                {el.skill} !
              </Typography>
            </Typography>
            <Typography>{el.description}</Typography>
          </Box>
        ))}
        <Button
          variant="contained"
          aria-label="submit form"
          type="submit"
          sx={{ mt: 3 }}
          onClick={() => {
            setIsAstroCardShown(false)
            setIsFormShow(false)
          }}
        >
          <Typography sx={{ fontWeight: 'bold' }}>OK</Typography>
        </Button>
      </Container>
    </Paper>
  )
}
