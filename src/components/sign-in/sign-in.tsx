import React, { SetStateAction, useState } from 'react'
import { auth, session, signInWithGoogle } from '@firebaseDir'
import { BTN_SUBMIT, FORM_TYPE, LINKS_TEXT } from '@config/constants'
import CustomButton from '../custom-button'
import FormInput from '../form-input'

import './sign-in.styles.scss'
import { useHistory } from 'react-router'
interface IHandleChange {
  target: {
    value: string
    name: string
  }
}

const initialState: SetStateAction<any> = {
  email: '',
  password: '',
  success: false,
  error: '',
}

const SignIn = () => {
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState(initialState)
  const history = useHistory()

  const handleChange: React.ChangeEventHandler<any> = ({
    target: { value, name },
  }: IHandleChange) => {
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async (e: { preventDefault: Function }) => {
    e.preventDefault()
    setLoading(true)
    try {
      await auth.setPersistence(session)
      await auth.signInWithEmailAndPassword(values.email, values.password)
      history.push('/')
    } catch (err) {
      console.log(err.message)
    }
    setLoading(false)
    setValues(initialState)
  }

  return (
    <>
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name={FORM_TYPE.EMAIL}
            type={FORM_TYPE.EMAIL}
            handleChange={handleChange}
            value={values.email}
            label={FORM_TYPE.EMAIL}
            required
          />
          <FormInput
            name={FORM_TYPE.PASSWORD}
            type={FORM_TYPE.PASSWORD}
            value={values.password}
            handleChange={handleChange}
            label={FORM_TYPE.PASSWORD}
            required
          />
          <div className="buttons">
            <CustomButton type={BTN_SUBMIT}>{LINKS_TEXT.SIGN_IN}</CustomButton>
            {loading && <span>Загрузка...</span>}
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
      <img
        className="background-right-img"
        src="https://i.ibb.co/px2tCc3/jackets.png"
        alt="background-right-wooman"
      />
    </>
  )
}

export default SignIn
