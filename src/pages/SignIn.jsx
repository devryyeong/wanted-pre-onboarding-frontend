import React from 'react';
import { MainContainer } from "../utils/globalStyle";
import { useNavigate } from "react-router";
import SignInForm from "../components/SignInForm/SignInForm";

function SignIn() {
  return (
    <MainContainer>
      <SignInForm />
    </MainContainer>
  )
}

export default SignIn;