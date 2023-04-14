import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./SignInForm.styled";
import useValidate from "../../hooks/useValidate";
import axios from "axios";

function SignInForm() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [emailIsValidated, emailWarnList, onCheckEmail] = useValidate("email");
  const [passwordIsValidated, passwordWarnList, onCheckPassword] = useValidate("password");

  const token = window.localStorage.getItem("access_token");
  // 토큰이 있다면, 리다이렉트
  useEffect(() => {
    if (token) {
      navigate("/todo", { replace: true });
    }
  }, [token]);

  const handleInputValue = useCallback(
    (key) => (e) => {
      setUserInfo({ ...userInfo, [key]: e.target.value });

      if (key === "email") {
        onCheckEmail(e.target.value);
      }
      if (key === "password") {
        onCheckPassword(e.target.value);
      }
    },
    [userInfo]
  );

  const onSubmit = (e) => {
    e.preventDefault();

    fetch({
      url: "https://pre-onboarding-selection-task.shop/auth/signin",
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      data: userInfo,
    })
      .then((res) => {
        console.log(res.data.access_token);
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/todo");
      })
      .catch((err) => {
        alert("로그인 실패");
        console.log(err)
      });
  }
  return (
    <S.Wrapper>
      <S.Title>로그인</S.Title>
      <S.Form onSubmit={onSubmit}>
        <S.Label htmlFor="user-email">Email</S.Label>
        <S.Input
          label="이메일"
          id="email"
          type="text"
          placeholder="이메일을 입력해주세요."
          data-testid="email-input"
          required
          onChange={handleInputValue("email")}
        />
        <S.ErrorText>
          {emailWarnList?.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </S.ErrorText>

        <S.Label>Password</S.Label>
        <S.Input
          label="비밀번호"
          id="password"
          type="text"
          placeholder="비밀번호를 입력해주세요."
          data-testid="password-input"
          required
          onChange={handleInputValue("password")}
        />
        <S.ErrorText>
          {passwordWarnList?.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </S.ErrorText>

        <S.Button
          data-testid="signin-button"
          disabled={!emailIsValidated || !passwordIsValidated}
        >
          <S.ButtonText>로그인</S.ButtonText>
        </S.Button>
      </S.Form>
    </S.Wrapper>
  );
}

export default SignInForm;