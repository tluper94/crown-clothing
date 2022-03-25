import { async } from "@firebase/util"
import { useState } from "react"

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils"

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields)

    const restFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName })
            restFormFields()
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('Email already in use')
            } else {
                console.log('User creation encountered a error', err)

            }
        }




    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })

    }
    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type='text' required name="displayName" onChange={handleChange} value={displayName} />

                <label>Email</label>
                <input type="email" required name="email" onChange={handleChange} value={email} />

                <label>Password</label>
                <input type='password' required name="password" onChange={handleChange} value={password} />

                <label>Confirm Password</label>
                <input type='password' required name="confirmPassword" onChange={handleChange} value={confirmPassword} />
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignUp