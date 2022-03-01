import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import RegisterButton from './RegisterButton';
import RightAlignedLink from './RightAlignedLink';
import AuthContent from './AuthContent';
import styled from 'styled-components';
import { theme } from '../../style/theme';

const Login = () => {
  interface Form {
    id: string;
    pw: string;
  }
  const initValue: Form = {
    id: '',
    pw: '',
  };
  const { handleSubmit, register, watch } = useForm<Form>({
    mode: 'onSubmit',
    defaultValues: initValue,
  });
  const Inputid = useRef();
  // 데이터 전송시 작동할 함수
  const onSubmit = (data: Form) => {
    console.log(data);
  };
  console.log(watch());
  return (
    <Wrapper>
      <AuthContent title="로그인" />
      <div className="info">
        여러 개의 계정으로 <br /> 브릿지 서비스를 편리하게 사용할 수 있습니다.
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <div className="label">아이디</div>
          <Input
            placeholder="아이디"
            {...register('id', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
        </InputWrapper>
        <InputWrapper>
          <div className="label">비밀번호</div>
          <Input
            placeholder="비밀번호"
            {...register('pw', {
              required: true,
            })}
          />
        </InputWrapper>
        <LoginButton type="submit" value="로그인" />
      </form>
      <RegisterButton to="auth/register">회원가입</RegisterButton>
      <RightAlignedLink to="find/login">
        아이디/비밀번호를 잊어버리셨나요?
      </RightAlignedLink>
    </Wrapper>
  );
};

export default Login;

const LoginButton = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 580px;
  border-radius: 5px;
  cursor: pointer;
  height: 40px;
  margin-top: 1rem;
  background: ${theme.color.Main};
  color: white;
  height: ${(props) => props.height};
  font-size: 14px;
  &:hover {
    background: grey;
    color: white;
  }
`;

const Wrapper = styled.div`
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #bdbdbd;
    text-align: center;
  }
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & + & {
    margin: 3rem;
  }

  .label {
    font-size: 1rem;
    margin-bottom: 0.25rem;
    font-weight: bold;
    color: #9e9e9e;
  }
`;

const InputWrapper = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const Input = styled.input`
  width: 580px;
  border: 0;
  border-bottom: 1px solid #e0e0e0;
  outline: none;
  border-radius: 0px;
  line-height: 2.5rem;
  font-size: 14px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;
