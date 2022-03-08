import { useNavigate } from 'react-router-dom';
import { theme, flexCenter } from '../../style/theme';
import styled from 'styled-components';

const RegisterButton = ({
  children,
  to,
  ...rest
}: {
  children: string;
  to: string;
}) => {
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate(`/${to}`)} {...rest}>
      {children}
    </Wrapper>
  );
};

export default RegisterButton;

const Wrapper = styled.div`
  ${flexCenter};
  width: 58rem;
  border-radius: 5px;
  border: 1px solid grey;
  cursor: pointer;
  height: 7rem;
  margin-top: 1rem;
  background: ${theme.color.white};
  color: black;
  font-size: 1.4rem;
  &:hover {
    background: ${theme.color.Main};
    color: white;
  }
`;
