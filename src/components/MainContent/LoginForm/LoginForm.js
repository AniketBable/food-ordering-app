import React, { useEffect, useReducer, useState, useContext } from "react";

import InputFeild from "../../UI/InputFeild";
import CenterCard from "../../UI/CenterCard";
import Button from "../../UI/Button";

import "./LoginForm.css";
import AuthContext from "../../../store/AuthContext";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    let temp = action.val;
    let flag = temp.includes("@");
    return { value: action.val, isValid: flag };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT")
    return { value: action.val, isValid: action.val.length !== 0 };
  return { value: "", isValid: false };
};

const LoginForm = (props) => {
  const authCtx = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const onChangeEmailValidate = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const onChangePasswordValidate = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };
  const { value: emailVal, isValid: emailIsValid } = emailState;
  const { value: passwordVal, isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const delay = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
      console.log("Validating!!");
    }, 500);
    return () => {
      console.log("CLEAN UP!!");
      clearTimeout(delay);
    };
  }, [emailIsValid, passwordIsValid]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    if (formIsValid) {
     const validCred = authCtx.onLogin(emailVal, passwordVal);
     if(!validCred) {
      dispatchEmail({ type: "USER_INPUT", val: '' });
      dispatchPassword({type: "USER_INPUT", val: ''});
      alert('Invalid Credentials')
     }
    }
  };

  return (
    
      <CenterCard className="login-container">
        <div className="form-header">
          <h1>Login Form</h1>
        </div>
        <div className="form-container">
          <form onSubmit={formSubmitHandler}>
            <div className="form-control">
              <InputFeild
                type="email"
                value={emailState.value}
                onChangeHandler={onChangeEmailValidate}
                placeholder="Enter Email"
              />
            </div>
            <div className="form-control">
              <InputFeild
                type="password"
                value={passwordState.value}
                onChangeHandler={onChangePasswordValidate}
                placeholder="Enter Password"
              />
            </div>
            <div>
              <div className="form-control">
                <Button type="submit" placeholder="Login" />
              </div>
            </div>
          </form>
        </div>
      </CenterCard>
    
  );
};

export default LoginForm;
