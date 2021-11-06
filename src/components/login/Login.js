import React from 'react';

const Login = () => {
    return (
        <div className='login-wrapper'>
            <div className='form-container'>
                <h2 className='form-title'>Sign In</h2>
                <form className='login-form'>
                    <div className='form-control'>
                        <label for='email'>Email</label>
                        <input type='text' id='email' placeholder='Enter email' />
                        <small>Error message</small>
                        <span>Email not found</span>
                    </div>
                    <div className='form-control'>
                        <label for='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            placeholder='Enter password'
                        />
                        <small>Error message</small>
                        <span>Wrong password</span>
                    </div>
                    <button type='submit'>Submit</button>
                    <a href='./pages/signUp.html'>Don't have an account?</a>
                </form>
            </div>
        </div>
    );
};

export default Login;
