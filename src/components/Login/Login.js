import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../volunteer-network-main/logos/Group 1329.png'
import google from '../../volunteer-network-main/logos/google.png'
import "./Login.css"
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';


firebase.initializeApp(firebaseConfig);

const Login = () => {
    const history = useHistory();
    const location = useLocation()

    let  {from} = location.state || {from: {pathname: "/" }}
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    // console.log(loggedInUser);

    const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider)
      .then((res) =>{
          setLoggedInUser(res.user)
          storeAuthToken()
          history.replace(from);
          
      })
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
        .then(function(idToken) {
            console.log(idToken);
            sessionStorage.setItem('token', idToken);
        }).catch(function(error) {

        })
    }
    return (
        <div className=" login-parent-container">
            <div>
                <div className="login-img-logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div>
                    <div className="form-parent">
                        <div className="form-child">
                            <h3>Login With</h3>
                            <div>
                                <div className="signIn-btn">
                                    <button
                                        onClick={handleGoogleLogin}
                                        type="button"
                                        className="btn btnsingIn btn-secondary" >
                                        <span className="icon">
                                            <img style={
                                                { width: "35px", height: "35px" }}
                                                src={google}
                                                alt="" />
                                        </span>
                                        <span className="signIn-p" >
                                            Continue with Google
                                        </span>
                                    </button>
                                </div>
                                <p className="p">Don't have an accout? <Link to="/login">Create an accout</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;