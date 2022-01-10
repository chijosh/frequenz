import { useState, useEffect } from 'react'
import IconError from '../IconError'

import FormGroup from '@material-ui/core/FormGroup'
import { TextField, InputAdornment } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '../Button'
import InputLabel from '@material-ui/core/InputLabel'
import CircularProgress from '@material-ui/core/CircularProgress'

import './Form.scss'
import GoggleIcon from '../../assets/images/Google.png'

function Form() {
  const [state, setState] = useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: false,
    isValidPassword: false,
    isLoading: false,
    errorLogEmail: false,
    errorLogPassword: false
  })

  useEffect(() => {
    if (state.isLoading === false) return null
    let timer1 = setTimeout(() => {
      setState({ ...state, isLoading: false })
    }, 3000)
    return () => {
      clearTimeout(timer1)
    }
  }, [state.isLoading])

  const textInputChange = (val) => {
    setState({
      ...state,
      username: val,
      check_textInputChange: true
    })
  }

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setState({
        ...state,
        password: val,
        isValidPassword: true
      })
    } else {
      setState({
        ...state,
        password: val,
        isValidPassword: false,
        errorLogPassword: {
          errorMessage: 'Password must be 8 characters long.'
        }
      })
    }
  }

  const updateSecureTextEntry = () => {
    setState({
      ...state,
      secureTextEntry: !state.secureTextEntry
    })
  }

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      if (validateEmail(val)) {
        setState({
          ...state,
          isValidUser: true
        })
      } else {
        setState({
          ...state,
          isValidUser: false,
          errorLogEmail: { errorMessage: 'Email must be a valid email' }
        })
      }
    } else {
      setState({
        ...state,
        isValidUser: false,
        errorLogEmail: { errorMessage: 'Password must be 8 characters long.' }
      })
    }
  }

  const validateEmail = (email) =>
    email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )

  return (
    <FormGroup className="form">
      <Grid className="form-header">
        <span className="form-header__span">Login to your account</span>
      </Grid>
      <Grid className="form-body">
        <InputLabel className="form-body__label" htmlFor="email">
          Email
        </InputLabel>
        <TextField
          className="form-body__input"
          id="email"
          variant="outlined"
          placeholder="name@email.com"
          required
          onChange={(evnt) => textInputChange(evnt.target.value)}
          onBlur={(evnt) => handleValidUser(evnt.target.value)}
        />
        {!state.isValidUser && state.errorLogEmail ? (
          <IconError text={state.errorLogEmail.errorMessage} />
        ) : null}
        <InputLabel className="form-body__label" htmlFor="password">
          Password
        </InputLabel>
        <TextField
          className="form-body__input"
          id="password"
          variant="outlined"
          type={state.secureTextEntry ? 'password' : 'text'}
          required
          placeholder="••••••••"
          onChange={(evnt) =>
            setState({
              ...state,
              password: evnt.target.value
            })
          }
          onBlur={(evnt) => handlePasswordChange(state.password)}
          InputProps={{
            endAdornment: (
              <InputAdornment className="form-body__input-icon" position="end">
                {state.secureTextEntry ? (
                  <IconButton onClick={updateSecureTextEntry}>
                    <Visibility />
                  </IconButton>
                ) : (
                  <IconButton onClick={updateSecureTextEntry}>
                    <VisibilityOff />
                  </IconButton>
                )}
              </InputAdornment>
            )
          }}
        />
        <span>
          {!state.isValidPassword && state.errorLogPassword ? (
            <IconError text={state.errorLogPassword.errorMessage} />
          ) : null}
        </span>
        <Grid className="form-actions">
          <Button
            variant={
              !state.isValidPassword || !state.isValidUser
                ? 'disabled-ternary'
                : 'ternary'
            }
            text={!state.isLoading ? 'Login' : null}
            onClick={() => {
              setState({ ...state, isLoading: true })
            }}
            icon={
              state.isLoading ? (
                <CircularProgress size={16} className="form-button__circular" />
              ) : null
            }
          />
          <span className="form-actions__span">OR</span>
          <Button
            variant={'primary-hollow'}
            text={'Login with Google'}
            onClick={() => {
              setState({})
            }}
            icon={
              <img
                src={GoggleIcon}
                className="form-button__socials"
                alt="google-logo"
              />
            }
          />
        </Grid>
      </Grid>
    </FormGroup>
  )
}

export default Form
