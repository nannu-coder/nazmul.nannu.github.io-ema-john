import React from 'react';
import { NavLink } from 'react-router-dom';
import './signup.css'

const SignUp = () => {
    return (
        <div className='signup'>
            <div>
                <h2>Create an Account</h2>
                <form onSubmit=''>
                    <input type='email' alt='email' placeholder='Email'></input>
                    <br />
                    <input type='password' alt='password' placeholder='password'></input>
                    <br />
                    <input type='password' alt='password' placeholder='Confirm Password'></input>
                    <br />
                    <input type='submit'></input>
                </form>
                <div>---------------or------------------</div>
                <p>Already Have an Account? <NavLink to='/login'>Sign In</NavLink></p>
            </div>
        </div>
    );
};

export default SignUp;