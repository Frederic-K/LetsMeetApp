// MUI
import { Avatar, Box, Container, Typography } from '@mui/material'
import {
  blue,
  pink,
  grey,
  yellow,
  orange,
  lightBlue,
} from '@mui/material/colors'
// Assets
import Colaborate from '../../assets/IconMessage/colaborate.png'
import Code from '../../assets/IconMessage/codage1.png'
import ConnectPeople from '../../assets/IconMessage/network1.png'

export default function MasterTage() {
  return (
    <Container className="masterTag">
      <Box
        sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}
      >
        <Typography
          variant="p"
          noWrap
          sx={{
            fontWeight: 700,
          }}
        >
          <span style={{ color: blue[700] }}>const </span>
          <span style={{ color: pink[200] }}>&#123; </span>
          <span style={{ color: blue[700] }}>listen, collaborate, create </span>
          <span style={{ color: pink[200] }}>&#125; </span>
          <span style={{ color: grey[500] }}>= </span>
          <span style={{ color: yellow[700] }}>useCode</span>
          <span style={{ color: pink[200] }}>&#40;</span>
          <span style={{ color: orange[500] }}>'idea'</span>
          <span style={{ color: grey[500] }}>, </span>
          <span style={{ color: lightBlue[600] }}>humains</span>
          <span style={{ color: pink[200] }}>&#41;</span>
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{ width: 25, height: 25 }}
          variant="square"
          src={Colaborate}
          alt="Icon colaborate"
        ></Avatar>
        <Typography variant="span" sx={{ mr: 1, ml: 1, color: 'white' }}>
          +
        </Typography>
        <Avatar
          sx={{ width: 25, height: 25 }}
          variant="square"
          src={Code}
          alt="Icon code"
        ></Avatar>
        <Typography variant="span" sx={{ mr: 1, ml: 1, color: 'white' }}>
          =
        </Typography>
        <Avatar
          sx={{ width: 25, height: 25 }}
          variant="square"
          src={ConnectPeople}
          alt="Icon connect people"
        ></Avatar>
      </Box>
    </Container>
  )
}
