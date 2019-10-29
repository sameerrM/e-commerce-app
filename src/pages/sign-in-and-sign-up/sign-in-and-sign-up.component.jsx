import React from 'react'
import SigIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

import './sign-in-and-sign-up.styles.scss'

const SignInSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SigIn />
            <SignUp />
        </div>
    )
}

export default SignInSignUp;