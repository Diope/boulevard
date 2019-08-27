import React, {Component} from 'react';
import './SignIn.scss';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button'

class SignIn extends Component {
    state = { 
        email: '',
        password: '' 
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({email: '', password: ''})
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

                    <FormInput name="password" value={this.state.password} handleChange={this.handleChange} required label="password"/>

                    <Button type="submit">Sign In</Button>
                </form>
            </div>
        );
    }
}
 
export default SignIn;