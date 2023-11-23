// React
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// React context
import ColorModeContext from '../../styles/themes/ColorModeContext'
// Redux
import { useSelector } from 'react-redux'
import { modeThemeSelector } from '../../features/modeThemeSlice'
// MUI
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { grey, orange } from '@mui/material/colors'
// MUI theme
// import { useTheme } from '@mui/material/styles'
// Asssets
import PhotoID from '../../assets/PhotoID/Photo-FK-ID-100px.png'
import PhotoID_orange from '../../assets/PhotoID/Photo-FK-ID-orange-100px.png'
import LogoFK_wht from '../../assets/FKLogo/LogoFK-waterpx-wht-100px.png'
import LogoFK_red from '../../assets/FKLogo/LogoFK-waterpx-red3-100px.png'
// Api
import useFetch from '../../utils/api/useFetch'
// Toaster
import toast, { Toaster } from 'react-hot-toast'
// Data
// import pagesLinks from '../../utils/data/pagesLinks.json'
// import profileLinks from '../../utils/data/profileLinks.json'
// Component
import CircularLoader from '../Loader/Loader'

export default function HeaderAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const { isLoading, data, error } = useFetch('../data/navLinks.json')
  // console.log('data', data?.pageLinks)
  // console.log('data', data?.profileLinks)

  if (error) {
    toast.error('Oups... une erreur est survenue')
  }

  const pagesLinks = data?.pageLinks
  // console.log('pagesLinks', pagesLinks)

  const profileLinks = data?.profileLinks

  const navBarPagesLinks = []
  for (let index = 1; index < pagesLinks?.length; index++) {
    navBarPagesLinks.push(pagesLinks[index])
  }

  const navigate = useNavigate()

  // const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  /// TRY TO WRAP WITH USEEFFECT TO AVOID CONSOLE WARNING
  /// https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning/71257867#71257867
  const { modeTheme } = useSelector(modeThemeSelector)

  return (
    <>
      <Toaster />
      {isLoading ? (
        <CircularLoader />
      ) : (
        <AppBar
          // className="navBar"
          // position="static"
          position="fixed"
        >
          <Container maxWidth="false" className="navBar">
            <Toolbar disableGutters>
              <Tooltip title="Theming !">
                <Button
                  className="navBarLogoFK__btn"
                  // href="/contact"
                  onClick={colorMode.toggleColorMode}
                  sx={{
                    p: 0,
                    display: { xs: 'none', md: 'flex' },
                  }}
                >
                  <Avatar
                    className="navBarLogoFK__btn--img"
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: 'inherit',
                      display: { xs: 'none', md: 'flex' },

                      // mr: 1,
                    }}
                  >
                    <img
                      src={LogoFK_wht}
                      alt="Logo Frédéric KREUDER"
                      className="navBarLogoFK__btn--imgWhite"
                    />
                    <img
                      src={LogoFK_red}
                      alt="Logo Frédéric KREUDER"
                      className="navBarLogoFK__btn--imgRed"
                    />
                  </Avatar>
                </Button>
              </Tooltip>
              <Tooltip title="Acceuil">
                <Typography
                  className="navBar__links"
                  variant="h6"
                  noWrap
                  component="a"
                  // href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: 'white',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    navigate('/')
                  }}
                >
                  Frederic-K
                </Typography>
              </Tooltip>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="App of Frederic Kreuder"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  // color="inherit"
                  sx={{
                    color: 'white',
                    '&:hover': { color: orange[500] },
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pagesLinks.map((el) => (
                    <MenuItem
                      key={el.pageID}
                      className="navMenu__links"
                      component={Button}
                      onClick={handleCloseNavMenu}
                    >
                      <NavLink
                        to={el.pageLink}
                        className={({ isActive }) =>
                          isActive ? 'navMenu__link--active' : 'navMenu__link'
                        }
                      >
                        <Typography
                          textAlign="center"
                          sx={{
                            color: `${
                              modeTheme !== 'dark' ? 'black' : 'white'
                            }`,
                          }}
                        >
                          {el.pageName}
                        </Typography>
                      </NavLink>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Tooltip title="Rock'n Roll !">
                <Button
                  className="navBarLogoFK__btn"
                  // href="/contact"
                  onClick={colorMode.toggleColorMode}
                  sx={{ p: 0 }}
                >
                  <Avatar
                    className="navBarLogoFK__btn--img"
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: 'inherit',
                      display: { xs: 'flex', md: 'none' },
                      // mr: 1,
                    }}
                  >
                    <img
                      src={LogoFK_wht}
                      alt="Logo Frédéric KREUDER"
                      className="navBarLogoFK__btn--imgWhite"
                    />
                    <img
                      src={LogoFK_red}
                      alt="Logo Frédéric KREUDER"
                      className="navBarLogoFK__btn--imgRed"
                    />
                  </Avatar>
                </Button>
              </Tooltip>
              <Typography
                className="navBar__links"
                variant="h5"
                noWrap
                component="a"
                // href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'white',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/')
                }}
              >
                Frederic-K
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {navBarPagesLinks.map((el) => (
                  <Button
                    className="navBar__links"
                    key={el.pageName}
                    sx={{
                      my: 2,
                      display: 'block',
                    }}
                  >
                    <NavLink
                      to={el.pageLink}
                      className={({ isActive }) =>
                        isActive ? 'navBar__link--active' : 'navBar__link'
                      }
                    >
                      {el.pageName}
                    </NavLink>
                  </Button>
                ))}
              </Box>
              {/* Profil menu */}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="A propos !">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Frédéric KREUDER"
                      sx={{ width: 50, height: 50 }}
                    >
                      <img
                        src={PhotoID}
                        alt="Frédéric KREUDER"
                        className="navBar__PhotoID--imgOrigin"
                      />
                      <img
                        src={PhotoID_orange}
                        alt="Frédéric KREUDER"
                        className="navBar__PhotoID--imgRed"
                      />
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {profileLinks.map((el) => (
                    <MenuItem
                      key={el.profileID}
                      className="navMenu__links"
                      component={Button}
                      onClick={handleCloseUserMenu}
                    >
                      <NavLink
                        to={el.profileLink}
                        className={({ isActive }) =>
                          isActive ? 'navMenu__link--active' : 'navMenu__link'
                        }
                      >
                        <Typography
                          textAlign="center"
                          // sx={{ color: 'whitesmoke' }} <<<<< SET COLOR BY THEME
                          sx={{
                            color: `${
                              modeTheme !== 'dark' ? 'black' : 'white'
                            }`,
                          }}
                        >
                          {el.profileItem}
                        </Typography>
                      </NavLink>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </>
  )
}
