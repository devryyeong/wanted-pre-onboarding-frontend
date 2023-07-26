import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./SignUpForm.styled";
import { signUpApi } from "../../apis/auth";
import useValidate from "../../hooks/useValidate";

const SignUpForm = () => {
  const [emailIsValidated, emailWarnList, onCheckEmail] = useValidate("email");
  const [passwordIsValidated, passwordWarnList, onCheckPassword] = useValidate("password");
  
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

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
    signUpApi(userInfo.email, userInfo.password)
      .then(() => {
        e.target.reset();
        navigate("/signin");
        console.log("signup success");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <S.Wrapper>
      <S.Title>회원가입</S.Title>
      <S.Form onSubmit={onSubmit}>
        <S.Label htmlFor="email">Email</S.Label>
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

        <S.Label htmlFor="password">Password</S.Label>
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
          data-testid="signup-button"
          disabled={!emailIsValidated || !passwordIsValidated}
        >
          <S.ButtonText>회원가입</S.ButtonText>
        </S.Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default SignUpForm;