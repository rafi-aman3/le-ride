
import React, { useContext } from 'react';
import { UserContext } from '../../App'
import { useHistory, useLocation } from 'react-router';

import './Login.css'
import { handleGoogleSignIn, initializeLogInFramework, signInWithEmailAndPassword } from '../LoginManager/LoginManager';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import { useForm } from 'react-hook-form';





const Login = () => {
    initializeLogInFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const {email, password} = data;
        console.log(email, password);
        console.log("Signing in ");
        signInWithEmailAndPassword(email, password)
            .then(res => {
                setLoggedInUser(res);
                history.replace(from);
            });
    };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setLoggedInUser(res);
                history.replace(from);
            });
    };

    const handleCreate = () => {
        history.push('/register')
    }

    return (
        <div className="login-body">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h2>login</h2>
                <div className="input">
                    <div className="inputBox">
                        <input type="text" name="email" placeholder="Email" ref={register({
                            required: "Email is required!",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid Email/Password"
                            }
                        })} />
                        {errors.email && <span className="error">{errors.email.message}</span>}
                    </div>
                    <div className="inputBox">
                        <input type="password" name="password" placeholder="Password" ref={register({
                            required: "You must specify a password", minLength: {
                                value: 6,
                                message: "Invalid Email/Password"
                            }, maxLength: {
                                value: 15,
                                message: "Invalid Email/Password"
                            } 
                        })} />
                        {errors.password && <span className="error">{errors.password.message}</span>}
                    </div>
                    <div className="inputBox">
                        <input type="submit" />
                    </div>
                    <div className="login-last">
                        <div className="remember">
                            <input type="checkbox" name="remember" id="" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <p className="forget">Forget Password?</p>
                    </div>

                    <div className="register">
                        <p>Don't have an account? <span onClick={handleCreate} style={{ fontWeight: 'bold', cursor: 'pointer' }}> Create an Account </span></p>
                    </div>
                    <GoogleSignIn googleSignIn={googleSignIn} ></GoogleSignIn>



                </div>
            </form>




        </div>
    );
};

export default Login;