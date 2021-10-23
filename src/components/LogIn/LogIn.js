import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import { useLocation } from 'react-router';
import './login.css'

const LogIn = () => {
    const { user, signInWithGoogle } = useAuth();
    const location = useLocation();
    console.log(location)
    return (
        <div className='login'>
            <div>
                <h2>Please Login</h2>
                <form onSubmit=''>
                    <input type='email' alt='email'></input>
                    <br />
                    <input type='password' alt='password'></input>
                    <br />
                    <input type='submit'></input>
                </form>
                <div>----------or----------</div>
                <button className='btn-regular' onClick={signInWithGoogle}>Google Sign In</button>
                <p>New in Ema-john</p>
                <NavLink to='/signup'>Create a Accout</NavLink>
            </div>
        </div>
    );
};

export default LogIn;