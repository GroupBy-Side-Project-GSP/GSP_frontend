import React from 'react';
import styled from 'styled-components';
import { theme } from '../../style/theme';

const AuthContent = ({ title }: { title: string }) => (
  <div>
    <Title>{title}</Title>
  </div>
);

export default AuthContent;

const Title = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: ${theme.color.dark_gray};
  margin-bottom: 2rem;
`;
