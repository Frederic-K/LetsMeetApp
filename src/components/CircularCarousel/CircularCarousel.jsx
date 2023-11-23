import { Box } from '@mui/material'
import { iconsCircularCarouselWhitePix } from '../../utils/data/skillCircularCarousel'
import CircularCarouselItem from '../CircularCarouselItem/CircularCarouselItem'

export default function CircularCarousel() {
  const array4SkillWhitePix0 = []
  for (let index = 0; index < 4; index++) {
    array4SkillWhitePix0.push(iconsCircularCarouselWhitePix[index])
  }

  const array4SkillWhitePix1 = []
  for (let index = 4; index < 8; index++) {
    array4SkillWhitePix1.push(iconsCircularCarouselWhitePix[index])
  }

  const array4SkillWhitePix2 = []
  for (let index = 8; index < 12; index++) {
    array4SkillWhitePix2.push(iconsCircularCarouselWhitePix[index])
  }

  const array4SkillWhitePix3 = []
  for (let index = 12; index < 16; index++) {
    array4SkillWhitePix3.push(iconsCircularCarouselWhitePix[index])
  }

  const squareOfSkillWhitePix = [
    array4SkillWhitePix0,
    array4SkillWhitePix1,
    array4SkillWhitePix2,
    array4SkillWhitePix3,
  ]

  return (
    <>
      <Box
        className="circularCarousel"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
        }}
      >
        <CircularCarouselItem data={squareOfSkillWhitePix} />
      </Box>
    </>
  )
}
