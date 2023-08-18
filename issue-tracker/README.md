# 원티드 프리온보딩 인턴십 3주차 과제

> 특정 깃헙 레파지토리[(facebook/react)](https://github.com/facebook/react)의 이슈 목록과 상세 내용을 확인할 수 있는 페이지

<br>

## 🔧 설치 및 실행

### 깃 클론 및 설치 경로 이동

```
git clone https://github.com/devryyeong/wanted-pre-onboarding-frontend.git
cd wanted-pre-onboarding-frontend/issue-tracker
```

### 설치

```
npm install
```

### 환경변수 설정

```
REACT_APP_GITHUB_TOKEN = YOUR TOKEN
```

### 실행

```
npm run start
```

<br>

## 🛠️ 사용 라이브러리 및 스택

- API : ![Axios](https://img.shields.io/badge/Axios-yellow)
- Style : ![Emotion](https://img.shields.io/badge/Emotion-green)
- Language: ![React](https://img.shields.io/badge/React-61DAFB?logo=React&logoColor=white), ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=TypeScript&logoColor=white)

<br>

## 디렉토리 구조

```
📦 src
    +---apis
    |       issues.ts
    |       utils.ts
    +---assets
    +---components
    |       Ad.tsx
    |       Header.tsx
    |       Spinner.tsx
    +---context
    |       detailContext.tsx
    +---hooks
    |       useInfiniteScroll.ts
    +---pages
    |   +---ErrorPage.tsx
    |   +---IssueDetail.tsx
    |   \---Main.tsx
    +---types
    |       issue.ts
    |---utils
    |       parseDate.ts
    |
    |   App.tsx
    |   index.tsx
    \   constant.ts
```

- **component**와 **api**의 기능을 분리하여 각각의 `역할`과 `책임`을 명확하게 할당하고 재사용성을 향상시키려 했습니다.
- **constants** : `일관된 규칙과 구조`를 유지하기 용이하게 하였습니다.
- **context**: 전역 상태 관리와 여러 컴포넌트에서 데이터를 쉽게 `전달`하도록 만들었습니다.
- **hooks** & **util** : 로직을 추상화하여 `재사용 가능한 한형태`로 분리하여 개발 `생산성 향상`시켰습니다.