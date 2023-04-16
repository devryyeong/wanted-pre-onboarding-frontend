import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./SignInForm.styled";
import useValidate from "../../hooks/useValidate";
import { signInApi } from "../../apis/auth";

function SignInForm() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [emailIsValidated, emailWarnList, onCheckEmail] = useValidate("email");
  const [passwordIsValidated, passwordWarnList, onCheckPassword] = useValidate("password");

  const token = localStorage.getItem("access_token");

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
    signInApi(userInfo.email, userInfo.password)
      .then((res) => {
        e.target.reset();
        console.log("signin success");
        localStorage.setItem("access_token", res.data.access_token);
        alert("로컬 스토리지에 토큰이 있습니다. TODO 페이지로 이동합니다.");
        navigate("/todo");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <S.Wrapper>
      <S.Title>로그인</S.Title>
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