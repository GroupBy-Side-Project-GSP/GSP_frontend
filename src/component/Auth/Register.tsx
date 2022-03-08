import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { flexCenter, theme, inputForm, inputlabel } from '../../style/theme';
import { AuthContent, LoginButton } from '.';
import usePassword from '../../hooks/usePassword';

const Register = () => {
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
  const password = useRef<string>();
  password.current = watch('pw');
  const onSubmit = (data: Form) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <AuthContent title="회원가입" />
      <div className="info">회원가입하여 다양한 서비스를 이용해보세요!</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <div className="label">이메일</div>
          <Input
            className={errors.email ? 'error' : ''}
            placeholder="abcdefg@naver.com"
            {...register('email', {
              required: '이메일을 입력해주세요.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '이메일을 형식에 맞게 작성해주세요',
              },
            })}
          />
          <button className="email-auth">인증</button>
          {errors.email && (
            <SubmitMessage>{errors.email.message}</SubmitMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <div className="label">아이디</div>
          <Input
            className={errors.id ? 'error' : ''}
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
            className={errors.pw ? 'error' : ''}
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
            className={errors.pwConfirm ? 'error' : ''}
            type={passwordConfirmType.type}
            placeholder="비밀번호 확인"
            {...register('pwConfirm', {
              required: '비밀번호를 적어주세요',
              validate: (value) => value === password.current,
            })}
          />
          {errors.pwConfirm && errors.pwConfirm.type == 'validate' && (
            <SubmitMessage>비밀번호가 일치하지 않습니다</SubmitMessage>
          )}
          <span onClick={handlePasswordConfirmType} />
        </InputWrapper>
        <LoginButton
          value="다음"
          isDisabled={
            !errors.id && !errors.pw && !errors.email && !errors.pwConfirm
              ? false
              : true
          }
        />
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
    margin-top: 2rem;
    margin-bottom: 3rem;
    text-align: center;
  }
  .label {
    ${inputlabel}
  }
  & + & {
    margin: 5rem;
  }
`;

const Input = styled.input`
  ${inputForm}
`;

const SubmitMessage = styled.div`
  font-size: 1.2rem;
  height: 2rem;
  color: #ff1717;
`;

const InputWrapper = styled.div`
  position: relative;
  .email-auth {
    position: absolute;
    right: 0;
    width: 7rem;
    height: 3.4rem;
    color: ${theme.color.Main};
    border-radius: 7px;
    border: 2px solid ${theme.color.Main};
  }
  & + & {
    margin-top: 1rem;
  }
`;
