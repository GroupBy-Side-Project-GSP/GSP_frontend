import React from 'react';
import styled from 'styled-components';
import CompanyItem from './CompanyItem';
import CompanyListSearch from './CompanyListSearch';

const CompanyList = () => {
  return (
    <Wrapper>
      <CompanyListSearch />
      <div className="company-box">
        {/* 데이터를 안넣어놔서 일단 임시로 컴포 여러개 넣어놓음 */}
        <CompanyItem></CompanyItem>
        <CompanyItem></CompanyItem>
        <CompanyItem></CompanyItem>
        <CompanyItem></CompanyItem>
        <CompanyItem></CompanyItem>
        <CompanyItem></CompanyItem>
        <CompanyItem></CompanyItem>
        <CompanyItem></CompanyItem>
      </div>
    </Wrapper>
  );
};

export default CompanyList;

const Wrapper = styled.div`
  justify-content: space-between;
  width: 118rem;
  margin: 5rem 0rem;

  .company-box {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
  }
`;
