import React, { SetStateAction, useState } from 'react'
import { auth, createUserProfileDocument } from '../../firebase'
import { FORM_TYPE, LINKS_TEXT } from '../../config/constants'
import CustomButton from '../custom-button'
import FormInput from '../form-input'

import './sign-up.styles.scss'

interface IHandleChange {
    target: {
        value: string,
        name: string
    }
}

const initialState: SetStateAction<any> = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState(initialState)

    const handleChange: React.ChangeEventHandler<any> = ({ target: { value, name } }: IHandleChange) => {   
        setValues({ ...values, [name]: value });
    }

    const handleSubmit = async (e: { preventDefault: Function }) => {
        e.preventDefault()
        const { displayName, password, confirmPassword } = values
        
        if (password !== confirmPassword) {
            return alert('Password don\'t match !')
        }
        
        setLoading(true)
        try {
            const { user } = await
            auth.createUserWithEmailAndPassword(
                values.email,
                values.password
            )
        
            await createUserProfileDocument(user, { displayName })

            setValues(initialState)
        } catch (e) {
            console.log('Error, user are not created ', e.message)
        }
        setLoading(false)
    }

    return (
        <>
            { loading && (
                <span>Загрузка...</span>
            ) }
            <div className='sign-in'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={ handleSubmit }>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={ values.displayName }
                        handleChange={ handleChange }
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type={ FORM_TYPE.EMAIL }
                        name={ FORM_TYPE.EMAIL }
                        value={ values.email }
                        handleChange={ handleChange }
                        label='Email'
                        required
                    />
                    <FormInput
                        type={ FORM_TYPE.PASSWORD }
                        name={ FORM_TYPE.PASSWORD }
                        value={ values.password }
                        handleChange={ handleChange }
                        label={ FORM_TYPE.PASSWORD.charAt(0).toUpperCase() + FORM_TYPE.PASSWORD.slice(1) }
                        required
                    />
                    <FormInput
                        type={ FORM_TYPE.PASSWORD }
                        name='confirmPassword'
                        value={ values.confirmPassword }
                        handleChange={ handleChange }
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>
                        { LINKS_TEXT.SIGN_UP }
                    </CustomButton>
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

export default SignUp
