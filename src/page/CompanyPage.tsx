import React from 'react';
import styled from 'styled-components';
import CompanyinfoBox from '../component/Company/CompanyinfoBox';
import TopNav from '../component/TopNav';
import { flexCenter, theme } from '../style/theme';

// 사진들은 그냥 보기에 휑해서 다 임시로 이무사진 주소 받아서 넣어놨어요
const CompanyPage = () => {
  return (
    <Wrapper>
      <TopNav />
      <div className="company-title-section">
        <BackImg src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=800&h=300" />
        <img
          className="logo"
          src="https://images.freeimages.com/slider/slider1.jpg"
          alt="회사로고"
        />
        <p className="company-name">회사 이름 어쩌구</p>
      </div>
      <main className="company-info-section">
        <CompanyinfoBox />
      </main>
    </Wrapper>
  );
};

export default CompanyPage;

const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  .company-title-section {
    width: 118rem;
    position: relative;
    ${flexCenter}
    flex-direction: column;
    background: white;

    .logo {
      width: 11rem;
      height: 11rem;
      border-radius: 1rem;
      transform: translateY(-50%);
    }
    .company-name {
      font-size: 2.4rem;
      font-weight: 700;
      transform: translateY(-3rem);
    }
  }

  .company-info-section {
    width: 118rem;
    ${flexCenter}
    margin-top: 5rem;
    border-top: 1px solid ${theme.color.light_gray};
  }
`;

const BackImg = styled.img`
  width: 100%;
  height: 23.6rem;
`;
