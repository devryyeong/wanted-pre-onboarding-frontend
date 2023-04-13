import React from 'react'

function SignUp() {
  return (
    <div>
      <input data-testid="email-input" />
      <input data-testid="password-input" />
      <button data-testid="signup-button">회원가입</button>
      <div>font check 확인</div>
    </div>
  )
}

export default SignUp