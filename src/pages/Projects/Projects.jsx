// React
import { useState } from 'react'
// Data
import { StudentProjectsList } from '../../utils/data/studentProjects'
// Component
import StudentProjectCard from '../../components/StudentProjectCard/StudentProjectCard'
import StudentProjectlistCard from '../../components/StudentProjectCard/StudentProjectListCard'
import Carousel from '../../components/Carousel/Carousel'
import Typewriter from '../../components/Typewriter/Typewriter'
//
// import HeaderAppBar from '../../components/Header/Header'
// import FooterAppBar from '../../components/Footer/Footer'
//
// MUI
import { Box, Container, Paper, Toolbar, Typography } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

export default function Projects() {
  const [toggle, setToggle] = useState(false)

  const arrayProjectCards = StudentProjectsList.map((el) => (
    <StudentProjectCard key={`projectCard-${el.studentProjectID}`} data={el} />
  ))

  return (
    <>
      {/* <Toolbar /> */}
      <Container
        component="main"
        sx={{
          minHeight: '100vh',
          // height: '100vh',
          // height: 'calc(100% - 128px)',
          // height: 'calc(100vh - 128px)',
          // height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // py: 3,
          py: 12,
          // my: 60,
        }}
      >
        <Box
          component="section"
          sx={{
            //height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // justifyContent: 'center',
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
                // mt: 2,
              }}
            >
              <Typewriter text="Projects" delay={70} />
            </Typography>
          </Paper>
          <Carousel data={arrayProjectCards} />
          {/* <FormControlLabel
            value="bottom"
            control={<Switch />}
            label="Liste des projets"
            labelPlacement="bottom"
            sx={{ mb: 2 }}
            onChange={() => setToggle(!toggle)}
          /> */}
          <Switch
            value="bottom"
            // sx={{ mb: 2 }}
            onChange={() => setToggle(!toggle)}
          />
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
      {/* <Toolbar /> */}
    </>
  )
}
