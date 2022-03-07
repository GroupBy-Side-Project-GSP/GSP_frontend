import { theme, flexCenter } from '../../style/theme';
import styled from 'styled-components';

const LoginButton = ({
  value,
  isDisabled,
}: {
  value: string;
  isDisabled: boolean;
}) => {
  return <Wrapper disabled={isDisabled} type="submit" value={value} />;
};

export default LoginButton;

const Wrapper = styled.input`
  ${flexCenter}
  width: 58rem;
  border-radius: 5px;
  cursor: pointer;
  height: 7rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  background: ${theme.color.Main};
  color: white;
  font-size: 1.6rem;
  &:hover {
    background: ${theme.color.Main};
    color: white;
  }
  &:disabled {
    background: ${theme.color.Main_lighten};
  }
`;
