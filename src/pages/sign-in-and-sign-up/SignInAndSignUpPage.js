import React from "react";
import "./sign-in-and-sign-up.scss";
import SignIn from "../../components/sign-in";
import SignUp from "../../components/sign-up";
const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
