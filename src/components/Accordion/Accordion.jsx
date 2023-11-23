import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Grid from '@mui/material/Unstable_Grid2'
import { Typography } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified'
import { grey } from '@mui/material/colors'

export default function DropdownMenu(data) {
  const skillsData = data.data
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          // sx={{ backgroundColor: grey[100] }}
        >
          <Typography sx={{ fontStyle: 'italic' }}>Compétences :</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            spacing={2}
            sx={{
              display: 'flex',
              // alignItems: 'center',
              maxWidth: '768px',
            }}
          >
            {skillsData.map((el, idx) => (
              <Grid xs={12} md={6} xl={3} key={el + idx}>
                <Typography>
                  <VerifiedIcon sx={{ fontSize: 'small', color: 'inherit' }} />{' '}
                  {el}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
