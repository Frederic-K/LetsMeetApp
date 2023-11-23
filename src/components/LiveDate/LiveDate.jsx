import { Box, Typography } from '@mui/material'

export default function LiveDate() {
  let today = new Date()
  let date =
    today.getDate() +
    // parseInt(today.getMonth() + 1) +
    '-' +
    // today.getDate() +
    parseInt(today.getMonth() + 1) +
    '-' +
    today.getFullYear()

  return (
    <Box className="liveDate">
      <Typography noWrap>{date}</Typography>
    </Box>
  )
}
