// Components
import MyCVpdf from '../../assets/File/FK_CV_v2.3.1.pdf'
import MyCVimg from '../../assets/File/FK_CV_v2.3.1.png'
import Typewriter from '../../components/Typewriter/Typewriter'
// MUI Image
import Image from 'mui-image'
// MUI
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import PrintIcon from '@mui/icons-material/Print'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Paper from '@mui/material/Paper'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'

const actions = [
  { icon: <PrintIcon />, name: 'Imprimer', href: `${MyCVpdf}` },
  {
    icon: <SaveIcon />,
    name: 'Enregistrer',
    href: `${MyCVpdf}`,
    download: 'CV-Frédéric KREUDER',
  },
  { icon: <VisibilityIcon />, name: 'Visualiser', href: `${MyCVpdf}` },
]

export default function CV() {
  return (
    <Container
      component="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 12,
      }}
    >
      <Box
        sx={{
          display: { xs: 'none', lg: 'flex' },
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Paper
          elevation={6}
          sx={{
            width: '500px',
            position: 'absolute',
            left: -270,
            transform: 'rotate(-90deg)',
            zIndex: 1,
          }}
        >
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
              p: 2,
            }}
          >
            <Typewriter text="Curriculum Vitae" delay={100} />
          </Typography>
        </Paper>
        <Paper elevation={12} sx={{ mb: 2 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src={MyCVimg} sx={{ maxWidth: '500px' }} />
          </Box>
        </Paper>
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
          <SpeedDial
            ariaLabel="Menu action"
            sx={{ position: 'absolute', bottom: -200, left: -75 }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                href={action.href}
                download={action.download}
              />
            ))}
          </SpeedDial>
        </Box>
      </Box>
      <Card
        className="growUp"
        sx={{
          display: { sm: 'flex', lg: 'none' },
          flexDirection: 'column',
        }}
      >
        <CardMedia
          component="img"
          sx={{
            maxHeight: 400,
            maxWidth: 'auto',
            objectPosition: 'top',
            objectFit: 'cover',
          }}
          image={MyCVimg}
          title="My CV"
        />
        <CardContent
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            p: 0,
            mt: 1,
          }}
        >
          <Typography
            className="text-radial-gradient-Text growUp"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 900,
              fontSize: 15,
              textAlign: 'center',
            }}
          >
            {'"<Route path="/nouveau-depart" element={<MyCV />} />"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="link" href={MyCVpdf} download="CV-Frédéric KREUDER">
            <SaveIcon fontSize="medium" />
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}
