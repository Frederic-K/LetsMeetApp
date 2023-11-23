// MUI
import { Box, Container, Paper, Typography, Button } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
// Redux
import { useSelector } from 'react-redux'
import { modeThemeSelector } from '../../features/modeThemeSlice'

export default function AstroCard(data) {
  // Theme handel
  // const { modeTheme } = useSelector(modeThemeSelector)
  // Data
  console.log('data', data)
  const userData = data?.userData
  console.log('userData', userData)
  const astroData = data?.astroData
  console.log('astroData', astroData)
  console.log('isModalShown', data.setIsAstroCardShown)
  const setIsAstroCardShown = data.setIsAstroCardShown
  const setIsFormShow = data.setIsFormShow

  // Filter
  console.log('userSign', userData.signAstro)
  console.log('astroDataSign', astroData[0].name)
  // const astroCardContent = astroData.filter((userData.signAstro) => userData.signAstro === astroData.name)

  const astroCardContent = astroData.filter((el) => {
    return el.name === userData.signAstro
  })

  console.log('astroCardContent', astroCardContent)

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
          // paddingRight: '0px',
          // paddingLeft: '0px',
          p: 2,
          // backgroundColor: `${
          //   modeTheme !== 'dark' ? 'RGBA(255,255,255,0.7)' : null
          // }`,
          // backgroundColor: 'inherit',
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
                // variant="h6"
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
                // variant="h6"
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
          // endIcon={<CheckCircleIcon />}
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
