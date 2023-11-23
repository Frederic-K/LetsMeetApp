// MUI
import Typography from '@mui/material/Typography'
import { Box, Container, Paper } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified'
// MUI Image
import Image from 'mui-image'
// Toaster
import toast, { Toaster } from 'react-hot-toast'
// Asset
import profileCardBanner from '../../assets/Background/wallpaperflare.com_wallpaper-11-banner.jpg'
// Component
// import Slider from '../Slider/Slider'
import CircularLoader from '../Loader/Loader'
// Data
// import { diploma } from '../../utils/data/profileContent'
// Api
import useFetch from '../../utils/api/useFetch'

export default function GraduationCard() {
  const { isLoading, data, error } = useFetch('../data/degrees.json')
  console.log('degrees', data)
  const diploma = data
  // console.log('diploma1', diploma1)
  if (error) {
    toast.error('Oups... une erreur est survenue')
  }
  return (
    // <Container>
    <>
      <Toaster />
      {isLoading ? (
        <CircularLoader />
      ) : (
        <Box>
          <Paper
            elevation={12}
            sx={{ display: 'flex', width: '295px', height: '370.13px' }}
          >
            <Box
              sx={{
                width: '100%',
                // height: '100%',
                display: 'flex',
                // justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  // height: '110px',
                  backgroundImage: `url(${profileCardBanner})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  // overflow: 'hidden',
                  borderTopLeftRadius: '5px',
                  borderTopRightRadius: '5px',
                }}
              >
                <Typography
                  className="text-radial-gradient-Text"
                  variant="h5"
                  sx={{
                    height: '80px',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Cursus
                </Typography>
              </Box>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  mb: 1,
                }}
              >
                {diploma.map((el, idx) => (
                  <Box
                    className={`profile__graduation--${idx}`}
                    key={`graduation-${idx}`}
                    sx={{
                      width: '100%',
                      display: 'flex',
                      //   justifyContent: 'center',
                      //   gap: 2,
                      alignItems: 'center',
                      px: 2,
                    }}
                  >
                    <Typography
                      variant="body2"
                      // color="text.secondary"
                      sx={{ fontSize: '1rem', py: 1 }}
                    >
                      <VerifiedIcon
                        sx={{ fontSize: 'small', color: 'inherit', mr: 1 }}
                      />
                      {el.diplomaTitle} - {el.diplomaDate}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>
        </Box>
      )}
    </>

    // </Container>
  )
}
