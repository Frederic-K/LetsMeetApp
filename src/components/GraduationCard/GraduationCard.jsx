// MUI
import Typography from '@mui/material/Typography'
import { Box, Paper } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified'
// Toaster
import toast, { Toaster } from 'react-hot-toast'
// Asset
import profileCardBanner from '../../assets/Background/wallpaperflare.com_wallpaper-11-banner.jpg'
// Component'
import CircularLoader from '../Loader/Loader'
// Api
import useFetch from '../../utils/api/useFetch'

export default function GraduationCard() {
  const { isLoading, data, error } = useFetch('../data/degrees.json')
  const diploma = data
  if (error) {
    toast.error('Oups... une erreur est survenue')
  }
  return (
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
                display: 'flex',
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
                  backgroundImage: `url(${profileCardBanner})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
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
                      alignItems: 'center',
                      px: 2,
                    }}
                  >
                    <Typography
                      variant="body2"
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
  )
}
