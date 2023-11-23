// React
import { useState, useEffect } from 'react'
// Redux
import { useSelector } from 'react-redux'
import { modeThemeSelector } from '../../features/modeThemeSlice'
// Data
import useFetch from '../../utils/api/useFetch'
// Toaster
import toast, { Toaster } from 'react-hot-toast'
// MUI
import {
  Box,
  Button,
  Container,
  TextField,
  Autocomplete,
  Typography,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
// Component
import CircularLoader from '../Loader/Loader'
import InputTextField from '../InputTextField/InputTextField'
import AstroCard from '../AstroCard/AstroCard'

export default function Form({ setIsFormShow }) {
  // Theme handel
  const { modeTheme } = useSelector(modeThemeSelector)

  // Fetch data
  const { data, isLoading, error } = useFetch('../data/astrologicalSigns.json')

  // Fecterror handel
  if (error) {
    toast.error('Oups... une erreur est survenue')
  }

  // AutoComplete data list of options
  const signsAstro = []
  for (let i = 0; i < data.length; i++) {
    signsAstro.push(data[i].name)
  }

  // Set const
  const [signAstro, setSignAstro] = useState('')
  const [inputSignAstro, setInputSignAstro] = useState('')
  const [isErrorSignAstro, setIsErrorSignAstro] = useState('')
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  // Astro sign card modal handel
  const [isAstroCardShown, setIsAstroCardShown] = useState(false)

  // User state
  const [userInputFields, setUserInputFields] = useState({
    firstName: '',
    lastName: '',
    signAstro: null,
  })

  // Update user data with names
  const handleChangeInput = (e) => {
    e.preventDefault()
    setUserInputFields({
      ...userInputFields,
      [e.target.name]: e.target.value,
    })
  }
  // Update user data with sign astro
  useEffect(() => {
    if (signAstro !== null) {
      setIsErrorSignAstro(false)
      setUserInputFields({
        ...userInputFields,
        signAstro: signAstro,
      })
    }
    // eslint-disable-next-line
  }, [signAstro])

  // Check form to avoid empty field nd invalid input
  const checkInputTextValues = (inputValues) => {
    let errors = {}
    if (inputValues.firstName.length < 2) {
      errors.firstName = 'Votre prénom doit comporter au min 2 caractères'
    }
    if (inputValues.lastName.length < 2) {
      errors.lastName = 'Votre nom doit comporter au min 2 caractères'
    }
    if (signAstro === '' || null) {
      errors.signAstro = 'Veuillez choisir un signe astrologique'
      setIsErrorSignAstro(true)
    }
    return errors
  }

  // Launch values checking when submitting form
  const handelSubmitClick = (e) => {
    e.preventDefault()
    setErrors(checkInputTextValues(userInputFields))
    setSubmitting(true)
  }

  // Final ckeck if errors
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      validationDatas()
    }
    // eslint-disable-next-line
  }, [errors])

  // Save nd dispatch new created employee
  const validationDatas = () => {
    setIsAstroCardShown(true)
  }

  // Clean when reset button clicked
  // const handleResetClick = () => {
  //   setUserInputFields({
  //     ...userInputFields,
  //     firstName: '',
  //     lastName: '',
  //     signAstro: '',
  //   })
  //   setErrors({})
  //   // setIsErrorSignAstro(false)
  //   setSubmitting(false)
  // }

  return (
    <>
      <Toaster />
      {isLoading ? (
        <CircularLoader />
      ) : (
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {isAstroCardShown ? (
            <AstroCard
              setIsAstroCardShown={setIsAstroCardShown}
              setIsFormShow={setIsFormShow}
              astroData={data}
              userData={userInputFields}
            />
          ) : (
            <Box
              component="form"
              className="border-radial-gradient"
              sx={{
                width: '320px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                px: 2,
                pb: 3,
                backgroundColor: `${
                  modeTheme !== 'dark' ? 'RGBA(255,255,255,0.7)' : null
                }`,
              }}
            >
              <Typography
                className="text-radial-gradient-Text"
                sx={{
                  width: '230px',
                  fontSize: '20px',
                  fontFamily: 'monospace',
                  fontWeight: 900,
                  textAlign: 'center',
                  py: 2,
                }}
              >
                Que dit votre signe astrologique ?
              </Typography>
              <Button
                sx={{
                  p: 0,
                  position: 'absolute',
                  top: 5,
                  right: -6,
                }}
                onClick={() => setIsFormShow(false)}
              >
                <HighlightOffIcon
                  sx={{
                    fontSize: '35px',
                  }}
                />
              </Button>
              <Box
                className="form__input"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 3,
                }}
              >
                <InputTextField
                  isError={errors.firstName}
                  autoFocus={true}
                  id={'firstName'}
                  name={'firstName'}
                  errorName={'firstName'}
                  label={'Prénom'}
                  errorLabel={'Erreur sur le prénom'}
                  errorHelperText={`${errors.firstName}`}
                  value={userInputFields.firstName}
                  onChange={handleChangeInput}
                />
                <InputTextField
                  isError={errors.lastName}
                  autoFocus={false}
                  id={'lastName'}
                  name={'lastName'}
                  errorName={'lastName'}
                  label={'Nom'}
                  errorLabel={'Erreur sur le nom'}
                  errorHelperText={`${errors.lastName}`}
                  value={userInputFields.lastName}
                  onChange={handleChangeInput}
                />
                {isErrorSignAstro ? (
                  <Autocomplete
                    onChange={(event, newValue) => {
                      setSignAstro(newValue)
                    }}
                    inputValue={inputSignAstro}
                    onInputChange={(event, newInputValue) => {
                      setInputSignAstro(newInputValue)
                    }}
                    id="controllable-states-demo"
                    options={signsAstro}
                    sx={{ width: 250 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error
                        label="Signe Astrologique *"
                        helperText={errors.signAstro}
                      />
                    )}
                  />
                ) : (
                  <Autocomplete
                    onChange={(event, newValue) => {
                      setSignAstro(newValue)
                    }}
                    inputValue={inputSignAstro}
                    onInputChange={(event, newInputValue) => {
                      setInputSignAstro(newInputValue)
                    }}
                    id="controllable-states-demo"
                    options={signsAstro}
                    sx={{ width: 250 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Signe Astrologique *" />
                    )}
                  />
                )}
              </Box>
              <Box
                sx={{
                  width: '250px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {/* <Button
                  variant="contained"
                  aria-label="reset form"
                  startIcon={<DeleteIcon />}
                  type="reset"
                  sx={{ mt: 3 }}
                  onClick={(e) => {
                    handleResetClick(e)
                  }}
                >
                  Reset
                </Button> */}
                <Button
                  variant="contained"
                  aria-label="submit form"
                  type="submit"
                  endIcon={<SendIcon />}
                  sx={{ mt: 3 }}
                  onClick={(e) => handelSubmitClick(e)}
                >
                  Send
                </Button>
              </Box>
            </Box>
          )}
        </Container>
      )}
    </>
  )
}
