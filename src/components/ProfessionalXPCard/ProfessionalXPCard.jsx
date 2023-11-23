// MUI
import { Paper, Box, Typography } from '@mui/material'
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
// Asset
import JobTitleBackground from '../../assets/Background/wallpaperflare.com_wallpaper-11-banner.jpg'
// Component
import DropdownMenu from '../Accordion/Accordion'

export default function ProfessionnalXPCard(data) {
  // console.log('data2', data)
  // console.log('data3', data.data.description)
  const xp = data?.data
  return (
    // <Box
    //   // className={`xp__job--${xp.indexXP}`}
    //   sx={{
    //     width: '100%',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     // overflow: 'auto',
    //   }}
    // >
    <Paper
      elevation={12}
      component="section"
      className={`xp__job--${xp.indexXP}`}
      key={xp.indexXP}
      sx={{
        width: '80%',
        my: 3,
        border: '1px solid',
        borderColor: 'inherit',
        borderRadius: '6px',
      }}
    >
      <Box component="article">
        <Box
          sx={{
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            p: 1,
            backgroundImage: `url(${JobTitleBackground})`,
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden',
          }}
        >
          <Typography
            variant="h6"
            className="text-radial-gradient-Text"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              // fontSize: '1.5rem',
              color: '#ffffff',
            }}
          >
            {xp.jobTitle}
          </Typography>
          <Typography
            // variant="h6"
            className="text-radial-gradient-Text"
            sx={{
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 900,
              fontSize: '1.2rem',
              color: '#ffffff',
            }}
          >
            {xp.jobTitle}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            p: 1,
            borderBottom: '1px solid',
            borderColor: 'inherit',
          }}
        >
          <Typography
            sx={{
              fontStyle: 'italic',
            }}
          >
            {xp.location} :
          </Typography>
          <Typography
            sx={{
              fontStyle: 'italic',
            }}
          >
            {xp.yearsNb}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 1 }}>
          {xp.description.map((el, idx) => (
            <Box key={idx} sx={{ display: 'flex', gap: 1 }}>
              <Box>
                <PlayCircleFilledIcon
                  sx={{
                    fontSize: 'small',
                    color: 'inherit',
                    textAlign: 'center',
                  }}
                />
              </Box>
              <Typography>{el}</Typography>
            </Box>
          ))}
        </Box>
        <DropdownMenu data={xp.skills} />
      </Box>
    </Paper>
    // </Box>
  )
}
