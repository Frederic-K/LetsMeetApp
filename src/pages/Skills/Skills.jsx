// Redux
import { useSelector } from 'react-redux'
import { modeThemeSelector } from '../../features/modeThemeSlice'
// Component
import Typewriter from '../../components/Typewriter/Typewriter'
// MUI
import {
  Container,
  Box,
  Typography,
  Avatar,
  Button,
  Rating,
  Paper,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
// Data
import { skillsList } from '../../utils/data/skillsList'

export default function Skills() {
  const { modeTheme } = useSelector(modeThemeSelector)
  // console.log('modetheme from redux', modeTheme)
  // console.log('mode', mode.data)
  // const modeTheme = mode?.data
  return (
    <Container
      component="main"
      sx={{
        minHeight: '100vh',
        // width: '100%',
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // flexGrow: 1,
        py: 12,
        // mt: 2,
        // overflow: 'auto',
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: '768px',
          height: '90%',

          // overflow: 'auto',
        }}
      >
        <Grid xs={12}>
          <Paper elevation={6}>
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
                mb: 2,
              }}
            >
              <Typewriter text="Compétences" delay={170} />
            </Typography>
          </Paper>
        </Grid>
        {skillsList.map((el) => (
          <Grid xs={12} md={6} key={`skillBtn-${el.skillID}`}>
            <Box
              className={`skill__button--${el.skillID}`}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                variant="outlined"
                href={el.iconSkillLinkWeb}
                key={el.iconSkillName}
                // className={`${mode !== 'dark' ? 'skill__btn--BbLight' : null}`}
                sx={{
                  backgroundColor: `${
                    modeTheme !== 'dark' ? 'RGBA(255,255,255,0.7)' : null
                  }`,
                  '&:hover': {
                    backgroundColor: `${
                      modeTheme !== 'dark' ? 'RGBA(255,255,255,1)' : null
                    }`,
                    color: `${modeTheme !== 'dark' ? 'RGBA(0,0,0,1)' : null}`,
                  },
                }}
              >
                <Avatar
                  // variant="square"
                  src={el.iconSkillPath}
                  alt={el.iconSkillName}
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    width: 60,
                    height: 60,
                    backgroundColor: 'black',
                    p: 1,
                  }}
                ></Avatar>
                <Avatar
                  // variant="square"
                  src={el.iconSkillPath}
                  alt={el.iconSkillName}
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                    width: 40,
                    height: 40,
                    backgroundColor: 'black',
                    p: 1,
                  }}
                ></Avatar>
                <Typography
                  noWrap
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    width: 100,
                    ml: 1,
                  }}
                >
                  {el.iconSkillName} :
                </Typography>
                <Typography
                  noWrap
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                    alignItems: 'center',
                    width: 90,
                    ml: 1,
                    fontSize: 14,
                  }}
                >
                  {el.iconSkillName} :
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Rating name="skill rating" value={el.skillRating} readOnly />
                </Box>
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* </Box> */}
    </Container>
  )
}
