import React from 'react';

const Signup = () => {
    return (
        <div className='login-wrapper'>
            <div className='form-container'>
                <h2 className='form-title'>Create Account</h2>
                <form className='login-form'>
                    <div className='form-control'>
                        <label for='email'>Email</label>
                        <input type='text' id='email' placeholder='Enter email' />
                        <small>Error message</small>
                    </div>
                    <div className='form-control'>
                        <label for='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            placeholder='Enter password'
                        />
                        <small>Error message</small>
                    </div>
                    <div className='form-control'>
                        <label for='password2'>Confirm Password</label>
                        <input
                            type='password'
                            id='password2'
                            placeholder='Enter password again'
                        />
                        <small>Error message</small>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
