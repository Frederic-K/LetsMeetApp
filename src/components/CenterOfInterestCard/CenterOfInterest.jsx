// Redux
import { useSelector } from 'react-redux'
import { modeThemeSelector } from '../../features/modeThemeSlice'
// MUI
import Typography from '@mui/material/Typography'
import { Box, Paper } from '@mui/material'
// MUI Image
import Image from 'mui-image'
// Asset
import profileCardBanner from '../../assets/Background/wallpaperflare.com_wallpaper-11-banner.jpg'
// Data
import { centerOfInterest } from '../../utils/data/profileContent'

export default function CenterOfInterest() {
  const { modeTheme } = useSelector(modeThemeSelector)
  return (
    <>
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
                Centres d'intêret
              </Typography>
            </Box>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                mb: 2,
              }}
            >
              {centerOfInterest.map((el, idx) => (
                <Box
                  className={`profile__centerOfInterest--${idx}`}
                  key={`centerOfInterest-${idx}`}
                  sx={{
                    display: 'flex',
                    gap: 2,
                  }}
                >
                  {modeTheme !== 'dark' ? (
                    <Image
                      src={el.centerOfInterestBkPix}
                      width="40px"
                      height="40px"
                    />
                  ) : (
                    <Image
                      src={el.centerOfInterestWhitePix}
                      width="40px"
                      height="40px"
                      sx={{
                        objectFit: 'content',
                      }}
                    />
                  )}
                  <Typography
                    variant="body2"
                    // color="text.secondary"
                    sx={{ fontSize: '1rem', py: 1 }}
                  >
                    {el.centerOfInterestTitle}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  )
}
