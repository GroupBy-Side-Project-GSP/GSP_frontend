import { AuthContent } from '../../component/Auth/.';
import styled from 'styled-components';
import { theme, flexCenter } from '../../style/theme';
import { useNavigate } from 'react-router-dom';

const FindIdandPwpage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <AuthContent title="아이디 / 비밀번호 찾기" />
      <div className="info">아이디 / 비밀번호를 찾아보세요</div>
      <div className="find-button" onClick={() => navigate(`/find/id`)}>
        아이디 찾기
      </div>
      <div className="find-button" onClick={() => navigate(`/find/pw`)}>
        비밀번호 찾기
      </div>
    </Wrapper>
  );
};

export default FindIdandPwpage;

const Wrapper = styled.div`
  width: 100%;
  ${flexCenter}
  flex-direction: column;
  min-height: 100vh;
  .info {
    ${flexCenter}
    color: #bdbdbd;
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: 8rem;
  }
  .find-button {
    box-shadow: 1px 1px ${theme.color.light_gray};
    ${flexCenter}
    width: 58rem;
    border: 2px solid ${theme.color.Main};
    border-radius: 5px;
    cursor: pointer;
    height: 7rem;
    margin-bottom: 2rem;
    font-weight: bold;
    background: ${theme.color.white};
    color: ${theme.color.Main};
    font-size: 1.6rem;
    &:hover {
      background: ${theme.color.Main};
      color: white;
    }
  }
`;
