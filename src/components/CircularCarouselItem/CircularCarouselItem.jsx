// MUI
import { Box } from '@mui/material'

export default function CircularCarouselItem(data) {
  const array4SkillWhitePix = data?.data
  return (
    <>
      {array4SkillWhitePix.map((array, idx) => (
        <Box
          key={`squareXL-${idx}`}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            display={{ xs: 'none', md: 'flex' }}
            className={`carousel__squareXL${idx}`}
            sx={{
              position: 'absolute',
            }}
          >
            <ul className="square__listXL">
              {array.map((icon, idx) => (
                <li className="square__listXL--item" key={`iconXL-${icon.id}`}>
                  <Box
                    className={`square${idx}__icon-${idx}`}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      backgroundColor: 'black',
                    }}
                  >
                    <img
                      className={`square${idx}__img-${idx}`}
                      src={icon.name}
                      alt="icone carousel homepage"
                    />
                  </Box>
                </li>
              ))}
            </ul>
          </Box>
          <Box
            display={{ xs: 'flex', md: 'none' }}
            key={`squareXS-${idx}`}
            className={`carousel__squareXS${idx}`}
            sx={{
              position: 'absolute',
            }}
          >
            <ul className="square__listXS">
              {array.map((icon, idx) => (
                <li className="square__listXS--item" key={`iconXS-${icon.id}`}>
                  <Box
                    className={`square${idx}__icon-${idx}`}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      backgroundColor: 'black',
                    }}
                  >
                    <img
                      className={`square${idx}__img-${idx}`}
                      src={icon.name}
                      alt="icone carousel homepage"
                    />
                  </Box>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      ))}
    </>
  )
}
