// React
import { useEffect, useState } from 'react'
import { iconBkSoftSkillPix } from '../../utils/data/profileContent'
// MUI
import { Box } from '@mui/material'
// MUI
import Image from 'mui-image'

export default function AutoplayCarousel() {
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
    }, 2000)
    return () => clearInterval(interval)
  })

  return (
    /////////////////////////
    <Box
      // className="slideshow"
      sx={{
        width: '100px',
        height: '100px',
        mx: 'auto',
        overflow: 'hidden',
        // whiteSpace: 'nowrap',
      }}
    >
      <Box
        // className="slideshowSlider"
        sx={{
          whiteSpace: 'nowrap',
          // transition: 'ease 1000ms',
          // transform: `translate3d(${-currentIndex * 100}%, 0, 0)`,
        }}
        style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOver}
      >
        {iconBkSoftSkillPix.map((icon, index) => (
          <img className="slide" key={index} src={icon} alt="icon" />
        ))}
      </Box>
    </Box>
    /////////////////////////////////
    // <div className="slideshow">
    //   <div
    //     className="slideshowSlider"
    //     style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
    //   >
    //     {iconBkSoftSkillPix.map((icon, index) => (
    //       <img className="slide" key={index} src={icon} alt="icon" />
    //     ))}
    //   </div>

    //   {/* <div className="slideshowDots">
    //     {iconBkSoftSkillPix.map((_, idx) => (
    //       <div
    //         key={idx}
    //         className={`slideshowDot${index === idx ? ' active' : ''}`}
    //         onClick={() => {
    //           setIndex(idx)
    //         }}
    //       ></div>
    //     ))}
    //   </div> */}
    // </div>
  )
}
