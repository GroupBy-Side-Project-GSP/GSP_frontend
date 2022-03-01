import React from 'react';
import Login from '../component/Login/Login';
import styled from 'styled-components';

const Loginpage = () => {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
};

export default Loginpage;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`;
