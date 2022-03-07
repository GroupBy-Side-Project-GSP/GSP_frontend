import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { AuthContent, LoginButton } from '../../component/Auth/.';
import { theme, flexCenter, inputlabel, inputForm } from '../../style/theme';

const FindIdpage = () => {
  interface Form {
    email: string;
    company_name: string;
  }
  const initValue: Form = {
    email: '',
    company_name: '',
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Form>({
    mode: 'onSubmit',
    defaultValues: initValue,
  });

  const onSubmit = (data: Form) => {
    console.log(data);
  };
  return (
    <Wrapper>
      <AuthContent title="아이디 찾기" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <div className="label">대표 이메일</div>
          <Input
            placeholder="abcdefg@naver.com"
            {...register('email', {
              required: '대표 이메일을 입력해주세요.',
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
          <div className="label">기업명</div>
          <Input
            placeholder="기업명"
            {...register('company_name', {
              required: '기업명을 입력해주세요.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '기업명을 형식에 맞게 작성해주세요',
              },
            })}
          />
          {errors.company_name && (
            <SubmitMessage>{errors.company_name.message}</SubmitMessage>
          )}
        </InputWrapper>
        <LoginButton
          value="확인"
          isDisabled={!errors.company_name && !errors.email ? false : true}
        />
      </form>
    </Wrapper>
  );
};

export default FindIdpage;

const SubmitMessage = styled.div`
  font-size: 1.2rem;
  height: 2rem;
  color: #ff1717;
`;

const Wrapper = styled.div`
  ${flexCenter}
  width: 100%;
  flex-direction: column;
  min-height: 100vh;
  & + & {
    margin-bottom: 5rem;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  .label {
    ${inputlabel}
  }
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

const Input = styled.input`
  ${inputForm}
`;
