// React
import { useState } from 'react'
// Data
import { StudentProjectsList } from '../../utils/data/studentProjects'
// Component
import StudentProjectCard from '../../components/StudentProjectCard/StudentProjectCard'
import StudentProjectlistCard from '../../components/StudentProjectCard/StudentProjectListCard'
import Carousel from '../../components/Carousel/Carousel'
import Typewriter from '../../components/Typewriter/Typewriter'
// MUI
import { Box, Container, Paper, Typography } from '@mui/material'
import Switch from '@mui/material/Switch'

export default function Projects() {
  const [toggle, setToggle] = useState(false)

  const arrayProjectCards = StudentProjectsList.map((el) => (
    <StudentProjectCard key={`projectCard-${el.studentProjectID}`} data={el} />
  ))

  return (
    <Container
      component="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 12,
      }}
    >
      <Box
        component="section"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={6} sx={{ mb: 3 }}>
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
            <Typewriter text="Projects" delay={70} />
          </Typography>
        </Paper>
        <Carousel data={arrayProjectCards} />
        <Switch value="bottom" onChange={() => setToggle(!toggle)} />
        <Typography
          className="text-radial-gradient-Text"
          sx={{
            fontSize: '20px',
            fontWeight: '900',
            color: 'main',
            mb: 2,
          }}
        >
          Liste des projets
        </Typography>
        {toggle && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 5,
            }}
          >
            {StudentProjectsList.map((el) => (
              <StudentProjectlistCard
                className={`project__card--${el.studentProjectID}`}
                key={`projectListCard-${el.studentProjectID}`}
                data={el}
              />
            ))}
          </Box>
        )}
      </Box>
    </Container>
  )
}
