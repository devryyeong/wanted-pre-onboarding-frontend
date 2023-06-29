# 1. 구현 사항
1. 로그인 / 회원가입
  - 이메일은 '@' 포함, 비밀번호는 8자 이상의 유효성 검사
  - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo` 페이지에 접속한다면 `/signin` 경로로 리다이렉트

2. to do 리스트
  - TODO의 체크박스를 통해 완료 여부 수정
  - TODO 우측에 수정버튼과 삭제

# 2. 사용 라이브러리
  - react-router-dom
  - axios
  - styled-components

# 3. 프로젝트 설치 및 실행

1. 프로젝트 패키지 설치

```
npm install
```

2. 프로젝트 실행

```
npm start
```

# 4. 배포 링크
https://devryyeong-todo.vercel.app/

# 5. 데모영상
https://github.com/devryyeong/wanted-pre-onboarding-frontend/assets/68095767/9c2dae6e-de3b-4371-9809-8504fd7ac7ac
