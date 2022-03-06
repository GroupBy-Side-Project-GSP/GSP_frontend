import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { AuthContent, RightAlignedLink, RegisterButton } from '.';
import { theme, flexCenter, gap } from '../../style/theme';

const Login = () => {
  const [passwordType, setPasswordType] = useState({
    type: 'password',
    visible: false,
  });

  // password type 변경하는 함수
  const handlePasswordType = (e) => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: 'text', visible: true };
      }
      return { type: 'password', visible: false };
    });
  };
  interface Form {
    id: string;
    pw: string;
  }
  const initValue: Form = {
    id: '',
    pw: '',
  };
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<Form>({
    mode: 'onSubmit',
    defaultValues: initValue,
  });
  const password = useRef();
  password.current = watch('pw'); // pw 관찰
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
              required: '아이디를 입력해주세요.',
              pattern: {
                // 아이디 정규식 패턴 다시 작성하기
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '아이디를 형식에 맞게 작성해주세요',
              },
            })}
          />
          {errors.id && <SubmitMessage>{errors.id.message}</SubmitMessage>}
        </InputWrapper>
        <InputWrapper>
          <div className="label">비밀번호</div>
          <Input
            type={passwordType.type}
            placeholder="영문, 숫자를 혼용하여 8~16자를 입력해주세요"
            {...register('pw', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message: '최소 8자 이상의 비밀번호를 입력해주세요.',
              },
              maxLength: {
                value: 16,
                message: '16자 이하의 비밀번호만 사용 가능합니다.',
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}/,
                message: '영문, 숫자를 혼용해서 입력해주세요.',
              },
            })}
          />
          {errors.pw && <SubmitMessage>{errors.pw.message}</SubmitMessage>}
          <span onClick={handlePasswordType} />
        </InputWrapper>
        <LoginButton type="submit" value="로그인" />
        <RegisterButton to="auth/register">회원가입</RegisterButton>
      </form>
      <RightAlignedLink to="find/login">
        아이디/비밀번호를 잊어버리셨나요?
      </RightAlignedLink>
    </Wrapper>
  );
};

export default Login;

const LoginButton = styled.input`
  ${flexCenter}
  width: 58rem;
  border-radius: 5px;
  cursor: pointer;
  height: 7rem;
  margin-top: 2rem;
  background: ${theme.color.Main};
  color: white;
  height: ${(props) => props.height};
  font-size: 1.6rem;
  &:hover {
    background: ${theme.color.Main_lighten};
    color: white;
  }
`;

const Wrapper = styled.div`
  ${flexCenter}
  width: 58rem;
  flex-direction: column;
  .info {
    ${flexCenter}
    color: ${theme.color.medium_gray};
    text-align: center;
    font-size: 2rem;
    line-height: 3rem;
    margin-bottom: 3rem;
  }
  & + & {
    margin: 3rem;
  }
  .label {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    font-weight: bold;
    color: ${theme.color.dark_gray};
  }
`;

const InputWrapper = styled.div`
  & + & {
    margin-top: 4rem;
  }
`;

const SubmitMessage = styled.div`
  font-size: 1.2rem;
  color: #ff1717;
`;

const Input = styled.input`
  width: 58rem;
  border: 0;
  border-bottom: 1px solid #e0e0e0;
  outline: none;
  border-radius: 0px;
  line-height: 2.5rem;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;
