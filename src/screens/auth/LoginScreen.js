import React from "react";
import { useDispatch } from "react-redux";
import {loginGoogle, startLoginEmailPassword } from '../../actions/auth';
import validator from 'validator';
import { useForm } from "../../hooks/useForm";
import GoogleLogin from "react-google-login";


export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: 'daanii2013@gmail.com',
    password: '123'                                             
  });

  const {email, password} = formValues;

  const handleLogin = (e)=>{
    e.preventDefault();
    // console.log(formValues);
    dispatch(startLoginEmailPassword(email, password));
    
    // if(isFormValid()){
    //   console.log('Formulario correcto!');
    // } 
  }

  const isFormValid = ()=>{

    if(email.trim().length === 0 ){
      console.log('Name is riquired');
      return false;
    }else if (!validator.isEmail(email)){
      console.log('email es no correct')
    }
    return true;
  }

  const responseGoogle = (response) => {
    const {id_token} = response.getAuthResponse();
    console.log(id_token);
    dispatch(loginGoogle(id_token));
  }

  return (
    <div className="section login">
      <div className="db-grid login__container">
        <div className="login__bg-primary">
          <h1 className="login__title">Log in</h1>
          <p className="login-p">
            Sign in to your existing account to continue
          </p>
          <img src="assets/img/signin-img.svg" alt="" />
        </div>
        <div className="login__bg-secundary">
          <form onSubmit={handleLogin}>

            <div className="input">
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" value={email} onChange={handleInputChange}></input>
            </div>
            <div className="input">
              <label>Password</label>
              <input type="password" name="password" placeholder="Password" value={password} onChange={handleInputChange}></input>
            </div>
            <div className="login__submite">
              <div className="input__checkbox">
                <input type="checkbox"></input>
                <label>Remember me next time</label>
              </div>
              <button type="submit" className=" button__login button ">Log In</button>
              {/* <p>Don't have any account yet? <a href="#">Create an account</a></p> */}
              <div className="">
                < GoogleLogin 
                  clientId = {process.env.REACT_APP_CLIENT_ID} 
                  // clientId = "387697216987-83von8lcq3gachr35mbj36t15gbv5jll.apps.googleusercontent.com" 
                  buttonText = "Ingresar con Gmail" 
                  onSuccess = { responseGoogle } 
                  onFailure = { responseGoogle } 
                  // CookiePolicy = { 'single_host_origin' } 
                / >
              </div>
            </div>
          
          </form>
        </div>
      </div>
    </div>

  );
};
