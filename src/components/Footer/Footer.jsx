// MUI
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { Container, Toolbar } from '@mui/material'
// Components
import LiveClock from '../LiveClock/LiveClock'
import LiveDate from '../LiveDate/LiveDate'
import MasterTage from '../MasterTag/MasterTag'

export default function FooterAppBar() {
  return (
    <AppBar
      component="footer"
      // className="footer"
      position="fixed"
      // position="static"
      sx={{
        top: 'auto',
        bottom: 0,
        bgcolor: 'inherit',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="false" className="footer">
        <Box
          sx={{
            height: 56,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <LiveDate />
          <MasterTage />
          <LiveClock />
        </Box>
      </Container>
    </AppBar>
  )
}
