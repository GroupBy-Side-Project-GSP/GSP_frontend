import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { flexCenter, theme } from '../../style/theme';
import { AuthContent } from '.';
import usePassword from '../../hooks/usePassword';

const Register = () => {
  const [isEmailError, setIsEmailError] = useState(false);

  // hooks
  const [passwordType, handlePasswordType] = usePassword({
    type: 'password',
    visible: false,
  });

  const [passwordConfirmType, handlePasswordConfirmType] = usePassword({
    type: 'password',
    visible: false,
  });

  interface Form {
    email: string;
    id: string;
    pw: string;
    pwConfirm: string;
  }
  const initValue: Form = {
    email: '',
    id: '',
    pw: '',
    pwConfirm: '',
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
  const email = useRef();
  password.current = watch('pw'); // pw 관찰
  // 데이터 전송시 작동할 함수
  const onSubmit = (data: Form) => {
    console.log(data);
  };
  console.log(watch());

  return (
    <Wrapper>
      <AuthContent title="회원가입" />
      <div className="info">회원가입하여 다양한 서비스를 이용해보세요!</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <div className="label">이메일</div>
          <input
            className={isEmailError ? 'error' : 'correct'}
            placeholder="abcdefg@naver.com"
            {...register('email', {
              required: '이메일을 입력해주세요.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '이메일을 형식에 맞게 작성해주세요',
              },
            })}
          />
          {errors.email && (
            <SubmitMessage>{errors.email.message}</SubmitMessage>
          )}
        </InputWrapper>
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
        <InputWrapper>
          <div className="label">비밀번호 확인</div>
          <Input
            type={passwordConfirmType.type}
            placeholder="비밀번호 확인"
            {...register('pwConfirm', {
              required: '비밀번호를 적어주세요',
              validate: (value) => value === password.current, // 콜백 함수 넘겨줌
            })}
          />
          {errors.pwConfirm && errors.pwConfirm.type == 'validate' && (
            <SubmitMessage>비밀번호가 일치하지 않습니다</SubmitMessage>
          )}
          <span onClick={handlePasswordConfirmType} />
        </InputWrapper>

        <RegisterButton type="submit" value="회원가입" />
      </form>
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.div`
  width: 100%;
  flex-direction: column;
  ${flexCenter}
  .info {
    ${flexCenter}
    color: #bdbdbd;
    font-size: 2rem;
    margin-bottom: 3rem;
    text-align: center;
  }
  .label {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    font-weight: bold;
    color: #9e9e9e;
  }
  & + & {
    margin: 5rem;
  }
`;

const Input = styled.input`
  width: 58rem;
  border: 0;
  border-bottom: 1px solid #e0e0e0;
  outline: none;
  border-radius: 0px;
  line-height: 2.5rem;
  font-size: 1.4rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-bottom: 1.8rem;
`;

const SubmitMessage = styled.div`
  font-size: 1.2rem;
  height: 2rem;
  color: #ff1717;
`;

const InputWrapper = styled.div`
  input {
    width: 58rem;
    border: 0;
    border-bottom: 1px solid #e0e0e0;
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.4rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-bottom: 1.8rem;
    &.error {
      border-bottom: 1px solid red;
    }
    &.correct {
      border-bottom: 1px solid green;
    }
  }

  .input-error {
  }
  & + & {
    margin-top: 1rem;
  }
`;

const RegisterButton = styled.input`
  ${flexCenter}
  width: 58rem;
  border-radius: 5px;
  cursor: pointer;
  height: 40px;
  margin-top: 1rem;
  background: ${theme.color.Main};
  color: white;
  height: 7rem;
  font-size: 14px;
  &:hover {
    background: grey;
    color: white;
  }
`;
