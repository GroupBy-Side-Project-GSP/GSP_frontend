import { ReactChild } from 'react';
import { theme } from '../../style/theme';
import styled from 'styled-components';

interface FindButtonProps {
  children?: ReactChild;
  onClick?: any;
}
const FindButton = ({ children, onClick, ...rest }: FindButtonProps) => {
  return (
    <Wrapper onClick={onClick} {...rest}>
      {children}
    </Wrapper>
  );
};

export default FindButton;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  border: 1px solid ${theme.color.purple};
  border-radius: 5px;
  cursor: pointer;
  height: 40px;
  margin-top: 1rem;
  background: ${theme.color.white};
  color: ${theme.color.purple};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  &:hover {
    background: ${theme.color.purple};
    color: white;
  }
`;
