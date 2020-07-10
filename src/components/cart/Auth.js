import React, {useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../redux/userReducer';

const Auth = props => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [toggle, setToggle] = useState(true);

    const login = () => {
        axios.post('/auth/login', {email: emailInput, password: passwordInput})
        .then(res => {
            props.getUser(res.data)
            props.history.push('/cart')
        })
        .catch(() => window.alert('Incorrect email or password'));
    }

    const register = () => {
        axios.post('/auth/register', {email: emailInput, password: passwordInput})
        .then(res => {
            props.getUser(res.data)
            props.history.push('/cart')
        })
        .catch(() => window.alert('User already exists'));
    }

    return (
        <main className='auth-main'>

        <section className='auth-box-border'>

            <div className='auth-box'>
            {
                toggle
                ?
                <section>
                    <div className='flex-login-register'>
                        <div className='login-register-true' onClick={() => setToggle(true)}>Login</div>
                        <div className='login-register-false' onClick={() => setToggle(false)}>Register</div>
                    </div>
                    <div className='flex-auth-form-true'>
                        <input className='auth-inputs' placeholder='Email' type='text'
                            value={emailInput} onChange={e => setEmailInput(e.target.value)}
                        />
                        <input className='auth-inputs' placeholder='Password' type='password'
                            value={passwordInput} onChange={e => setPasswordInput(e.target.value)}
                        />
                        <div className='auth-button' onClick={() => login()}>Sign in</div>
                    </div>
                </section>
                :
                <section>
                    <div className='flex-login-register'>
                        <div className='login-register-false' onClick={() => setToggle(true)}>Login</div>
                        <div className='login-register-true' onClick={() => setToggle(false)}>Register</div>
                    </div>
                    <div className='flex-auth-form-false'>
                        <input className='auth-inputs' placeholder='Email' type='text'
                            value={emailInput} onChange={e => setEmailInput(e.target.value)}
                        />
                        <input className='auth-inputs' placeholder='Password' type='password'
                            value={passwordInput} onChange={e => setPasswordInput(e.target.value)}
                        />
                        <div className='auth-button' onClick={() => register()}>Sign up</div>
                    </div>
                </section>
            }
            </div>

        </section>

        </main>
    )
}

export default connect(null, {getUser})(Auth);