// MUI
import Typography from '@mui/material/Typography'
import VerifiedIcon from '@mui/icons-material/Verified'
import { Box, Paper } from '@mui/material'
// MUI Image
import Image from 'mui-image'
// Asset
import summuryCardPix from '../../assets/PhotoID/profileIDPix1.png'
// Data
import { profileSummury } from '../../utils/data/profileContent'

export default function ProfileCard() {
  return (
    <Box>
      <Paper elevation={12} sx={{ display: { xs: 'none', sm: 'flex' } }}>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <Box>
            <Image
              src={summuryCardPix}
              sx={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}
              width="225px"
              fit="cover"
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {profileSummury.map((el, idx) => (
              <Typography
                variant="body2"
                sx={{ fontSize: '1rem', py: 1, pr: 2 }}
                key={`summury-${idx}`}
                className={`profile__summury--${idx}`}
              >
                <VerifiedIcon
                  sx={{ fontSize: 'small', color: 'inherit', mr: 1 }}
                />
                {el}
              </Typography>
            ))}
          </Box>
        </Box>
      </Paper>
      <Paper
        elevation={12}
        sx={{
          width: '295px',
          display: { xs: 'flex', sm: 'none' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Box>
            <Image
              src={summuryCardPix}
              sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
              width="295px"
              height="100px"
              fit="cover"
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {profileSummury.map((el, idx) => (
              <Typography
                variant="body2"
                sx={{ fontSize: '1rem', p: 1 }}
                key={`summury-${idx}`}
              >
                <VerifiedIcon
                  sx={{ fontSize: 'small', color: 'inherit', mr: 1 }}
                />
                {el}
              </Typography>
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
