import React, { useEffect, useState } from 'react';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  // logic
  const history = useNavigate(); //페이지도 이동 할수 있게 하는 함수'

  const goToHome = () => {
    history('/');
  };

  const goToSignUp = () => {
    history('/signup'); //이동할 페이지 주소 입력
  };

  // 자식으로 받은 inputValue 값을 state에 저장

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (inputValue, field) => {
    // field: 'email', 'password'
    const newFormData = { ...formData, [field]: inputValue };
    setFormData(newFormData);

    if (field === 'email') {
      setEmail(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault(); // 폼 제출시 새로고침 방지 메소드
    console.log('email', email);
    console.log('password', password);
    // TODO: 로그인 기능 구현
  };

  // view
  return (
    <div className="text-center px-6">
      {/* <button type="button" onClick={goToHome}>
        홈 화면으로 이동
      </button> */}
      {/* <Link to={'/'} style={{ color: '#222' }}>
        홈 화면으로 이동
      </Link> */}
      <h1 className="flex justify-center">
        <img src="./images/logo.svg" alt="로고" />
      </h1>
      <h3 className="text-white font-bold text-base py-6">
        Chureads에서 소통해보세요
      </h3>

      {/* 시작 폼영역 */}
      <form
        id="longin-form"
        className="text-center flex flex-col gap-2"
        onSubmit={handleLogin}
      >
        <InputField type="text" field="email" onChange={handleInputChange} />
        <InputField
          type="password"
          field="password"
          onChange={handleInputChange}
        />
        <LoginButton category="login" name="Login" />
      </form>
      {/* 끝 폼영역 */}

      <div className="flex justify-center gap-1 py-6">
        <p>계정이 없으신가요?</p>
        <Link to={'/signup'} className="text-blue-400">
          가입하기
        </Link>
      </div>
      <LoginButton
        category="signlogin"
        name="Continue with Google"
        onClick={goToHome}
      />
    </div>
  );
};

export default Login;
