import React, { useContext, useRef } from 'react';
import { UserContext } from '../../App'
import { useHistory, useLocation } from 'react-router';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import { createUserWithEmailandPassword, handleGoogleSignIn, initializeLogInFramework } from '../LoginManager/LoginManager';
import { useForm } from 'react-hook-form';
import './Register.css';

const Register = () => {
    initializeLogInFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, errors, watch } = useForm();
    const onSubmit = data => {
        const {username, email, password} = data;
        console.log(username, email,password);
        console.log("Registering");
        createUserWithEmailandPassword(username, email,password)
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

    const handleLogin = () => {
        history.push('/login')
    };

    const password = useRef({});
    password.current = watch("password", "");

    return (
        <div className="login-body">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Register</h2>
                <div className="input">
                    <div className="inputBox">
                        <input type="text" name="username" placeholder="Name/Username" ref={register({ required: true })} />
                        {errors.username && <span className="error">Name is required!</span>}
                    </div>
                    <div className="inputBox">
                        <input type="text" name="email" placeholder="Email" ref={register({ required: "Email is required!",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid Email Address"
                            }
                        
                        })} />
                        {errors.email && <span className="error">{errors.email.message}</span>}
                    </div>
                    <div className="inputBox">
                        <input type="password" name="password" placeholder="Password" ref={register({
                            required: "You must specify a password", minLength: {
                                value: 6,
                                message: "Password must have at least 6 Charatcters"
                            }, pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/gm,
                                message: "Password Must have at least one number and one letter"
                            }, maxLength: {
                                value: 15,
                                message: "You Passsword seems Bigger!"
                            } 
                        })} />
                        {errors.password && <span className="error">{errors.password.message}</span>}
                    </div>
                    <div className="inputBox">
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" ref={register({
                            validate: value =>
                                value === password.current || "The passwords do not match"
                        })} />
                        {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}
                    </div>
                    <div className="inputBox">
                        <input type="submit" />
                    </div>


                    <div className="register">
                        <p>Already have an account? <span onClick={handleLogin} style={{ fontWeight: 'bold', cursor: 'pointer' }}>Login</span></p>
                    </div>
                    <GoogleSignIn googleSignIn={googleSignIn}></GoogleSignIn>

                </div>
            </form>
        </div>
    );
};

export default Register;