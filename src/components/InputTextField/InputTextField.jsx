// Mui conponenets
import { TextField } from '@mui/material'

export default function InputTextField(props) {
  const {
    isError,
    autoFocus,
    id,
    label,
    name,
    helperText,
    inputRef,
    onChange,
    value,
    type,
    errorUserId,
    errorName,
    errorLabel,
    errorHelperText,
  } = props

  return (
    <>
      {isError ? (
        <TextField
          error
          // fullWidth
          required
          id={errorUserId}
          name={errorName}
          label={errorLabel}
          helperText={errorHelperText}
          inputRef={inputRef}
          onChange={onChange}
          value={value}
          sx={{ width: '250px' }}
        />
      ) : (
        <TextField
          // fullWidth
          autoFocus={autoFocus}
          required
          id={id}
          label={label}
          name={name}
          variant="outlined"
          type={type}
          helperText={helperText}
          inputRef={inputRef}
          onChange={onChange}
          value={value}
          sx={{ width: '250px' }}
        />
      )}
    </>
  )
}
