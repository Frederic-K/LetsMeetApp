// MUI
import { Box, Container, Typography, Paper } from '@mui/material'
// Component
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import SoftSkillsCard from '../../components/SoftSkillsCard/SoftSkillsCard'
import CenterOfInterest from '../../components/CenterOfInterestCard/CenterOfInterest'
import GraduationCard from '../../components/GraduationCard/GraduationCard'
import Typewriter from '../../components/Typewriter/Typewriter'

export default function Profile() {
  return (
    <Container
      component="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        py: 12,
      }}
    >
      <Paper elevation={12}>
        <Typography
          className="text-radial-gradient-Text"
          variant="h4"
          noWrap
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
          <Typewriter text="Profil" delay={100} />
        </Typography>
      </Paper>
      <ProfileCard />
      <Box sx={{ display: { xs: 'none', md: 'none', lg: 'flex' }, gap: 8 }}>
        <GraduationCard />
        <SoftSkillsCard />
        <CenterOfInterest />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'none' }, gap: 2 }}>
        <GraduationCard />
        <SoftSkillsCard />
        <CenterOfInterest />
      </Box>
      <Box
        sx={{
          display: { xs: 'flex', md: 'none', lg: 'none' },
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <SoftSkillsCard />
        <GraduationCard />
        <CenterOfInterest />
      </Box>
    </Container>
  )
}
