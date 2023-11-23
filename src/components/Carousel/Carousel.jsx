// React
import { useState, useEffect } from 'react'
// MUI
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import { Box, Container, IconButton } from '@mui/material'

export default function Carousel(data) {
  const projectCards = data?.data
  const [pause, setPause] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = projectCards.length

  const onArrowClick = (direction) => {
    const increment = direction === 'up' ? -1 : 1
    const newIndex = (currentIndex + increment + totalSlides) % totalSlides
    setCurrentIndex(newIndex)
  }

  const handleMouseOver = () => {
    setPause(!pause)
  }

  useEffect(() => {
    let interval = setInterval(() => {
      if (!pause) {
        onArrowClick('up')
      } else {
        clearInterval(interval)
      }
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <Container
      sx={{
        height: '445px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // overflow: 'auto',
        }}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOver}
      >
        <IconButton
          className="project__btn"
          sx={{ width: '50px', height: '50px' }}
          aria-label="Projet précédent"
          onClick={() => onArrowClick('up')}
        >
          <KeyboardDoubleArrowUpIcon sx={{ fontSize: '50px' }} />
        </IconButton>
        <Box className="project__card">{projectCards[currentIndex]}</Box>
        <IconButton
          className="project__btn"
          sx={{ width: '50px', height: '50px' }}
          aria-label="Projet suivant"
          onClick={() => onArrowClick('down')}
        >
          <KeyboardDoubleArrowDownIcon sx={{ fontSize: '50px' }} />
        </IconButton>
      </Box>
    </Container>
  )
}
