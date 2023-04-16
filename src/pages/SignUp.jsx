import React, { useEffect } from "react";
import { MainContainer } from '../utils/globalStyle';
import { useNavigate } from "react-router";
import SignUpForm from "../components/SignUpForm/SignUpForm";

function SignUp() {
  // const navigate = useNavigate();
  // // 토큰이 있다면, 리다이렉트
  // useEffect(() => {
  //   const token = localStorage.getItem("access_token");
  //   if (token) {
  //     navigate("/todo", { replace: true });
  //   }
  //   console.log(token);
  // }, [navigate]);

  return (
    <MainContainer>
      <SignUpForm />
    </MainContainer>
  );
}

export default SignUp;