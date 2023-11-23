// React
import { useState, useEffect } from 'react'
// Data
import { iconWhiteSoftSkillPix } from '../../utils/data/profileContent'
// Asset
import profileCardBanner from '../../assets/Background/wallpaperflare.com_wallpaper-11-banner.jpg'
// MUI
import { Box } from '@mui/material'
// MUI Image
import Image from 'mui-image'

export default function Slider() {
  const [pause, setPause] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = iconWhiteSoftSkillPix.length

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
    }, 2000)
    return () => clearInterval(interval)
  })

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${profileCardBanner})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
      }}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOver}
    >
      <Image
        src={iconWhiteSoftSkillPix[currentIndex]}
        width="50px"
        height="50px"
        fit="cover"
      />
    </Box>
  )
}
