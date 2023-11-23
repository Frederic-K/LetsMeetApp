// Redux
import { useSelector } from 'react-redux'
import { modeThemeSelector } from '../../features/modeThemeSlice'
// MUI
import { Avatar, Box, Container, Link, Paper, Typography } from '@mui/material'
// Data
import { contactList } from '../../utils/data/contactList'
// Component
import Typewriter from '../../components/Typewriter/Typewriter'

export default function Contacts() {
  const { modeTheme } = useSelector(modeThemeSelector)
  return (
    <Container
      component="main"
      sx={{
        minHeight: '100vh',
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 12,
        // mt: 2,
      }}
    >
      {/* <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      > */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // overflow: 'auto',
        }}
      >
        <Box sx={{ width: '370px', mb: 4 }}>
          <Paper>
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
              <Typewriter text="Contact" delay={100} />
            </Typography>
          </Paper>
        </Box>
        <Box>
          {contactList.map((el) => (
            <Box
              className={`contact__type--${el.contactID}`}
              key={`${el.contactID}${el.contactType}`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <Avatar
                src={el.iconContactPath}
                alt={`Icon ${el.contactType}`}
                sx={{ width: 60, height: 60, p: 1 }}
              />
              <Link
                href={el.contactLink}
                sx={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Typography
                  sx={{
                    fontSize: 'large',
                    fontWeight: 900,
                    color: `${modeTheme !== 'dark' ? 'black' : 'white'}`,
                  }}
                >
                  {el.contactContent}
                </Typography>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
      {/* </Box> */}
    </Container>
  )
}
