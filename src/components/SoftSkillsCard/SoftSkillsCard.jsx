// MUI
import Typography from '@mui/material/Typography'
import VerifiedIcon from '@mui/icons-material/Verified'
import { Box, Container, Paper } from '@mui/material'
// MUI Image
// import Image from 'mui-image'
// Component
import Slider from '../Slider/Slider'
// Data
import { softSkillsList } from '../../utils/data/profileContent'

export default function SoftSkillsCard() {
  return (
    // <Container>
    <Box>
      <Paper elevation={12} sx={{ display: 'flex', width: '295px' }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '80px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Typography
              className="text-radial-gradient-Text"
              variant="h5"
              sx={{ color: 'white', position: 'absolute', left: 30 }}
            >
              Savoir
            </Typography>
            <Slider />
            <Typography
              className="text-radial-gradient-Text"
              variant="h5"
              sx={{ color: 'white', position: 'absolute', right: 45 }}
            >
              Être
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              mb: 1,
            }}
          >
            {softSkillsList.map((el, idx) => (
              <Typography
                className={`profile__softSkill--${idx}`}
                variant="body2"
                // color="text.secondary"
                sx={{ fontSize: '1rem', py: 1 }}
                key={`softSkill-${idx}`}
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
    // </Container>
  )
}
