import React from 'react';
import { theme } from '../../style/theme';
import styled from 'styled-components';

const LoginButton = ({ children, ...rest }: { children: string }) => {
  return <Wrapper type="submit" value={children} {...rest} />;
};

export default LoginButton;

const Wrapper = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  border-radius: 5px;
  cursor: pointer;
  height: 40px;
  margin-top: 1rem;
  background: ${theme.color.Main};
  color: white;
  height: ${(props) => props.height};
  &:hover {
    background: ${theme.color.Main_lighten};
    color: white;
  }
`;
