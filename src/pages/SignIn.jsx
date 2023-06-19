import React, { useEffect } from "react";
import { MainContainer } from "../utils/globalStyle";
import { useNavigate } from "react-router";
import SignInForm from "../components/SignInForm/SignInForm";

const SignIn = () => {
  const navigate = useNavigate();
  // 토큰이 있다면 리다이렉트
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      alert("로컬 스토리지에 토큰이 있습니다. TODO 페이지로 이동합니다.");
      navigate("/todo", { replace: true });
    }
  }, [navigate]);
  
  return (
    <MainContainer>
      <SignInForm />
    </MainContainer>
  )
}

export default SignIn;