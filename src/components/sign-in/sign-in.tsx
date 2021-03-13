import React, { SetStateAction, useState } from 'react'
import { signInWithGoogle } from '../../firebase'
import { BTN_SUBMIT, FORM_TYPE } from '../../config/constants'
import CustomButton from '../custom-button'
import FormInput from '../form-input'

import './sign-in.styles.scss'

interface IHandleChange {
    target: {
        value: string,
        name: string
    }
}

const initialState: SetStateAction<any> = {
    email: '',
    password: ''
}

const SignIn = () => {
    const [styles, setStyles] = useState('')
    const [values, setValues] = useState(initialState)

    const handleChange: React.ChangeEventHandler<any> = ({ target: { value, name } }: IHandleChange) => {   
        setValues({ ...values, [name]: value });
    }

    const handleSubmit = (e: { preventDefault: Function }) => {
        e.preventDefault()

        setValues(initialState)
    }

    return (
        <>
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={ handleSubmit }>
                    <FormInput
                        name={ FORM_TYPE.EMAIL }
                        type={ FORM_TYPE.EMAIL }
                        handleChange={ handleChange }
                        value={ values.email }
                        label={ FORM_TYPE.EMAIL }
                        required
                    />
                    <FormInput
                        name={ FORM_TYPE.PASSWORD }
                        type={ FORM_TYPE.PASSWORD }
                        value={ values.password }
                        handleChange={ handleChange }
                        label={ FORM_TYPE.PASSWORD }
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type={ BTN_SUBMIT }>
                            Sign in
                        </CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
            <img
                className='background-right-img'
                src='https://i.ibb.co/px2tCc3/jackets.png'
                alt='background-right-wooman'
            />
        </>
    )
}

export default SignIn
