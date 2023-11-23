// React
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Pages
import Home from './pages/Home/Home'
import Skills from './pages/Skills/Skills'
import Projects from './pages/Projects/Projects'
import ProfessionalXP from './pages/ProfessionalXP/ProfessionalXP'
import Error404 from './pages/404/404'
///
import Profile from './pages/Profile/Profile'
import CV from './pages/CV/CV'
import Contact from './pages/Contact/Contact'
// Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// MUI
import { Container } from '@mui/material'
// MUI Theme
import { ThemeProvider } from '@mui/material/styles'
import ColorModeContext from './styles/themes/ColorModeContext'
import ToggleColorMode from './styles/themes/ToggleColorMode'

function App() {
  const { colorMode, themeName, theme, mode } = ToggleColorMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="false"
          className={`${
            mode === 'dark' ? `dark-${themeName}-BG` : `light-${themeName}-BG`
          }`}
        >
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/pofessional-xp" element={<ProfessionalXP />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/CV" element={<CV />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
