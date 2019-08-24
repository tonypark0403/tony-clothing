import React from "react";
import SignIn from "../../components/sign-in/sign-in.container";
import SignUp from "../../components/sign-up/sign-up.container";
import "./sign-in-and-sign-up.scss";
const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
