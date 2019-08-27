import React, {Component} from 'react';
import './SignIn.scss';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button'

import {signInWithGoogle, auth} from '../../Firebase/FirebaseConfig'

class SignIn extends Component {
    state = { 
        email: '',
        password: '' 
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        } catch (error) {
            console.log(error)
        }

    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    render() { 
        return ( 
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" value={this.state.email} handleChange={this.handleChange} required label="email" />

                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} required label="password"/>

                    <div className="buttons">
                        <Button type="submit">Sign In</Button>
                        <Button onClick={signInWithGoogle} isGoogle>{''}Sign in with Google{''}</Button>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SignIn;