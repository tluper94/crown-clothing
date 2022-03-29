import { useState } from "react"

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    emailPasswordSignIn
} from '../../utils/firebase/firebase.utils';

import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"

import './sign-in-form.styles.scss'


const defaultFormFields = {
    email: "",
    password: ""
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields

    const restFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await emailPasswordSignIn(email, password)
            restFormFields()
        } catch (err) {
            switch (err.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email')
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(err)
            }
        }
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type='text'
                    required
                    name="email"
                    onChange={handleChange}
                    value={email}
                />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    name="password"
                    onChange={handleChange}
                    value={password}
                />
                <div className="buttons-container">
                    <Button type="submit" >Sign In</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle} >google sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;