// React
import { useEffect, useState } from 'react'
import { iconBkSoftSkillPix } from '../../utils/data/profileContent'
// MUI
import { Box } from '@mui/material'

export default function AutoplayFadeInCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [pause, setPause] = useState(false)
  const totalSlides = iconBkSoftSkillPix.length

  const slideAction = (direction) => {
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
        slideAction('up')
      } else {
        clearInterval(interval)
      }
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <Box
      sx={{
        width: '100px',
        height: '100px',
        mx: 'auto',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOver}
    >
      {iconBkSoftSkillPix.map((icon, idx) => (
        <img
          key={idx}
          src={icon}
          alt="Home icon carousel"
          className={`home__carousel--icon ${
            currentIndex === idx ? 'visible' : 'hide'
          }`}
        />
      ))}
      {/* </Box> */}
    </Box>
  )
}
