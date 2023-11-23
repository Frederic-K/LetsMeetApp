import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { grey } from '@mui/material/colors'

export default function StudentProjectlistCard(data) {
  // console.log('data', data)
  const projectData = data?.data
  //console.log('card data', projectData)
  return (
    <Card
      className={`project__card--${projectData.studentProjectID}`}
      // variant="outlined"
      sx={{ width: 343, height: 345 }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={projectData.studentProjectImg}
        title={projectData.studentProjectMainTitle}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {projectData.studentProjectMainTitle}
        </Typography>
        <Typography
          gutterBottom
          component="div"
          sx={{
            fontSize: 15,
            borderBottom: '1px solid',
            borderColor: grey[300],
            fontStyle: 'italic',
          }}
        >
          {projectData.studentProjectSubTitle}
        </Typography>
        <Typography
          variant="body2"
          component="article"
          sx={{
            maxHeight: 50,
            color: 'text.secondary',
            overflow: 'hidden',
            // whiteSpace: 'nowrap',
            textOverflow: 'hidden',
          }}
        >
          {projectData.studentProjectContext.map((el, idx) => (
            <Typography
              key={`context-${idx}`}
              sx={{
                fontSize: 12,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              {el}
            </Typography>
          ))}
        </Typography>
      </CardContent>
      <CardActions sx={{ pt: 0 }}>
        {/* <Button size="small">Share</Button> */}
        <Button size="small" href={projectData.studentProjectLink}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
