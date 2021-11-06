import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationContext from '../../context/navigation/navigationContext';
import AppContext from '../../context/appcontext/formsContext';

const Login = () => {
    const appContext = useContext(AppContext);
    const naviagtionContext = useContext(NavigationContext);
    const { setCurrentPage } = naviagtionContext;
    const { login, logedIn, errors } = appContext;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const setLogin = () => {
        login(email, password);
        appContext.errors !== null ? setCurrentPage('AT_FORMS') : showErrors();
    };

    const showErrors = () => {
        const error = document.getElementById('error');
        error.clasList.add('show');
        setTimeout(() => error.classList.remove('show'), 5000);
    };

    const onEmailChange = (e) => setEmail(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);

    return (
        <div className='login-wrapper'>
            <div className='form-container'>
                <h2 className='form-title'>Sign In</h2>
                <form className='login-form'>
                    <div className='form-control'>
                        <label>Email</label>
                        <input
                            value={email}
                            onChange={onEmailChange}
                            type='text'
                            id='email'
                            placeholder='Enter email'
                        />
                    </div>
                    <div className='form-control'>
                        <label>Password</label>
                        <input
                            value={password}
                            onChange={onPasswordChange}
                            type='password'
                            id='password'
                            placeholder='Enter password'
                        />
                        <small id='error'>Invalid credentials</small>
                    </div>
                    <Link onClick={setLogin}>
                        <button type='submit'>Submit</button>
                    </Link>

                    <Link to='/signup'>Don't have an account?</Link>
                </form>
            </div>
        </div>
    );
};

// to={logedIn ? '/forms' : '/'}

export default Login;
