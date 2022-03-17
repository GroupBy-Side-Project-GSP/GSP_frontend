import React from 'react';
import styled from 'styled-components';
import TopNav from '../component/TopNav';
import CompanyList from '../component/CompanyList';
import { flexCenter } from '../style/theme';

const CompanyListPage = () => {
  return (
    <Wrapper>
      <TopNav />

      <CompanyList />
    </Wrapper>
  );
};
export default CompanyListPage;

const Wrapper = styled.div`
  width: 100%;
  ${flexCenter}
  flex-direction:column;
`;
